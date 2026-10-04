import hotel1 from '../assets/hotel-northgate.jpg';
import hotel2 from '../assets/hotel-north-gate-madurai-pic-61.jpg';
import hotel3 from '../assets/northgate-toilet.webp';
import pryme1 from '../assets/prime-arc-1.png';
import pryme2 from '../assets/prime-arc-2.png';
import npm1 from '../assets/npm-mahal-1.jpg';
import npm2 from '../assets/npm-mahal-2.jpg';
import main1 from '../assets/main-1.webp';
import main2 from '../assets/main-2.jpg';
import main3 from '../assets/main-3.jpg';

import sivakasi1 from '../assets/sivakasi/Sivakasi (1).jpeg';
import sivakasi2 from '../assets/sivakasi/Sivakasi (2).jpeg';
import sivakasi3 from '../assets/sivakasi/Sivakasi (3).jpeg';
import sivakasi4 from '../assets/sivakasi/Sivakasi (4).jpeg';
import sivakasi5 from '../assets/sivakasi/Sivakasi (5).jpeg';
import sivakasi6 from '../assets/sivakasi/Sivakasi (6).jpeg';
import sivakasi7 from '../assets/sivakasi/Sivakasi (7).jpeg';
import sivakasi8 from '../assets/sivakasi/Sivakasi (8).jpeg';
import sivakasi9 from '../assets/sivakasi/Sivakasi (9).jpeg';
import sivakasi10 from '../assets/sivakasi/Sivakasi (10).jpeg';

export const ongoingProjects = [
  {
    id: 'sivakasi-luxury-villa',
    title: 'A Luxury Villa',
    subtitle: 'High-End Residential Sanitation & Concealed Plumbing for 4 Luxury Bathrooms',
    category: 'Residential',
    location: 'Sivakasi',
    client: 'Private Luxury Villa Owner',
    completionPercentage: 60,
    expectedCompletion: 'December 2026',
    status: 'In Progress (60%)',
    statusColor: 'bg-amber-500',
    heroImage: sivakasi1,
    images: [sivakasi1, sivakasi2, sivakasi3, sivakasi4, sivakasi5, sivakasi6, sivakasi7, sivakasi8, sivakasi9, sivakasi10],
    overview: 'Exclusive residential luxury villa project in Sivakasi featuring comprehensive sanitary engineering. Currently at 60% completion with concealed wall piping, pressure testing, and multi-bathroom riser stacks fully verified across 4 luxury bathrooms.',
    scope: [
      'Complete concealed plumbing installation for 4 luxury bathrooms & 1 guest powder room.',
      'Acoustic-dampening PPR soil & waste riser stacks for ultra-quiet drainage.',
      'Pressure testing for concealed thermostatic shower diverters & wall-hung closet tanks.',
      'Underground rainwater harvesting integration and main water tank header connection.',
      '60% work completed - currently moving to fixture trim & final sanitaryware fitout.'
    ],
    timeline: [
      { phase: 'Phase 1: Site Survey & Foundation Plumbing Lines', date: 'Feb 2026', completed: true },
      { phase: 'Phase 2: 4-Bathroom Concealed Wall Piping & Hydro-Pressure Test', date: 'May 2026', completed: true },
      { phase: 'Phase 3: Luxury Sanitaryware & Fixture Trim Fitouts', date: 'Oct 2026', completed: false },
      { phase: 'Phase 4: Hydro-Pneumatic Water Flow Commissioning', date: 'Dec 2026', completed: false }
    ],
    specs: {
      'Total Bathrooms': '4 Luxury Bathrooms + 1 Powder Room',
      'Completion Progress': '60% Completed',
      'Pipe Material': 'Noise-Reduced CPVC & Heavy Duty PPR',
      'Pumping System': 'Automatic Hydro-Pneumatic Booster System',
      'Project Location': 'Sivakasi, Tamil Nadu'
    }
  },
  {
    id: 'grand-plaza-commercial-hub',
    title: 'Grand Plaza Commercial Hub',
    subtitle: 'Multi-Story Commercial Sanitation & High-Pressure Plumbing Infrastructure',
    category: 'Commercial',
    location: 'KK Nagar, Madurai',
    client: 'Grand Plaza Realties',
    completionPercentage: 85,
    expectedCompletion: 'November 2026',
    status: 'Near Completion',
    statusColor: 'bg-emerald-500',
    heroImage: main1,
    images: [main1, main2, main3],
    overview: 'Complete end-to-end sanitary engineering for a 6-story premium commercial complex. Featuring heavy-duty drainage networks, touchless sensor sanitaryware across 48 restroom modules, and central rainwater harvesting integration.',
    scope: [
      'Installation of high-density polyethylene (HDPE) main drainage riser stacks.',
      '48 modern touchless sensor-driven executive restroom suites.',
      'Automated booster pump system for equalized water pressure on top floors.',
      'Commercial kitchen grease-separator trap systems for food court area.',
      'Centralized greywater recycling network for garden irrigation.'
    ],
    timeline: [
      { phase: 'Phase 1: Civil Plumbing Riser Installation', date: 'Jan 2026', completed: true },
      { phase: 'Phase 2: Main Supply Line & Pressure Testing', date: 'May 2026', completed: true },
      { phase: 'Phase 3: Sanitaryware & Sensor Fixture Setup', date: 'Aug 2026', completed: true },
      { phase: 'Phase 4: Final Hydro-Testing & Commissioning', date: 'Oct 2026', completed: false }
    ],
    specs: {
      'Total Restroom Modules': '48 Units',
      'Pipe Material': 'CPVC & HDPE Heavy Duty',
      'Pumping System': 'Hydro-Pneumatic Twin Pumps',
      'Site Manager': 'Er. K. S. J. Managing Director & Lead Engineer'
    }
  },
  {
    id: 'royal-palms-luxury-residences',
    title: 'Royal Palms Luxury Residences',
    subtitle: 'Residential Gated Community Sanitary Pipeline & Hydro-Pneumatic Water Supply',
    category: 'Residential',
    location: 'Cantonment, Trichy',
    client: 'Palms Infra Builders',
    completionPercentage: 65,
    expectedCompletion: 'January 2027',
    status: 'In Progress',
    statusColor: 'bg-amber-500',
    heroImage: pryme1,
    images: [pryme1, pryme2, hotel2],
    overview: 'Premium residential sanitation package for a 120-apartment luxury tower. Installing wall-hung conceal-tank closets, acoustic noise-dampening drain pipes, and underground sewage treatment plant connections.',
    scope: [
      'Complete concealed plumbing for 120 luxury residential apartments.',
      'Acoustic-insulated soil & waste pipes for silent drainage across floors.',
      'Individual floor isolation valves and water metering systems.',
      'Underground STP (Sewage Treatment Plant) inlet & outlet manifold routing.',
      'Solar thermal hot water supply header integration.'
    ],
    timeline: [
      { phase: 'Phase 1: Underground Sewer Main Integration', date: 'Feb 2026', completed: true },
      { phase: 'Phase 2: Concealed Wall Piping & Pressure Hold Test', date: 'Jun 2026', completed: true },
      { phase: 'Phase 3: Fixture Trim & Concealed Tank Assembly', date: 'Oct 2026', completed: false },
      { phase: 'Phase 4: Individual Unit Flow Commissioning', date: 'Dec 2026', completed: false }
    ],
    specs: {
      'Total Residential Units': '120 Apartments',
      'Concealed Tank Type': 'Dual-Flush Eco Systems',
      'Plumbing System': 'Noise-Reduced Triple Layer',
      'Quality Standard': 'IS 4985 & IS 15778 Certified'
    }
  },
  {
    id: 'velan-specialty-hospital',
    title: 'Velan Specialty Hospital & Care Centre',
    subtitle: 'Medical-Grade Anti-Bacterial Plumbing & Touchless Hygiene Facilities',
    category: 'Commercial',
    location: 'Bypass Road, Theni',
    client: 'Velan Health Trust',
    completionPercentage: 45,
    expectedCompletion: 'March 2027',
    status: 'Active Construction',
    statusColor: 'bg-blue-500',
    heroImage: hotel1,
    images: [hotel1, hotel3, main2],
    overview: 'High-spec commercial hospital sanitary installation emphasizing infection control, anti-bacterial copper-core piping for operation theater scrub areas, hands-free foot/sensor valves, and chemical-resistant waste line traps.',
    scope: [
      'Anti-bacterial copper & PPR piping for sterile scrub rooms.',
      'Touchless sensor taps and wall-mounted elbow-operated medical sinks.',
      'Acid & chemical-resistant lab waste drainage network.',
      'Dual-supply lines for medical greywater separation.',
      'Emergency eyewash station plumbing lines across laboratory areas.'
    ],
    timeline: [
      { phase: 'Phase 1: Architectural Plumbing Schematic Approval', date: 'Mar 2026', completed: true },
      { phase: 'Phase 2: Riser Core Drilling & Heavy Main Lines', date: 'Jul 2026', completed: true },
      { phase: 'Phase 3: Scrub Sink & Operation Theater Plumbing', date: 'Nov 2026', completed: false },
      { phase: 'Phase 4: Medical Grade Water Purity & Leak Verification', date: 'Feb 2027', completed: false }
    ],
    specs: {
      'Hospital Beds Supported': '250 Beds',
      'Specialized Piping': 'Anti-Microbial PPR-CT',
      'Sanitary Standard': 'NABH Compliant Hygiene Protocol',
      'Lead Engineer': 'KSJ Technical Services Team'
    }
  },
  {
    id: 'meenakshi-convention-center',
    title: 'Meenakshi Convention & Expo Center',
    subtitle: 'Ultra High-Capacity Event Sanitation & Kitchen Grease Trap Engineering',
    category: 'Commercial',
    location: 'Ring Road, Madurai',
    client: 'Meenakshi Heritage Group',
    completionPercentage: 92,
    expectedCompletion: 'October 2026',
    status: 'Final Finishing',
    statusColor: 'bg-emerald-500',
    heroImage: npm1,
    images: [npm1, npm2, main3],
    overview: 'Massive scale commercial sanitation project designed to accommodate event crowds of up to 5,000 guests simultaneously. Features automated multi-stall urinal flushing systems, heavy duty kitchen grease interceptors, and high-capacity water storage tanks.',
    scope: [
      'High-throughput public washroom complexes (60+ total fixtures).',
      'Industrial-grade stainless steel grease traps for banquet kitchen facilities.',
      'Automated timer-based cascade flushing for large venue urinals.',
      'Stormwater collection and high-speed emergency drainage channels.',
      'Submersible sump pumps for basement drainage.'
    ],
    timeline: [
      { phase: 'Phase 1: Foundation Drainage & Sump Pump Pits', date: 'Dec 2025', completed: true },
      { phase: 'Phase 2: Main Kitchen & Washroom Supply Piping', date: 'Apr 2026', completed: true },
      { phase: 'Phase 3: Urinal Sensor Arrays & Vanity Fitouts', date: 'Jul 2026', completed: true },
      { phase: 'Phase 4: Peak Load Water Flow & Pressure Testing', date: 'Sep 2026', completed: false }
    ],
    specs: {
      'Guest Capacity': '5,000 People',
      'Restroom Stalls': '64 Total Stalls',
      'Grease Traps': '3 Industrial Units (2,000L capacity)',
      'Water System': 'High-Volume Continuous Booster'
    }
  }
];
