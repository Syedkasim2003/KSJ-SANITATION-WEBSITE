import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, ArrowRight, Activity, Filter, Search, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ongoingProjects } from '../data/ongoingProjectsData';

const categories = ['All', 'Commercial', 'Residential'];

const OngoingProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = ongoingProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="font-sans bg-grayish min-h-screen text-dark flex flex-col">
      <Navbar />
      
      {/* Hero Banner Header */}
      <section className="bg-primary text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#005A9C_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-secondary font-bold mb-4 bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/20 backdrop-blur-md">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Ongoing Projects</span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            >
              Active & <span className="text-secondary">Ongoing Projects</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-gray-300 font-body leading-relaxed"
            >
              Explore our active engineering job sites across Tamil Nadu. Track live completion status, technical specifications, and key construction milestones in real time.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 w-full">
        <div className="glass-premium rounded-3xl p-6 shadow-elevated border border-white/80 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by project name, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/90 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 shadow-inner"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
            <Filter className="w-4 h-4 text-secondary hidden sm:block mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-primary text-white shadow-md scale-105'
                    : 'bg-white/60 text-gray-600 hover:bg-white hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects Cards Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow w-full">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-card p-8">
            <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search query or filter category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 flex flex-col group border border-gray-100"
              >
                {/* Image Box */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-900">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  
                  {/* Category & Status Tags */}
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-primary text-xs font-bold uppercase rounded-full shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-secondary text-white text-xs font-bold uppercase rounded-full shadow-sm flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Completion Percentage Badge */}
                  <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                    <div className="text-right">
                      <div className="text-xs text-gray-300 font-medium">Completion</div>
                      <div className="text-lg font-black text-secondary">{project.completionPercentage}%</div>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Location & Client */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3 flex-wrap">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-secondary" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        Target: {project.expectedCompletion}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-600 text-sm font-body line-clamp-2 mb-6">
                      {project.subtitle}
                    </p>

                    {/* Progress Bar Component */}
                    <div className="mb-6 bg-gray-100 rounded-full p-1.5 shadow-inner">
                      <div className="flex items-center justify-between text-xs font-bold text-gray-700 px-2 mb-1.5">
                        <span>Work Progress</span>
                        <span className="text-primary font-black">{project.completionPercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.completionPercentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                        />
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.scope.slice(0, 2).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Check Into Project CTA Button */}
                  <Link
                    to={`/ongoing-projects/${project.id}`}
                    className="w-full btn-primary !py-3.5 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Check Into Project</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OngoingProjectsPage;
