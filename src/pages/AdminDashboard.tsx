import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getStoredNews, addNews, updateNews, deleteNews } from '../utils/newsManager';
import { NewsArticle } from '../types/news';
import { LogOut, Edit2, Trash2, Save, X, Upload } from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (page: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const { logout } = useAuth();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploadMethod, setUploadMethod] = useState<'url' | 'upload'>('url');
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'Events',
    author: 'VibeCrafters Team',
    featured: false,
    published: true,
    section: 'latest' as 'featured' | 'latest',
  });

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = () => {
    const stored = getStoredNews();
    setArticles(stored);
    window.dispatchEvent(new Event('articlesUpdated'));
  };

  const handleLogout = () => {
    logout();
    onNavigate('home');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        
        const img = new Image();
        img.onload = () => {
          setImageDimensions({ width: img.width, height: img.height });
          
          if (img.width < 1200 || img.height < 800) {
            if (!confirm(`Image is ${img.width}x${img.height}px. Recommended minimum is 1200x800px. Continue anyway?`)) {
              return;
            }
          }
        };
        img.src = base64String;
        
        setFormData({ ...formData, image: base64String });
        setImagePreview(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (url: string) => {
    setFormData({ ...formData, image: url });
    setImagePreview(url);
    
    if (url) {
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ width: img.width, height: img.height });
      };
      img.onerror = () => {
        setImageDimensions(null);
      };
      img.src = url;
    } else {
      setImageDimensions(null);
    }
  };

  const clearImage = () => {
    setFormData({ ...formData, image: '' });
    setImagePreview('');
    setImageDimensions(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingArticle) {
      updateNews(editingArticle.id, {
        ...formData,
        date: editingArticle.date,
      });
    } else {
      addNews({
        ...formData,
        date: new Date().toISOString().split('T')[0],
      });
    }
    
    resetForm();
    loadArticles();
  };

  const handleEdit = (article: NewsArticle) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt,
      content: article.content,
      image: article.image,
      category: article.category,
      author: article.author,
      featured: article.featured,
      published: article.published,
      section: article.section || 'latest',
    });
    setImagePreview(article.image);
    setUploadMethod(article.image.startsWith('data:') ? 'upload' : 'url');
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      deleteNews(id);
      loadArticles();
    }
  };

  const handleTogglePublished = (article: NewsArticle) => {
    updateNews(article.id, { published: !article.published });
    loadArticles();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '',
      category: 'Events',
      author: 'VibeCrafters Team',
      featured: false,
      published: true,
      section: 'latest',
    });
    setEditingArticle(null);
    setIsEditing(false);
    setImagePreview('');
    setUploadMethod('url');
    setImageDimensions(null);
  };

  const renderMarkdownPreview = (text: string) => {
    let html = text;
    
    html = html.replace(/### (.*?)(\n|$)/g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">$1</h3>');
    html = html.replace(/## (.*?)(\n|$)/g, '<h2 class="text-2xl font-bold text-gray-900 mt-6 mb-4">$1</h2>');
    html = html.replace(/# (.*?)(\n|$)/g, '<h1 class="text-3xl font-bold text-gray-900 mt-6 mb-4">$1</h1>');
    
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
    
    html = html.replace(/^- (.*?)$/gm, '<li class="ml-4">$1</li>');
    html = html.replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside space-y-2 my-4">$1</ul>');
    
    html = html.replace(/^\d+\. (.*?)$/gm, '<li class="ml-4">$1</li>');
    html = html.replace(/(<li.*<\/li>)/s, '<ol class="list-decimal list-inside space-y-2 my-4">$1</ol>');
    
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-purple-600 hover:text-purple-700 underline">$1</a>');
    
    html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>');
    
    html = html.replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-purple-500 pl-4 italic text-gray-700 my-4">$1</blockquote>');
    
    html = html.replace(/\n\n/g, '</p><p class="mb-4">');
    html = '<p class="mb-4">' + html + '</p>';
    
    return { __html: html };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {editingArticle ? 'Edit Article' : 'Create New Article'}
            </h2>
            {isEditing && (
              <button
                onClick={resetForm}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column - Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter article title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
                  <textarea
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={2}
                    placeholder="Brief summary of the article"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="Events">Events</option>
                    <option value="News">News</option>
                    <option value="Press Release">Press Release</option>
                    <option value="Industry Insights">Industry Insights</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Section</label>
                  <select
                    value={formData.section}
                    onChange={(e) => setFormData({ ...formData, section: e.target.value as 'featured' | 'latest' })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="featured">Featured News</option>
                    <option value="latest">Latest Updates</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Image Upload Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image *</label>
                  <div className="space-y-3">
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setUploadMethod('url')}
                        className={`px-4 py-2 rounded-lg ${
                          uploadMethod === 'url'
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        Image URL
                      </button>
                      <button
                        type="button"
                        onClick={() => setUploadMethod('upload')}
                        className={`px-4 py-2 rounded-lg ${
                          uploadMethod === 'upload'
                            ? 'bg-purple-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        Upload Image
                      </button>
                    </div>

                    {uploadMethod === 'url' ? (
                      <input
                        type="url"
                        required={!formData.image}
                        value={formData.image.startsWith('data:') ? '' : formData.image}
                        onChange={(e) => handleImageUrlChange(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="https://example.com/image.jpg"
                      />
                    ) : (
                      <div className="flex gap-2">
                        <label className="flex-1 cursor-pointer">
                          <div className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 transition-colors">
                            <Upload className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Choose Image</span>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                        {formData.image && (
                          <button
                            type="button"
                            onClick={clearImage}
                            className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    )}

                    {imagePreview && (
                      <div className="relative">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        {imageDimensions && (
                          <div className="mt-2 text-sm text-gray-600">
                            Dimensions: {imageDimensions.width}x{imageDimensions.height}px
                            {(imageDimensions.width < 1200 || imageDimensions.height < 800) && (
                              <span className="text-orange-600 ml-2">(Recommended: 1200x800px)</span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">Featured Article</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700">Published</span>
                  </label>
                </div>
              </div>

              {/* Right Column - Markdown Guide */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Markdown Formatting Guide</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div><code className="bg-white px-2 py-1 rounded"># Heading 1</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">## Heading 2</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">### Heading 3</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">**bold text**</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">*italic text*</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">- List item</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">1. Numbered item</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">[Link](url)</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">`code`</code></div>
                  <div><code className="bg-white px-2 py-1 rounded">&gt; Blockquote</code></div>
                </div>
              </div>
            </div>

            {/* Content Editor */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">Content (Markdown) *</label>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-sm text-purple-600 hover:text-purple-700"
                >
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </button>
              </div>
              <textarea
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                rows={12}
                placeholder="Write your article content using Markdown formatting..."
              />
              
              {showPreview && formData.content && (
                <div className="mt-4 p-6 border border-gray-300 rounded-lg bg-white">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
                  <div 
                    className="prose prose-purple max-w-none"
                    dangerouslySetInnerHTML={renderMarkdownPreview(formData.content)}
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Save className="w-5 h-5" />
                {editingArticle ? 'Update Article' : 'Create Article'}
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Articles List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Published Articles ({articles.length})</h2>
          
          {articles.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No articles yet. Create your first article above!</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Title</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Category</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Section</th>
                    <th className="text-left px-4 py-3 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-center px-4 py-3 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {articles.map((article) => (
                    <tr key={article.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {article.image && (
                            <img
                              src={article.image}
                              alt=""
                              className="w-12 h-12 object-cover rounded"
                            />
                          )}
                          <div>
                            <div className="font-medium text-gray-900">{article.title}</div>
                            <div className="text-sm text-gray-500">by {article.author}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{article.category}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          article.section === 'featured' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {article.section === 'featured' ? 'Featured' : 'Latest'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{article.date}</td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1 items-center">
                          <button
                            onClick={() => handleTogglePublished(article)}
                            className={`text-xs px-2 py-1 rounded ${
                              article.published
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {article.published ? 'Published' : 'Draft'}
                          </button>
                          {article.featured && (
                            <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded">
                              Featured
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-2">
                          <button
                            onClick={() => handleEdit(article)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
