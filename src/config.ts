// Beauty and Mohr Freiburg Configuration
// Kosmetik, Permanent Make-up & Nageldesign

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Beauty and Mohr",
    tagline: "KOSMETIK · PERMANENT MAKE-UP · NAGELDESIGN",
    motto: "Professionelle Kosmetik, Permanent Make-up, Microblading & Nageldesign in Freiburg",
    description: "Ihr Kosmetikstudio in Freiburg. Klassische Gesichtsbehandlungen, Permanent Make-up, Microblading, Phibrows, Nageldesign, Wimpernverlängerung und Waxing. Entspannen Sie sich vom stressigen Alltag.",
    foundingYear: 2010,
    yearsExperience: 15,
    yearsInCenter: 15,
    satisfiedClients: "1000+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "0761 - 40 14 606",
    phoneLink: "tel:+497614014606",
    email: "info@beauty-and-mohr.de",
    whatsapp: "+49 171 217 46 38",
    whatsappLink: "https://wa.me/4917121746738",
    address: {
      street: "Merzhauser Str. 1",
      city: "Freiburg im Breisgau",
      district: "Wiehre",
      zip: "79100",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.5!2d7.8485!3d47.9870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911c9e9e9e9e9e%3A0x0!2sMerzhauser%20Str.%201%2C%2079100%20Freiburg!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Merzhauser+Str.+1,+79100+Freiburg",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "https://www.instagram.com/beautyandmohr/",
    facebook: "https://www.facebook.com/beautyandmohr/",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Mo-Fr 09:00-18:00",
    saturday: "Sa nach Vereinbarung",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung",
    display: "Mo-Fr 09:00-18:00",
  },

  // ============================================
  // BOOKING
  // ============================================
  booking: {
    url: "https://wa.me/4917121746738?text=Hallo,%20ich%20möchte%20gerne%20einen%20Termin%20vereinbaren.",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 4.8,
    count: "50+",
    googleReviewLink: "https://www.google.com/maps/place/Beauty+and+Mohr",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Cornelia & Sarah",
    fullName: "Cornelia Mohr & Sarah Wilmsen",
    image: "/beauty/face.jpg",
    bio: [
      "Willkommen bei Beauty and Mohr - Ihre erste Adresse für professionelle Kosmetik, Permanent Make-up und Nageldesign in Freiburg. Unser erfahrenes Team verwöhnt Sie mit erstklassigen Behandlungen.",
      "In unserem Kosmetikstudio können Sie ruhige Momente verbringen, sich vom stressigen Alltag erholen und sich eine verdiente Auszeit gönnen. Wir arbeiten mit hochwertigen Produkten der Marke Malu Wilz.",
      "Ob klassische Gesichtsbehandlung, Permanent Make-up, Microblading oder Nageldesign - bei uns sind Sie in besten Händen. Besuchen Sie uns und erleben Sie Schönheitspflege auf höchstem Niveau.",
    ],
    certifications: [
      { label: "Permanent Make-up Expertin", icon: "award" },
      { label: "Microblading & Phibrows", icon: "star" },
      { label: "Malu Wilz Fachstudio", icon: "check" },
      { label: "15 Jahre Erfahrung", icon: "shield" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Google Rezension",
      rating: 5,
      text: "Man fühlt sich wie zu Hause. Die Arbeit ist sehr genau und steril. Alle sind immer willkommen. Super Service!",
      service: "Kosmetik",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Sehr gute Beratung und ein tolles Preis-Leistungsverhältnis. Das Team ist super freundlich und kompetent. Absolute Empfehlung!",
      service: "Permanent Make-up",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Das Permanent Make-up ist wunderschön geworden! Sehr natürlich und genau wie ich es mir vorgestellt habe. Vielen Dank!",
      service: "Microblading",
      date: "Google Bewertung",
    },
    {
      name: "Google Rezension",
      rating: 5,
      text: "Die Gesichtsbehandlung war himmlisch entspannend. Meine Haut sieht strahlend aus. Komme definitiv wieder!",
      service: "Gesichtsbehandlung",
      date: "Google Bewertung",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "Klassische Gesichtsbehandlung",
      description: "Verwöhnende Gesichtsbehandlungen mit hochwertigen Malu Wilz Produkten. Reinigung, Peeling, Massage und individuelle Pflege für strahlende Haut.",
      price: "ab 59€",
      image: "/beauty/face.jpg",
      benefits: ["Tiefenreinigung", "Entspannung"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Lippen, Augenbrauen oder Lidstrich, jeden Tag. Permanent Make-up lässt Träume von strahlenden Augen und attraktiven Konturen wahr werden.",
      price: "auf Anfrage",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Langanhaltend", "Wasserfest"],
    },
    {
      title: "Microblading & Phibrows",
      description: "Natürlich aussehende Augenbrauen mit der Härchentechnik. Perfekt für dichte, volle Brauen, die zu Ihrem Gesicht passen.",
      price: "auf Anfrage",
      image: "/beauty/face2.jpg",
      benefits: ["1-2 Jahre Halt", "Natürlich"],
    },
    {
      title: "Nageldesign",
      description: "Von klassischer Maniküre bis zur professionellen Nagelmodellage. Wir zaubern Ihnen wunderschöne, gepflegte Nägel.",
      price: "ab 35€",
      image: "/beauty/maniküre 3.png",
      benefits: ["Langanhaltend", "Kreativ"],
    },
    {
      title: "Wimpernverlängerung",
      description: "Traumhaft volle Wimpern für einen verführerischen Blick. Classic, Volume oder Mega Volume - ganz nach Ihren Wünschen.",
      price: "auf Anfrage",
      image: "/beauty/wimpern.png",
      benefits: ["Natürlich", "Langanhaltend"],
    },
    {
      title: "Waxing & Haarentfernung",
      description: "Sanfte und effektive Haarentfernung mit Waxing. Hollywood- oder Brazilian-Waxing für lang anhaltend glatte Haut.",
      price: "ab 25€",
      image: "/beauty/behandlung 3.png",
      benefits: ["Gründlich", "Langanhaltend"],
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
      category: "Klassische Gesichtsbehandlungen",
      items: [
        { name: "Basis Gesichtsbehandlung", price: "ab 59€" },
        { name: "Luxus Gesichtsbehandlung", price: "ab 89€" },
        { name: "Anti-Aging Behandlung", price: "ab 99€" },
        { name: "Microdermabrasion", price: "ab 79€" },
        { name: "Microneedling", price: "ab 99€" },
        { name: "Microdermabrasion & Microneedling Kombi", price: "ab 149€" },
      ],
    },
    {
      category: "Permanent Make-up & Microblading",
      items: [
        { name: "Microblading Augenbrauen", price: "auf Anfrage" },
        { name: "Phibrows", price: "auf Anfrage" },
        { name: "Powder Brows / Ombré", price: "auf Anfrage" },
        { name: "Permanent Lidstrich", price: "auf Anfrage" },
        { name: "Permanent Lippen", price: "auf Anfrage" },
        { name: "Nacharbeit", price: "auf Anfrage" },
      ],
    },
    {
      category: "Nageldesign & Maniküre",
      items: [
        { name: "Maniküre klassisch", price: "ab 25€" },
        { name: "Maniküre mit Shellac", price: "ab 35€" },
        { name: "Nagelmodellage Neuanlage", price: "ab 55€" },
        { name: "Nagelmodellage Auffüllung", price: "ab 45€" },
        { name: "Naturnagelverstärkung", price: "ab 40€" },
        { name: "Nageldesign / Nail Art", price: "ab 5€" },
      ],
    },
    {
      category: "Wimpern & Waxing",
      items: [
        { name: "Wimpernverlängerung Classic", price: "auf Anfrage" },
        { name: "Wimpernverlängerung Volume", price: "auf Anfrage" },
        { name: "Wimpern Auffüllung", price: "auf Anfrage" },
        { name: "Hollywood Waxing", price: "ab 35€" },
        { name: "Brazilian Waxing", price: "ab 30€" },
        { name: "Beinwaxing komplett", price: "ab 45€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "Beauty and Mohr | Kosmetikstudio Freiburg",
    hygiene: "/beauty/behandlung 3.png",
    gallery: [
      { url: "/beauty/face.jpg", category: "Gesichtsbehandlung" },
      { url: "/beauty/eyebrow-after.png", category: "Microblading" },
      { url: "/beauty/maniküre 3.png", category: "Nageldesign" },
      { url: "/beauty/wimpern.png", category: "Wimpern" },
      { url: "/beauty/face2.jpg", category: "Permanent Make-up" },
      { url: "/beauty/behandlung 3.png", category: "Kosmetik" },
      { url: "/beauty/maniküre neu.png", category: "Maniküre" },
      { url: "/beauty/microneedling.jpg", category: "Microneedling" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Elegant Dusty Rose / Mauve
  // ============================================
  colors: {
    primary: "#B5838D", // Dusty Rose / Mauve
    primaryRgb: "181, 131, 141",
    dark: "#2D2D2D",
    light: "#FDF8F7",
    lightAlt: "#F9F2F0",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Entspannung & Wohlbefinden",
    description: "In unserem Kosmetikstudio in Freiburg können Sie ruhige Momente verbringen, sich vom stressigen Alltag erholen und sich eine verdiente Auszeit gönnen. Wir arbeiten mit hochwertigen Malu Wilz Produkten.",
    features: [
      {
        icon: "shield",
        title: "Höchste Hygiene",
        description: "Wir arbeiten steril und sauber - Ihre Gesundheit liegt uns am Herzen.",
      },
      {
        icon: "star",
        title: "15 Jahre Erfahrung",
        description: "Professionelle Behandlungen durch erfahrene Kosmetikerinnen.",
      },
      {
        icon: "award",
        title: "Malu Wilz Produkte",
        description: "Wir verwenden ausschließlich hochwertige Markenprodukte.",
      },
      {
        icon: "check",
        title: "Zentrale Lage",
        description: "Gut erreichbar in der Merzhauser Straße in Freiburg.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "Beauty and Mohr Freiburg Logo",
  },
};

export type Config = typeof config;
