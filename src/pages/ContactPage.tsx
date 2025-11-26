import { Mail, Phone, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { submitContactInquiry } from '../services/contactService';

const initialFormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  service: '',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('');

    try {
      await submitContactInquiry(formData);
      setStatus('success');
      setStatusMessage("Thank you! Your message has been sent successfully. We'll get back to you soon.");
      setFormData(initialFormState);
    } catch (error) {
      setStatus('error');
      setStatusMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your message. Please try again later.'
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-5 leading-tight">Contact Us</h1>
          <p className="text-sm sm:text-base md:text-lg text-amber-50 max-w-3xl leading-relaxed">
            Let's start a conversation about your next event. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Get in Touch
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Have a project in mind? Fill out the form and our team will get back to you within 24 hours. We look forward to discussing how we can help you create an unforgettable experience.
              </p>

              <div className="space-y-4 md:space-y-5">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2.5 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                    <Mail className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Email Us</h3>
                    <a href="mailto:vibecrafters.entertainment@gmail.com" className="text-gray-600 hover:text-amber-600 text-sm md:text-base break-all">
                      vibecrafters.entertainment@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2.5 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                    <Phone className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Call Us</h3>
                    <a href="tel:+919898218561" className="text-gray-600 hover:text-amber-600 text-sm md:text-base">
                      +91-9898218561
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-2.5 md:p-3 rounded-lg mr-3 md:mr-4 flex-shrink-0">
                    <Clock className="text-amber-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Business Hours</h3>
                    <p className="text-gray-600 text-sm md:text-base">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm md:text-base">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 text-sm md:text-base">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-base"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-base"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-base bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="festival">Festival Celebrations</option>
                    <option value="mice">MICE Events</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="brand">Marketing & Brand Activation</option>
                    <option value="offsite">Corporate Offsite</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-base resize-none"
                    placeholder="Tell us about your event or project..."
                  ></textarea>
                </div>

                {status !== 'idle' && statusMessage && (
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      status === 'success'
                        ? 'bg-green-100 border border-green-400 text-green-700'
                        : status === 'error'
                          ? 'bg-red-100 border border-red-400 text-red-700'
                          : 'bg-amber-50 border border-amber-200 text-amber-700'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {statusMessage}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 disabled:from-amber-300 disabled:to-amber-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
                  <Send size={22} className={status === 'loading' ? 'animate-pulse' : ''} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
