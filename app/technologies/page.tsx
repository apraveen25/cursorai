import Image from 'next/image';
import Link from 'next/link';

const technologies = [
  {
    id: 1,
    name: 'Office Add-ins JavaScript API',
    description: 'The official Microsoft API for developing modern Office Add-ins that work across platforms.',
    features: [
      'Cross-platform compatibility',
      'Access to Office application objects and methods',
      'Event-based programming model',
      'Rich UI integration capabilities',
      'Authentication and authorization support'
    ],
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    name: 'React.js',
    description: 'A JavaScript library for building user interfaces, ideal for creating responsive and interactive Office Add-in UIs.',
    features: [
      'Component-based architecture',
      'Virtual DOM for optimal performance',
      'Declarative UI development',
      'Rich ecosystem of libraries and tools',
      'Excellent developer experience'
    ],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript, providing better tooling and error detection.',
    features: [
      'Static type checking',
      'Enhanced IDE support with IntelliSense',
      'Early error detection',
      'Object-oriented programming features',
      'Improved code maintainability'
    ],
    image: 'https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Node.js',
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, used for building server-side components of Office Add-ins.',
    features: [
      'Asynchronous, event-driven architecture',
      'Fast execution of JavaScript code',
      'Rich ecosystem of packages via npm',
      'Scalable backend services',
      'Cross-platform compatibility'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    name: 'Azure Services',
    description: 'Microsoft\'s cloud computing platform used for hosting, data storage, and advanced services for Office Add-ins.',
    features: [
      'Scalable hosting solutions',
      'Secure data storage options',
      'Authentication and identity management',
      'AI and machine learning capabilities',
      'Global availability and reliability'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    name: 'Fluent UI',
    description: 'Microsoft\'s design system for creating interfaces that seamlessly integrate with Office applications.',
    features: [
      'Native Office look and feel',
      'Responsive components',
      'Accessibility built-in',
      'Consistent user experience',
      'Extensive component library'
    ],
    image: 'https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 7,
    name: 'VSTO (Visual Studio Tools for Office)',
    description: 'A set of development tools for creating Office solutions using .NET technologies.',
    features: [
      'Deep integration with Office applications',
      'Full access to .NET Framework',
      'Rich Windows-based UI capabilities',
      'Strong typing and compile-time checking',
      'Advanced debugging capabilities'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 8,
    name: 'Power Automate',
    description: 'Microsoft\'s workflow automation tool that can be integrated with Office Add-ins for enhanced functionality.',
    features: [
      'No-code/low-code automation',
      'Integration with hundreds of services',
      'Trigger-based workflows',
      'Conditional logic and branching',
      'Scheduled and automated processes'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

const techCategories = [
  {
    name: 'Frontend Technologies',
    description: 'Technologies used for creating responsive and interactive user interfaces for Office Add-ins.',
    techs: ['React.js', 'Angular', 'Vue.js', 'Fluent UI', 'Office UI Fabric', 'HTML5/CSS3', 'JavaScript/TypeScript']
  },
  {
    name: 'Backend Technologies',
    description: 'Server-side technologies for processing data and implementing business logic.',
    techs: ['Node.js', 'ASP.NET Core', 'Azure Functions', 'C#/.NET', 'Python', 'Java', 'PHP']
  },
  {
    name: 'Cloud & Infrastructure',
    description: 'Cloud platforms and services for hosting and scaling Office Add-ins.',
    techs: ['Microsoft Azure', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'Serverless Architecture']
  },
  {
    name: 'Data Storage & Processing',
    description: 'Technologies for storing, retrieving, and processing data in Office Add-ins.',
    techs: ['Azure SQL Database', 'Cosmos DB', 'MongoDB', 'Redis Cache', 'Azure Blob Storage', 'Entity Framework', 'GraphQL']
  }
];

export default function Technologies() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Technologies</h1>
            <p className="text-lg mb-8">
              We leverage cutting-edge technologies to develop powerful, scalable, and secure Microsoft Office add-ins.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Technology Stack</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive technology stack enables us to create robust and efficient Office add-ins that meet your specific business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {techCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-primary">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">Featured Technologies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the key technologies we use to develop powerful and efficient Microsoft Office add-ins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div key={tech.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{tech.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <h4 className="font-bold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {tech.features.map((feature, index) => (
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

      {/* Development Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Development Approach</h2>
              <p className="text-gray-600 mb-6">
                We follow a technology-agnostic approach, selecting the best tools and frameworks for each project based on your specific requirements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Best-Fit Technology Selection</h3>
                    <p className="text-gray-600">We choose the most appropriate technologies based on your specific needs and constraints.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Future-Proof Solutions</h3>
                    <p className="text-gray-600">We use modern, well-supported technologies to ensure longevity and maintainability.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Performance Optimization</h3>
                    <p className="text-gray-600">We optimize code and architecture for maximum performance and responsiveness.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">✓</span>
                  <div>
                    <h3 className="font-bold">Security-First Development</h3>
                    <p className="text-gray-600">We implement security best practices at every level of the technology stack.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Development approach"
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
            <h2 className="heading-lg mb-6">Ready to Leverage These Technologies?</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how we can use these cutting-edge technologies to create custom Office add-ins for your business.
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