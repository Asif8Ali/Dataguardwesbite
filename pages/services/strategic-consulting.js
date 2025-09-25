import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveNavigation from '../../components/layout/ResponsiveNavigation';

export default function StrategicConsulting() {
  return (
    <>
      <Head>
        <title>Strategic Cybersecurity Consulting - Data Guard</title>
        <meta name="description" content="Enterprise-grade cybersecurity strategy and implementation services for organizations that demand excellence and operational resilience." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 overflow-x-hidden">
        {/* Navigation */}
        <ResponsiveNavigation />
        
        <main>
          {/* Hero Section - Home Page Style */}
          <section className="pt-24 pb-20 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl mb-6 sm:mb-8 leading-tight">
                    Strategic <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">Cybersecurity</span> Consulting
                  </h1>
                  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6 sm:mb-8 rounded-full shadow-lg"></div>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg font-medium max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                    Enterprise-grade cybersecurity strategy and implementation services 
                    designed for organizations that demand <span className="text-cyan-300 font-semibold">excellence</span> and operational resilience.
                  </p>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 sm:px-12 py-3 sm:py-4 transition-all duration-300 text-base sm:text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
                    SCHEDULE CONSULTATION
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Navigation to Additional Resources - Home Page Style */}
          <section className="py-16 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50 border-t border-cyan-200/30 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-cyan-50/30 to-indigo-100/40 opacity-50"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-6">
                  Explore Our <span className="text-indigo-600">Methodology</span>
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto">
                  Discover our comprehensive approach to modern cybersecurity with detailed process flows, 
                  CI/CD integration strategies, and industry-specific expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
                  <Link href="/services/home-html" legacyBehavior>
                    <a className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <span>🔍</span>
                      <span className="text-center">View Detailed Methodology</span>
                    </a>
                  </Link>
                  <Link href="/#contact" legacyBehavior>
                    <a className="w-full sm:w-auto bg-white text-cyan-600 border-2 border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                      <span>📞</span>
                      <span className="text-center">Schedule Discussion</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Consulting Process Section - Home Page Style */}
          <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Our Consulting <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Process</span>
                </h2>
                <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                  Our methodology combines industry best practices with deep technical expertise, 
                  delivering strategic cybersecurity solutions that align with your business objectives.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-7xl mx-auto">
                <div className="group relative bg-white rounded-xl shadow-2xl border border-gray-200 p-8 transform transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Discovery & Assessment</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Current state analysis</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Risk assessment framework</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Compliance gap evaluation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-cyan-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Stakeholder alignment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="group relative bg-white rounded-xl shadow-2xl border border-gray-200 p-8 transform transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Strategy Development</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Strategic roadmap design</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Technology architecture</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Investment prioritization</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Business case development</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="group relative bg-white rounded-xl shadow-2xl border border-gray-200 p-8 transform transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Implementation</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Program management</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Technical implementation</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Change management</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Quality assurance</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="group relative bg-white rounded-xl shadow-2xl border border-gray-200 p-8 transform transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
                      <span className="text-2xl font-bold">4</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Optimization</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-orange-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Performance monitoring</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-orange-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Continuous improvement</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-orange-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Knowledge transfer</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2.5 h-2.5 bg-orange-600 rounded-full mt-2.5 flex-shrink-0 shadow-sm"></div>
                        <span className="text-base leading-relaxed font-medium">Strategic optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Excellence Section */}
          <section className="py-20 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/50">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-8">
                    Excellence in Every Engagement
                  </h2>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
                  <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    Our commitment to delivering strategic cybersecurity solutions that drive business value 
                    and operational excellence across every phase of engagement.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 p-8 rounded-xl shadow-lg border border-gray-200/60">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Strategic Vision</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We align cybersecurity initiatives with your business objectives, ensuring 
                        every security investment contributes to your competitive advantage.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 p-8 rounded-xl shadow-lg border border-gray-200/60">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Excellence</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our team brings deep expertise across emerging technologies, compliance frameworks, 
                        and industry best practices to deliver solutions that scale.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 p-8 rounded-xl shadow-lg border border-gray-200/60">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Operational Impact</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We focus on implementations that enhance operational efficiency while maintaining 
                        the highest levels of security and compliance.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-cyan-50/40 p-8 rounded-xl shadow-lg border border-gray-200/60">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">Partnership Approach</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We work as an extension of your team, providing ongoing strategic guidance 
                        and technical expertise to ensure long-term success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10"></div>
            <div className="container mx-auto px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Security Strategy</span>?
                </h2>
                <p className="text-xl text-white/90 mb-12 leading-relaxed">
                  Let's discuss how our strategic cybersecurity consulting can help you build 
                  a resilient, scalable security foundation that supports your business objectives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/#contact" legacyBehavior>
                    <a className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2">
                      <span>📞</span>
                      <span>Schedule Consultation</span>
                    </a>
                  </Link>
                  <Link href="/services/home-html" legacyBehavior>
                    <a className="bg-white/10 backdrop-blur text-white border border-white/30 hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2">
                      <span>📋</span>
                      <span>View Our Methodology</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white mt-12 border-t border-gray-700/50">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center">
              <p className="text-gray-400">© 2024 Data Guard - Strategic Cybersecurity Consulting. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}