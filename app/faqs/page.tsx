'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqCategories = [
  {
    id: 'general',
    name: 'General Questions',
    faqs: [
      {
        question: 'What are Microsoft Office add-ins?',
        answer: 'Microsoft Office add-ins are web applications that extend Office applications and interact with content in Office documents. They run in Office across multiple platforms, including Windows, Mac, iPad, and in browsers, and can be deployed centrally and accessed by users from the Office Store or an organization&apos;s private app catalog.'
      },
      {
        question: 'What Office applications support add-ins?',
        answer: 'Office add-ins are supported in Excel, Word, PowerPoint, Outlook, and other Office applications. Each application has its own set of APIs and capabilities that add-ins can leverage to enhance functionality and user experience.'
      },
      {
        question: 'What&apos;s the difference between Office add-ins and VBA macros?',
        answer: 'Office add-ins are web-based and run across platforms, while VBA macros are Windows-only. Add-ins use modern web technologies (HTML, CSS, JavaScript) and have a more secure permission model. They&apos;re also centrally deployed and updated, making them easier to maintain across an organization.'
      },
      {
        question: 'Can Office add-ins work offline?',
        answer: 'Office add-ins require an internet connection to load initially. However, some add-ins can cache data and provide limited functionality offline. For fully offline scenarios, traditional solutions like VSTO or VBA might be more appropriate.'
      },
      {
        question: 'Are Office add-ins secure?',
        answer: 'Yes, Office add-ins run in a sandbox environment with limited permissions. They don&apos;t have direct access to the user&apos;s file system or other sensitive resources. Add-ins go through a validation process before being published to the Office Store, and organizations can control which add-ins are available to their users.'
      }
    ]
  },
  {
    id: 'development',
    name: 'Development Process',
    faqs: [
      {
        question: 'How long does it take to develop an Office add-in?',
        answer: 'The development timeline depends on the complexity of the add-in, the number of Office applications it needs to support, and the level of customization required. Simple add-ins might take 4-6 weeks, while complex enterprise solutions could take 3-6 months or more. We provide a detailed timeline after understanding your specific requirements.'
      },
      {
        question: 'What technologies do you use to develop Office add-ins?',
        answer: 'We use modern web technologies including HTML5, CSS3, JavaScript/TypeScript, and frameworks like React.js. For backend services, we typically use Node.js, ASP.NET Core, or other technologies based on project requirements. We also leverage Microsoft&apos;s Office JS API and Fluent UI for seamless integration with Office applications.'
      },
      {
        question: 'Can you integrate our existing systems with Office add-ins?',
        answer: 'Yes, we can integrate Office add-ins with your existing systems, databases, and APIs. This allows for seamless data flow between your Office applications and other business systems, enhancing productivity and reducing manual data entry.'
      },
      {
        question: 'Do you provide documentation and training?',
        answer: 'Yes, we provide comprehensive documentation for all our Office add-ins, including user guides, administrator documentation, and technical documentation. We also offer training sessions for end-users and administrators to ensure successful adoption and usage of the add-ins.'
      },
      {
        question: 'How do you handle testing and quality assurance?',
        answer: 'We follow a rigorous testing process that includes functional testing, performance testing, security testing, and cross-platform compatibility testing. We also conduct user acceptance testing to ensure the add-in meets your requirements and provides a positive user experience.'
      }
    ]
  },
  {
    id: 'deployment',
    name: 'Deployment & Support',
    faqs: [
      {
        question: 'How are Office add-ins deployed to users?',
        answer: 'Office add-ins can be deployed through several methods: via the Office Store (now part of AppSource), through a private organizational app catalog, using centralized deployment in Microsoft 365 admin center, or through individual sharing. We help you choose and implement the most appropriate deployment method for your organization.'
      },
      {
        question: 'Can Office add-ins be used on all devices?',
        answer: 'Office add-ins work on Windows, Mac, iPad, and in web browsers where Office is available. However, some advanced features might have platform-specific limitations. We design add-ins to be responsive and work across different devices and screen sizes.'
      },
      {
        question: 'What kind of support do you provide after deployment?',
        answer: 'We offer various support options, from basic email support to comprehensive service level agreements (SLAs) with guaranteed response times. Our support services include bug fixes, compatibility updates, user assistance, and ongoing maintenance to ensure your add-ins continue to function optimally.'
      },
      {
        question: 'How are updates and new features handled?',
        answer: 'Updates to Office add-ins are deployed centrally, so users automatically receive the latest version without manual installation. We can implement new features and improvements based on your requirements and feedback. We follow a structured process for testing and deploying updates to minimize disruption.'
      },
      {
        question: 'What happens if Microsoft updates Office and breaks our add-in?',
        answer: 'Microsoft generally maintains backward compatibility, but occasionally updates can affect add-in functionality. As part of our maintenance services, we monitor Office updates and proactively address any compatibility issues. If an update does affect your add-in, we quickly provide fixes to restore functionality.'
      }
    ]
  },
  {
    id: 'pricing',
    name: 'Pricing & Licensing',
    faqs: [
      {
        question: 'How much does it cost to develop an Office add-in?',
        answer: 'The cost depends on the complexity, features, and scope of the add-in. Basic add-ins start around $2,500, while more complex solutions can range from $5,000 to $50,000 or more. We provide detailed quotes after understanding your specific requirements. Please visit our Pricing page for more information.'
      },
      {
        question: 'Do you offer ongoing maintenance packages?',
        answer: 'Yes, we offer maintenance packages that include regular updates, compatibility checks, bug fixes, and technical support. These packages ensure your add-ins continue to function optimally as Office evolves. Maintenance packages typically start at $500 per month, depending on the complexity of the add-in.'
      },
      {
        question: 'What licensing models do you support?',
        answer: 'We support various licensing models, including perpetual licenses, subscription-based models, per-user licensing, and enterprise-wide licensing. We help you choose the most appropriate licensing model based on your business needs and budget.'
      },
      {
        question: 'Are there any ongoing costs for using Office add-ins?',
        answer: 'Beyond the initial development cost, ongoing costs may include maintenance, support, hosting fees (if applicable), and licensing fees (depending on the licensing model). We provide transparent information about all potential costs upfront so there are no surprises.'
      },
      {
        question: 'Do you offer discounts for non-profits or educational institutions?',
        answer: 'Yes, we offer special pricing for non-profit organizations, educational institutions, and startups. Please contact us to discuss your specific situation and requirements.'
      }
    ]
  },
  {
    id: 'technical',
    name: 'Technical Questions',
    faqs: [
      {
        question: 'Can Office add-ins access local files and resources?',
        answer: 'Office add-ins run in a sandbox environment with limited access to local resources for security reasons. However, they can interact with the current document through the Office JS API. For scenarios requiring access to local resources, we can implement alternative solutions or hybrid approaches.'
      },
      {
        question: 'How do Office add-ins handle data security and privacy?',
        answer: 'We implement industry best practices for data security, including secure authentication, data encryption, and secure API communications. We comply with relevant data protection regulations and can implement specific security measures based on your requirements.'
      },
      {
        question: 'Can Office add-ins work with on-premises data?',
        answer: 'Yes, Office add-ins can connect to on-premises data through secure APIs or middleware. We can design solutions that bridge the gap between cloud-based add-ins and on-premises data sources while maintaining security and performance.'
      },
      {
        question: 'What performance considerations are there for Office add-ins?',
        answer: 'Performance is a key consideration in our development process. We optimize add-ins for fast loading and responsive interaction. For data-intensive operations, we implement efficient data handling, caching strategies, and asynchronous processing to maintain a smooth user experience.'
      },
      {
        question: 'Can Office add-ins be customized for different user roles or permissions?',
        answer: 'Yes, we can implement role-based access control and customized experiences based on user permissions or roles. This allows different users to see different features or data within the same add-in, based on their specific needs and access rights.'
      }
    ]
  }
];

export default function FAQs() {
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState('general');

  const toggleFaq = (categoryId: string, faqIndex: number) => {
    const key = `${categoryId}-${faqIndex}`;
    setOpenFaqs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Frequently Asked Questions</h1>
            <p className="text-lg mb-8">
              Find answers to common questions about Office add-in development, deployment, and support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
                <h2 className="text-2xl font-bold mb-6 text-center">{category.name}</h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => {
                    const key = `${category.id}-${index}`;
                    const isOpen = openFaqs[key];
                    
                    return (
                      <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                          onClick={() => toggleFaq(category.id, index)}
                        >
                          <h3 className="text-lg font-bold">{faq.question}</h3>
                          {isOpen ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-primary" />}
                        </button>
                        <div className={`px-6 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="heading-md mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you couldn&apos;t find the answer to your question, please don&apos;t hesitate to contact us. Our team is ready to help you with any inquiries about Office add-in development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/services" className="px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-300">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">Additional Resources</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore these resources to learn more about Office add-in development and how our solutions can benefit your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Office Add-ins Documentation</h3>
              <p className="text-gray-600 mb-4">
                Microsoft&apos;s official documentation for Office add-in development, including guides, API references, and best practices.
              </p>
              <a 
                href="https://docs.microsoft.com/en-us/office/dev/add-ins/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn More →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Our Blog</h3>
              <p className="text-gray-600 mb-4">
                Check out our blog for articles, tutorials, and case studies related to Office add-in development and productivity solutions.
              </p>
              <Link href="/blog" className="text-primary hover:underline">
                Read Articles →
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                Explore real-world examples of how our Office add-in solutions have helped businesses improve productivity and streamline workflows.
              </p>
              <Link href="/case-studies" className="text-primary hover:underline">
                View Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-lg mb-6">Ready to Enhance Your Office Experience?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our custom Office add-ins can transform your business processes and boost productivity.
            </p>
            <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition-colors duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 