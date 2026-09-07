// Central place for site copy and data. Edit these values to update the site —
// nothing else in the app needs to change.

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
      "Your events happen once — from planning and on-site production to multi-camera coverage and final delivery.",
    longDescription:
      "Your events happen once. From planning to on-site production, multi-camera coverage to final delivery, we ensure the moment lives beyond the day — even after the room clears.",
    highlights: [
      "Multi-camera event coverage",
      "On-site direction and production support",
      "Event highlights delivered within the week",
      "Social-ready clips and full event recording",
    ],
    videoCount: 3,
    videos: [
      { id: "9mTloB14QoQ", title: "Eko Noir" },
      {
        id: "_JaxWs5K7hE",
        title: "Nino b2b Axara Live | Asake Mix DJ Set | Insert Nights: M$NEY",
      },
      { id: "4ghwer462QI", title: "Opium — Event Recap" },
      { id: "hbiwpymFYgs", title: "Lilkesh — 10 Years on Stage" },
      {
        id: "Xg91_5ao5fQ",
        title: "France–Nigeria Music Trade Mission 2026",
      },
    ],
    tag: "01",
  },
  {
    slug: "youtube-podcast-production",
    href: "/services/youtube-podcast-production",
    title: "YouTube & Podcast Production",
    description:
      "From podcasts and interviews to YouTube shows and branded content — production handled from setup to final edit.",
    longDescription:
      "From podcasts and interviews to YouTube shows and branded content, we handle the production from setup to the final edit. With the right cameras, lighting, sound and set design, we help create professional content that draws your audience back.",
    highlights: [
      "Multi-camera studio recording",
      "Professional audio recording",
      "Full editing, colour grading and captions",
      "Thumbnails and platform-ready exports",
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
      "Every brand has a story — we turn ideas, values and stories into visuals people connect with.",
    longDescription:
      "Every brand has a story. We turn brands' ideas, values and stories into visuals people can connect with. From the big idea to the final frame, we create content that represents your brand and speaks to your audience.",
    highlights: [
      "Concept development and scripting",
      "Full production crew and support",
      "Brand films, adverts and case studies",
      "Platform-ready cutdowns and social clips",
    ],
    videoCount: 3,
    videos: [
      { id: "4U9FMD4rvjw", title: "CIMA — Brand Story" },
      { id: "-U93Qadio74", title: "MBA — Advert" },
    ],
    tag: "03",
  },
  {
    slug: "music-videos",
    href: "/services/music-videos",
    title: "Music Videos",
    description:
      "The song sets the mood — visuals with a concept, a story and a style that give your record a life of its own.",
    longDescription:
      "The song sets the mood. We create visuals with a concept, a story, and a style that gives your record a life of its own.",
    highlights: [
      "Creative treatment and visual direction",
      "Location scouting and production design",
      "Cinema cameras, lighting and production equipment",
      "Editing, colour grading and visual effects",
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
      "Not every idea comes with a brief — some just need someone willing to run with them.",
    longDescription:
      "Not every idea comes with a brief. Some need someone who's willing to run with them. We work with you to develop the concept, shape the creative direction and produce something that feels uniquely yours.",
    highlights: [
      "Concept development and creative direction",
      "Flexible crews built around the project",
      "Experimental, visual narrative formats",
      "Hands-on collaboration from start to finish",
    ],
    videoCount: 3,
    videos: [{ id: "pVnUPWb7VIc", title: "LASOHEC" }],
    tag: "05",
  },
  {
    slug: "documentaries",
    href: "/services/documentaries",
    title: "Documentaries",
    description: "Real people. Real stories — told with depth, care and intention.",
    longDescription:
      "Real people. Real stories. We tell real stories with depth, care and intention, following the story from the first interview to the final frame — giving every moment the space it deserves.",
    highlights: [
      "Story development and research",
      "Interview and documentary-style filming",
      "Long-form editing and sound design",
      "Broadcast and festival-ready delivery",
    ],
    videoCount: 3,
    videos: [
      {
        id: "KY6yHFYaBJY",
        title:
          "SHODAY \"HYBRID\" Documentary: The Path to Greatness | Career, Headline Show & Album",
      },
      {
        id: "94Sd3yHyhaM",
        title: "Detty Dec Documentary",
      },
    ],
    tag: "06",
  },
];

// Thumbnail URL for a single video (YouTube maxres/hqdefault or Drive).
export function videoThumbnail(video: ServiceVideo): string {
  if (video.provider === "drive") {
    return `https://drive.google.com/thumbnail?id=${video.id}&sz=w1000`;
  }
  return `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
}

// Thumbnail for a service's first video. Null when it has no video yet.
export function serviceThumbnail(service: Service): string | null {
  const v = service.videos[0];
  return v ? videoThumbnail(v) : null;
}

// Flagship pieces surfaced in the "Featured work" section on the landing page.
// Each links through to the relevant service page.
export const featuredWork: {
  title: string;
  category: string;
  href: string;
  video: ServiceVideo;
}[] = [
  {
    title: 'SHODAY "HYBRID" Documentary',
    category: "Documentary",
    href: "/services/documentaries",
    video: { id: "KY6yHFYaBJY", title: "SHODAY — The Path to Greatness" },
  },
  {
    title: "Café Riddim — Bounce It O",
    category: "Music Video",
    href: "/services/music-videos",
    video: { id: "L7hUaGgu_uc", title: "Café Riddim — Bounce It O" },
  },
  {
    title: "CIMA — Brand Story",
    category: "Brand Storytelling",
    href: "/services/brand-corporate-storytelling",
    video: { id: "4U9FMD4rvjw", title: "CIMA — Brand Story" },
  },
];

export const portfolioProjects: {
  title: string;
  category: string;
  href: string;
  video: ServiceVideo;
}[] = [
  {
    title: "Detty Dec Documentary",
    category: "Documentary",
    href: "/services/documentaries",
    video: { id: "94Sd3yHyhaM", title: "Detty Dec Documentary" },
  },
  {
    title: 'SHODAY "HYBRID" Documentary',
    category: "Documentary",
    href: "/services/documentaries",
    video: {
      id: "KY6yHFYaBJY",
      title: "SHODAY — The Path to Greatness",
    },
  },
  {
    title: "Café Riddim — Bounce It O",
    category: "Music Video",
    href: "/services/music-videos",
    video: { id: "L7hUaGgu_uc", title: "Café Riddim — Bounce It O" },
  },
  {
    title: "CIMA — Brand Story",
    category: "Brand Storytelling",
    href: "/services/brand-corporate-storytelling",
    video: { id: "4U9FMD4rvjw", title: "CIMA — Brand Story" },
  },
  {
    title: "MBA — Advert",
    category: "Brand Storytelling",
    href: "/services/brand-corporate-storytelling",
    video: { id: "-U93Qadio74", title: "MBA — Advert" },
  },
  {
    title: "Nino b2b Axara — Live DJ Set",
    category: "Events & Live Production",
    href: "/services/events-live-production",
    video: { id: "_JaxWs5K7hE", title: "Nino b2b Axara Live" },
  },
  {
    title: "Opium — Event Recap",
    category: "Events & Live Production",
    href: "/services/events-live-production",
    video: { id: "4ghwer462QI", title: "Opium — Event Recap" },
  },
  {
    title: "LASOHEC — Event Recap",
    category: "Events & Live Production",
    href: "/services/events-live-production",
    video: { id: "pVnUPWb7VIc", title: "LASOHEC — Event Recap" },
  },
  {
    title: "Lilkesh — 10 Years on Stage",
    category: "Events & Live Production",
    href: "/services/events-live-production",
    video: { id: "hbiwpymFYgs", title: "Lilkesh — 10 Years on Stage" },
  },
  {
    title: "France–Nigeria Music Trade Mission",
    category: "Events & Live Production",
    href: "/services/events-live-production",
    video: {
      id: "Xg91_5ao5fQ",
      title: "France–Nigeria Music Trade Mission 2026",
    },
  },
  {
    title: "Eko Noir",
    category: "Special Project",
    href: "/services/special-passion-projects",
    video: { id: "9mTloB14QoQ", title: "Eko Noir" },
  },
  {
    title: "Ronami Ogulu on Spaceship Collective",
    category: "YouTube & Podcast",
    href: "/services/youtube-podcast-production",
    video: {
      id: "F0ZsiqqjjSY",
      title: "Ronami Ogulu — Spaceship Collective",
    },
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
    "Your rental covers the shoot day. All equipment must be returned the following day before 8am.",
  lateFee:
    "Late returns will attract a fee based on the value of the equipment rented.",
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
    title: "Tell us your idea",
    description:
      "What do you have in mind? Let's have a quick conversation about your idea and what you'd need.",
  },
  {
    step: "02",
    title: "Plan it out",
    description:
      "We'll figure out the details — from creative direction and timeline to budget and everything in between.",
  },
  {
    step: "03",
    title: "Production",
    description:
      "Our team gets to work, turning the plan into the visual content or production you envisioned.",
  },
  {
    step: "04",
    title: "Make it yours",
    description: "We make the final touches while you get the final files.",
  },
];
