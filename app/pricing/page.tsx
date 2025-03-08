import Link from 'next/link';
import { FaCheck, FaTimes } from 'react-icons/fa';

const pricingPlans = [
  {
    id: 1,
    name: 'Basic',
    description: 'For small businesses with simple Office add-in needs',
    price: '$2,500',
    timeframe: 'Starting from',
    features: [
      { text: 'Single Office application add-in', included: true },
      { text: 'Basic UI/UX design', included: true },
      { text: 'Standard functionality', included: true },
      { text: 'Basic data integration', included: true },
      { text: '30 days of support', included: true },
      { text: 'User documentation', included: true },
      { text: 'Advanced customization', included: false },
      { text: 'Multiple application integration', included: false },
      { text: 'Premium support', included: false }
    ],
    popular: false,
    buttonText: 'Get Started'
  },
  {
    id: 2,
    name: 'Professional',
    description: 'For growing businesses with more complex requirements',
    price: '$5,000',
    timeframe: 'Starting from',
    features: [
      { text: 'Multiple Office application add-ins', included: true },
      { text: 'Advanced UI/UX design', included: true },
      { text: 'Custom functionality', included: true },
      { text: 'Advanced data integration', included: true },
      { text: '90 days of support', included: true },
      { text: 'User & admin documentation', included: true },
      { text: 'Advanced customization', included: true },
      { text: 'Multiple application integration', included: true },
      { text: 'Premium support', included: false }
    ],
    popular: true,
    buttonText: 'Get Started'
  },
  {
    id: 3,
    name: 'Enterprise',
    description: 'For large organizations with complex integration needs',
    price: 'Custom',
    timeframe: 'Contact for pricing',
    features: [
      { text: 'Enterprise-wide Office add-ins', included: true },
      { text: 'Premium UI/UX design', included: true },
      { text: 'Fully customized functionality', included: true },
      { text: 'Enterprise system integration', included: true },
      { text: 'Ongoing support & maintenance', included: true },
      { text: 'Comprehensive documentation', included: true },
      { text: 'Advanced customization', included: true },
      { text: 'Multiple application integration', included: true },
      { text: 'Premium support', included: true }
    ],
    popular: false,
    buttonText: 'Contact Us'
  }
];

const additionalServices = [
  {
    name: 'Add-in Maintenance',
    description: 'Ongoing maintenance and updates to ensure your add-in continues to function optimally',
    pricing: 'From $500/month',
    features: [
      'Regular compatibility updates',
      'Bug fixes and performance optimization',
      'Minor feature enhancements',
      'Technical support'
    ]
  },
  {
    name: 'Add-in Migration',
    description: 'Migration of existing VBA macros, COM add-ins, or VSTO solutions to modern Office Add-ins',
    pricing: 'From $3,000',
    features: [
      'Assessment of existing solutions',
      'Migration strategy development',
      'Code conversion and optimization',
      'Testing and deployment'
    ]
  },
  {
    name: 'Custom Integration',
    description: 'Integration of your Office add-ins with other business systems and data sources',
    pricing: 'From $2,000',
    features: [
      'API development and integration',
      'Database connectivity solutions',
      'Cloud service integration',
      'Third-party software integration'
    ]
  },
  {
    name: 'Training & Support',
    description: 'Comprehensive training and support for your team to maximize the benefits of your Office add-ins',
    pricing: 'From $1,000',
    features: [
      'User training sessions',
      'Administrator training',
      'Custom documentation',
      'Extended support packages'
    ]
  }
];

const faqs = [
  {
    question: 'How is the final price of my Office add-in determined?',
    answer: 'The final price depends on several factors including the complexity of the add-in, the number of Office applications it needs to work with, the level of customization required, integration requirements, and the scope of support needed. We provide a detailed quote after understanding your specific requirements.'
  },
  {
    question: 'Do you offer discounts for multiple add-ins?',
    answer: 'Yes, we offer package discounts when developing multiple add-ins or when implementing add-ins across multiple Office applications. The exact discount depends on the scope and similarity of the add-ins being developed.'
  },
  {
    question: 'What payment terms do you offer?',
    answer: 'We typically work with a milestone-based payment schedule. This includes an initial deposit, followed by payments at key project milestones, and a final payment upon project completion. For larger projects, we can discuss custom payment terms.'
  },
  {
    question: 'Is there an additional cost for future updates?',
    answer: 'Minor updates and bug fixes are covered during the support period included in your package. For significant feature enhancements or major updates after the support period, additional costs may apply. We offer maintenance packages to cover ongoing updates and support.'
  }
];

export default function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Transparent Pricing</h1>
            <p className="text-lg mb-8">
              We offer flexible pricing options to meet your specific Office add-in development needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Select the plan that best fits your business needs and budget. Not sure which plan is right for you? Contact us for a personalized recommendation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative ${plan.popular ? 'border-2 border-primary' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.timeframe}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        ) : (
                          <FaTimes className="text-red-500 mt-1 mr-2 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className={`block text-center py-2 px-4 rounded-md w-full ${
                      plan.popular 
                        ? 'bg-primary text-white hover:bg-secondary' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-colors duration-300`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom solution? We offer tailored pricing based on your specific requirements.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Additional Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Enhance your Office add-in experience with our additional services designed to provide ongoing support and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {service.pricing}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-bold mb-2">Includes:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Pricing FAQs</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our pricing and payment terms.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="text-center mb-8">
              <h2 className="heading-md mb-4">Our Satisfaction Guarantee</h2>
              <p className="text-gray-600">
                We&apos;re committed to delivering high-quality Office add-ins that meet your requirements and exceed your expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  We thoroughly test all add-ins to ensure they meet our high standards of quality and performance.
                </p>
              </div>
              
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">Revision Policy</h3>
                <p className="text-gray-600">
                  We offer revisions during the development process to ensure the final product meets your requirements.
                </p>
              </div>
              
              <div>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">Support Commitment</h3>
                <p className="text-gray-600">
                  We provide dedicated support to address any issues and ensure your add-in continues to function optimally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your Office add-in requirements and get a personalized quote for your project.
            </p>
            <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition-colors duration-300">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 