import type { StaticCopy, SiteProfile, Project, JourneyItem, Certification, EducationItem, Skill } from "../types/portfolio";

export const portfolioContent: { en: StaticCopy; id: StaticCopy } = {
  en: {
    meta: {
      title: "M. Syah Zidan | AI Enthusiast & Web Explorer",
      description: "Personal portfolio of M. Syah Zidan, an AI enthusiast who explores web projects, creative ideas, and practical technology workflows."
    },
    nav: {
      about: "About",
      identity: "Identity",
      work: "Work",
      journey: "Journey",
      education: "Education",
      certifications: "Certificates",
      skills: "Skills",
      contact: "Contact"
    },
    hero: {
      title: "Hi, I'm Zidan. <br> Exploring AI, web, and digital ideas.",
      intro: "AI Enthusiast & Web Explorer / Indonesia",
      actionsLabel: "Choose your next step",
      primaryCta: "Selected Work",
      primaryMeta: "View featured projects",
      cvCta: "Download CV",
      cvMeta: "View resume PDF",
      secondaryCta: "Start Project",
      secondaryMeta: "Share your brief",
      availability: "Open to opportunities",
      collab: "Interested in AI-assisted projects, web, and technology",
      scrollPrompt: "Scroll to explore"
    },
    about: {
      sectionLabel: "01 / Positioning",
      title: "Exploring technology through AI-assisted projects.",
      lead: "I am an AI enthusiast who enjoys using AI tools to explore ideas, build small projects, and understand how digital products are made. I am especially interested in web development, creative interfaces, and practical technology workflows. I am fairly familiar with HTML and CSS, comfortable reading code, and still building my fundamentals in JavaScript, PHP, and other programming languages.",
      principles: [
        {
          number: "01",
          title: "AI-Assisted Exploration",
          text: "I use AI tools as creative and technical partners to shape ideas, learn faster, and turn concepts into working experiments."
        },
        {
          number: "02",
          title: "Web Curiosity",
          text: "I enjoy web projects, especially the process of arranging structure, styling interfaces, and improving how a page feels."
        },
        {
          number: "03",
          title: "Growing Fundamentals",
          text: "My strongest comfort is in HTML and CSS, while JavaScript, PHP, and other languages are areas I am still learning step by step."
        }
      ]
    },
    work: {
      sectionLabel: "02 / Works & Projects",
      title: "A collection of projects I've built and explored.",
      intro: "This section brings together selected work from interface concepts, IoT experiments, visual direction, and ideas I keep refining over time."
    },
    identity: {
      sectionLabel: "07 / Identity",
      kicker: "Main Logo Breakdown",
      title: "About My Main Logo",
      lead: "This logo is made up of a circle, a vertical line through the middle, and the letters A and D from AstralDevX. It's kept simple, but still easy to recognize.",
      focusKicker: "Design Notes",
      focusTitle: "Simple shape, clear form.",
      focusLead: "I kept it simple so it stays clean and easy to use anywhere.",
      focusMetricOne: "Still clear at small sizes",
      focusMetricTwo: "Works for both digital and print",
      fullLabel: "Full mark",
      symbolLabel: "Symbol only",
      anatomyKicker: "Symbol Anatomy",
      anatomyTitle: "One mark, four parts.",
      usageKicker: "Applied Identity",
      usageTitle: "Simple enough to use anywhere.",
      usageLead: "The logo still reads clearly on apparel, print, and screens since the shape is simple to begin with.",
      principles: [
        {
          title: "Outer Circle",
          text: "The ring around it is just there to frame the mark and hold it together.",
          image: "assets/identity/logo-bulat.webp"
        },
        {
          title: "Vertical Line",
          text: "The line through the middle keeps the top and bottom balanced.",
          image: "assets/identity/logo-atasbawah.webp"
        },
        {
          title: "Letter A",
          text: "Stands for Astral, placed at the center of the mark.",
          image: "assets/identity/logo-a.webp"
        },
        {
          title: "Letter D",
          text: "Stands for DevX, tied to the build and execution side of the name.",
          image: "assets/identity/logo-d.webp"
        }
      ]
    },
    journey: {
      sectionLabel: "03 / Journey",
      title: "Experiences that shaped how I work and grow."
    },
    education: {
      sectionLabel: "04 / Education",
      kicker: "Academic Track",
      title: "My academic background.",
      intro: "A snapshot of the institutions and study phases that shaped my technical foundation."
    },
    certifications: {
      sectionLabel: "06 / Achievements & Certificates",
      title: "Learning milestones, bootcamps, and recognitions.",
      intro: "A collection of training certificates, academic milestones, and various awards that reflect my journey of learning and growth."
    },
    skills: {
      sectionLabel: "05 / Capabilities",
      kicker: "AI, Web & Tools",
      title: "Tools and fundamentals I use to explore projects.",
      intro: "My workflow combines AI tools, web basics, and visual tools. I am strongest with HTML and CSS, comfortable reading code, and still growing with JavaScript, PHP, and other languages."
    },
    contact: {
      sectionLabel: "08 / Contact",
      title: "Let's connect.",
      intro: "If you want to talk about a project, an opportunity, or simply connect, feel free to reach out."
    },
    footer: {
      lead: "A personal portfolio about exploring AI, web projects, creative ideas, and practical technology workflows.",
      status: "Open for freelance work and selected collaborations",
      navigation: "Navigation",
      noteTitle: "In Short",
      note: "I like learning by building, testing ideas, and using AI to help turn curiosity into real projects.",
      backToTop: "Back to top"
    },
    ui: {
      themeToggle: "Toggle theme",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      closeProjectDetails: "Close project details",
      closeJourneyProof: "Close journey proof",
      openProjectDetail: "Open project detail",
      openProof: "Open proof",
      openReference: "Open Reference",
      role: "Role",
      impact: "Impact",
      stack: "Stack",
      about: "About",
      explanation: "Context",
      coreSkill: "Core skill",
      supportTool: "Supporting tool"
    },
    signal: [
      "LEARN",
      "AI",
      "WEB",
      "REPEAT",
      "AI TOOLS",
      "HTML CSS",
      "TECH EXPLORER",
      "CREATIVE INDUSTRY"
    ]
  },
  id: {
    meta: {
      title: "M. Syah Zidan | AI Enthusiast & Web Explorer",
      description: "Portofolio personal M. Syah Zidan, seorang AI enthusiast yang mengeksplorasi proyek web, ide kreatif, dan workflow teknologi praktis."
    },
    nav: {
      about: "Tentang",
      identity: "Identitas",
      work: "Proyek",
      journey: "Perjalanan",
      education: "Pendidikan",
      certifications: "Sertifikat",
      skills: "Keahlian",
      contact: "Kontak"
    },
    hero: {
      title: "Halo, saya Zidan. <br> Mengeksplorasi AI, web, dan ide digital.",
      intro: "AI Enthusiast & Web Explorer / Indonesia",
      actionsLabel: "Pilih langkah berikutnya",
      primaryCta: "Lihat Proyek",
      primaryMeta: "Lihat karya pilihan",
      cvCta: "Unduh CV",
      cvMeta: "Lihat CV dalam PDF",
      secondaryCta: "Mulai Proyek",
      secondaryMeta: "Kirim brief Anda",
      availability: "Terbuka untuk peluang",
      collab: "Tertarik pada proyek berbantu AI, web, dan teknologi",
      scrollPrompt: "Scroll untuk menjelajah"
    },
    about: {
      sectionLabel: "01 / Pendekatan",
      title: "Mengeksplorasi teknologi lewat proyek berbantu AI.",
      lead: "Saya adalah AI enthusiast yang suka memakai tools AI untuk mengeksplorasi ide, membuat project kecil, dan memahami bagaimana produk digital dibangun. Saya tertarik pada pengembangan web, interface kreatif, dan workflow teknologi yang praktis. Untuk HTML dan CSS saya sudah cukup familiar, nyaman membaca kode, dan untuk JavaScript, PHP, serta bahasa pemrograman lain saya masih terus membangun dasar-dasarnya.",
      principles: [
        {
          number: "01",
          title: "Eksplorasi Berbantu AI",
          text: "Saya memakai tools AI sebagai partner kreatif dan teknis untuk membentuk ide, belajar lebih cepat, dan mengubah konsep menjadi eksperimen yang bisa dicoba."
        },
        {
          number: "02",
          title: "Rasa Ingin Tahu di Web",
          text: "Saya menikmati project web, terutama proses menyusun struktur, merapikan tampilan, dan membuat halaman terasa lebih enak digunakan."
        },
        {
          number: "03",
          title: "Fundamental yang Bertumbuh",
          text: "Area yang paling saya pahami adalah HTML dan CSS, sementara JavaScript, PHP, dan bahasa lain masih saya pelajari bertahap."
        }
      ]
    },
    work: {
      sectionLabel: "02 / Karya & Proyek",
      title: "Berbagai karya yang pernah saya kerjakan dan eksplorasi.",
      intro: "Bagian ini merangkum karya pilihan saya, mulai dari konsep interface, eksperimen IoT, arahan visual, sampai ide-ide yang terus saya matangkan."
    },
    identity: {
      sectionLabel: "07 / Identitas",
      kicker: "Bedah Logo Utama",
      title: "Tentang Logo Utama Saya",
      lead: "Logo ini terdiri dari lingkaran, garis vertikal di tengah, dan huruf A serta D dari AstralDevX. Bentuknya sengaja dibuat sederhana, tapi tetap gampang dikenali.",
      focusKicker: "Catatan Desain",
      focusTitle: "Bentuknya simpel, tapi jelas.",
      focusLead: "Saya buat sesederhana mungkin supaya logonya gampang dipakai di mana saja.",
      focusMetricOne: "Masih jelas di ukuran kecil",
      focusMetricTwo: "Bisa dipakai untuk digital maupun cetak",
      fullLabel: "Logo penuh",
      symbolLabel: "Simbol saja",
      anatomyKicker: "Anatomi Simbol",
      anatomyTitle: "Satu logo, empat bagian.",
      usageKicker: "Identitas Terapan",
      usageTitle: "Sederhana, jadi bisa dipakai di mana saja.",
      usageLead: "Logonya tetap terbaca di baju, media cetak, maupun layar karena bentuknya memang sudah simpel dari awal.",
      principles: [
        {
          title: "Lingkaran Luar",
          text: "Lingkaran di luar cuma berfungsi membingkai dan menyatukan bentuknya.",
          image: "assets/identity/logo-bulat.webp"
        },
        {
          title: "Garis Vertikal",
          text: "Garis di tengah menjaga bagian atas dan bawah tetap seimbang.",
          image: "assets/identity/logo-atasbawah.webp"
        },
        {
          title: "Huruf A",
          text: "Merujuk ke Astral, ditaruh di bagian tengah logo.",
          image: "assets/identity/logo-a.webp"
        },
        {
          title: "Huruf D",
          text: "Merujuk ke DevX, sisi eksekusi dan pengembangan dari nama ini.",
          image: "assets/identity/logo-d.webp"
        }
      ]
    },
    journey: {
      sectionLabel: "03 / Perjalanan",
      title: "Pengalaman yang membentuk cara saya bekerja dan berkembang."
    },
    education: {
      sectionLabel: "04 / Pendidikan",
      kicker: "Jejak Akademik",
      title: "Latar belakang akademik saya.",
      intro: "Ringkasan institusi dan fase belajar yang membentuk fondasi teknis saya."
    },
    certifications: {
      sectionLabel: "06 / Pencapaian & Sertifikat",
      title: "Jejak belajar, bootcamp, dan prestasi yang saya raih.",
      intro: "Kumpulan sertifikat pelatihan, pencapaian akademik, serta berbagai apresiasi yang menjadi bukti dedikasi saya dalam belajar dan berkembang."
    },
    skills: {
      sectionLabel: "05 / Keahlian",
      kicker: "AI, Web & Tools",
      title: "Tools dan fundamental yang saya pakai untuk eksplorasi project.",
      intro: "Workflow saya menggabungkan tools AI, dasar web, dan tools visual. Saya paling nyaman dengan HTML dan CSS, cukup nyaman membaca kode, dan masih berkembang di JavaScript, PHP, serta bahasa lain."
    },
    contact: {
      sectionLabel: "08 / Kontak",
      title: "Mari terhubung.",
      intro: "Jika Anda ingin membahas proyek, peluang, atau sekadar terhubung, silakan hubungi saya."
    },
    footer: {
      lead: "Portofolio personal tentang eksplorasi AI, project web, ide kreatif, dan workflow teknologi praktis.",
      status: "Terbuka untuk freelance dan kolaborasi yang cocok",
      navigation: "Navigasi",
      noteTitle: "Singkatnya",
      note: "Saya suka belajar lewat praktik, mencoba ide, dan memakai AI untuk membantu rasa penasaran jadi project nyata.",
      backToTop: "Kembali ke atas"
    },
    ui: {
      themeToggle: "Ganti tema",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      closeProjectDetails: "Tutup detail proyek",
      closeJourneyProof: "Tutup bukti perjalanan",
      openProjectDetail: "Buka detail proyek",
      openProof: "Lihat bukti",
      openReference: "Buka Referensi",
      role: "Peran",
      impact: "Dampak",
      stack: "Teknologi",
      about: "Tentang",
      explanation: "Konteks",
      coreSkill: "Keahlian utama",
      supportTool: "Tools pendukung"
    },
    signal: [
      "BELAJAR",
      "AI",
      "WEB",
      "ULANGI",
      "AI TOOLS",
      "HTML CSS",
      "EKSPLORASI TEKNOLOGI",
      "INDUSTRI KREATIF"
    ]
  }
};

export const siteProfile: SiteProfile = {
  cvLink: "#",
  strengths: [
    { en: "AI-assisted workflow", id: "Workflow berbantu AI" },
    { en: "HTML & CSS familiarity", id: "Familiar dengan HTML & CSS" },
    { en: "Code reading comfort", id: "Nyaman membaca kode" },
    { en: "Technology curiosity", id: "Rasa ingin tahu teknologi" },
    { en: "Practical project exploration", id: "Eksplorasi project praktis" }
  ],
  contact: [
    {
      label: { en: "GitHub", id: "GitHub" },
      value: "@SyahZidan",
      href: "https://github.com/SyahZidan"
    },
    {
      label: { en: "LinkedIn", id: "LinkedIn" },
      value: "M. Syah Zidan",
      href: "https://www.linkedin.com/in/muhammad-syah-zidan-fadhlurrahman-9b5a33384/"
    },
    {
      label: { en: "Instagram", id: "Instagram" },
      value: "@msyhzidan24",
      href: "https://www.instagram.com/msyhzidan24/"
    },
    {
      label: { en: "Email", id: "Email" },
      value: "careerzidan@gmail.com",
      href: "mailto:careerzidan@gmail.com"
    }
  ]
};

export const featuredProjects: Project[] = [
  {
    title: {
      en: "ITB Ahmad Dahlan Campus Profile",
      id: "Profil Kampus ITB Ahmad Dahlan"
    },
    category: {
      en: "Frontend Project",
      id: "Proyek Frontend"
    },
    summary: {
      en: "An early portfolio milestone where I explored modern layout, responsive structure, and clearer visual storytelling for an academic profile platform.",
      id: "Salah satu proyek awal yang membentuk arah saya sebagai frontend developer. Di proyek ini saya mulai mengeksplorasi layout modern, struktur responsif, dan storytelling visual untuk profil kampus."
    },
    description: {
      en: "A campus profile platform designed to feel modern, clear, and responsive across different screen sizes.",
      id: "Profil kampus dengan tampilan modern, jelas, dan nyaman diakses di berbagai ukuran layar."
    },
    role: {
      en: "UI direction, frontend implementation, responsive styling",
      id: "Arah UI, implementasi frontend, dan styling responsif"
    },
    impact: {
      en: "Built to strengthen the campus image and support outreach to prospective students from high school and vocational school backgrounds.",
      id: "Dirancang untuk memperkuat citra kampus dan mendukung ketertarikan calon mahasiswa dari SMA maupun SMK."
    },
    stack: ["HTML", "CSS"],
    meta: {
      en: "2022 / Frontend",
      id: "2022 / Frontend"
    },
    image: "assets/projects/profil_kampus.webp",
    link: "https://profilkampusitbad.netlify.app/",
    group: "redesign"
  },
  {
    title: {
      en: "Astral Marketplace",
      id: "Astral Marketplace"
    },
    category: {
      en: "Commerce Concept",
      id: "Konsep Commerce"
    },
    summary: {
      en: "A marketplace concept with a bolder visual style, made so browsing products feels a bit more distinctive.",
      id: "Konsep marketplace dengan gaya visual yang lebih berani, biar pengalaman lihat-lihat produk terasa beda dari yang biasa."
    },
    description: {
      en: "An e-commerce interface that keeps products easy to browse while still having its own visual style.",
      id: "Antarmuka e-commerce yang tetap mudah dipakai untuk melihat produk, tapi punya gaya visual sendiri."
    },
    role: {
      en: "Creative coding, visual system, responsive build",
      id: "Creative coding, sistem visual, dan build responsif"
    },
    impact: {
      en: "A test of how far a shopping interface can look different without getting harder to use.",
      id: "Percobaan seberapa jauh tampilan toko online bisa dibuat beda tanpa bikin ribet dipakai."
    },
    stack: ["HTML", "CSS", "JavaScript"],
    meta: {
      en: "2023 / Interactive",
      id: "2023 / Interaktif"
    },
    image: "assets/projects/astral_mart.webp",
    link: "https://astralmarket.netlify.app/",
    group: "original"
  },
  {
    title: {
      en: "Astral Topup Store",
      id: "Astral Topup Store"
    },
    category: {
      en: "Frontend Project",
      id: "Proyek Frontend"
    },
    summary: {
      en: "A top-up store concept inspired by the digital top-up services commonly used in Indonesia, built as a frontend demo.",
      id: "Konsep layanan topup yang terinspirasi dari tampilan toko digital yang umum dipakai di Indonesia, dan dibangun sebagai demo frontend."
    },
    description: {
      en: "A demo focused on promotional layout, product cards, and the visual style often found in local top-up platforms.",
      id: "Demo yang berfokus pada layout promosi, kartu produk, dan gaya visual yang sering ditemukan pada platform topup lokal."
    },
    role: {
      en: "UI build, page layout, and front-end styling",
      id: "Build UI, layout halaman, dan styling frontend"
    },
    impact: {
      en: "Shows my interest in building familiar digital commerce interfaces, even though the project is still a demo without database support.",
      id: "Menunjukkan minat saya dalam membangun interface digital commerce yang familiar, meskipun project ini masih berupa demo tanpa dukungan database."
    },
    stack: ["HTML", "CSS", "JavaScript"],
    meta: {
      en: "2026 / Demo",
      id: "2026 / Demo"
    },
    image: "assets/projects/astral_topup.webp",
    link: "https://astraltopup.netlify.app/",
    group: "original"
  },
  {
    title: {
      en: "IoT Smart Home Project",
      id: "Project IoT Smart Home"
    },
    category: {
      en: "IoT Project",
      id: "Project IoT"
    },
    summary: {
      en: "A smart home prototype built with three sensors to support automation and more efficient energy use.",
      id: "Prototype smart home yang dibuat dengan tiga sensor untuk mendukung otomasi dan penggunaan energi yang lebih efisien."
    },
    description: {
      en: "An IoT prototype that explores how sensors can respond to conditions in real time and support a smarter home setup.",
      id: "Prototype IoT yang mengeksplorasi bagaimana sensor bisa merespons kondisi secara real-time dan mendukung sistem rumah yang lebih cerdas."
    },
    role: {
      en: "Concept development, assembly, testing, and project presentation",
      id: "Pengembangan konsep, perakitan, pengujian, dan presentasi proyek"
    },
    impact: {
      en: "Shows my interest in building practical systems that combine logic, hardware, and real-world use.",
      id: "Menunjukkan ketertarikan saya pada sistem yang menggabungkan logika, perangkat keras, dan kebutuhan nyata."
    },
    stack: ["IoT", "Arduino", "Smart Home"],
    meta: {
      en: "2026 / Prototype",
      id: "2026 / Prototype"
    },
    image: "assets/projects/project-iot-smart-home-thumb.webp",
    embed: "https://www.youtube.com/embed/OOZ8j3aVbl8",
    link: "https://www.youtube.com/watch?v=OOZ8j3aVbl8",
    group: "iot"
  },
  {
    title: {
      en: "AstralHub",
      id: "AstralHub"
    },
    category: {
      en: "Digital Platform",
      id: "Platform Digital"
    },
    summary: {
      en: "A campus activity platform concept designed to help students discover events, explore details, and join more easily.",
      id: "Konsep platform kegiatan kampus yang dirancang untuk membantu mahasiswa menemukan kegiatan, melihat detail, dan ikut bergabung dengan lebih mudah."
    },
    description: {
      en: "A campus activity platform focused on discovery, event information, and a smoother flow for students to explore and join activities.",
      id: "Platform kegiatan kampus yang berfokus pada pencarian kegiatan, informasi acara, dan alur yang lebih mudah bagi mahasiswa untuk menjelajah dan bergabung."
    },
    role: {
      en: "UI direction, frontend build, and information structure",
      id: "Arah UI, build frontend, dan struktur informasi"
    },
    impact: {
      en: "Reflects my interest in building interfaces that feel clear, useful, and easy to navigate.",
      id: "Mencerminkan minat saya pada interface yang jelas, berguna, dan mudah dijelajahi."
    },
    stack: ["PHP", "CSS", "JavaScript", "MySQL"],
    meta: {
      en: "2026 / Platform",
      id: "2026 / Platform"
    },
    image: "assets/projects/astral_hub.webp",
    link: "https://astralhub.42web.io",
    group: "original"
  },
  {
    title: {
      en: "Menjadi Sesuatu - 1st Place National Winner",
      id: "Menjadi Sesuatu - Juara 1 Nasional"
    },
    category: {
      en: "Video Project",
      id: "Project Video"
    },
    summary: {
      en: "An anti-corruption education campaign video that highlights how dishonest behavior can also appear in everyday school life.",
      id: "Video kampanye pendidikan antikorupsi yang menyoroti bagaimana perilaku tidak jujur juga bisa muncul dalam kehidupan sehari-hari di lingkungan sekolah."
    },
    description: {
      en: "This project follows a school-based learning context to show that corruption is not only a government issue, but something that can also appear in smaller and often overlooked situations.",
      id: "Project ini memakai konteks pembelajaran di sekolah untuk menunjukkan bahwa korupsi bukan hanya soal pemerintahan, tetapi juga bisa muncul dalam situasi kecil yang sering tidak disadari."
    },
    role: {
      en: "Sound direction, acting, and scene idea support",
      id: "Penata suara, pemain, dan pendukung ide adegan"
    },
    impact: {
      en: "Won 1st place nationally in this anti-corruption campaign video competition, one of my favorite projects from school.",
      id: "Menang Juara 1 tingkat nasional di lomba video kampanye antikorupsi ini, salah satu project sekolah yang paling saya suka."
    },
    stack: ["Video", "Sound", "Storytelling"],
    meta: {
      en: "2021 / Video",
      id: "2021 / Video"
    },
    image: "https://img.youtube.com/vi/MkDjJuXVT8c/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/MkDjJuXVT8c",
    link: "https://youtu.be/MkDjJuXVT8c?si=5_tpwo3PIQ4jBtRT",
    group: "video"
  },
  {
    title: {
      en: "Empty Paper - 3rd Place FLS2N Banten",
      id: "Empty Paper - Juara 3 FLS2N Banten"
    },
    category: {
      en: "Short Film",
      id: "Film Pendek"
    },
    summary: {
      en: "A short film about a student who loses focus because of his phone, then slowly realizes he needs to return to his goals.",
      id: "Film pendek tentang seorang siswa yang kehilangan fokus karena gawai, lalu perlahan sadar bahwa ia perlu kembali pada tujuan dan tanggung jawabnya."
    },
    description: {
      en: "The story follows a student who chooses distractions over schoolwork until he realizes the cost of that habit and starts finding his direction again.",
      id: "Ceritanya mengikuti seorang siswa yang lebih memilih distraksi daripada tugas sekolah, sampai akhirnya ia sadar akan dampaknya dan mulai menemukan arah kembali."
    },
    role: {
      en: "Short film production and creative collaboration",
      id: "Produksi film pendek dan kolaborasi kreatif"
    },
    impact: {
      en: "Won 3rd place at the 2021 FLS2N short film competition at the Banten provincial level.",
      id: "Meraih Juara 3 dalam lomba film pendek FLS2N 2021 tingkat Provinsi Banten."
    },
    stack: ["Film", "Storytelling", "Production"],
    meta: {
      en: "2021 / Short Film",
      id: "2021 / Film Pendek"
    },
    image: "https://img.youtube.com/vi/EDDCtwqT-eI/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/EDDCtwqT-eI",
    link: "https://youtu.be/EDDCtwqT-eI",
    group: "video"
  },
  {
    title: {
      en: "Redesign NPC Global Website",
      id: "Redesign Website NPC Global"
    },
    category: {
      en: "Web Redesign",
      id: "Redesign Web"
    },
    summary: {
      en: "A redesign of the NPC Global website, focused on better structure, look, and user flow.",
      id: "Proyek redesign website NPC Global, fokus ke struktur informasi, tampilan, dan alur pengguna yang lebih enak dipakai."
    },
    description: {
      en: "This redesign gives NPC Global a cleaner look, easier navigation, and a style that fits their industry better.",
      id: "Redesign ini bikin tampilan NPC Global lebih bersih, navigasinya lebih gampang, dan gayanya lebih pas sama industri mereka."
    },
    role: {
      en: "UI/UX design, layout system, and responsive frontend implementation",
      id: "Desain UI/UX, sistem layout, dan implementasi frontend responsif"
    },
    impact: {
      en: "Made NPC's business services look more credible and easier to browse on any screen size.",
      id: "Bikin layanan bisnis NPC terlihat lebih meyakinkan dan lebih enak dilihat di berbagai ukuran layar."
    },
    stack: ["UI Design", "Frontend", "CSS"],
    meta: {
      en: "2026 / Redesign",
      id: "2026 / Redesign"
    },
    image: "assets/projects/project-npc.webp",
    link: "https://npc-company.netlify.app",
    group: "redesign"
  },
  {
    title: {
      en: "Redesign PODSI Website",
      id: "Redesign Website PODSI"
    },
    category: {
      en: "Web Redesign",
      id: "Redesign Web"
    },
    summary: {
      en: "A redesigned interface for the national rowing association, presenting news, events, and athlete profiles in a cleaner format.",
      id: "Rancang ulang antarmuka untuk Persatuan Olahraga Dayung Seluruh Indonesia, menyajikan berita, acara, dan profil atlet dalam format yang lebih bersih."
    },
    description: {
      en: "Focused on giving PODSI a fresher look, with clearer event schedules and a layout that fits its sports theme.",
      id: "Fokus bikin tampilan PODSI lebih segar, jadwal acara yang lebih jelas, dan layout yang sesuai tema olahraga."
    },
    role: {
      en: "UI design direction and modern layout prototype",
      id: "Arah desain UI dan prototipe layout modern"
    },
    impact: {
      en: "Makes it easier for fans and athletes to find rowing event info and updates.",
      id: "Bikin penggemar dan atlet lebih gampang cari info acara dayung dan update terbaru."
    },
    stack: ["UI Design", "Frontend", "CSS Grid"],
    meta: {
      en: "2026 / Redesign",
      id: "2026 / Redesign"
    },
    image: "assets/projects/project-podsi.webp",
    link: "https://podsi-id.netlify.app/",
    group: "redesign"
  },
  {
    title: {
      en: "Geolocation & Selfie Attendance System (Absensi Hub)",
      id: "Sistem Absensi Geolocation & Selfie (Absensi Hub)"
    },
    category: {
      en: "R&D Fullstack Web App / SME Attendance & Payroll",
      id: "Web App Fullstack R&D / Absensi & Payroll UMKM"
    },
    summary: {
      en: "A web-based employee attendance & automated payroll system developed for SME Gudang Cipta Karya, combining Haversine geofencing, real-time selfie verification, and multi-shift wage calculation.",
      id: "Sistem informasi absensi dan penggajian otomatis berbasis web pada UMKM Gudang Cipta Karya, mengintegrasikan geofencing Haversine, verifikasi foto selfie real-time, dan kalkulasi upah multi-shift."
    },
    description: {
      en: "Developed using the Research & Development (R&D) framework and zero-dependency PHP 8.x Native + MySQL architecture. Designed with a mobile-first UI shell tailored for informal daily workers without downloading native apps. Key modules include configurable-radius Geofencing using Haversine spherical distance calculation, real-time selfie camera capture via HTML5 MediaDevices & Canvas API, automated dual-shift wage calculation (morning/afternoon shift, late penalties, hourly overtime, flat night rate), digital leave & permit approval, executive admin dashboard, Excel report generation, and printable payslips. Rigorously evaluated with 100% Black Box functional test success and a System Usability Scale (SUS) score of 92.19/100 (Excellent category) across 16 active users.",
      id: "Dikembangkan menggunakan metode Research & Development (R&D) 9 tahap dan arsitektur PHP 8.x Native + MySQL tanpa kerangka kerja berat. Antarmuka dirancang mobile-first menyerupai aplikasi seluler untuk kemudahan operasional karyawan harian tanpa perlu unduh aplikasi. Fitur utama mencakup Geofencing radius terkonfigurasi (algoritma Haversine), verifikasi foto selfie real-time via HTML5 MediaDevices & Canvas API, kalkulasi upah otomatis 2 shift (shift pagi/siang, denda keterlambatan, lembur per jam, tarif flat malam), manajemen persetujuan izin/cuti digital, dashboard monitoring admin, ekspor laporan Excel (.xls), dan cetak slip gaji (Window Print API). Teruji 100% pada 13 skenario Black Box Testing serta meraih skor System Usability Scale (SUS) 92,19/100 (kategori Excellent) terhadap 16 responden."
    },
    role: {
      en: "Lead R&D Developer: Fullstack PHP Native & MySQL, Haversine Geofencing Engine, MediaDevices Camera Verification, Automated Payroll Logic, & SUS Evaluation",
      id: "Pengembang Utama (R&D): Fullstack PHP Native & MySQL, Engine Geofencing Haversine, Verifikasi Kamera MediaDevices, Logika Penggajian Otomatis, & Evaluasi SUS"
    },
    impact: {
      en: "Eliminated attendance fraud & manual record manipulation for 16 users, automated complex multi-shift payroll processing, and achieved an Excellent usability score of 92.19/100 SUS.",
      id: "Menghilangkan kecurangan presensi & manipulasi data manual untuk 16 pengguna, mengotomatisasi kalkulasi upah multi-shift yang rumit, serta meraih skor SUS 92,19/100 (Kategori Excellent)."
    },
    stack: ["PHP 8.x Native", "MySQL", "Haversine Algorithm", "Geolocation API", "MediaDevices & Canvas API", "Tailwind CSS", "Alpine.js", "Chart.js"],
    meta: {
      en: "2026 / R&D Fullstack",
      id: "2026 / R&D Fullstack"
    },
    image: "assets/projects/project-absensi-kantor/project-absensi-kantor.webp",
    link: "",
    group: "original",
    gallery: [
      {
        image: "assets/projects/project-absensi-kantor/project-absensi-kantor.webp",
        caption: {
          en: "System Overview & Feature Highlights (Selfie Verification, Geofencing & Automated Payroll)",
          id: "Ringkasan Fitur Utama Sistem (Verifikasi Wajah, Geolocation, & Upah Otomatis)"
        }
      },
      {
        image: "assets/projects/project-absensi-kantor/1.webp",
        caption: {
          en: "Mobile-First Attendance Interface with Real-Time Camera Selfie Verification",
          id: "Tampilan Presensi Mobile-First & Verifikasi Kamera Selfie Real-Time"
        }
      },
      {
        image: "assets/projects/project-absensi-kantor/2.webp",
        caption: {
          en: "Haversine Geofencing Validation (Safe 2m Radius Approval vs 3.7km Out-of-Bound Rejection)",
          id: "Validasi Geolokasi Haversine (Radius Aman 2m vs Penolakan Lokasi 3,7 km)"
        }
      },
      {
        image: "assets/projects/project-absensi-kantor/3.webp",
        caption: {
          en: "Admin Executive Dashboard with Attendance Charts & Operations Summary",
          id: "Dashboard Eksekutif Admin dengan Analitik Grafik & Ringkasan Operasional"
        }
      },
      {
        image: "assets/projects/project-absensi-kantor/4.webp",
        caption: {
          en: "Real-Time Employee Attendance Monitoring & Detailed Verification Log",
          id: "Monitoring Kehadiran Real-Time & Log Verifikasi Detail Karyawan"
        }
      },
      {
        image: "assets/projects/project-absensi-kantor/5.webp",
        caption: {
          en: "Automated Dual-Shift Payroll Recap, Overtime & Penalty Breakdown",
          id: "Rekapitulasi Upah Otomatis Dual-Shift, Lembur & Rincian Denda Keterlambatan"
        }
      },
      {
        image: "assets/projects/project-absensi-kantor/6.webp",
        caption: {
          en: "Geofence Radius Configuration & Work Shift Parameters Setup",
          id: "Konfigurasi Radius Geofence & Pengaturan Parameter Shift Kerja"
        }
      }
    ],
    features: [
      {
        title: {
          en: "Haversine Geofencing Algorithm",
          id: "Algoritma Geofencing Haversine"
        },
        description: {
          en: "Calculates precise spherical GPS distance between employee position and workplace coordinates with configurable radius, blocking out-of-bounds check-in attempts.",
          id: "Menghitung jarak presisi GPS antara posisi karyawan dan lokasi kantor dengan radius terkonfigurasi, menolak presensi di luar area."
        }
      },
      {
        title: {
          en: "Real-Time Selfie Camera Verification",
          id: "Verifikasi Foto Selfie Real-Time"
        },
        description: {
          en: "Integrates HTML5 MediaDevices & Canvas API to capture live timestamped identity photos during check-in and check-out to eliminate buddy punching.",
          id: "Mengintegrasikan MediaDevices & Canvas API untuk menangkap foto identitas bertanda waktu saat absen masuk dan pulang guna menekan kecurangan."
        }
      },
      {
        title: {
          en: "Automated Multi-Shift Payroll Engine",
          id: "Engine Penggajian Multi-Shift Otomatis"
        },
        description: {
          en: "Computes daily wages for Morning & Afternoon shifts, hourly overtime, night flat rates, late penalties, and leave deductions automatically.",
          id: "Menghitung upah harian Shift Pagi & Siang, lembur per jam, tarif flat malam, denda keterlambatan, serta potongan izin secara otomatis."
        }
      },
      {
        title: {
          en: "Digital Leave Request & Approval Workflow",
          id: "Manajemen Izin & Approval Digital"
        },
        description: {
          en: "Enables digital permit submissions by employees with instant notification and admin approval tracking.",
          id: "Memfasilitasi pengajuan izin karyawan secara digital dengan alur notifikasi dan persetujuan (approval) admin secara instan."
        }
      },
      {
        title: {
          en: "Excel Export & Printable Payslips",
          id: "Ekspor Excel & Cetak Slip Gaji"
        },
        description: {
          en: "Exports attendance and wage summaries to Excel (.xls) and generates print-ready payslips via Window Print API.",
          id: "Mengekspor laporan kehadiran & rekap upah ke Excel (.xls) serta mencetak slip gaji karyawan via Window Print API."
        }
      },
      {
        title: {
          en: "100% Black Box Pass & SUS 92.19 (Excellent)",
          id: "Lolos 100% Black Box & SUS 92,19 (Excellent)"
        },
        description: {
          en: "R&D evaluation passed 13/13 Black Box test scenarios and scored 92.19 on System Usability Scale (SUS) across 16 SME users.",
          id: "Pengujian R&D lolos 100% pada 13 skenario Black Box dan meraih skor SUS 92,19 dari 16 pengguna (kategori Excellent)."
        }
      }
    ]
  },
  {
    title: {
      en: "Jelajah Nusantara",
      id: "Jelajah Nusantara"
    },
    category: {
      en: "Unity3D Game",
      id: "Game Unity3D"
    },
    summary: {
      en: "A 3D educational adventure game built in Unity that takes players on an exploration of Indonesia's cultural heritage buildings while completing interactive missions and learning historical facts.",
      id: "Game petualangan edukatif 3D berbasis Unity yang mengajak pemain menjelajahi bangunan warisan budaya Indonesia sambil menyelesaikan misi interaktif dan mempelajari fakta sejarah."
    },
    description: {
      en: "Jelajah Nusantara is a Unity3D educational game developed as the Final Semester Project (UAS) for Information Technology at ITB Ahmad Dahlan Jakarta. Players explore authentic cultural heritage sites across the archipelago, completing location-based missions and uncovering historical information embedded in each landmark.",
      id: "Jelajah Nusantara adalah game edukatif Unity3D yang dikembangkan sebagai Ujian Akhir Semester Program Studi Teknologi Informasi, Fakultas Teknik dan Desain, ITB Ahmad Dahlan Jakarta. Pemain menjelajahi situs warisan budaya asli Nusantara, menyelesaikan misi berbasis lokasi, dan mengungkap informasi sejarah yang tersimpan di setiap landmark."
    },
    role: {
      en: "Game design, Unity3D development, 3D environment building, and interactive mission scripting",
      id: "Desain game, pengembangan Unity3D, pembangunan lingkungan 3D, dan scripting misi interaktif"
    },
    impact: {
      en: "Demonstrates Unity3D development skills applied to educational game design, showcasing interactive storytelling with Indonesia's cultural identity at its core.",
      id: "Menunjukkan kemampuan pengembangan Unity3D yang diterapkan pada desain game edukatif, memadukan storytelling interaktif dengan identitas budaya Indonesia."
    },
    stack: ["Unity3D", "C#", "3D Modeling", "Game Design"],
    meta: {
      en: "2026 / Unity Game",
      id: "2026 / Unity Game"
    },
    image: "https://img.youtube.com/vi/9Vo8EB7NA2I/hqdefault.jpg",
    embed: "https://www.youtube.com/embed/9Vo8EB7NA2I",
    link: "https://youtu.be/9Vo8EB7NA2I?si=Muzr6ldxMQZhbjLn",
    group: "unity"
  },
  {
    title: {
      en: "AstralsOPR – Web-Based Operational Admin System (KKL ITB Ahmad Dahlan)",
      id: "AstralsOPR – Sistem Administrasi Operasional Berbasis Web (KKL ITB Ahmad Dahlan)"
    },
    category: {
      en: "Fullstack Web App / KKL Project",
      id: "Web App Fullstack / Proyek KKL"
    },
    summary: {
      en: "A web-based operational administration system developed during KKL at PT Esta Dana Ventura, streamlining debtor data management, document printing, and audit trail in one integrated platform — using PIECES methodology and AI-assisted development.",
      id: "Sistem administrasi operasional berbasis web yang dikembangkan selama KKL di PT Esta Dana Ventura, mengintegrasikan pengelolaan data debitur, cetak dokumen, dan audit trail dalam satu platform — menggunakan metode PIECES dan pengembangan berbantuan AI."
    },
    description: {
      en: "AstralsOPR is a web application developed as the final output of the Field Study Course (KKL) at ITB Ahmad Dahlan Jakarta, placed at PT Esta Dana Ventura's Admin Operational division. The system replaces the previous manual workflow — scattered debtor data, uncontrolled document printing, and the absence of a unified digital platform — with a structured, web-based solution. Built using PHP 8.2 Native, MySQL, Tailwind CSS, and Alpine.js, AstralsOPR features debtor data management, automatic document status tracking, drag-and-drop document uploads with SHA-1 duplicate detection, single & bulk print preview with print log (to prevent double printing), in-browser PDF Tools (merge, split, compress), RBAC user management, activity log as audit trail, and Excel export for reporting. The system was designed and evaluated using the PIECES analysis framework (Performance, Information, Economics, Control, Efficiency, Service).",
      id: "AstralsOPR adalah aplikasi web yang dikembangkan sebagai luaran utama Kuliah Kerja Lapangan (KKL) di ITB Ahmad Dahlan Jakarta, yang ditempatkan di divisi Admin Operasional PT Esta Dana Ventura. Sistem ini menggantikan alur kerja manual sebelumnya — data debitur tersebar, cetak dokumen tidak terkontrol, dan tidak adanya platform digital terpadu — dengan solusi berbasis web yang terstruktur. Dibangun menggunakan PHP 8.2 Native, MySQL, Tailwind CSS, dan Alpine.js, AstralsOPR mencakup manajemen data debitur, pelacakan status dokumen otomatis, unggah dokumen drag-and-drop dengan deteksi duplikasi SHA-1, preview & cetak single maupun bulk dengan print log (pencegah double printing), PDF Tools langsung di browser (merge, split, compress), manajemen pengguna RBAC, activity log sebagai audit trail, dan ekspor Excel untuk pelaporan. Sistem dirancang dan dievaluasi menggunakan kerangka analisis PIECES (Performance, Information, Economics, Control, Efficiency, Service)."
    },
    role: {
      en: "System architect & lead developer: system design, database schema, business logic, UI/UX, PIECES analysis, AI-assisted development coordination, and system testing",
      id: "Arsitek sistem & pengembang utama: desain sistem, skema database, logika bisnis, UI/UX, analisis PIECES, koordinasi pengembangan berbantuan AI, dan pengujian sistem"
    },
    impact: {
      en: "Replaced manual, error-prone administration with an integrated web system — eliminating double printing risk via print logs, centralizing debtor & document data, and enabling efficient bulk operations for the Admin Operational division of PT Esta Dana Ventura.",
      id: "Menggantikan administrasi manual yang rentan error dengan sistem web terpadu — menghilangkan risiko double printing melalui print log, memusatkan data debitur & dokumen, dan mengaktifkan operasional bulk yang efisien untuk divisi Admin Operasional PT Esta Dana Ventura."
    },
    stack: ["PHP 8.2 Native", "MySQL", "Tailwind CSS", "Alpine.js", "pdf-lib", "pdf.js", "PIECES Methodology"],
    meta: {
      en: "2026 / KKL Fullstack",
      id: "2026 / KKL Fullstack"
    },
    image: "assets/projects/proyek-hasil-kkl/Dashboard.webp",
    link: "http://astralsopr.free.nf/",
    group: "original",
    gallery: [
      {
        image: "assets/projects/proyek-hasil-kkl/Dashboard.webp",
        caption: {
          en: "Main Dashboard – Summary of total debtor count, empty documents, print queue, latest uploads, and recent activity",
          id: "Dashboard Utama – Ringkasan total debitur, dokumen kosong, antrean cetak, unggahan terbaru, dan aktivitas sistem"
        }
      },
      {
        image: "assets/projects/proyek-hasil-kkl/debitur.webp",
        caption: {
          en: "Debtor List Page – Data table with filter, search, automatic document status (Empty / Ready / In Progress / Done), and progress indicators",
          id: "Halaman Daftar Debitur – Tabel data dengan filter, pencarian, status dokumen otomatis (Kosong / Siap / Proses / Selesai), dan indikator progres"
        }
      },
      {
        image: "assets/projects/proyek-hasil-kkl/Detail debitur.webp",
        caption: {
          en: "Debtor Detail Page – Document upload with drag-and-drop, SHA-1 duplicate detection, internal notes, and complete activity log per debtor",
          id: "Halaman Detail Debitur – Unggah dokumen drag-and-drop, deteksi duplikasi SHA-1, catatan internal, dan activity log lengkap per debitur"
        }
      },
      {
        image: "assets/projects/proyek-hasil-kkl/Pdf tools.webp",
        caption: {
          en: "PDF Tools – In-browser merge, split, and compress PDF features without server upload, built with pdf-lib and pdf.js",
          id: "PDF Tools – Fitur merge, split, dan compress PDF langsung di browser tanpa unggah ke server, dibangun dengan pdf-lib dan pdf.js"
        }
      },
      {
        image: "assets/projects/proyek-hasil-kkl/User.webp",
        caption: {
          en: "User Management – Role-Based Access Control (RBAC) with Admin, Staff, and Guest roles; add, edit, and delete user accounts",
          id: "Manajemen Pengguna – Role-Based Access Control (RBAC) dengan role Admin, Staff, dan Guest; tambah, edit, dan hapus akun pengguna"
        }
      }
    ],
    features: [
      {
        title: {
          en: "Automatic Document Status Engine",
          id: "Engine Status Dokumen Otomatis"
        },
        description: {
          en: "Calculates document status (Empty, Ready, In Progress, Done) automatically from database data, eliminating the need for manual one-by-one checking by staff.",
          id: "Menghitung status dokumen (Kosong, Siap, Proses, Selesai) secara otomatis dari data database, menghilangkan kebutuhan pengecekan manual satu per satu oleh staf."
        }
      },
      {
        title: {
          en: "Print Log & Double Printing Prevention",
          id: "Print Log & Pencegah Double Printing"
        },
        description: {
          en: "Records every print event in a dedicated log table, preventing staff from accidentally printing the same document multiple times and reducing paper waste.",
          id: "Mencatat setiap aktivitas cetak ke tabel log tersendiri, mencegah staf mencetak dokumen yang sama lebih dari sekali dan mengurangi pemborosan kertas."
        }
      },
      {
        title: {
          en: "SHA-1 Duplicate Document Detection",
          id: "Deteksi Duplikasi Dokumen SHA-1"
        },
        description: {
          en: "Generates a SHA-1 hash fingerprint for every uploaded file to detect and block duplicate document uploads before they reach the database.",
          id: "Menghasilkan sidik jari hash SHA-1 untuk setiap file yang diunggah guna mendeteksi dan memblokir unggahan dokumen duplikat sebelum masuk ke database."
        }
      },
      {
        title: {
          en: "In-Browser PDF Tools (Merge, Split, Compress)",
          id: "PDF Tools di Browser (Merge, Split, Compress)"
        },
        description: {
          en: "Provides merge, split, and compress PDF operations directly in the browser using pdf-lib and pdf.js, with no file upload to the server required.",
          id: "Menyediakan operasi merge, split, dan compress PDF langsung di browser menggunakan pdf-lib dan pdf.js, tanpa perlu mengunggah file ke server."
        }
      },
      {
        title: {
          en: "Role-Based Access Control (RBAC) & Activity Log",
          id: "Kontrol Akses Berbasis Peran (RBAC) & Activity Log"
        },
        description: {
          en: "Enforces three access levels (Admin, Staff, Guest) and records every important system action as a complete audit trail traceable at any time.",
          id: "Menerapkan tiga level akses (Admin, Staff, Guest) dan mencatat setiap aksi penting sistem sebagai audit trail lengkap yang dapat ditelusuri kapan saja."
        }
      },
      {
        title: {
          en: "PIECES Methodology & AI-Assisted Development",
          id: "Metode PIECES & Pengembangan Berbantuan AI"
        },
        description: {
          en: "System requirements were identified using the PIECES analysis framework across 6 dimensions. Development was accelerated with AI tools (Antigravity, Codex, Cursor) under direct system-architect oversight.",
          id: "Kebutuhan sistem diidentifikasi menggunakan kerangka analisis PIECES pada 6 dimensi. Pengembangan dipercepat dengan tools AI (Antigravity, Codex, Cursor) di bawah pengawasan langsung sebagai arsitek sistem."
        }
      }
    ]
  }
];


export const journeyItems: JourneyItem[] = [
  {
    year: "2025",
    title: {
      en: "Operational Admin - PT. Esta Dana Ventura",
      id: "Admin Operasional - PT. Esta Dana Ventura"
    },
    text: {
      en: "Supported data checking, workflow coordination, and administrative accuracy within venture capital operations.",
      id: "Mendukung pengecekan data, koordinasi alur kerja, dan akurasi administrasi dalam operasional venture capital."
    },
    proof: {
      image: "assets/journey/magang-esta.webp",
      label: {
        en: "Administrative proof",
        id: "Bukti administrasi"
      },
      caption: {
        en: "Operational workflow management",
        id: "Pengelolaan alur kerja operasional"
      },
      detail: {
        en: "Supported the operational team in processing financing documents, verifying data integrity, and maintaining administrative compliance throughout the workflow.",
        id: "Mendukung tim operasional dalam memproses dokumen pembiayaan, memverifikasi integritas data, dan menjaga kepatuhan administrasi di sepanjang proses kerja."
      }
    }
  },
  {
    year: "2024",
    title: {
      en: "Warehouse Staff - Gudang Busana Muslim",
      id: "Staff Gudang - Gudang Busana Muslim"
    },
    text: {
      en: "Handled inventory, packing operations, and shipping coordination with a strong focus on stock accuracy and process flow.",
      id: "Menangani inventaris, proses packing, dan koordinasi pengiriman dengan fokus pada akurasi stok dan kelancaran alur kerja."
    },
    proof: {
      image: "assets/journey/gudang-bukti.webp",
      label: {
        en: "Activity proof",
        id: "Bukti kegiatan"
      },
      caption: {
        en: "Warehouse and packing workflow",
        id: "Alur gudang dan packing"
      },
      detail: {
        en: "Managed inventory, updated daily shipping reports in Google Sheets, and supported order fulfillment by preparing products and shipment labels carefully.",
        id: "Mengelola inventaris, memperbarui laporan pengiriman harian di Google Sheets, dan mendukung proses fulfillment melalui packing serta penyiapan label pengiriman."
      }
    }
  },
  {
    year: "2021",
    title: {
      en: "Creative Section Lead - OSIS SMAN 23 Kabupaten Tangerang",
      id: "Ketua Seksi Bidang Kreatif - OSIS SMAN 23 Kabupaten Tangerang"
    },
    text: {
      en: "Led the creative section in shaping visual direction and supporting the execution of major school events.",
      id: "Memimpin bidang kreatif dalam menyusun arah visual dan mendukung pelaksanaan berbagai acara besar sekolah."
    }
  }
];

export const certifications: Certification[] = [
  {
    type: {
      en: "Coding Camp",
      id: "Coding Camp"
    },
    title: {
      en: "Intro to Software Engineering",
      id: "Intro to Software Engineering"
    },
    issuer: {
      en: "RevoU",
      id: "RevoU"
    },
    year: "2026",
    note: {
      en: "Certificate of attendance for a one-week online course introducing the fundamentals of software engineering.",
      id: "Sertifikat kehadiran untuk program online selama satu minggu yang membahas dasar-dasar software engineering."
    },
    image: "assets/certificates/serti-bootcamp.webp",
    proofLink: "assets/certificates/serti-bootcamp.webp"
  },
  {
    type: {
      en: "Seminar",
      id: "Seminar"
    },
    title: {
      en: "Digital Media and Technology Seminar",
      id: "Seminar Media Digital dan Teknologi"
    },
    issuer: {
      en: "Ministry of Education and Culture of the Republic of Indonesia",
      id: "Kementerian Pendidikan dan Kebudayaan Republik Indonesia"
    },
    year: "2019",
    note: {
      en: "Certificate of participation in a seminar on the use of digital media and technology for high school students and teachers.",
      id: "Sertifikat peserta seminar tentang pemanfaatan media digital dan teknologi bagi siswa dan guru SMA."
    },
    image: "assets/certificates/serti-seminar-kemdikbud.webp",
    proofLink: "assets/certificates/serti-seminar-kemdikbud.webp"
  },
  {
    type: {
      en: "Organization",
      id: "Organisasi"
    },
    title: {
      en: "Dianpinru Activity Certificate",
      id: "Sertifikat Kegiatan Dianpinru"
    },
    issuer: {
      en: "Gerakan Pramuka Kwartir Cabang Kabupaten Tangerang",
      id: "Gerakan Pramuka Kwartir Cabang Kabupaten Tangerang"
    },
    year: "2017",
    note: {
      en: "Certificate of participation in the Dianpinru leadership activity held as part of the 56th Scout Day commemoration.",
      id: "Sertifikat partisipasi dalam kegiatan Dianpinru yang diselenggarakan dalam rangka peringatan Hari Jadi Pramuka ke-56."
    },
    image: "assets/certificates/serti-dianpinru-pramuka.webp",
    proofLink: "assets/certificates/serti-dianpinru-pramuka.webp"
  }
];

export const educationItems: EducationItem[] = [
  {
    year: {
      en: "2023 - Present",
      id: "2023 - Sekarang"
    },
    mark: "ITB",
    logo: "assets/education/itb-ahmad-dahlan.webp",
    title: {
      en: "ITB Ahmad Dahlan",
      id: "ITB Ahmad Dahlan"
    },
    text: {
      en: "Bachelor's Degree in Information Technology",
      id: "S1 Teknologi Informasi"
    }
  },
  {
    year: {
      en: "2019 - 2022",
      id: "2019 - 2022"
    },
    mark: "S23",
    logo: "assets/education/logo_sman_23_kab_tangerang-removebg-preview (1).webp",
    title: {
      en: "SMAN 23 Kabupaten Tangerang",
      id: "SMAN 23 Kabupaten Tangerang"
    },
    text: {
      en: "Science Major",
      id: "Jurusan IPA"
    }
  }
];

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    note: {
      en: "Fairly familiar with page structure, semantic layout, and reading markup.",
      id: "Cukup familiar dengan struktur halaman, layout semantik, dan membaca markup."
    },
    tone: "linear-gradient(135deg, #ff7a18, #ffb36a)",
    tier: "core"
  },
  {
    name: "CSS",
    icon: "https://cdn.simpleicons.org/css/1572B6",
    note: {
      en: "Comfortable styling layouts, visual details, responsive sections, and interface polish.",
      id: "Nyaman mengatur layout, detail visual, section responsif, dan polishing interface."
    },
    tone: "linear-gradient(135deg, #4facfe, #00f2fe)",
    tier: "core"
  },
  {
    name: "JavaScript",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    note: {
      en: "Basic familiarity for reading simple logic and understanding interactive behavior.",
      id: "Mengenal dasar untuk membaca logika sederhana dan memahami perilaku interaktif."
    },
    tone: "linear-gradient(135deg, #f6d365, #fda085)",
    tier: "support"
  },
  {
    name: "PHP",
    icon: "https://cdn.simpleicons.org/php/777BB4",
    note: {
      en: "Still learning the basics, mainly to understand web projects and backend flow.",
      id: "Masih belajar dasar, terutama untuk memahami project web dan alur backend."
    },
    tone: "linear-gradient(135deg, #777bb4, #b8c2ff)",
    tier: "support"
  },
  {
    name: "Codex",
    icon: "assets/tools/Chatgpt(Codex).webp",
    note: {
      en: "Used to explore code, fix issues, and turn project ideas into working drafts.",
      id: "Dipakai untuk eksplorasi kode, memperbaiki masalah, dan mengubah ide project jadi draft yang berjalan."
    },
    tone: "linear-gradient(135deg, #10a37f, #7ee8c7)",
    tier: "support"
  },
  {
    name: "Gemini",
    icon: "assets/tools/gemini-icon-logo.webp",
    note: {
      en: "Used for research, brainstorming, and comparing ideas from another AI perspective.",
      id: "Dipakai untuk riset, brainstorming, dan membandingkan ide dari sudut pandang AI lain."
    },
    tone: "linear-gradient(135deg, #4285f4, #a78bfa)",
    tier: "support"
  },
  {
    name: "Claude",
    icon: "assets/tools/Claude_AI_symbol.svg.webp",
    note: {
      en: "Used for writing, structuring explanations, and refining project direction.",
      id: "Dipakai untuk menulis, menyusun penjelasan, dan merapikan arah project."
    },
    tone: "linear-gradient(135deg, #d97757, #f4c29f)",
    tier: "support"
  },
  {
    name: "DeepSeek",
    icon: "assets/tools/Deepseek-Logo-Icon-PNG.webp",
    note: {
      en: "Used as another AI coding and reasoning reference during exploration.",
      id: "Dipakai sebagai referensi AI lain untuk coding dan penalaran saat eksplorasi."
    },
    tone: "linear-gradient(135deg, #2563eb, #8bd3ff)",
    tier: "support"
  },
  {
    name: "Cursor",
    icon: "assets/tools/Cursor.webp",
    note: {
      en: "Used as an AI-assisted coding workspace for experimenting with web projects.",
      id: "Dipakai sebagai workspace coding berbantu AI untuk eksperimen project web."
    },
    tone: "linear-gradient(135deg, #111111, #7c7c7c)",
    tier: "support"
  },
  {
    name: "CapCut",
    icon: "assets/tools/capcut-icon.webp",
    note: {
      en: "Short-form editing and support for visual storytelling.",
      id: "Editing short-form dan dukungan untuk visual storytelling."
    },
    tone: "linear-gradient(135deg, #121212, #5c5c5c)",
    tier: "support"
  },
  {
    name: "Canva",
    icon: "assets/tools/canva-icon.webp",
    note: {
      en: "Fast visual design, social assets, and presentation graphics.",
      id: "Desain visual cepat, aset media sosial, dan grafis presentasi."
    },
    tone: "linear-gradient(135deg, #00c4cc, #7d2ae8)",
    tier: "support"
  },
  {
    name: "Word",
    icon: "assets/tools/word.webp",
    note: {
      en: "Structured documents, reports, and polished written material.",
      id: "Dokumen terstruktur, laporan, dan materi tertulis yang rapi."
    },
    tone: "linear-gradient(135deg, #2b579a, #5f9cff)",
    tier: "support"
  },
  {
    name: "Excel",
    icon: "assets/tools/Excel.webp",
    note: {
      en: "Tables, light data handling, and presentation-ready sheets.",
      id: "Tabel, pengolahan data ringan, dan sheet yang siap dipresentasikan."
    },
    tone: "linear-gradient(135deg, #107c41, #5cd68d)",
    tier: "support"
  },
  {
    name: "PowerPoint",
    icon: "assets/tools/powerpoint.webp",
    note: {
      en: "Deck design, narrative flow, and cleaner presentation slides.",
      id: "Desain deck, alur presentasi, dan slide yang lebih rapi."
    },
    tone: "linear-gradient(135deg, #d24726, #ff9b73)",
    tier: "support"
  }
];
