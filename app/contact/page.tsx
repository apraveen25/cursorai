'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaTwitter, FaFacebook, FaPaperPlane, FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to your backend
    // This is a simulation for demonstration purposes
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.',
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20 md:py-28 overflow-hidden relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-in">Get in Touch</h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Have questions about our Office add-in development services? We&apos;re here to help. Reach out to our team and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-8 rounded-xl shadow-xl h-full border-t-4 border-primary">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to answer any questions you have about our Office add-in development services. Reach out to us and we&apos;ll respond as soon as we can.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Our Location</h3>
                      <p className="text-gray-600">123 Office Plaza, Business District, 10001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@officepluginspro.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-bold mb-4 text-gray-800">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                      <FaTwitter />
                    </a>
                    <a href="#" className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-primary hover:text-white transition-all duration-300">
                      <FaFacebook />
                    </a>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-primary rounded-lg text-white">
                  <h3 className="font-bold mb-2">Working Hours</h3>
                  <p className="text-white/90 mb-4">We&apos;re available to assist you during the following hours:</p>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                
                {formStatus.submitted ? (
                  <div className={`p-6 rounded-lg mb-6 ${formStatus.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'} flex items-start`}>
                    <div className="bg-white p-2 rounded-full mr-4">
                      <FaPaperPlane className={formStatus.error ? 'text-red-500' : 'text-green-500'} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{formStatus.error ? 'Error' : 'Success'}</h3>
                      <p>{formStatus.message}</p>
                    </div>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-input"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      className="mr-2"
                      required
                    />
                    <label htmlFor="privacy" className="text-gray-600 text-sm">
                      I agree to the <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a> and consent to having my data processed.
                    </label>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto flex items-center justify-center"
                    >
                      <FaPaperPlane className="mr-2" /> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary font-semibold">FIND US</span>
            <h2 className="heading-lg mb-6 mt-2">Our Location</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Visit our office to discuss your Office add-in development needs in person.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* In a real application, you would embed a Google Map or other map service here */}
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <FaMapMarkerAlt className="text-primary text-5xl mx-auto mb-4" />
                <p className="text-gray-500 text-xl font-medium">123 Office Plaza, Business District, 10001</p>
                <p className="text-gray-400 mt-2">Interactive map would be embedded here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-primary font-semibold">QUICK ANSWERS</span>
            <h2 className="heading-lg mb-6 mt-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Find quick answers to common questions about our Office add-in development services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'How long does it take to develop an Office add-in?',
                answer: 'The development timeline depends on the complexity of the add-in. Simple add-ins might take 4-6 weeks, while complex enterprise solutions could take 3-6 months or more.'
              },
              {
                question: 'What Office applications do you develop add-ins for?',
                answer: 'We develop add-ins for all Microsoft Office applications, including Excel, Word, PowerPoint, Outlook, and more.'
              },
              {
                question: 'How much does it cost to develop an Office add-in?',
                answer: 'The cost depends on the complexity and features of the add-in. Basic add-ins start around $2,500, while more complex solutions can range from $5,000 to $50,000 or more.'
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="px-6 py-5">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="/faqs" className="btn-primary inline-flex items-center">
              View all FAQs <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 