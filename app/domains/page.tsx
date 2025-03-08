import Image from 'next/image';
import Link from 'next/link';

const domains = [
  {
    id: 1,
    name: 'Excel Add-ins',
    icon: '/excel-icon.png',
    color: '#217346',
    description: 'Enhance Excel with custom functions, data processing tools, and advanced analytics capabilities.',
    features: [
      'Custom functions and formulas',
      'Data validation and processing tools',
      'Automated reporting solutions',
      'Advanced analytics integration',
      'Dashboard creation tools',
      'External data source connections'
    ],
    useCases: [
      'Financial modeling and analysis',
      'Data cleansing and transformation',
      'Automated report generation',
      'Business intelligence dashboards',
      'Complex calculations and algorithms'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'Word Add-ins',
    icon: '/word-icon.png',
    color: '#2b579a',
    description: 'Streamline document creation, formatting, and management with custom Word add-ins.',
    features: [
      'Document template systems',
      'Content generation tools',
      'Advanced formatting controls',
      'Document review and collaboration features',
      'Integration with document management systems',
      'Automated document assembly'
    ],
    useCases: [
      'Legal document preparation',
      'Contract generation and management',
      'Technical documentation creation',
      'Content compliance checking',
      'Multilingual document support'
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'PowerPoint Add-ins',
    icon: '/powerpoint-icon.png',
    color: '#d24726',
    description: 'Create impressive presentations with custom design tools, content management, and interactive elements.',
    features: [
      'Slide library and template management',
      'Custom design and branding tools',
      'Interactive presentation elements',
      'Data visualization components',
      'Presentation analytics',
      'Media enhancement tools'
    ],
    useCases: [
      'Corporate presentation creation',
      'Sales pitch automation',
      'Training material development',
      'Interactive educational content',
      'Data-driven presentations'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Outlook Add-ins',
    icon: '/outlook-icon.png',
    color: '#0078d4',
    description: 'Enhance email productivity with custom tools for communication, scheduling, and contact management.',
    features: [
      'Email template systems',
      'Advanced email management',
      'Calendar and scheduling tools',
      'Contact management enhancements',
      'Email tracking and analytics',
      'Integration with CRM systems'
    ],
    useCases: [
      'Sales and customer communication',
      'Email campaign management',
      'Meeting scheduling automation',
      'Customer support workflows',
      'Team collaboration enhancement'
    ],
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    name: 'SharePoint Add-ins',
    icon: '/sharepoint-icon.png',
    color: '#038387',
    description: 'Extend SharePoint functionality with custom solutions for document management, collaboration, and workflow automation.',
    features: [
      'Custom SharePoint web parts',
      'Document workflow automation',
      'Team collaboration tools',
      'Business process automation',
      'Custom forms and data entry',
      'Reporting and analytics dashboards'
    ],
    useCases: [
      'Document approval workflows',
      'Project management solutions',
      'Department intranets',
      'Knowledge management systems',
      'Business process automation'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    name: 'Teams Add-ins',
    icon: '/teams-icon.png',
    color: '#6264a7',
    description: 'Enhance Microsoft Teams with custom apps and integrations for improved collaboration and productivity.',
    features: [
      'Custom Teams tabs and channels',
      'Meeting enhancement tools',
      'Team collaboration features',
      'Workflow automation within Teams',
      'Integration with other business systems',
      'Communication enhancement tools'
    ],
    useCases: [
      'Virtual team collaboration',
      'Project management in Teams',
      'Customer service solutions',
      'HR and onboarding processes',
      'Cross-department communication'
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Domains() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Expertise Domains</h1>
            <p className="text-lg mb-8">
              We develop custom add-ins for all Microsoft Office applications to enhance functionality and streamline your workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Domains Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Microsoft Office Applications We Support</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team specializes in developing custom add-ins for the entire Microsoft Office suite, helping businesses enhance productivity and automate tasks.
            </p>
          </div>

          {domains.map((domain, index) => (
            <div key={domain.id} className={`mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex gap-12 items-center`}>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={domain.image}
                    alt={domain.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold">{domain.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <div className="w-16 h-16 rounded-full mb-4" style={{ backgroundColor: domain.color }}></div>
                  <h3 className="text-2xl font-bold mb-4">{domain.name}</h3>
                  <p className="text-gray-600 mb-6">{domain.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {domain.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3">Common Use Cases</h4>
                    <ul className="space-y-2">
                      {domain.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span className="text-gray-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Application Integration */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Cross-Application Integration</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in creating solutions that work across multiple Microsoft Office applications, providing seamless integration and workflow automation.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Integrated Office Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Our cross-application add-ins enable seamless data flow and functionality across the Microsoft Office suite, creating a unified experience for your team.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <div>
                      <h4 className="font-bold">Data Synchronization</h4>
                      <p className="text-gray-600">Keep data consistent across Excel, Word, PowerPoint, and other applications.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <div>
                      <h4 className="font-bold">Workflow Automation</h4>
                      <p className="text-gray-600">Create automated workflows that span multiple Office applications.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <div>
                      <h4 className="font-bold">Unified User Experience</h4>
                      <p className="text-gray-600">Provide a consistent interface and functionality across all Office applications.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px]">
                <Image 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Integrated Office Solutions"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
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