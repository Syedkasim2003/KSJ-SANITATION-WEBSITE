import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  Sparkles, 
  Layers, 
  Globe,
  Truck,
  PackageCheck
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import founderImg from '../assets/founder.jpeg';
import main1 from '../assets/main-1.webp';

const divisions = [
  {
    icon: <Truck className="w-8 h-8 text-secondary" />,
    title: 'Sanitary & Bathware B2B Wholesale',
    description: 'Bulk distribution of premium sanitaryware, touchless sensor fittings, CPVC/HDPE riser pipes, and luxury bath fixtures to commercial contractors across South India.',
    badge: 'Supply Chain'
  },
  {
    icon: <Building2 className="w-8 h-8 text-secondary" />,
    title: 'Commercial Infrastructure Engineering',
    description: 'Turnkey plumbing and drainage contracting for high-rise commercial hubs, specialty hospitals, event venues, and luxury residential gated communities.',
    badge: 'Contracting'
  },
  {
    icon: <Layers className="w-8 h-8 text-secondary" />,
    title: 'Eco-Friendly Water Treatment Systems',
    description: 'Engineering cutting-edge Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP), greywater recycling networks, and sustainable rainwater harvesting systems.',
    badge: 'Green Tech'
  },
  {
    icon: <PackageCheck className="w-8 h-8 text-secondary" />,
    title: 'Industrial Valves & Pump Distribution',
    description: 'Sourcing heavy-duty hydro-pneumatic booster pumps, industrial grease separators, fire-fighting riser manifolds, and anti-bacterial piping solutions.',
    badge: 'Equipment'
  }
];

const stats = [
  { value: '25+', label: 'Years of Industry Leadership' },
  { value: '500+', label: 'Successful Enterprise Projects' },
  { value: '50+', label: 'Global & National Brand Partners' },
  { value: '100%', label: 'Quality & Regulatory Compliance' }
];

const values = [
  {
    title: 'Uncompromising Quality',
    desc: 'Every pipe, valve, and fixture supplied or installed adheres strictly to IS 4985, IS 15778, and international standards.'
  },
  {
    title: 'On-Time Project Execution',
    desc: 'Our streamlined supply chain and master engineering team guarantee flawless execution within agreed timelines.'
  },
  {
    title: 'Sustainable Engineering',
    desc: 'Pioneering eco-friendly water management and zero-discharge STP solutions to preserve natural water resources.'
  },
  {
    title: 'Transparent B2B Pricing',
    desc: 'Offering competitive wholesale pricing with direct manufacturer backing for maximum value on large-scale builds.'
  }
];

const KSJEnterprisesPage = () => {
  return (
    <div className="font-sans bg-grayish min-h-screen text-dark flex flex-col">
      <Navbar />

      {/* Hero Header Banner */}
      <section className="bg-primary text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-light opacity-20 mix-blend-screen z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* Breadcrumb / Badge */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-secondary font-bold mb-6 bg-secondary/10 px-5 py-2 rounded-full border border-secondary/20 backdrop-blur-md">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">KSJ Enterprises</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-secondary text-sm font-semibold mb-6 border border-white/10"
            >
              <Sparkles className="w-4 h-4" />
              <span>Corporate Division & Multi-Sector Trading</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-xl"
            >
              KSJ <span className="text-secondary">ENTERPRISES</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 font-body leading-relaxed max-w-3xl"
            >
              The flagship corporate arm of KSJ Group. Empowering modern infrastructure through wholesale sanitary supply, turnkey plumbing contracting, eco-friendly water management, and industrial trading.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full">
        <div className="glass-premium rounded-3xl p-8 shadow-elevated border border-white/80 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-4"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-primary mb-1">{item.value}</div>
              <div className="text-xs md:text-sm font-body font-semibold text-gray-600">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow w-full space-y-24">
        
        {/* About KSJ Enterprises Division */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-secondary font-bold uppercase tracking-wider text-sm block">Building Tomorrow's Infrastructure</span>
            <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight">
              A Trusted Partner for Contractors, Builders & Commercial Developers
            </h2>
            <p className="text-gray-600 font-body text-base md:text-lg leading-relaxed">
              Established with a clear vision to redefine sanitary and plumbing standards, <strong>KSJ Enterprises</strong> bridges the gap between top-tier manufacturers and large-scale commercial developments.
            </p>
            <p className="text-gray-600 font-body text-base leading-relaxed">
              Whether supplying high-capacity booster pump systems for high-rise towers or executing multi-bathroom concealed plumbing for luxury residential projects, our enterprise division ensures precision, regulatory compliance, and unmatched value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-semibold text-sm text-primary">BIS & ISO Certified Quality</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <Globe className="w-6 h-6 text-secondary shrink-0" />
                <span className="font-semibold text-sm text-primary">Statewide Distribution</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src={main1} alt="KSJ Enterprises Commercial Site" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Corporate HQ & Warehouse</div>
                <div className="text-xl font-bold">Madurai & Sivakasi Operations</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Business Divisions Grid */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-3 block">Our Operations</span>
            <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">Core Enterprise Divisions</h2>
            <p className="text-gray-600 font-body text-lg">
              Explore the core business verticals operated under the KSJ Enterprises banner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {divisions.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-gray-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center text-primary font-bold text-sm group-hover:text-secondary transition-colors pt-4 border-t border-gray-100">
                  <span>Inquire for B2B Supply</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-primary text-white rounded-[3rem] p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="max-w-3xl mb-12">
              <span className="text-secondary font-bold uppercase tracking-wider text-sm block mb-2">Why Partner With Us</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">The KSJ Enterprise Guarantee</h2>
              <p className="text-gray-300 font-body text-base">
                We combine technical engineering expertise with supply chain reliability to deliver unparalleled corporate service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((val, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-white mb-2">{val.title}</h4>
                    <p className="text-gray-300 text-sm font-body leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership & Founder Vision */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-card border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
                <img src={founderImg} alt="MJF Lion Dr K Syed Jafar" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <span className="text-secondary font-bold uppercase text-xs tracking-widest block">Leadership Perspective</span>
              <h3 className="text-2xl md:text-3xl font-black text-primary">
                "Excellence in infrastructure begins with integrity and precision."
              </h3>
              <p className="text-gray-600 font-body text-base leading-relaxed italic">
                "Through KSJ Enterprises, we extend our passion for engineering perfection across all trade and contracting domains. Our goal is to serve as the most trusted single-window partner for modern building solutions."
              </p>
              <div>
                <span className="font-bold text-lg text-primary block">MJF Lion Dr. K. Syed Jafar</span>
                <span className="text-xs text-secondary font-semibold uppercase tracking-wider">Founder & Managing Director, KSJ Group</span>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Inquiry CTA Banner */}
        <section className="bg-gradient-to-r from-secondary to-secondary-dark text-white rounded-3xl p-8 md:p-12 text-center shadow-glow-secondary relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-black">Ready to Collaborate with KSJ Enterprises?</h2>
            <p className="text-white/90 font-body text-base md:text-lg">
              Contact our corporate business team today for B2B wholesale inquiries, commercial tender contracting, or project partnerships.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/916381385915?text=Hello%20KSJ%20Enterprises,%20I%20would%20like%20to%20discuss%20a%20B2B%20corporate/wholesale%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !bg-primary !text-white hover:!bg-primary-dark w-full sm:w-auto py-4 px-8 flex items-center justify-center gap-3 shadow-lg font-bold"
              >
                <PhoneCall className="w-5 h-5" />
                Contact Enterprise Team
              </a>
              <Link
                to="/#quote"
                className="btn-secondary !bg-white !text-primary hover:!bg-gray-100 w-full sm:w-auto py-4 px-8 font-bold text-center"
              >
                Request Corporate Quote
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KSJEnterprisesPage;
