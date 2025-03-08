import Image from 'next/image';
import Link from 'next/link';
import { FaClipboardCheck, FaCode, FaLaptopCode, FaRocket, FaUserCog, FaChartLine } from 'react-icons/fa';

const processSteps = [
  {
    id: 1,
    title: 'Discovery & Requirements',
    description: 'We begin by understanding your business needs, workflows, and challenges to define clear requirements for your Office add-in.',
    icon: <FaClipboardCheck className="text-5xl text-primary mb-4" />,
    activities: [
      'Initial consultation and needs assessment',
      'Workflow analysis and pain point identification',
      'User research and stakeholder interviews',
      'Requirements documentation and prioritization',
      'Technical feasibility assessment'
    ],
    deliverables: [
      'Detailed requirements document',
      'Project scope definition',
      'Technical specifications',
      'Initial timeline and budget estimate'
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'Design & Architecture',
    description: 'We create a comprehensive design for your add-in, including user interface mockups and technical architecture.',
    icon: <FaLaptopCode className="text-5xl text-primary mb-4" />,
    activities: [
      'User interface and experience design',
      'Technical architecture planning',
      'Data flow and integration design',
      'Security and compliance planning',
      'Design review and approval'
    ],
    deliverables: [
      'UI/UX mockups and wireframes',
      'Technical architecture document',
      'Data flow diagrams',
      'Security and compliance plan'
    ],
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'Development',
    description: 'Our expert developers build your custom Office add-in using the most appropriate technologies and following best practices.',
    icon: <FaCode className="text-5xl text-primary mb-4" />,
    activities: [
      'Iterative development in sprints',
      'Regular code reviews and quality assurance',
      'Continuous integration and testing',
      'Progress updates and demonstrations',
      'Documentation creation'
    ],
    deliverables: [
      'Working code increments',
      'Sprint demo presentations',
      'Progress reports',
      'Technical documentation'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    title: 'Testing & Quality Assurance',
    description: 'We thoroughly test your add-in to ensure it meets all requirements and functions flawlessly across different environments.',
    icon: <FaUserCog className="text-5xl text-primary mb-4" />,
    activities: [
      'Functional testing against requirements',
      'Performance and load testing',
      'Security and vulnerability assessment',
      'Cross-platform compatibility testing',
      'User acceptance testing'
    ],
    deliverables: [
      'Test plans and test cases',
      'Bug reports and resolution documentation',
      'Performance test results',
      'Security assessment report',
      'UAT sign-off'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    title: 'Deployment & Integration',
    description: 'We deploy your add-in to production and ensure it integrates seamlessly with your existing systems and workflows.',
    icon: <FaRocket className="text-5xl text-primary mb-4" />,
    activities: [
      'Deployment planning and preparation',
      'Environment setup and configuration',
      'Data migration (if applicable)',
      'Integration with existing systems',
      'Go-live support'
    ],
    deliverables: [
      'Deployment plan',
      'Production-ready add-in',
      'Integration documentation',
      'Deployment checklist',
      'Go-live report'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    title: 'Training & Support',
    description: 'We provide comprehensive training for your team and ongoing support to ensure long-term success with your new Office add-in.',
    icon: <FaChartLine className="text-5xl text-primary mb-4" />,
    activities: [
      'User training sessions',
      'Administrator training',
      'Documentation and knowledge transfer',
      'Ongoing technical support',
      'Performance monitoring and optimization'
    ],
    deliverables: [
      'Training materials and user guides',
      'Administrator documentation',
      'Support plan and SLA',
      'Maintenance schedule',
      'Future enhancement roadmap'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

const methodologies = [
  {
    name: 'Agile Development',
    description: 'We follow Agile methodologies to ensure flexibility, transparency, and continuous delivery of value throughout the project.',
    benefits: [
      'Iterative development with regular deliverables',
      'Flexibility to adapt to changing requirements',
      'Continuous stakeholder involvement and feedback',
      'Early and frequent delivery of working software',
      'Transparent progress tracking'
    ]
  },
  {
    name: 'DevOps Practices',
    description: 'We implement DevOps practices to streamline development, testing, and deployment processes for faster and more reliable delivery.',
    benefits: [
      'Automated testing and deployment',
      'Continuous integration and delivery',
      'Infrastructure as code',
      'Reduced time to market',
      'Improved quality and stability'
    ]
  },
  {
    name: 'User-Centered Design',
    description: 'We place users at the center of our design process to create intuitive and effective Office add-ins that enhance productivity.',
    benefits: [
      'Improved user adoption and satisfaction',
      'Reduced training requirements',
      'Enhanced productivity and efficiency',
      'Lower support costs',
      'Better alignment with user workflows'
    ]
  }
];

export default function Process() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Development Process</h1>
            <p className="text-lg mb-8">
              We follow a structured yet flexible approach to Office add-in development, ensuring high-quality solutions that meet your specific business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Proven Methodology</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive development process ensures that we deliver high-quality Office add-ins that meet your requirements and exceed your expectations.
            </p>
          </div>

          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2 z-0"></div>
            
            {/* Process Steps */}
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={step.id} className="relative z-10">
                  <div className={`md:flex items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>
                    
                    {/* Content */}
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0">
                      <div className="flex justify-center md:justify-start">{step.icon}</div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold text-lg mb-2">Key Activities:</h4>
                        <ul className="space-y-1">
                          {step.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold text-lg mb-2">Deliverables:</h4>
                        <ul className="space-y-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-primary mr-2">✓</span>
                              <span className="text-gray-700">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className="md:w-1/2">
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="text-xl font-bold">Phase {step.id}: {step.title}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Methodologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Our Development Methodologies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We employ industry-leading methodologies to ensure efficient development, high-quality results, and successful project outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">{methodology.name}</h3>
                <p className="text-gray-600 mb-4">{methodology.description}</p>
                <h4 className="font-bold mb-2">Benefits:</h4>
                <ul className="space-y-1">
                  {methodology.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Collaboration */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Client collaboration"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6">Client Collaboration</h2>
              <p className="text-gray-600 mb-6">
                We believe in close collaboration with our clients throughout the development process. Your input and feedback are essential to creating a successful Office add-in.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Regular Communication</h3>
                    <p className="text-gray-600">We maintain open and transparent communication through regular meetings and updates.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Collaborative Tools</h3>
                    <p className="text-gray-600">We use project management and collaboration tools to keep you informed and involved.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Feedback Integration</h3>
                    <p className="text-gray-600">We actively seek and incorporate your feedback throughout the development process.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Transparent Reporting</h3>
                    <p className="text-gray-600">We provide clear and detailed reports on project progress, challenges, and achievements.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your Office add-in requirements and how our development process can deliver the solution you need.
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