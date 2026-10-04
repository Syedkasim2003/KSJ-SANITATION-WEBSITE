import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Building2, CheckCircle2, Clock, ShieldCheck, Activity, PhoneCall } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { ongoingProjects } from '../data/ongoingProjectsData';

const OngoingProjectDetailPage = () => {
  const { id } = useParams();
  const project = ongoingProjects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="font-sans bg-grayish min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <h2 className="text-3xl font-black text-primary mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-8">The ongoing project you are looking for does not exist or has been archived.</p>
          <Link to="/ongoing-projects" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Ongoing Projects
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans bg-grayish min-h-screen text-dark flex flex-col">
      <Navbar />

      {/* Top Banner & Header */}
      <section className="bg-primary text-white pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#005A9C_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Navigation Link */}
          <div className="mb-6">
            <Link
              to="/ongoing-projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full border border-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Ongoing Projects
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3.5 py-1 bg-secondary text-white text-xs font-bold uppercase rounded-full tracking-wider shadow-sm">
                  {project.category}
                </span>
                <span className="px-3.5 py-1 bg-white/20 text-white backdrop-blur-md text-xs font-bold uppercase rounded-full tracking-wider border border-white/20 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-secondary animate-pulse" />
                  {project.status}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-gray-300 font-body leading-relaxed max-w-2xl">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Metadata Box */}
            <div className="glass-premium p-6 rounded-3xl border border-white/20 text-white min-w-[280px]">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <div>
                    <span className="text-xs text-gray-300 block">Location</span>
                    <span className="font-bold">{project.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <Building2 className="w-4 h-4 text-secondary shrink-0" />
                  <div>
                    <span className="text-xs text-gray-300 block">Client / Builder</span>
                    <span className="font-bold">{project.client}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <Calendar className="w-4 h-4 text-secondary shrink-0" />
                  <div>
                    <span className="text-xs text-gray-300 block">Expected Completion</span>
                    <span className="font-bold">{project.expectedCompletion}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-12">
        
        {/* Progress & Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Overview & Live Gallery */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Gallery Slider */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-card p-4 border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-4 px-2 flex items-center gap-2">
                <span>Site Progress Photos</span>
                <span className="text-xs font-normal text-gray-500">(Swipe to view images)</span>
              </h3>
              <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden">
                <Swiper
                  modules={[Navigation, Autoplay, EffectFade]}
                  effect="fade"
                  navigation={true}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  className="w-full h-full"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={img}
                        alt={`${project.title} site view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Overview Details */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <h3 className="text-2xl font-bold text-primary mb-4">Project Overview</h3>
              <p className="text-gray-700 font-body leading-relaxed text-base mb-8">
                {project.overview}
              </p>

              <h4 className="text-lg font-bold text-primary mb-4">Scope of Sanitary & Engineering Work</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.scope.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-grayish p-4 rounded-2xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Progress Tracker & Specs */}
          <div className="space-y-8">
            
            {/* Live Progress Card */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-primary">Work Progress</h3>
                <span className="text-3xl font-black text-secondary">{project.completionPercentage}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden mb-6 p-0.5 shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.completionPercentage}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                />
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                {Object.entries(project.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-xs py-1">
                    <span className="text-gray-500 font-medium">{key}:</span>
                    <span className="font-bold text-primary text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Construction Timeline Milestones */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                Construction Milestones
              </h3>
              
              <div className="space-y-6 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gray-200">
                {project.timeline.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 pl-8">
                    <div
                      className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-md ${
                        step.completed
                          ? 'bg-emerald-500 text-white'
                          : 'bg-white border-2 border-secondary text-secondary'
                      }`}
                    >
                      {step.completed ? '✓' : idx + 1}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-secondary uppercase">{step.date}</div>
                      <div className={`text-sm font-semibold ${step.completed ? 'text-gray-800' : 'text-primary font-bold'}`}>
                        {step.phase}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {step.completed ? 'Completed' : 'Currently Active / Upcoming'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire CTA */}
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-8 text-white shadow-elevated text-center space-y-4">
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto" />
              <h4 className="text-xl font-bold">Have a Similar Project?</h4>
              <p className="text-gray-300 text-xs font-body leading-relaxed">
                Need reliable sanitary engineering & plumbing contracting for your commercial or residential project?
              </p>
              <a
                href="https://wa.me/916381385915?text=Hi%20KSJ%20Sanitation%20Engineering%20Team,%20I%20saw%20your%20project%20details%20page%20and%20would%20like%20to%20inquire%20about%20a%20similar%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full py-3.5 text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" />
                Contact Engineering Team
              </a>
            </div>

          </div>
        </div>

      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default OngoingProjectDetailPage;
