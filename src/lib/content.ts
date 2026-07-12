// Central place for placeholder content. Swap these values out once real
// copy, photos, and pricing are ready — nothing else in the app needs to change.

export const business = {
  name: "Clay Studio Creations",
  shortName: "Clay Studio",
  tagline: "Create. Curate. Connect.",
  location: "Lagos, Nigeria",
  email: "claycreationshq@gmail.com",
  phones: ["0703 917 6501", "0811 255 6739"],
  whatsapp: "2347039176501",
  whatsappDisplay: "0703 917 6501",
  instagram: "https://www.instagram.com/claystudiocreations",
  instagramHandle: "@claystudiocreations",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Rent Gear", href: "/rent-gear" },
  { label: "Contact", href: "/contact" },
];

// Each service links to its own page at /services/[slug]. Gear Rental is the
// exception — it points at the dedicated /rent-gear flow. `videos` holds real
// YouTube embeds; when empty, the page falls back to `videoCount` placeholder
// slots so there's a visible spot to drop videos in later.
// `provider` defaults to YouTube. Use "drive" for a Google Drive file that's
// shared as "anyone with the link" — `id` is the Drive file ID.
type ServiceVideo = {
  id: string;
  title: string;
  provider?: "youtube" | "drive";
};

export type Service = {
  slug: string;
  href: string;
  title: string;
  description: string;
  longDescription: string;
  highlights: string[];
  videoCount: number;
  videos: ServiceVideo[];
  tag: string;
};

export const services: Service[] = [
  {
    slug: "events-live-production",
    href: "/services/events-live-production",
    title: "Events & Live Production",
    description:
      "Full coverage and live production for launches, conferences, and cultural moments — planned and shot to move.",
    longDescription:
      "From product launches and conferences to concerts and cultural moments, we plan and shoot live events end to end. Multi-camera coverage, on-site direction, and fast turnaround so your moment lives on long after the room clears.",
    highlights: [
      "Multi-camera live coverage",
      "On-site direction and run-of-show planning",
      "Same-week highlight edits",
      "Social-ready clips and full recordings",
    ],
    videoCount: 3,
    videos: [
      {
        id: "_JaxWs5K7hE",
        title: "Nino b2b Axara Live | Asake Mix DJ Set | Insert Nights: M$NEY",
      },
    ],
    tag: "01",
  },
  {
    slug: "youtube-podcast-production",
    href: "/services/youtube-podcast-production",
    title: "YouTube & Podcast Production",
    description:
      "Studio-grade recording, lighting, and edit for creators and brands building a consistent show.",
    longDescription:
      "Studio-grade recording and editing for creators and brands building a consistent show. We handle set design, lighting, multi-cam capture, and post so every episode looks and sounds like a network production.",
    highlights: [
      "Multi-cam studio recording",
      "Broadcast-quality audio",
      "Full edit, color, and captions",
      "Thumbnails and channel-ready exports",
    ],
    videoCount: 3,
    videos: [
      {
        id: "F0ZsiqqjjSY",
        title:
          "How Ronami Ogulu Helped Build Spaceship Collective + Manages Burna Boy’s Operations",
      },
    ],
    tag: "02",
  },
  {
    slug: "brand-corporate-storytelling",
    href: "/services/brand-corporate-storytelling",
    title: "Brand & Corporate Storytelling",
    description:
      "Films and campaigns that turn a brand's story into something people actually want to watch.",
    longDescription:
      "Films and campaigns that turn your brand's story into something people actually want to watch. We shape the message, produce the shoot, and deliver assets built for the platforms your audience lives on.",
    highlights: [
      "Concept and script development",
      "Full-service production crew",
      "Brand films, ads, and case studies",
      "Cutdowns for every platform",
    ],
    videoCount: 3,
    videos: [
      {
        provider: "drive",
        id: "1RJoFQlhFKooptAQZTKNci4uIXGvje5wV",
        title: "Brand storytelling film",
      },
    ],
    tag: "03",
  },
  {
    slug: "music-videos",
    href: "/services/music-videos",
    title: "Music Videos",
    description:
      "Concept, treatment, and production for artists who want a video that matches the record.",
    longDescription:
      "Concept, treatment, and production for artists who want a video that matches the record. From performance pieces to full narrative treatments, we build visuals that give the song a second life.",
    highlights: [
      "Creative treatment and moodboards",
      "Location scouting and production design",
      "Cinema-grade cameras and lighting",
      "Editing, color grade, and VFX",
    ],
    videoCount: 3,
    videos: [
      {
        id: "L7hUaGgu_uc",
        title:
          "Café Riddim, KEVIN LNDN & Söulaar – Bounce It O (Official Music Video)",
      },
    ],
    tag: "04",
  },
  {
    slug: "special-passion-projects",
    href: "/services/special-passion-projects",
    title: "Special & Passion Projects",
    description:
      "The weird, personal, hard-to-brief ideas — we help shape them into something real.",
    longDescription:
      "The weird, personal, hard-to-brief ideas we help shape into something real. Bring us the concept that doesn't fit a neat brief and we'll help you find its form.",
    highlights: [
      "Concept and creative development",
      "Small, flexible crews",
      "Experimental and narrative formats",
      "Hands-on collaboration start to finish",
    ],
    videoCount: 3,
    videos: [],
    tag: "05",
  },
  {
    slug: "documentaries",
    href: "/services/documentaries",
    title: "Documentaries",
    description:
      "Long-form, character-driven storytelling from first interview to final cut.",
    longDescription:
      "Long-form, character-driven storytelling from first interview to final cut. We sit with the story until it earns its runtime.",
    highlights: [
      "Story development and research",
      "Interview and vérité shooting",
      "Long-form edit and sound design",
      "Festival- and broadcast-ready delivery",
    ],
    videoCount: 3,
    videos: [
      {
        id: "KY6yHFYaBJY",
        title:
          "SHODAY \"HYBRID\" Documentary: The Path to Greatness | Career, Headline Show & Album",
      },
    ],
    tag: "06",
  },
];

export const portfolioProjects = [
  {
    slug: "placeholder-project-one",
    title: "Project Title One",
    category: "Brand Storytelling",
    description: "A short one-line description of the project goes here.",
  },
  {
    slug: "placeholder-project-two",
    title: "Project Title Two",
    category: "Events & Live Production",
    description: "A short one-line description of the project goes here.",
  },
  {
    slug: "placeholder-project-three",
    title: "Project Title Three",
    category: "Music Video",
    description: "A short one-line description of the project goes here.",
  },
  {
    slug: "placeholder-project-four",
    title: "Project Title Four",
    category: "Documentary",
    description: "A short one-line description of the project goes here.",
  },
  {
    slug: "placeholder-project-five",
    title: "Project Title Five",
    category: "YouTube & Podcast",
    description: "A short one-line description of the project goes here.",
  },
  {
    slug: "placeholder-project-six",
    title: "Project Title Six",
    category: "Special Project",
    description: "A short one-line description of the project goes here.",
  },
];

export const testimonials = [
  {
    quote:
      "Clay Studio nailed our brand vibe from day one — the whole process felt effortless.",
    name: "Client Name",
    role: "Title, Company",
  },
  {
    quote:
      "They showed up, understood the assignment, and delivered something we're still proud of.",
    name: "Client Name",
    role: "Title, Company",
  },
  {
    quote:
      "Professional, fast, and genuinely creative. Exactly what we needed for the launch.",
    name: "Client Name",
    role: "Title, Company",
  },
];

export const gearCatalog = [
  {
    category: "Cameras",
    items: ["Sony FX3", "Sony A7S III", "Sony FX30"],
  },
  {
    category: "Lenses",
    items: [
      "Sony 24-70mm GM",
      "Sony 16-35mm GM",
      "Sony 50mm GM 1.4",
      "Sony 85mm GM 1.4",
      "Sony 16mm 1.4",
      "Sony 50mm 1.8",
    ],
  },
  {
    category: "Lights",
    items: ["Sutefoto Light", "Aputure 300D", "Aputure 300X"],
  },
  {
    category: "Accessories",
    items: ["DJI RS5 Gimbal", "Tripod", "C-Stand", "Insta360 X5"],
  },
];

export const rentalTerms = {
  returnPolicy:
    "This is not a 24-hour rental. Every item is due back the following day before 8am.",
  lateFee:
    "Late returns are charged a fee based on the value of the equipment rented.",
  requirements: [
    "Full name, phone number, and email",
    "Current residential address",
    "A valid ID (National ID, Driver's License, or International Passport)",
    "Social media handle",
    "Company details, if renting on behalf of a business",
    "At least one reference contact (personal or professional)",
  ],
};

export const processSteps = [
  {
    step: "01",
    title: "Book a consultation",
    description: "Tell us what you're working on and we'll set up a call.",
  },
  {
    step: "02",
    title: "We scope the project",
    description: "Together we lock the brief, timeline, and budget.",
  },
  {
    step: "03",
    title: "Production",
    description: "Our crew shoots, records, or produces the work.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "You review, request revisions, and get final files.",
  },
];
