import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaDesktop, FaCloudUploadAlt, FaTools, FaChartLine, FaUserCog } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: 'Custom Add-in Development',
    description: 'We develop tailor-made add-ins for Microsoft Office applications that address your specific business needs and enhance productivity.',
    icon: <FaCode className="text-5xl text-primary mb-4" />,
    features: [
      'Requirement analysis and solution design',
      'Custom UI/UX design for seamless integration',
      'Secure data handling and processing',
      'Cross-platform compatibility',
      'Comprehensive documentation'
    ],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'Add-in Migration & Upgrades',
    description: 'We help migrate your existing VBA macros, COM add-ins, or VSTO solutions to modern Office Add-ins using the latest technologies.',
    icon: <FaCloudUploadAlt className="text-5xl text-primary mb-4" />,
    features: [
      'Assessment of existing solutions',
      'Migration strategy development',
      'Code conversion and optimization',
      'Performance improvements',
      'Backward compatibility support'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'Integration Services',
    description: 'Connect your Office applications with external systems, databases, and cloud services for seamless data flow and enhanced functionality.',
    icon: <FaDesktop className="text-5xl text-primary mb-4" />,
    features: [
      'API development and integration',
      'Database connectivity solutions',
      'Cloud service integration (Azure, AWS, etc.)',
      'Third-party software integration',
      'Secure authentication implementation'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    title: 'Maintenance & Support',
    description: 'We provide ongoing maintenance, updates, and technical support to ensure your Office add-ins continue to function optimally.',
    icon: <FaTools className="text-5xl text-primary mb-4" />,
    features: [
      'Regular updates and compatibility checks',
      'Bug fixes and performance optimization',
      'Technical support and troubleshooting',
      'User training and documentation updates',
      'Security patches and enhancements'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    title: 'Data Analysis Solutions',
    description: 'Leverage the power of data with our custom Excel and Power BI add-ins that transform raw data into actionable insights.',
    icon: <FaChartLine className="text-5xl text-primary mb-4" />,
    features: [
      'Custom data visualization tools',
      'Automated reporting solutions',
      'Advanced analytics integration',
      'Real-time data processing',
      'Interactive dashboards'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    title: 'Consultation & Training',
    description: 'Get expert advice on Office add-in development and comprehensive training for your team to maximize the benefits of your custom solutions.',
    icon: <FaUserCog className="text-5xl text-primary mb-4" />,
    features: [
      'Technical consultation and solution architecture',
      'Best practices and implementation strategies',
      'User training programs',
      'Developer knowledge transfer',
      'Ongoing advisory services'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-lg mb-8">
              We offer comprehensive Microsoft Office add-in development services to help businesses automate tasks, enhance productivity, and streamline workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of expert developers specializes in creating custom solutions for Microsoft Office applications that address your unique business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Why Choose Our Services?</h2>
              <p className="text-gray-600 mb-6">
                With years of experience in Microsoft Office add-in development, we bring expertise and innovation to every project.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Microsoft Certified Developers</h3>
                    <p className="text-gray-600">Our team consists of certified Microsoft developers with extensive experience.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Tailored Solutions</h3>
                    <p className="text-gray-600">We create custom solutions that address your specific business needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">End-to-End Development</h3>
                    <p className="text-gray-600">From concept to deployment, we handle all aspects of the development process.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Ongoing Support</h3>
                    <p className="text-gray-600">We provide continuous support and maintenance to ensure your add-ins remain effective.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Our team working"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
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