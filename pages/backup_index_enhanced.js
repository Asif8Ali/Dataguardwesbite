import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useMemo, useRef } from 'react';
import ResponsiveNavigation from '../components/layout/ResponsiveNavigation';

export default function Home() {
  // Hide scrollbar with custom CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);
  // Services data - exactly from your HTML

  const services = useMemo(() => ([
    {
      title: "CIAM",
      description: "We engineer secure, scalable customer identity platforms with a focus on automation and advanced deployment strategies.",
      features: [
        { name: "Advanced CI/CD Pipelines with Automated Product Deployment" },
        { name: "Comprehensive React and Flutter SDK Framework Development" },
        { name: "Proactive Security Integration with Fraud Prevention Tools" },
        { name: "Seamless On-Premise to Cloud Migration Services" },
        { name: "Extensible Custom Code Library for Unique Use Cases" }
      ],
      iconGradient: "from-indigo-500 to-blue-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 715.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>`
    },
    {
      title: "Workforce IAM",
      description: "Streamline identity and access management for your employees, contractors, and partners while bolstering security and ensuring regulatory compliance.",
      features: [
        { name: "Automated Zero-Touch Employee Onboarding and Offboarding" },
        { name: "Role-Based Access Control with SOX GDPR Compliance" },
        { name: "Centralized Identity Store with Lifecycle Management Automation" }
      ],
      iconGradient: "from-cyan-500 to-blue-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>`
    },
    {
      title: "PAM",
      description: "Protect your most critical assets and data by securing, managing, and monitoring all privileged accounts and administrative sessions.",
      features: [
        { name: "Automated Privileged Account Discovery and Secure Vault Management" },
        { name: "Full Session Recording with Real-Time Monitoring and Analysis" },
        { name: "Intelligent Risk Assessment and Threat Prevention" },
        { name: "Zero Trust Architecture Implementation" }
      ],
      iconGradient: "from-red-500 to-pink-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>`
    },
    {
      title: "API Security",
      description: "Protect your APIs with comprehensive security controls including advanced threat detection and automated policy management.",
      features: [
        { name: "Comprehensive OAuth and OIDC Implementation" },
        { name: "API Rate Limiting and Threat Intelligence" },
        { name: "Custom Webhook and Integration Framework" },
        { name: "Advanced Analytics and Security Monitoring" }
      ],
      iconGradient: "from-green-500 to-teal-600",
      iconSvg: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>`
    }
  ]), []);

  const platforms = useMemo(() => ([
    {
      name: "Microsoft Entra ID",
      logo: "/images/Microsoft-entraid.png",
      category: "Workforce IAM"
    },
    {
      name: "Okta",
      logo: "/images/okta.png",
      category: "Workforce & CIAM"
    },
    {
      name: "PingIdentity",
      logo: "/images/ping.png",
      category: "Enterprise Identity"
    },
    {
      name: "CyberArk",
      logo: "/images/cyberark.png",
      category: "PAM"
    },
    {
      name: "BeyondTrust",
      logo: "/images/beyondtrust.png",
      category: "PAM"
    },
    {
      name: "SailPoint",
      logo: "/images/sailpoint.png",
      category: "Identity Governance"
    },
    {
      name: "Saviynt",
      logo: "/images/saviynt.jpeg",
      category: "Identity Governance"
    },
    {
      name: "One Identity",
      logo: "/images/one-ideneity.png",
      category: "Identity Management"
    },
    {
      name: "IBM",
      logo: "/images/IBM.png",
      category: "Enterprise Security"
    },
    {
      name: "Keycloak",
      logo: "/images/keycloak.png",
      category: "Open Source IAM"
    },
    {
      name: "Delinea",
      logo: "/images/delinea.jpeg",
      category: "PAM"
    },
    {
      name: "Arcon",
      logo: "/images/arcon.png",
      category: "PAM"
    }
  ]), []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const platformChunks = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < platforms.length; i += 6) {
      chunks.push(platforms.slice(i, i + 6));
    }
    return chunks;
  }, [platforms]);

  const totalChunks = platformChunks.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalChunks);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalChunks]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalChunks);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalChunks) % totalChunks);
  };

  return (
    <>
      <Head>
        <title>AFIYAN IT - Cybersecurity & Digital Identity Solutions</title>
        <meta name="description" content="Leading provider of Cybersecurity, CIAM, PAM, and IAM solutions. Secure your digital identity infrastructure with our expert consulting and implementation services." />
        <link rel="icon" href="/images/dataGuradFavicon.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <ResponsiveNavigation />

        <main>
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-800 to-indigo-900"></div>
            
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="relative px-6 py-24 mx-auto max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left space-y-8">
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Secure Your
                    <span className="block bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                      Digital Identity
                    </span>
                    Infrastructure
                  </h1>
                  
                  <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                    We&apos;re cybersecurity specialists focused on Customer Identity (CIAM), 
                    Privileged Access Management (PAM), and Identity & Access Management (IAM) solutions. 
                    Transform your security posture with our comprehensive expertise.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                    <a href="#contact" className="group bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2">
                      <span>Get Started</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </a>
                    
                    <a href="#services" className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 flex items-center justify-center space-x-2">
                      <span>Our Services</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/cyber-security-3443625_1280.webp"
                      alt="Cybersecurity Infrastructure"
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">500+</div>
                      <div className="text-blue-200 text-sm">Projects Secured</div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">99.9%</div>
                      <div className="text-blue-200 text-sm">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Platform Expertise Section */}
          <section id="platforms" className="py-16 bg-white/80 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Platform <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Expertise</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We&apos;re certified experts in leading identity and security platforms, delivering seamless integrations and optimized solutions.
                </p>
              </div>

              <div className="relative max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 p-8 border border-gray-200">
                  <div className="relative">
                    <div 
                      className="flex transition-transform duration-500 ease-in-out"
                      style={{ 
                        transform: `translateX(-${currentImageIndex * 100}%)`,
                        width: `${totalChunks * 100}%`
                      }}
                    >
                      {platformChunks.map((chunk, chunkIndex) => (
                        <div key={chunkIndex} className="w-full flex-shrink-0">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            {chunk.map((platform, index) => (
                              <div
                                key={index}
                                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                              >
                                <div className="text-center">
                                  <div className="w-16 h-16 mx-auto mb-4 relative">
                                    <Image
                                      src={platform.logo}
                                      alt={platform.name}
                                      fill
                                      className="object-contain rounded-lg"
                                    />
                                  </div>
                                  <h4 className="font-semibold text-gray-800 mb-2">{platform.name}</h4>
                                  <p className="text-sm text-cyan-600 font-medium">{platform.category}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {totalChunks > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group"
                        aria-label="Previous platforms"
                      >
                        <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 w-10 h-10 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center group"
                        aria-label="Next platforms"
                      >
                        <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </>
                  )}
                </div>

                {totalChunks > 1 && (
                  <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalChunks }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'bg-cyan-600 scale-110'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to platform group ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive cybersecurity solutions tailored to protect your most valuable digital assets and streamline user experiences.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <g dangerouslySetInnerHTML={{ __html: service.iconSvg }} />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{feature.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service Offerings Section */}
          <section id="offerings" className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Service <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Offerings</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From strategy to implementation, we provide end-to-end services to ensure your identity infrastructure is robust, scalable, and future-ready.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Consulting</h3>
                  <p className="text-gray-600 leading-relaxed">Comprehensive security assessments, roadmap development, and strategic guidance to align your identity strategy with business objectives.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Implementation Services</h3>
                  <p className="text-gray-600 leading-relaxed">End-to-end implementation of identity solutions, from proof-of-concept to production deployment with seamless integration.</p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Training & Enablement</h3>
                  <p className="text-gray-600 leading-relaxed">Comprehensive training programs for your team, documentation, and knowledge transfer to ensure long-term success.</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Managed Services</h3>
                  <p className="text-gray-600 leading-relaxed">Ongoing support, monitoring, and optimization services to ensure your identity infrastructure operates at peak performance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section with Professional Enhancement */}
          <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-repeat animate-pulse" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Secure</span> Your Future?
                </h2>
                <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
                  Partner with cybersecurity experts who understand your challenges. Let&apos;s build a robust, scalable identity infrastructure that grows with your business.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Expert Implementation</h3>
                  <p className="text-blue-200 leading-relaxed">Certified professionals with deep expertise in leading identity platforms and security frameworks</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
                  <p className="text-blue-200 leading-relaxed">Track record of successful deployments with 99.9% uptime and enhanced security postures</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Quick Response</h3>
                  <p className="text-blue-200 leading-relaxed">Get responses within 24 hours and start your transformation journey immediately</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Email */}
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 border border-cyan-400/20">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.893 5.421a2 2 0 002.214 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Email Us</h4>
                    <a href="mailto:contact@dgraud.net" className="text-cyan-300 hover:text-cyan-200 transition-colors font-medium text-sm break-all">contact@dgraud.net</a>
                  </div>

                  {/* Phone - Saudi Arabia */}
                  <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-xl p-6 hover:from-emerald-500/30 hover:to-green-500/30 transition-all duration-300 border border-emerald-400/20">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">Saudi Arabia</h4>
                    <div className="space-y-1">
                      <a href="tel:+966565052220" className="block text-emerald-300 hover:text-emerald-200 transition-colors font-medium text-sm">+966-565052220</a>
                      <a href="tel:+966541045831" className="block text-emerald-300 hover:text-emerald-200 transition-colors font-medium text-sm">+966-541045831</a>
                    </div>
                  </div>

                  {/* Phone - India */}
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300 border border-orange-400/20 md:col-span-2 lg:col-span-1">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">India</h4>
                    <a href="tel:+919910339578" className="text-orange-300 hover:text-orange-200 transition-colors font-medium text-sm">+91-9910339578</a>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                  Join hundreds of organizations that trust us with their identity infrastructure. Let&apos;s discuss how we can secure and streamline your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="mailto:contact@dgraud.net" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.893 5.421a2 2 0 002.214 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Send Email</span>
                  </a>
                  <a href="tel:+966565052220" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white mt-12 border-t border-gray-700/50">
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
                  <p className="font-semibold text-gray-200">&copy; 2024 Data Guard</p>
                  <p className="text-gray-400">All rights reserved</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-gray-300 text-sm font-medium">We value our client&apos;s trust and privacy</p>
                <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                  <a href="mailto:contact@dgraud.net" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    contact@dgraud.net
                  </a>
                  <span className="text-gray-600">|</span>
                  <a href="tel:+966565052220" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    +966-565052220
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700/50 mt-6 pt-4 text-center">
              <p className="text-gray-400 text-xs">
                Trusted partner for CIAM, IAM & API Security Solutions • Serving clients across Saudi Arabia and globally
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}