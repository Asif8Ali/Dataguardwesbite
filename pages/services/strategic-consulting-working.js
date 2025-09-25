import { useState } from 'react';
import Image from 'next/image';
import { ResponsiveNavigation } from '../../components/layout/ResponsiveNavigation';

export default function StrategicConsulting() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <ResponsiveNavigation 
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        
        <main>
          {/* Hero Section - Big 4 Style */}
          <section className="pt-24 pb-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                    Strategic <span className="text-gray-600">Cybersecurity</span> Consulting
                  </h1>
                  <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
                  <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                    Enterprise-grade cybersecurity strategy and implementation services 
                    designed for organizations that demand excellence and operational resilience.
                  </p>
                  <button className="bg-gray-900 text-white px-12 py-4 hover:bg-gray-800 transition-colors duration-300 text-lg font-medium">
                    SCHEDULE CONSULTATION
                  </button>
                </div>
                
                {/* Stats Cards - Big 4 Style */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 border border-gray-200">
                    <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-gray-600 font-medium">Implementations</div>
                  </div>
                  <div className="bg-white p-6 border border-gray-200">
                    <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
                    <div className="text-gray-600 font-medium">Uptime Achieved</div>
                  </div>
                  <div className="bg-white p-6 border border-gray-200">
                    <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                    <div className="text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="bg-white p-6 border border-gray-200">
                    <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
                    <div className="text-gray-600 font-medium">Support Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Consulting Process Section - Big 4 Style */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Our Consulting <span className="text-gray-600">Process</span>
                </h2>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Our methodology combines industry best practices with deep technical expertise, 
                  delivering strategic cybersecurity solutions that align with your business objectives.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div className="group bg-white p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center">
                      <span className="text-white text-lg font-bold">1</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery & Assessment</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Current state analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Risk assessment framework</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Compliance gap evaluation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Stakeholder alignment</span>
                    </li>
                  </ul>
                </div>

                <div className="group bg-white p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center">
                      <span className="text-white text-lg font-bold">2</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy Development</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Strategic roadmap design</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Technology architecture</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Investment prioritization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Business case development</span>
                    </li>
                  </ul>
                </div>

                <div className="group bg-white p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center">
                      <span className="text-white text-lg font-bold">3</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Program management</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Technical implementation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Change management</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Quality assurance</span>
                    </li>
                  </ul>
                </div>

                <div className="group bg-white p-8 border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:shadow-lg">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <div className="w-8 h-8 bg-gray-800 rounded-sm flex items-center justify-center">
                      <span className="text-white text-lg font-bold">4</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimization</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Performance monitoring</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Continuous improvement</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Knowledge transfer</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Capability building</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Services Grid Section - Big 4 Style */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Strategic <span className="text-gray-600">Services</span>
                </h2>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive cybersecurity consulting services designed to strengthen your security posture 
                  and align technology investments with business objectives.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <div className="bg-white border border-gray-200 p-8 group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gray-100 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-800 rounded-sm"></div>
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm font-medium">Strategic</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Strategy & Architecture</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Develop comprehensive security strategies aligned with business objectives, 
                    including enterprise architecture design and technology roadmaps.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Security architecture assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Technology roadmap development</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Investment prioritization framework</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Business case development</span>
                    </li>
                  </ul>
                  <button className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 text-sm font-medium">
                    LEARN MORE
                  </button>
                </div>

                <div className="bg-white border border-gray-200 p-8 group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gray-100 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-800 rounded-sm"></div>
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm font-medium">Governance</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk Management & Compliance</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Establish robust risk management frameworks and ensure compliance with industry 
                    regulations while maintaining operational efficiency.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Enterprise risk assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Compliance program design</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Governance framework development</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Policy & procedure creation</span>
                    </li>
                  </ul>
                  <button className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 text-sm font-medium">
                    LEARN MORE
                  </button>
                </div>

                <div className="bg-white border border-gray-200 p-8 group hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gray-100 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gray-800 rounded-sm"></div>
                    </div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 text-sm font-medium">Transformation</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Transformation Security</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Secure your digital transformation initiatives with strategic security integration 
                    throughout cloud migration and modernization efforts.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Cloud security strategy</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Zero trust architecture</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">Legacy system modernization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">DevSecOps implementation</span>
                    </li>
                  </ul>
                  <button className="bg-gray-900 text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 text-sm font-medium">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action - Big 4 Style */}
          <section className="py-20 bg-gray-900 relative">
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Strengthen Your <span className="text-gray-300">Security Posture</span>?
                </h2>
                <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Let our cybersecurity experts assess your current infrastructure and develop a strategic roadmap 
                  for enhanced security. Join hundreds of organizations that trust us with their digital identity.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
                <div className="text-center p-6">
                  <div className="bg-gray-800 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Expert Implementation</h3>
                  <p className="text-gray-300 leading-relaxed">Certified professionals with deep expertise in leading identity platforms and security frameworks</p>
                </div>

                <div className="text-center p-6">
                  <div className="bg-gray-800 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Proven Methodology</h3>
                  <p className="text-gray-300 leading-relaxed">Time-tested approach with documented success across enterprise implementations</p>
                </div>

                <div className="text-center p-6">
                  <div className="bg-gray-800 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Ongoing Support</h3>
                  <p className="text-gray-300 leading-relaxed">Comprehensive post-implementation support ensuring optimal performance and security</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="text-center space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <button className="bg-white text-gray-900 px-10 py-4 font-bold hover:bg-gray-100 transition-colors duration-300 min-w-[200px]">
                    SCHEDULE CONSULTATION
                  </button>
                  <button className="border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 min-w-[200px]">
                    DOWNLOAD FRAMEWORK
                  </button>
                </div>
                <p className="text-gray-400 text-sm">
                  Free initial consultation • No long-term commitments • Enterprise-ready solutions
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer - Big 4 Style */}
        <footer className="bg-gray-900 text-white border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <Image 
                  src="/images/Afiyan_07122023-02.png" 
                  alt="AFIYAN IT Logo" 
                  width={80} 
                  height={40}
                  className="h-8 w-auto object-contain"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-200">&copy; 2024 AFIYAN IT</p>
                  <p className="text-gray-400">Strategic Cybersecurity Consulting</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-300 text-sm font-medium">Expert cybersecurity guidance you can trust</p>
                <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                  <a href="mailto:contact@dgraud.net" className="text-gray-300 hover:text-white transition-colors text-sm">
                    contact@dgraud.net
                  </a>
                  <span className="text-gray-600">|</span>
                  <a href="tel:+966565052220" className="text-gray-300 hover:text-white transition-colors text-sm">
                    +966-565052220
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-6 pt-4 text-center">
              <p className="text-gray-400 text-xs">
                Trusted partner for CIAM, IAM & Strategic Security Consulting • Serving clients across Saudi Arabia and globally
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}