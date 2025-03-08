import Image from 'next/image';
import Link from 'next/link';
import { FaLaptopCode, FaChartLine, FaCogs, FaUserTie, FaArrowRight } from 'react-icons/fa';

export default function Home() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="heading-xl mb-6 leading-tight">
                Custom MS Office Add-in Development Solutions
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
                Enhance productivity and streamline workflows with our custom Microsoft Office add-ins for Excel, Word, PowerPoint, and Outlook.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary group">
                  Get Started
                  <FaArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 -top-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="MS Office Add-ins"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Office Add-ins
                  </span>
                  <h3 className="text-white text-xl mt-2">Boost Your Productivity</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-xl font-medium text-gray-600">Trusted by businesses worldwide</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {['Microsoft', 'IBM', 'Deloitte', 'PwC', 'KPMG'].map((company, index) => (
              <div key={index} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="h-12 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-semibold">WHY CHOOSE US</span>
            <h2 className="heading-lg mb-6 mt-2">Why Choose Our Office Add-ins?</h2>
            <p className="text-gray-600 text-lg">
              We specialize in developing custom Microsoft Office add-ins that enhance productivity, automate tasks, and integrate with your existing systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLaptopCode />,
                title: "Custom Development",
                description: "Tailored solutions designed specifically for your business needs and workflows."
              },
              {
                icon: <FaChartLine />,
                title: "Increased Productivity",
                description: "Automate repetitive tasks and streamline workflows to save time and reduce errors."
              },
              {
                icon: <FaCogs />,
                title: "Seamless Integration",
                description: "Connect your Office applications with other systems and data sources."
              },
              {
                icon: <FaUserTie />,
                title: "Expert Support",
                description: "Ongoing maintenance and support from our team of Microsoft certified developers."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="card p-6 hover:translate-y-[-5px] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="text-primary text-4xl mb-4 bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-semibold">OUR PROCESS</span>
            <h2 className="heading-lg mb-6 mt-2">How We Develop Your Add-ins</h2>
            <p className="text-gray-600 text-lg">
              Our streamlined development process ensures high-quality, efficient, and effective Office add-ins.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements and create a detailed development plan."
              },
              {
                number: "02",
                title: "Design & Development",
                description: "Our experts design and develop your custom Office add-in."
              },
              {
                number: "03",
                title: "Testing & Deployment",
                description: "We thoroughly test and deploy your add-in to ensure it works flawlessly."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="text-8xl font-bold text-gray-100 absolute -top-5 -left-2 select-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <Link href="/process" className="text-primary hover:underline flex items-center">
                    Learn more <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-semibold">OUR EXPERTISE</span>
            <h2 className="heading-lg mb-6 mt-2">Our Expertise Domains</h2>
            <p className="text-gray-600 text-lg">
              We develop add-ins for all Microsoft Office applications to enhance functionality and productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Excel', 'Word', 'PowerPoint', 'Outlook'].map((app, index) => (
              <div 
                key={app} 
                className="relative group animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                  <Image 
                    src={`https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80`}
                    alt={`${app} Add-ins`}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{app} Add-ins</h3>
                    <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Custom solutions to enhance your {app} experience and productivity.
                    </p>
                    <Link 
                      href="/domains" 
                      className="inline-flex items-center text-white bg-primary/80 hover:bg-primary px-4 py-2 rounded-md transition-all duration-300 text-sm"
                    >
                      Learn more <FaArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/domains" className="btn-primary">
              Explore All Domains
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-semibold">TESTIMONIALS</span>
            <h2 className="heading-lg mb-6 mt-2">What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about our Office add-in development services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "CTO, Financial Services Inc.",
                quote: "The Excel add-in developed by Office Plugins Pro has transformed our financial analysis process. It's intuitive, powerful, and has saved us countless hours of manual work.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              },
              {
                name: "Michael Chen",
                position: "Operations Manager, Global Logistics",
                quote: "Their Outlook add-in has streamlined our communication workflow and significantly improved our team's productivity. The customer support is exceptional too.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              },
              {
                name: "Emily Rodriguez",
                position: "Marketing Director, Creative Solutions",
                quote: "The PowerPoint add-in has been a game-changer for our presentation creation process. It's intuitive, feature-rich, and has helped us create more engaging presentations.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image 
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-4 text-yellow-400 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Clients Worldwide" },
              { number: "500+", label: "Add-ins Developed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">Ready to Enhance Your Office Experience?</h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today to discuss how our custom Office add-ins can transform your business processes and boost productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get in Touch
              </Link>
              <Link href="/services" className="px-8 py-3 bg-transparent text-white font-bold rounded-md border-2 border-white hover:bg-white/10 transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 