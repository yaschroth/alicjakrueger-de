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
    productBrands: ["Malu Wilz", "Dr. R.A. Eckstein", "Dr. med. Christine Schrammek", "Goldeneye", "LCN"],
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "0761 40 14 606",
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
    weekdays: "08:00-20:00",
    saturday: "Nach Vereinbarung",
    sunday: "Geschlossen",
    note: "Termine nach Vereinbarung",
    display: "08:00-20:00 Uhr",
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
      "Willkommen bei Beauty and Mohr: Ihre erste Adresse für professionelle Kosmetik, Permanent Make-up und Nageldesign in Freiburg. Unser erfahrenes Team verwöhnt Sie mit erstklassigen Behandlungen.",
      "In unserem Kosmetikstudio können Sie ruhige Momente verbringen, sich vom stressigen Alltag erholen und sich eine verdiente Auszeit gönnen. Wir arbeiten mit hochwertigen Produkten von Malu Wilz, Dr. R.A. Eckstein und Dr. med. Christine Schrammek.",
      "Ob klassische Gesichtsbehandlung, Permanent Make-up, Microblading oder Nageldesign – bei uns sind Sie in besten Händen. Besuchen Sie uns und erleben Sie Schönheitspflege auf höchstem Niveau.",
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
      description: "Verwöhnende Gesichtsbehandlungen mit hochwertigen Malu Wilz und Dr. R.A. Eckstein Produkten. Reinigung, Peeling, Massage und individuelle Pflege für strahlende Haut.",
      price: "ab 66€",
      image: "/beauty/face.jpg",
      benefits: ["Tiefenreinigung", "Entspannung"],
    },
    {
      title: "Permanent Make-up",
      description: "Perfekte Lippen, Augenbrauen oder Lidstrich, jeden Tag. Permanent Make-up lässt Träume von strahlenden Augen und attraktiven Konturen wahr werden.",
      price: "ab 199€",
      image: "/beauty/eyebrow-after.png",
      benefits: ["Langanhaltend", "Wasserfest"],
    },
    {
      title: "Microblading & Phibrows",
      description: "Natürlich aussehende Augenbrauen mit der Härchentechnik. Perfekt für dichte, volle Brauen, die zu Ihrem Gesicht passen.",
      price: "ab 449€",
      image: "/beauty/face2.jpg",
      benefits: ["1-2 Jahre Halt", "Natürlich"],
    },
    {
      title: "Maniküre & Nageldesign",
      description: "Von klassischer Maniküre bis zur professionellen Shellac-Behandlung. Wir zaubern Ihnen wunderschöne, gepflegte Nägel.",
      price: "ab 32€",
      image: "/beauty/maniküre 3.png",
      benefits: ["Langanhaltend", "Kreativ"],
    },
    {
      title: "Wimpernlifting",
      description: "Traumhaft geschwungene Wimpern für einen verführerischen Blick. Natürliches Lifting für bis zu 8 Wochen.",
      price: "ab 79€",
      image: "/beauty/wimpern.png",
      benefits: ["Natürlich", "Langanhaltend"],
    },
    {
      title: "Waxing & Haarentfernung",
      description: "Sanfte und effektive Haarentfernung mit Waxing. Für lang anhaltend glatte Haut an allen Körperstellen.",
      price: "ab 10€",
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
        { name: "Basic Klassik", price: "66€" },
        { name: "Basic Klassik Plus", price: "69€" },
        { name: "Pflege & Verwöhnen I", price: "79€" },
        { name: "Pflege & Verwöhnen II", price: "82€" },
        { name: "Pflege & Verwöhnen III", price: "92€" },
        { name: "Anti-Aging Intensiv", price: "105€" },
        { name: "Microneedling Spezialbehandlung", price: "139€" },
        { name: "Hydrafacial", price: "155€" },
        { name: "Back Treatment Klassik", price: "85€" },
      ],
    },
    {
      category: "Green Peel Kräuterschälkur",
      items: [
        { name: "Fresh Up", price: "95€" },
        { name: "Energy", price: "139€" },
        { name: "Classic", price: "259€" },
        { name: "Full Body", price: "349€" },
      ],
    },
    {
      category: "Wimpern & Augenbrauen",
      items: [
        { name: "Wimpern färben", price: "12€" },
        { name: "Augenbrauen färben", price: "10€" },
        { name: "Wimpern & Brauen färben", price: "20€" },
        { name: "Augenbrauen zupfen", price: "12€" },
        { name: "Augenbrauen mit Fadentechnik", price: "18€" },
        { name: "Wimpernlifting", price: "79€" },
        { name: "Wimpernlifting inkl. färben", price: "82€" },
      ],
    },
    {
      category: "Permanent Make-up",
      items: [
        { name: "Augenbrauen", price: "350€" },
        { name: "Lidstrich Oben", price: "245€" },
        { name: "Lidstrich Unten", price: "199€" },
        { name: "Lidstrich Oben & Unten", price: "350€" },
        { name: "Lippen", price: "449€" },
        { name: "Lippenvollschattierung", price: "615€" },
        { name: "Nachbehandlung Lidstrich", price: "95€" },
        { name: "Nachbehandlung Augenbrauen/Lippen", price: "169€" },
      ],
    },
    {
      category: "Microblading",
      items: [
        { name: "Augenbrauen", price: "ab 449€" },
        { name: "Nachbehandlung", price: "129€" },
      ],
    },
    {
      category: "Maniküre & Nageldesign",
      items: [
        { name: "Maniküre Klassisch", price: "32€" },
        { name: "Maniküre Deluxe", price: "42€" },
        { name: "SPA Maniküre", price: "62€" },
        { name: "Shellac lackieren", price: "42€" },
        { name: "Shellac entfernen inkl. Maniküre", price: "52€" },
      ],
    },
    {
      category: "Pediküre",
      items: [
        { name: "Pediküre Klassisch", price: "40€" },
        { name: "Pediküre Deluxe", price: "50€" },
        { name: "SPA Pediküre", price: "64€" },
      ],
    },
    {
      category: "Haarentfernung / Waxing",
      items: [
        { name: "Oberlippe", price: "10€" },
        { name: "Unterlippe", price: "10€" },
        { name: "Kinn", price: "10€" },
        { name: "Achseln", price: "15€" },
        { name: "Bikinizone", price: "22€" },
        { name: "Oberschenkel", price: "39€" },
        { name: "Unterschenkel", price: "29€" },
        { name: "Ganze Beine", price: "49€" },
        { name: "Augenbrauen", price: "12€" },
      ],
    },
    {
      category: "Männersache",
      items: [
        { name: "Herrenkosmetik Basis", price: "69€" },
        { name: "Herrenkosmetik Intensiv", price: "79€" },
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
    description: "In unserem Kosmetikstudio in Freiburg können Sie ruhige Momente verbringen, sich vom stressigen Alltag erholen und sich eine verdiente Auszeit gönnen. Wir arbeiten mit hochwertigen Produkten von Malu Wilz, Dr. R.A. Eckstein und Dr. med. Christine Schrammek.",
    features: [
      {
        icon: "shield",
        title: "Höchste Hygiene",
        description: "Wir arbeiten steril und sauber. Ihre Gesundheit liegt uns am Herzen.",
      },
      {
        icon: "star",
        title: "15 Jahre Erfahrung",
        description: "Professionelle Behandlungen durch erfahrene Kosmetikerinnen.",
      },
      {
        icon: "award",
        title: "Premium Produkte",
        description: "Wir verwenden ausschließlich hochwertige Markenprodukte.",
      },
      {
        icon: "check",
        title: "Zentrale Lage",
        description: "Gut erreichbar in der Merzhauser Straße in Freiburg.",
      },
    ],
  },
};

export type Config = typeof config;
