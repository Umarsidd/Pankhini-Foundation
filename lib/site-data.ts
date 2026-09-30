export const siteData = {
  name: 'Pankhini Foundation',
  shortName: 'Pankhini',
  tagline: 'Wings of Change, Lives of Strength',
  location: 'Ghaziabad, NCR · Uttar Pradesh, India',
  email: 'connect@pankhinifoundation.org',
  whatsappNumber: '97738 64894',
  whatsappHref: 'https://wa.me/919773864894?text=Hi',
  description:
    'Pankhini Foundation gives wings to girls who dare to dream and strength to women who rise — through emotional wellbeing, education technology, and legal empowerment.',
  mission:
    'To make quality education, emotional wellbeing, and legal awareness accessible to underserved girls and women across Uttar Pradesh and NCR.',
  vision: 'Every Girl Deserves to Fly. Every Woman, to Lead.',
  focus: 'Empowering Girls & Women · UP & NCR',
  registration: {
    section8: 'Section 8 Company',
    twelveA: '12A Registered',
    eightyG: '80G Approved',
    urn: 'AARCP0321PF20261',
  },
  nav: [
    { label: 'Home', href: '#top' },
    { label: 'About', href: '#about' },
    { label: 'Programmes', href: '#programmes' },
    { label: 'Impact', href: '#impact' },
    { label: 'Stories', href: '#whatsapp' },
    { label: 'Contact', href: '#contact' },
  ],
  programs: [
    {
      number: '01',
      name: 'MannSakhi',
      hindi: 'मन सखी',
      descriptor: 'Emotional Companion',
      audience: 'Girls & Women',
      category: 'Mental wellbeing',
      description:
        'A safe, tech-enabled emotional wellbeing programme with peer support circles, trained community facilitators, and digital wellness tools.',
      details: [
        'Peer support circles in schools, AWCs & communities',
        'Trained MannSakhi facilitators from the community',
        'Digital wellness check-ins & safe expression tools',
      ],
      accent: 'plum',
      icon: 'heart',
    },
    {
      number: '02',
      name: 'PadhoAage',
      hindi: 'पढ़ो आगे',
      descriptor: 'Study Forward',
      audience: 'Girls & Young Women',
      category: 'Education technology',
      description:
        'A mobile-first EdTech platform for girls in semi-urban UP — and young women seeking skill development or career pathways.',
      details: [
        'Hindi learning platform for Class 6–12 girls',
        'Vocational & skill development for young women',
        'Scholarship & higher education navigation',
      ],
      accent: 'saffron',
      icon: 'book',
    },
    {
      number: '03',
      name: 'NyayaSetu',
      hindi: 'न्याय सेतु',
      descriptor: 'Bridge to Justice',
      audience: 'Girls & Women',
      category: 'Legal empowerment',
      description:
        "Technology-powered legal empowerment for girls and women who don't know their rights — or how to access them.",
      details: [
        'AI-assisted legal information tool in Hindi',
        'Connections to verified women lawyers & legal aid NGOs',
        'Rights awareness workshops in schools & communities',
      ],
      accent: 'ink',
      icon: 'scale',
    },
  ],
  contextSignals: [
    { value: '1 in 3', label: 'girls in rural UP drops out before Class 10' },
    { value: '14%', label: 'of assault survivors in India seek any help' },
    { value: '200M+', label: 'women lack mental health access in India' },
    { value: 'June 2026', label: 'Pankhini begins operations' },
  ],
  commitments: [
    { value: '3', label: 'flagship programmes — emotional, educational & legal' },
    { value: '2', label: 'focus groups — adolescent girls and adult women' },
    { value: 'UP', label: "primary focus — India's largest state, highest need" },
    { value: '80G', label: 'tax benefit for donors — approved May 2026' },
  ],
  howWeWork: [
    {
      number: '01',
      title: 'Identify real barriers',
      description:
        'We work with Anganwadi Centres, schools, and community leaders to understand what actually stops girls from learning and women from leading.',
    },
    {
      number: '02',
      title: 'Co-design with beneficiaries',
      description:
        'Girls and women shape our programmes. They know their needs better than any policy document written in a city far away.',
    },
    {
      number: '03',
      title: 'Deploy tech built for Bharat',
      description:
        "Mobile-first, Hindi-language tools that work on basic Android phones with limited data — because real India isn't always well-connected.",
    },
    {
      number: '04',
      title: 'Measure & improve continuously',
      description:
        'Data-driven improvement with community accountability. Every rupee tracked, every outcome measured, every story heard.',
    },
  ],
  people: [
    {
      name: 'Parul Gupta',
      role: 'Founder & Director',
      image: 'https://pankhinifoundation.org/parul-gupta.jpg',
      alt: 'Parul Gupta, Founder and Director of Pankhini Foundation',
      bio: 'Parul leads Pankhini’s vision to empower girls and women through education, technology, and community-driven initiatives.',
    },
    {
      name: 'Adv. Jyoti Shankar',
      role: 'Co-Founder, Legal Head & Director – NyayaSetu',
      image: 'https://pankhinifoundation.org/jyoti-shankar.jpg',
      alt: 'Advocate Jyoti Shankar, Co-Founder and Legal Head of Pankhini Foundation',
      bio: 'Jyoti leads legal awareness, women’s rights advocacy, legal aid initiatives, and AI-powered legal innovation.',
    },
  ],
  ecosystem: [
    { label: 'Community', icon: 'community', delay: 0.1 },
    { label: 'Volunteers', icon: 'volunteers', delay: 0.28 },
    { label: 'Schools & AWCs', icon: 'schools', delay: 0.46 },
    { label: 'Education', icon: 'education', delay: 0.64 },
    { label: 'Wellbeing', icon: 'wellbeing', delay: 0.82 },
    { label: 'Legal aid', icon: 'legal', delay: 1 },
  ],
  socialLinks: [],
} as const

export type Program = (typeof siteData.programs)[number]
export type EcosystemNode = (typeof siteData.ecosystem)[number]
