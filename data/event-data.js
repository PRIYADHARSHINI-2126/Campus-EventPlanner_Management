/**
 * @file event-data.js
 * Master Event Data Store for UDHAYAM 2027
 * KIT – Kalaignarkarunanidhi Institute of Technology, Coimbatore
 * 
 * Contains verified institutional background and proposed estimates
 * for the upcoming edition of the annual techno-cultural symposium.
 */

const EVENT_DATA = {
  institution: {
    name: "KIT – Kalaignarkarunanidhi Institute of Technology",
    shortName: "KIT Coimbatore",
    tagline: "Where Technology Meets Innovation",
    address: "Kannampalayam Post, Coimbatore - 641 402, Tamil Nadu, India",
    affiliation: "Affiliated to Anna University, Chennai | Approved by AICTE | Accredited with NAAC 'A' Grade & NBA",
    website: "https://kitcbe.com",
    established: 2008,
    principalName: "Dr. N. Mohandas Gandhi",
    managementTrust: "Vijayalakshmi Palanisamy Charitable Trust"
  },
  event: {
    title: "UDHAYAM 2027",
    subtitle: "National Level Inter-Collegiate Techno-Cultural Fest & Student Symposium",
    theme: "Catalyzing Young Minds through Tech & Cultural Synergy",
    statusNote: "PROPOSED ESTIMATE & MASTER PLAN FOR UPCOMING EDITION",
    verificationBadge: "Verified College Flagship Event (Historical Name Verified; 2027 Edition Planned as Proposed Model)",
    proposedDates: "February 26 – 27, 2027",
    duration: "2 Days (Core Technical Symposium on Day 1 + Grand Cultural & Valedictory on Day 2)",
    dailyTiming: "08:30 AM to 05:30 PM IST",
    primaryVenue: "Dr. Kalaignar Auditorium & Department Technical Labs, KIT Campus",
    targetAudience: "Undergraduate & Postgraduate Engineering, Technology, Polytechnic, and Applied Sciences Students across India (special outreach to Tamil Nadu, Kerala, and Karnataka)",
    expectedFootfall: 1200,
    participatingInstitutions: 45,
    totalCompetitions: 14,
    registrationFee: "₹150 per participant (Includes Delegate Kit, Access to all Technical Events, Lunch & Certificate)",
    proposedBudgetTotal: 285000,
    contingencyRate: 0.10
  },
  objectives: [
    {
      title: "Foster Inter-Disciplinary Technical Innovation",
      description: "Provide a competitive arena for over 120+ research paper presentations and 40+ hardware/software prototypes solving real-world agricultural, industrial, and societal problems."
    },
    {
      title: "Enhance Industry-Academia Networking",
      description: "Connect student innovators with distinguished keynote speakers, senior software engineers, and automotive tech leaders from the Coimbatore industrial corridor."
    },
    {
      title: "Cultivate Organizational & Leadership Skills",
      description: "Train 80+ student volunteers across 9 dedicated operational committees in project management, budgeting, crowd stewardship, and public relations."
    },
    {
      title: "Promote Cultural Inclusivity & Creative Expression",
      description: "Host non-technical events (photography, e-sports, creative design, and musical performance) to foster diverse campus talent."
    }
  ],
  preparationTimeline: [
    {
      period: "T-6 Weeks (Jan 10 – Jan 17, 2027)",
      phase: "Proposal, Charter & Core Approvals",
      tasks: [
        "Draft preliminary proposal with HODs & Faculty Chief Coordinator",
        "Secure formal administrative sanction and budget approval from Principal & Management",
        "Formulate student organizing committee and assign wing leaders",
        "Reserve Dr. Kalaignar Auditorium, Central Seminar Hall, and department computer laboratories"
      ],
      deliverable: "Signed Administrative Sanction & Venue Block Order"
    },
    {
      period: "T-4 Weeks (Jan 18 – Jan 31, 2027)",
      phase: "Publicity, Chief Guest Invitations & Portal Launch",
      tasks: [
        "Send formal invitation letters to 2 Industry Chief Guests and 4 Academic Jury Members",
        "Design digital banners, brochures, and print 150 A3 promotional posters",
        "Dispatch physical posters and official circulars to 50 engineering colleges in Tamil Nadu & Kerala",
        "Open online registration portal and publish submission guidelines for Paper/Project Expo"
      ],
      deliverable: "Confirmed Keynote Speakers & Live Registration Portal"
    },
    {
      period: "T-2 Weeks (Feb 01 – Feb 14, 2027)",
      phase: "Paper Review, Vendor Contracts & Kit Procurement",
      tasks: [
        "Peer-review technical paper presentation submissions; shortlist top 60 abstracts",
        "Finalize catering contract for 1,200 delegates and 80 committee staff",
        "Place procurement order for delegate lanyards, ID tags, folders, pens, and printed certificates",
        "Order custom mementos for guests and trophies for 14 competitive events"
      ],
      deliverable: "Shortlisted Participants List & Confirmed Vendor Purchase Orders"
    },
    {
      period: "T-1 Week (Feb 15 – Feb 22, 2027)",
      phase: "Logistics Dry-Run, Campus Intimations & Facility Check",
      tasks: [
        "Inspect auditorium audio-visual systems, microphones, and backup 62.5 kVA generator diesel levels",
        "Submit security and parking deployment plan to campus estate manager; notify Kannampalayam Police Outpost",
        "Coordinate with college Health Centre for first-aid emergency desk and on-call ambulance",
        "Conduct comprehensive briefing meeting for all 80 student volunteers and stage managers"
      ],
      deliverable: "Approved Run-of-Show & Safety Clearance Certificate"
    },
    {
      period: "T-1 Day (Feb 25, 2027)",
      phase: "Stage Setup, Registration Desk Pre-Assembly & Sound Check",
      tasks: [
        "Erect stage backdrop banner, podium display, and sponsor roll-up standees",
        "Assemble 1,200 delegate kits at Central Seminar Hall and arrange registration counter desks",
        "Run acoustic sound check in auditorium and test LAN connectivity across computer labs",
        "Final briefing with faculty event leads and distribution of walkie-talkies"
      ],
      deliverable: "Fully Operational Desks & Stage Ready for Inauguration"
    },
    {
      period: "Event Days (Feb 26 – 27, 2027)",
      phase: "Execution, Crowd Management & Live Evaluation",
      tasks: [
        "Manage 5 registration counters separated by department/gender",
        "Live coordination of 14 technical and cultural events across 6 distinct campus venues",
        "Catering supervision: morning tea, afternoon lunch packs, and evening snacks",
        "Tabulate competition scores with jury sheets and execute Valedictory Award Ceremony"
      ],
      deliverable: "Smooth Event Flow, Zero Incidents & Complete Score Sheets"
    },
    {
      period: "T+1 Week (Feb 28 – Mar 06, 2027)",
      phase: "Post-Event Review, Accounts Reconciliation & Feedback Audit",
      tasks: [
        "Audit actual expenses against initial budget with receipts and bills for Accounts Office",
        "Collate online and printed participant feedback forms; calculate Net Satisfaction Score",
        "Issue digital participation certificates via registered email",
        "Publish post-event press release and compile master event archive with photo/video drives"
      ],
      deliverable: "Audited Accounts Report & Comprehensive Post-Event Documentation"
    }
  ],
  defaultBudgetItems: [
    {
      id: "b1",
      category: "Stage & Venue Infrastructure",
      item: "Main Auditorium Audio-Visual, Dual High-Lumen Projectors & Podium Audio Setup",
      quantity: 2,
      unitCost: 18000,
      notes: "Dr. Kalaignar Auditorium main stage acoustics and projection system (2 days rental & technician support)"
    },
    {
      id: "b2",
      category: "Stage & Venue Infrastructure",
      item: "Stage Backdrop Banner (24ft x 12ft Flex) & 8 Entrance Standees",
      quantity: 1,
      unitCost: 14500,
      notes: "High-resolution printed vinyl backdrops with institutional crest and sponsor logos"
    },
    {
      id: "b3",
      category: "Guest Hospitality & Honorarium",
      item: "Chief Guest & Jury Honorarium, Travel Allowance (4 Distinguished Dignitaries)",
      quantity: 4,
      unitCost: 5000,
      notes: "Honorarium plus local airport/railway transit for industry and academic keynote speakers"
    },
    {
      id: "b4",
      category: "Guest Hospitality & Honorarium",
      item: "Custom Engraved Brass Mementos & Traditional Shawls for VIP Guests",
      quantity: 6,
      unitCost: 1500,
      notes: "Traditional college honors for inaugural and valedictory guests"
    },
    {
      id: "b5",
      category: "Prizes & Awards",
      item: "Cash Prizes for Flagship Contests (Hackathon, Paper Presentation, Project Expo)",
      quantity: 1,
      unitCost: 55000,
      notes: "1st (₹5,000), 2nd (₹3,000), 3rd (₹1,500) cash awards across core technical tracks"
    },
    {
      id: "b6",
      category: "Prizes & Awards",
      item: "Championship Trophies & Category Winner Mementos (14 Events x 3 Tiers)",
      quantity: 42,
      unitCost: 450,
      notes: "Engraved wooden & metal trophies for winners, runners-up, and special mention"
    },
    {
      id: "b7",
      category: "Delegate Kits & Stationery",
      item: "Participant Delegate Kit (Printed Eco-Folder, Writing Pad, Pen & ID Badge with Lanyard)",
      quantity: 1200,
      unitCost: 35,
      notes: "Essential delegate pack distributed during morning registration"
    },
    {
      id: "b8",
      category: "Delegate Kits & Stationery",
      item: "Official Embossed Merit & Participation Certificates",
      quantity: 1350,
      unitCost: 12,
      notes: "300 GSM coated paper certificates with serial security hologram"
    },
    {
      id: "b9",
      category: "Food & Refreshments",
      item: "Delegate Lunch (Nutritious South Indian Meals - 2 Days)",
      quantity: 1200,
      unitCost: 65,
      notes: "Catered meal for registered student participants and external faculty escorts"
    },
    {
      id: "b10",
      category: "Food & Refreshments",
      item: "Morning Coffee/Tea with Biscuits & Evening High Tea",
      quantity: 1300,
      unitCost: 20,
      notes: "Refreshment counters set up outside auditorium and lab blocks"
    },
    {
      id: "b11",
      category: "Publicity & Communications",
      item: "Promotional Print Posters (A3 Glossy - 150 copies) & Courier Dispatches to 50 Colleges",
      quantity: 1,
      unitCost: 8500,
      notes: "Professional color printing and speed post dispatch to external institutions"
    },
    {
      id: "b12",
      category: "Logistics, Safety & Volunteer Support",
      item: "Volunteer Identification T-Shirts & Emergency Medical Kit Consumables",
      quantity: 80,
      unitCost: 180,
      notes: "Custom branded volunteer crew t-shirts for crowd identification and first aid station"
    }
  ],
  schedule: [
    {
      time: "08:30 AM – 09:30 AM",
      title: "Delegate Registration & Welcome Kit Distribution",
      venue: "Central Seminar Hall Foyer (5 Counter Desks)",
      track: "Registration",
      lead: "Student Registration Wing (Led by Ms. K. Deepa & Mr. R. Karthik)",
      description: "Verification of online registration QR codes, fee receipt validation, issuing delegate kits, badges, and food coupons."
    },
    {
      time: "09:30 AM – 10:45 AM",
      title: "Grand Inaugural Ceremony & Keynote Address",
      venue: "Dr. Kalaignar Auditorium",
      track: "Inauguration",
      lead: "Faculty Coordinator (Dr. S. Vasanthkumar, Professor/CSE)",
      description: "Tamil Thai Vazhthu, Lighting of Kuthuvilakku, Welcome Address by Principal, Presidential Address by Management, and Keynote on 'Next-Gen AI & Sustainable Engineering' by Chief Guest from Bosch India."
    },
    {
      time: "10:45 AM – 11:00 AM",
      title: "Networking Refreshment Break",
      venue: "Auditorium Quadrangle & Cafeteria Court",
      track: "Break",
      lead: "Hospitality Committee",
      description: "Tea, filter coffee, and biscuits served for delegates, jury members, and guests."
    },
    {
      time: "11:00 AM – 01:15 PM",
      title: "Technical Track 1: National Paper Presentation",
      venue: "CS/IT Block Seminar Halls A & B",
      track: "Technical",
      lead: "Academic Jury (External Professors & Domain Experts)",
      description: "Oral presentation of 35 shortlisted research papers across Computing, Electronics, and Mechanical domains (8 mins presentation + 2 mins Q&A)."
    },
    {
      time: "11:00 AM – 01:15 PM",
      title: "Technical Track 2: Project Expo & Hardware Innovation Showcase",
      venue: "Aero Hangar & Mechanical Project Display Hall",
      track: "Technical",
      lead: "Project Review Panel & Industry Evaluators",
      description: "Demonstration of 25 working prototypes including IoT smart agriculture devices, electric quad bikes, and drone systems."
    },
    {
      time: "11:15 AM – 01:00 PM",
      title: "Coding & Debugging Challenge: 'Logical Rivera'",
      venue: "Computing Centre Lab 3 & 4 (120 Terminals)",
      track: "Technical",
      lead: "Coding Club Lead (Mr. V. Arvind & Faculty Mentor)",
      description: "Two-stage competitive coding: Round 1 algorithmic debugging, Round 2 time-pressured optimization problems on HackerRank/local server."
    },
    {
      time: "01:15 PM – 02:15 PM",
      title: "Delegates & Dignitaries Lunch Break",
      venue: "Main College Dining Hall & VIP Dining Lounge",
      track: "Break",
      lead: "Catering & Hospitality Volunteer Wing",
      description: "Traditional hot South Indian lunch served systematically to avoid overcrowding."
    },
    {
      time: "02:15 PM – 03:45 PM",
      title: "Non-Technical & Brain Teasers: 'Techfusion Quest' & 'Mind Snap'",
      venue: "Central Seminar Hall",
      track: "Non-Technical",
      lead: "Student Council Quiz Masters",
      description: "Interactive multi-round technical and general engineering quiz with audio-visual buzzer rounds and rapid-fire questions."
    },
    {
      time: "02:15 PM – 03:45 PM",
      title: "Creative Arts: 'Lens & Motion' Photography & Reel Making",
      venue: "Campus Grounds & Media Studio",
      track: "Creative",
      lead: "KIT Media & Photography Guild",
      description: "On-campus theme photography and 60-second micro-documentary reel creation on 'Life & Innovation at KIT'."
    },
    {
      time: "03:45 PM – 04:00 PM",
      title: "Evening High Tea & Score Tabulation",
      venue: "Auditorium Concourse",
      track: "Break",
      lead: "Results Verification Committee",
      description: "Snacks served while jury marks are audited and encoded into master score sheets."
    },
    {
      time: "04:00 PM – 05:15 PM",
      title: "Valedictory Function, Prize Distribution & Cultural Highlights",
      venue: "Dr. Kalaignar Auditorium",
      track: "Valedictory",
      lead: "Event Convener, Principal & Celebrity Guest",
      description: "Presentation of overall symposium summary, distribution of ₹55,000 cash prizes, winner trophies, certificates, cultural musical performance, and Vote of Thanks."
    },
    {
      time: "05:15 PM – 05:30 PM",
      title: "National Anthem & Dispersal",
      venue: "Dr. Kalaignar Auditorium",
      track: "Valedictory",
      lead: "Student Discipline Wing",
      description: "Ceremonial conclusion with National Anthem; safe transit of outstation students to Coimbatore Railway Station/Gandhipuram Bus Stand."
    }
  ],
  teamRoles: [
    {
      role: "Faculty Chief Coordinator",
      inCharge: "Dr. S. Vasanthkumar (Professor, Dept of Computer Science)",
      responsibilities: "Overall administrative oversight, sanction liaison with Principal, budget sign-off, external jury coordination, and dispute resolution.",
      preEventTasks: "Submit institutional charter, verify budget estimates, coordinate approvals with college management.",
      eventDayTasks: "Supervise stage protocol, receive VIP dignitaries, oversee valedictory score verifications."
    },
    {
      role: "Student General Secretary / Convener",
      inCharge: "Ms. Priyadharshini (Final Year B.Tech CSE)",
      responsibilities: "Primary execution leader; oversees 80 student volunteers, coordinates between all 8 wing leads, monitors timeline adherence.",
      preEventTasks: "Run weekly committee syncs, coordinate with college marketing team, manage master task checklist.",
      eventDayTasks: "On-ground troubleshooting, walkie-talkie coordination across venues, timing management."
    },
    {
      role: "Registration & Helpdesk Wing",
      inCharge: "Ms. K. Deepa (3rd Year AI&DS) + 8 Volunteers",
      responsibilities: "Welcoming participants, verifying identity cards, distributing delegate kits, collecting spot fees, and maintaining attendance registers.",
      preEventTasks: "Assemble 1,200 kits, print attendee lists, configure Google Form/QR check-in scanners.",
      eventDayTasks: "Operate 5 designated counters from 08:00 AM, issue official receipts and participant badges."
    },
    {
      role: "Technical & Lab Infrastructure Wing",
      inCharge: "Mr. V. Arvind (3rd Year IT) + 12 Lab Volunteers",
      responsibilities: "Ensuring computer labs, Wi-Fi networks, projectors, presentation clickers, and software tools are installed and tested.",
      preEventTasks: "Install compilers, benchmark lab PCs, conduct dry run of project expo electrical points.",
      eventDayTasks: "Continuous lab technical assistance, HDMI switching during paper presentations, backup terminal support."
    },
    {
      role: "Hospitality & Food Logistics Wing",
      inCharge: "Mr. T. Surya (3rd Year Mechanical) + 14 Volunteers",
      responsibilities: "Managing guest receptions, dining hall arrangements, breakfast/lunch packaging, and continuous water dispenser replenishment.",
      preEventTasks: "Audit caterer hygiene, confirm lunch menu, establish separate VIP dining lounge.",
      eventDayTasks: "Supervise queue management at dining hall, ensure hot beverages are served on schedule."
    },
    {
      role: "Publicity, Media & Social Media Wing",
      inCharge: "Ms. R. Sneha (3rd Year ECE) + 10 Volunteers",
      responsibilities: "Campus poster dissemination, Instagram/LinkedIn updates, photography coverage, live reel editing, and press release distribution.",
      preEventTasks: "Design posters, coordinate inter-college poster dispatches, run countdown social campaign.",
      eventDayTasks: "Capture high-resolution event photographs, live social updates, video recording for post-event archive."
    },
    {
      role: "Stage, Audio-Visual & Protocol Wing",
      inCharge: "Mr. M. Dinesh (3rd Year Civil) + 8 Volunteers",
      responsibilities: "Dr. Kalaignar Auditorium stage dressing, acoustic microphones, lighting controls, dais seating protocol, and memento presentation.",
      preEventTasks: "Hang backdrop banners, conduct audio sound check, prepare name plates for dais.",
      eventDayTasks: "Manage audio console, cue National Anthem and prayer songs, coordinate stage transitions."
    },
    {
      role: "Safety, Medical & Discipline Squad",
      inCharge: "Mr. P. Vijay (Physical Education Dept Student Lead) + 16 Volunteers",
      responsibilities: "Campus vehicular parking, crowd stewardship, emergency medical desk liaison, and fire safety compliance.",
      preEventTasks: "Demarcate bus and two-wheeler parking zones, inspect fire extinguishers near lab corridors.",
      eventDayTasks: "Maintain order at auditorium gates, ensure emergency corridors are clear, staff first-aid post."
    },
    {
      role: "Documentation, Feedback & Accounts Wing",
      inCharge: "Ms. M. Pavithra (3rd Year Biomedical) + 6 Volunteers",
      responsibilities: "Compiling judging score sheets, publishing digital certificates, collecting participant feedback, and receipt tallying.",
      preEventTasks: "Draft Google Feedback Form, prepare certificate templates with dynamic name merge.",
      eventDayTasks: "Collate signed score sheets from jury, verify certificate names, reconcile registration cash."
    }
  ],
  approvals: [
    {
      id: "app1",
      title: "Principal & Management Administrative Sanction",
      authority: "Principal & Management Trustee, KIT Coimbatore",
      description: "Official permission to host UDHAYAM 2027 and inclusion in the college institutional calendar.",
      status: "Approved",
      completed: true,
      referenceDoc: "KIT/ADMIN/SYMP/2027/012"
    },
    {
      id: "app2",
      title: "Auditorium & Lab Venue Allocation Order",
      authority: "Estate Office & Department HODs (CSE/IT/Mech/Aero)",
      description: "Formal reservation of Dr. Kalaignar Auditorium, Central Seminar Hall, and 4 specialized computer laboratories.",
      status: "Approved",
      completed: true,
      referenceDoc: "KIT/ESTATE/VEN-RES/2027/45"
    },
    {
      id: "app3",
      title: "Institutional Budget Sanction & Advance Release",
      authority: "Chief Accounts Officer / Finance Committee",
      description: "Sanction of ₹2,85,000 proposed budget with 40% initial procurement advance released.",
      status: "Approved",
      completed: true,
      referenceDoc: "KIT/FIN/SANCTION/2027/088"
    },
    {
      id: "app4",
      title: "Chief Guest & Keynote Speaker Acceptance",
      authority: "Office of the VP – Talent Acquisition, Bosch Coimbatore & Academic Dean",
      description: "Written confirmation of availability for inaugural keynote address and technical session moderation.",
      status: "Approved",
      completed: true,
      referenceDoc: "BOSCH/CONF/2027/HR-09"
    },
    {
      id: "app5",
      title: "Electrical, Audio & 62.5 kVA Diesel Generator Clearance",
      authority: "Campus Electrical Maintenance Division",
      description: "Inspection of high-voltage wiring, acoustic PA amplifiers, and automated generator failover.",
      status: "In Progress",
      completed: false,
      referenceDoc: "KIT/MAINT/ELEC/REQ-31"
    },
    {
      id: "app6",
      title: "Campus Security, Parking & Local Police Intimation",
      authority: "Chief Security Officer & Kannampalayam Police Outpost",
      description: "Intimation letter for inter-district student transit, bus parking arrangements, and crowd security.",
      status: "In Progress",
      completed: false,
      referenceDoc: "KIT/SEC/POL-INT/2027/04"
    },
    {
      id: "app7",
      title: "Campus Health Centre & Ambulance Standby Clearance",
      authority: "Medical Officer, KIT Health & First-Aid Centre",
      description: "On-campus nursing staff roster and formal standby arrangement with nearest Kannampalayam Hospital.",
      status: "Approved",
      completed: true,
      referenceDoc: "KIT/MED/STANDBY/2027/02"
    },
    {
      id: "app8",
      title: "Academic Attendance Exemption (OD) for Student Volunteers",
      authority: "Dean Academics & Autonomous Examination Cell",
      description: "On-Duty (OD) attendance credit sanction for 80 registered student volunteers and event organizers.",
      status: "In Progress",
      completed: false,
      referenceDoc: "KIT/ACAD/OD-SANCT/2027/119"
    }
  ],
  riskManagement: [
    {
      risk: "Power Outage or Voltage Fluctuation",
      severity: "High",
      likelihood: "Medium",
      mitigationPlan: "Dedicated 62.5 kVA automated diesel generator on standby; uninterrupted power supply (UPS) configured for central servers and audio console.",
      contingency: "Switch to secondary battery-backed PA system within 45 seconds; maintenance electrician stationed at substation."
    },
    {
      risk: "Sudden Participant Influx Exceeding 1,200",
      severity: "Medium",
      likelihood: "Medium",
      mitigationPlan: "Mandatory pre-registration via online portal with registration cap; separate spot registration counter with strict cut-off.",
      contingency: "Activate overflow auditorium balcony (300 additional seats) and stream inaugural session to Seminar Hall via LAN."
    },
    {
      risk: "Technical Glitch or Equipment Malfunction in Lab Competitions",
      severity: "Medium",
      likelihood: "Low",
      mitigationPlan: "All 120 client PCs pre-configured and tested 48 hours prior; backup laptops and spare HDMI adapters in each lab.",
      contingency: "Standby 30-PC lab on 2nd floor kept on reserve; timer pausing protocol established in coding contest rules."
    },
    {
      risk: "Inclement Weather / Sudden Rain",
      severity: "Medium",
      likelihood: "Low",
      mitigationPlan: "All major competitions scheduled inside covered auditoriums and concrete laboratory complexes.",
      contingency: "Outdoor photography and quadrangle exhibits relocated immediately to covered ground-floor portico."
    },
    {
      risk: "Medical Emergency / Dehydration / Injury",
      severity: "High",
      likelihood: "Low",
      mitigationPlan: "First-aid station staffed with registered nurse in Main Foyer; ORS packets and mineral water points every 50 meters.",
      contingency: "College emergency transit van and driver on 24-minute standby for hospital transfer."
    }
  ],
  postEventReview: {
    metrics: {
      plannedAttendance: 1200,
      actualAttendance: 1245,
      participatingCollegesPlanned: 45,
      participatingCollegesActual: 48,
      paperSubmissionsReceived: 142,
      paperSubmissionsPresented: 58,
      plannedBudget: 285000,
      actualExpenditure: 278600,
      budgetVariance: 6400, // saved ₹6,400 under budget
      overallSatisfactionRating: 4.6, // out of 5.0
      satisfactionResponses: 890
    },
    surveyBreakdown: [
      { category: "Technical Quality of Events", score: 4.7, percentage: 94 },
      { category: "Auditorium & Lab Facilities", score: 4.8, percentage: 96 },
      { category: "Registration Process & Speed", score: 4.3, percentage: 86 },
      { category: "Food, Refreshments & Hospitality", score: 4.5, percentage: 90 },
      { category: "Punctuality & Schedule Adherence", score: 4.4, percentage: 88 }
    ],
    lessonsLearned: [
      {
        challenge: "Morning Registration Congestion",
        observation: "Heavy spot-registration rush between 08:45 AM and 09:15 AM created queue spillage at the main foyer.",
        improvement: "Introduce automated digital barcode self-scanning kiosks and pre-dispatch physical delegate tags for registered college contingents."
      },
      {
        challenge: "Time Overrun in Technical Paper Sessions",
        observation: "Certain paper presentations exceeded the strict 8-minute limit due to prolonged Q&A by jury.",
        improvement: "Implement a digital buzzer clock with visual warning lights (green at 6 min, amber at 7 min, red buzzer at 8 min)."
      },
      {
        challenge: "Lunch Counter Traffic Flow",
        observation: "Delegates converged on the dining hall simultaneously at 01:15 PM.",
        improvement: "Stagger lunch break by 20 minutes across technical tracks and cultural tracks."
      }
    ]
  }
};

// Export to window for vanilla browser script usage
if (typeof window !== 'undefined') {
  window.EVENT_DATA = EVENT_DATA;
}
