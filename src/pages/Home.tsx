import  { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaHardHat, FaTools, FaBuilding, FaPaintRoller, FaClipboardList, FaAward, FaClock, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const MugaseVenturesConstruction = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <FaBuilding className="w-12 h-12" />,
      title: "Residential Construction",
      description: "Custom homes built to your vision with precision craftsmanship and attention to detail."
    },
    {
      icon: <FaHardHat className="w-12 h-12" />,
      title: "Commercial Construction",
      description: "Professional commercial spaces designed for business success and operational efficiency."
    },
    {
      icon: <FaPaintRoller className="w-12 h-12" />,
      title: "Renovations & Remodeling",
      description: "Transform existing spaces into modern, functional environments that exceed expectations."
    },
    {
      icon: <FaClipboardList className="w-12 h-12" />,
      title: "Project Management",
      description: "End-to-end oversight ensuring timelines, budgets, and quality standards are met."
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Professional Team",
      description: "Licensed, insured professionals with decades of combined experience"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "On-Time Delivery",
      description: "Proven track record of meeting deadlines without compromising quality"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Quality Materials",
      description: "Premium-grade materials sourced from trusted suppliers"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Transparent Communication",
      description: "Regular updates and clear documentation throughout your project"
    }
  ];

  const projects = [
    { id: 1, category: "Commercial", name: "Corporate Plaza" },
    { id: 2, category: "Residential", name: "Modern Villa" },
    { id: 3, category: "Commercial", name: "Retail Center" },
    { id: 4, category: "Residential", name: "Luxury Estate" },
    { id: 5, category: "Renovation", name: "Historic Restoration" },
    { id: 6, category: "Commercial", name: "Office Complex" }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Crimson+Pro:wght@400;500;600&display=swap');
        
        body {
          font-family: 'Crimson Pro', serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.02em;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .service-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          min-height: 280px;
        }

        .project-image::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(51, 65, 85, 0.8) 100%);
          z-index: 1;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 2;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .hero-pattern {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.02) 10px,
              rgba(255, 255, 255, 0.02) 20px
            );
        }

        .grain {
          position: relative;
        }

        .grain::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.6;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-stone-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FaTools className="w-8 h-8 text-amber-500" />
              <div>
                <h1 className="text-2xl font-bold text-white tracking-wide">MUGASE VENTURES</h1>
                <p className="text-xs text-amber-400 font-semibold tracking-widest">CONSTRUCTION</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-stone-200 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">SERVICES</a>
              <a href="#about" className="text-stone-200 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">ABOUT</a>
              <a href="#projects" className="text-stone-200 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">PROJECTS</a>
              <button className="bg-amber-500 text-stone-900 px-6 py-2.5 font-bold tracking-wide hover:bg-amber-400 transition-all transform hover:scale-105 shadow-lg">
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern grain" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fadeInUp opacity-0">
            <div className="inline-block mb-6">
              <span className="text-amber-400 text-sm font-bold tracking-[0.3em] border border-amber-400 px-6 py-2">EST. 2015</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              MUGASE VENTURES<br/>
              <span className="text-amber-400">CONSTRUCTION</span>
            </h1>
          </div>
          
          <div className="animate-fadeInUp opacity-0 delay-200">
            <p className="text-2xl md:text-3xl text-stone-200 mb-4 font-light tracking-wide">
              Building With Precision
            </p>
            <p className="text-2xl md:text-3xl text-amber-400 mb-12 font-semibold tracking-wide">
              Delivering With Trust
            </p>
          </div>

          <div className="animate-fadeInUp opacity-0 delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-amber-500 text-stone-900 px-10 py-4 text-lg font-bold tracking-wider hover:bg-amber-400 transition-all transform hover:scale-105 shadow-2xl w-full sm:w-auto">
              REQUEST A QUOTE
            </button>
            <button className="border-2 border-white text-white px-10 py-4 text-lg font-bold tracking-wider hover:bg-white hover:text-stone-900 transition-all w-full sm:w-auto">
              VIEW PROJECTS
            </button>
          </div>

          <div className="animate-fadeInUp opacity-0 delay-400 mt-16 flex flex-wrap gap-12 justify-center text-white">
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400">150+</div>
              <div className="text-sm tracking-widest mt-2 text-stone-300">PROJECTS COMPLETED</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400">10+</div>
              <div className="text-sm tracking-widest mt-2 text-stone-300">YEARS EXPERIENCE</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400">98%</div>
              <div className="text-sm tracking-widest mt-2 text-stone-300">CLIENT SATISFACTION</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slideInLeft opacity-0">
              <div className="inline-block mb-4">
                <span className="text-amber-400 text-xs font-bold tracking-[0.3em] border-l-4 border-amber-400 pl-4">WHO WE ARE</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Excellence In<br/>
                <span className="text-amber-400">Construction</span>
              </h2>
              <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                <p>
                  Mugase Ventures Construction stands as a beacon of reliability and craftsmanship in the construction industry. With over a decade of proven excellence, we transform architectural visions into concrete reality.
                </p>
                <p>
                  Our commitment extends beyond building structures—we build lasting relationships founded on trust, transparency, and uncompromising quality. Every project receives the dedication and expertise that has become our signature.
                </p>
                <p className="text-amber-400 font-semibold">
                  From foundation to finish, we deliver construction solutions that stand the test of time.
                </p>
              </div>
            </div>

            <div className="animate-slideInRight opacity-0 delay-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-stone-800 p-8 border-l-4 border-amber-500 hover:bg-stone-700 transition-all">
                  <FaCheckCircle className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Licensed & Insured</h3>
                  <p className="text-stone-400">Full compliance with industry regulations</p>
                </div>
                <div className="bg-stone-800 p-8 border-l-4 border-amber-500 hover:bg-stone-700 transition-all">
                  <FaAward className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Award Winning</h3>
                  <p className="text-stone-400">Recognized for excellence</p>
                </div>
                <div className="bg-stone-800 p-8 border-l-4 border-amber-500 hover:bg-stone-700 transition-all">
                  <FaShieldAlt className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Safety First</h3>
                  <p className="text-stone-400">Zero-compromise on safety standards</p>
                </div>
                <div className="bg-stone-800 p-8 border-l-4 border-amber-500 hover:bg-stone-700 transition-all">
                  <FaHandshake className="w-10 h-10 text-amber-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Client-Focused</h3>
                  <p className="text-stone-400">Your vision, our mission</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fadeInUp opacity-0">
            <div className="inline-block mb-4">
              <span className="text-amber-600 text-xs font-bold tracking-[0.3em] border-l-4 border-amber-600 pl-4">OUR EXPERTISE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              Comprehensive<br/>
              <span className="text-amber-600">Construction Services</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              From initial concept to final walkthrough, we provide complete construction solutions tailored to your unique requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card p-8 shadow-lg hover:shadow-2xl border-t-4 animate-scaleIn opacity-0 delay-${(index + 1) * 100} cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? 'bg-amber-500 border-amber-700 scale-105'
                    : 'bg-white border-amber-500'
                }`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(-1)}
              >
                <div className={`mb-6 transform transition-all duration-300 ${
                  activeService === index ? 'scale-110 text-white' : 'text-amber-600'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  activeService === index ? 'text-white' : 'text-stone-900'
                }`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  activeService === index ? 'text-stone-100' : 'text-stone-600'
                }`}>
                  {service.description}
                </p>
                <div className={`mt-6 pt-6 border-t transition-colors duration-300 ${
                  activeService === index ? 'border-amber-300' : 'border-stone-200'
                }`}>
                  <a href="#contact" className={`font-bold transition-colors inline-flex items-center ${
                    activeService === index ? 'text-white hover:text-stone-100' : 'text-amber-600 hover:text-amber-700'
                  }`}>
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-amber-400 text-xs font-bold tracking-[0.3em] border-l-4 border-amber-400 pl-4">THE GAVA DIFFERENCE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why Choose<br/>
              <span className="text-amber-400">Mugase Ventures</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-stone-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400 group-hover:bg-amber-500 group-hover:text-stone-900 transition-all transform group-hover:scale-110 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-stone-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-amber-600 text-xs font-bold tracking-[0.3em] border-l-4 border-amber-600 pl-4">OUR WORK</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              Featured<br/>
              <span className="text-amber-600">Projects</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Explore a selection of our completed projects that showcase our commitment to excellence and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="project-card group cursor-pointer">
                <div className="project-image relative">
                  <div className="project-overlay"></div>
                  <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                    <span className="text-amber-400 text-sm font-bold tracking-widest mb-2">{project.category.toUpperCase()}</span>
                    <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-stone-900 text-white px-10 py-4 text-lg font-bold tracking-wider hover:bg-amber-500 hover:text-stone-900 transition-all transform hover:scale-105 shadow-lg">
              VIEW ALL PROJECTS
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-amber-500 text-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Build<br/>Your Vision?
          </h2>
          <p className="text-2xl mb-12 font-light">
            Let's discuss how we can bring your construction project to life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-stone-900 text-white px-12 py-5 text-lg font-bold tracking-wider hover:bg-stone-800 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 w-full sm:w-auto justify-center">
              <FaPhone className="w-5 h-5" />
              CALL NOW
            </button>
            <button className="border-4 border-stone-900 text-stone-900 px-12 py-5 text-lg font-bold tracking-wider hover:bg-stone-900 hover:text-white transition-all flex items-center gap-3 w-full sm:w-auto justify-center">
              <FaEnvelope className="w-5 h-5" />
              EMAIL US
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-stone-900">
            <div className="flex items-center gap-3">
              <FaPhone className="w-6 h-6" />
              <span className="text-xl font-bold">+256 (XXX) XXX-XXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="w-6 h-6" />
              <span className="text-xl font-bold">info@mugaseventures.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <FaTools className="w-10 h-10 text-amber-500" />
                <div>
                  <h3 className="text-2xl font-bold tracking-wide">MUGASE VENTURES</h3>
                  <p className="text-xs text-amber-400 font-semibold tracking-widest">CONSTRUCTION</p>
                </div>
              </div>
              <p className="text-stone-400 leading-relaxed">
                Building trust through quality construction. Your partner in creating spaces that inspire and endure.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 tracking-wide">QUICK LINKS</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-stone-400 hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="text-stone-400 hover:text-amber-400 transition-colors">Services</a></li>
                <li><a href="#projects" className="text-stone-400 hover:text-amber-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-stone-400 hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 tracking-wide">CONTACT INFO</h4>
              <ul className="space-y-4 text-stone-400">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                  <span>Kampala, Central Region, Uganda</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>+256 (XXX) XXX-XXXX</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>info@mugaseventures.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-500 text-sm">
                © 2026 Mugase Ventures Construction. All rights reserved.
              </p>
              <p className="text-stone-500 text-sm">
                Built with precision. Delivered with trust.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MugaseVenturesConstruction;