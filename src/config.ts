// Alicja Krüger Kosmetik - Demo Website Configuration
// NOT affiliated with real business - placeholder data only

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Alicja Krüger Kosmetik",
    tagline: "KOSMETIKSTUDIO · FREIBURG",
    motto: "Seit 1997 Schönheit für ALLE!",
    description: "Demo website for portfolio purposes only. Not affiliated with any real business.",
    foundingYear: 1997,
    yearsExperience: 28,
    yearsInCenter: 28,
    satisfiedClients: "1000+",
    productBrands: ["Maria Galland"],
  },

  // ============================================
  // CONTACT INFORMATION (PLACEHOLDER)
  // ============================================
  contact: {
    phone: "0123 4567890",
    phoneLink: "tel:+491234567890",
    email: "demo@example.com",
    whatsapp: "+49 123 4567890",
    whatsappLink: "https://wa.me/491234567890",
    address: {
      street: "Musterstraße 7",
      city: "Musterstadt",
      district: "Altstadt",
      zip: "12345",
    },
    googleMapsEmbed: "",
    googleMapsLink: "",
  },

  // ============================================
  // SOCIAL MEDIA (PLACEHOLDER)
  // ============================================
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Di-Fr 09:00-18:00",
    saturday: "Sa nach Vereinbarung",
    sunday: "So & Mo geschlossen",
    note: "Termine nach Vereinbarung",
    display: "Di-Fr 09:00-18:00",
  },

  // ============================================
  // BOOKING (PLACEHOLDER)
  // ============================================
  booking: {
    url: "#",
  },

  // ============================================
  // GOOGLE REVIEWS (PLACEHOLDER)
  // ============================================
  reviews: {
    rating: 5.0,
    count: "50+",
    googleReviewLink: "#",
  },

  // ============================================
  // OWNER / ABOUT SECTION (PLACEHOLDER)
  // ============================================
  owner: {
    name: "Maria Muster",
    fullName: "Maria Muster",
    image: "/beauty/face.jpg",
    bio: [
      "Willkommen in unserem Kosmetikstudio! Seit 1997 verwöhnen wir unsere Kundinnen mit erstklassigen Beauty-Treatments.",
      "Als leidenschaftliche und kreative Frau glaube ich, dass die einzigartige Energie, die jeder Mensch in sich trägt, die Verkörperung von Schönheit ist.",
      "Kosmetik bedeutet für uns Entspannung und Genuss für Körper und Seele. Wir bieten außergewöhnliche und effektive Beautyprogramme in einer entspannten Atmosphäre.",
    ],
    certifications: [
      { label: "Permanent Make-up seit 1997", icon: "award" },
      { label: "Maria Galland Partner", icon: "star" },
      { label: "28 Jahre Erfahrung", icon: "shield" },
      { label: "Familienbetrieb", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS (PLACEHOLDER)
  // ============================================
  testimonials: [
    {
      name: "Kundin",
      rating: 5,
      text: "Einfühlsame Beratung und professionelle Arbeit. Die jahrzehntelange Erfahrung merkt man sofort!",
      service: "Permanent Make-up",
      date: "Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Die Ergebnisse sind wunderschön und natürlich. Das Studio ist gemütlich und sehr sauber.",
      service: "Gesichtsbehandlung",
      date: "Bewertung",
    },
    {
      name: "Kundin",
      rating: 5,
      text: "Sehr professionelle Behandlung mit hochwertigen Maria Galland Produkten. Ich komme immer wieder!",
      service: "Anti-Aging Behandlung",
      date: "Bewertung",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Permanent Make-up",
      description: "Seit 1997 perfekte Augenbrauen, Lidstrich und Lippen. Professionelle Mikropigmentation für natürliche, langanhaltende Ergebnisse.",
      price: "ab 220€",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Seit 1997", "Natürlich"],
    },
    {
      title: "Gesichtsbehandlungen",
      description: "Luxuriöse Gesichtsbehandlungen mit Maria Galland Produkten. Anti-Stress, Regeneration und Anti-Aging für strahlende Haut.",
      price: "auf Anfrage",
      image: "/beauty/face.jpg",
      benefits: ["Maria Galland", "Anti-Aging"],
    },
    {
      title: "Microblading",
      description: "Perfekte Augenbrauen mit der feinen Härchenzeichnung. Natürliche Ergebnisse durch präzise Handarbeit.",
      price: "ab 440€",
      image: "/beauty/face2.jpg",
      benefits: ["Natürlich", "Präzise"],
    },
    {
      title: "Maniküre",
      description: "Professionelle Handpflege mit klassischem Lack oder Shellac für perfekt gepflegte Hände.",
      price: "ab 50€",
      image: "/beauty/maniküre 3.png",
      benefits: ["Shellac", "Gepflegt"],
    },
    {
      title: "Pediküre",
      description: "Umfassende Fußpflege mit Fußbad, Hornhautentfernung, Massage und optionalem Lack oder Shellac.",
      price: "ab 50€",
      image: "/beauty/pedicure.webp",
      benefits: ["Entspannend", "Gepflegt"],
    },
    {
      title: "Depilation",
      description: "Sanfte Haarentfernung für Gesicht und Körper. Oberlippe, Kinn, Achseln, Beine und mehr.",
      price: "auf Anfrage",
      image: "/beauty/frau.jpg",
      benefits: ["Sanft", "Effektiv"],
    },
  ],

  // ============================================
  // SCHULUNGEN (Training Section) - Not applicable
  // ============================================
  schulungen: {
    headline: "",
    description: "",
    subtext: "",
    courses: [],
    cta: {
      text: "",
      link: "",
    },
  },

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "Permanent Make-up",
      items: [
        { name: "Augenbrauen Schattierung", price: "440€" },
        { name: "Augenbrauen Härchenzeichnung", price: "440€" },
        { name: "Oberlid", price: "240€" },
        { name: "Unterlid", price: "220€" },
        { name: "Ober- und Unterlid", price: "440€" },
        { name: "Lippenkontur", price: "560€" },
      ],
    },
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Klassische Gesichtsbehandlung", price: "auf Anfrage" },
        { name: "Reinigungsbehandlung (Akne)", price: "auf Anfrage" },
        { name: "Maria Galland Anti-Stress", price: "auf Anfrage" },
        { name: "Maria Galland Regeneration", price: "auf Anfrage" },
        { name: "Maria Galland Caviar Anti-Aging", price: "auf Anfrage" },
      ],
    },
    {
      category: "Maniküre",
      items: [
        { name: "Maniküre mit Shellac", price: "50€" },
        { name: "Shellac entfernen", price: "15€" },
      ],
    },
    {
      category: "Pediküre",
      items: [
        { name: "Fußpflege Pediküre", price: "50€" },
        { name: "Pediküre mit Nagellack", price: "55€" },
        { name: "Pediküre mit Shellac", price: "65€" },
      ],
    },
    {
      category: "Augenbrauen & Wimpern",
      items: [
        { name: "Augenbrauen zupfen", price: "auf Anfrage" },
        { name: "Augenbrauen färben", price: "auf Anfrage" },
        { name: "Wimpern färben", price: "auf Anfrage" },
      ],
    },
    {
      category: "Depilation",
      items: [
        { name: "Oberlippe", price: "auf Anfrage" },
        { name: "Kinn", price: "auf Anfrage" },
        { name: "Achseln", price: "auf Anfrage" },
        { name: "Beine", price: "auf Anfrage" },
        { name: "Leiste", price: "auf Anfrage" },
      ],
    },
    {
      category: "Make-up",
      items: [
        { name: "Tages Make-up", price: "auf Anfrage" },
        { name: "Abend Make-up", price: "auf Anfrage" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "Kosmetikstudio Demo",
    hygiene: "/beauty/behandlung 3.png",
    gallery: [
      { url: "/beauty/eyebrow-after.png", category: "Permanent Make-up" },
      { url: "/beauty/face.jpg", category: "Gesichtsbehandlung" },
      { url: "/beauty/maniküre 3.png", category: "Maniküre" },
      { url: "/beauty/pedicure.webp", category: "Pediküre" },
      { url: "/beauty/face2.jpg", category: "Microblading" },
      { url: "/beauty/frau.jpg", category: "Beauty" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Elegant Rose/Mauve
  // ============================================
  colors: {
    primary: "#9B4D6D",
    primaryRgb: "155, 77, 109",
    dark: "#1A1A1A",
    light: "#FAF7F8",
    lightAlt: "#F5EEF0",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Seit 1997 für Ihre Schönheit",
    description: "In unserem Kosmetikstudio erwartet Sie eine entspannte Atmosphäre mit hochwertigen Maria Galland Produkten und jahrzehntelanger Erfahrung.",
    features: [
      {
        icon: "shield",
        title: "Höchste Hygiene",
        description: "Wir arbeiten steril und sauber. Ihre Gesundheit liegt uns am Herzen.",
      },
      {
        icon: "star",
        title: "28 Jahre Erfahrung",
        description: "Permanent Make-up und Kosmetik seit 1997.",
      },
      {
        icon: "award",
        title: "Maria Galland",
        description: "Wir verwenden hochwertige französische Markenprodukte.",
      },
      {
        icon: "check",
        title: "Familienbetrieb",
        description: "Persönliche Betreuung durch erfahrene Kosmetikerinnen.",
      },
    ],
  },
};

export type Config = typeof config;
