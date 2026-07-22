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
      lead: "This logo is built from a simple orbit, a clear vertical axis, and the A and D initials from AstralDevX. The form stays minimal but still feels distinct and easy to remember.",
      focusKicker: "Design Notes",
      focusTitle: "Minimal in form, clear in shape.",
      focusLead: "I kept the structure simple so the logo stays clean, memorable, and easy to apply.",
      focusMetricOne: "Clear at smaller sizes",
      focusMetricTwo: "Made for digital and physical applications",
      fullLabel: "Full mark",
      symbolLabel: "Symbol only",
      anatomyKicker: "Symbol Anatomy",
      anatomyTitle: "One mark, four key readings.",
      usageKicker: "Applied Identity",
      usageTitle: "Simple enough to work across different uses.",
      usageLead: "The logo stays readable on apparel, print, and digital media because the structure is clean and easy to adapt.",
      principles: [
        {
          title: "Orbit Core",
          text: "The outer ring reflects continuity and forward movement.",
          image: "assets/identity/logo-bulat.webp"
        },
        {
          title: "Vertical Axis",
          text: "The top-and-bottom structure gives the mark balance and a clear visual spine.",
          image: "assets/identity/logo-atasbawah.webp"
        },
        {
          title: "Initial A",
          text: "The A stands for Astral and forms the central point of lift in the mark.",
          image: "assets/identity/logo-a.webp"
        },
        {
          title: "Initial D",
          text: "The D stands for DevX and links the identity back to making and execution.",
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
      lead: "Logo ini dibangun dari orbit yang sederhana, sumbu vertikal yang tegas, serta inisial A dan D dari AstralDevX. Bentuknya tetap minimal, tetapi tetap punya siluet yang kuat dan mudah diingat.",
      focusKicker: "Catatan Desain",
      focusTitle: "Minimal secara bentuk, jelas secara siluet.",
      focusLead: "Strukturnya saya jaga tetap sederhana agar logonya bersih, mudah diingat, dan fleksibel dipakai.",
      focusMetricOne: "Tetap jelas pada ukuran kecil",
      focusMetricTwo: "Dirancang untuk digital dan aplikasi fisik",
      fullLabel: "Logo penuh",
      symbolLabel: "Simbol saja",
      anatomyKicker: "Anatomi Simbol",
      anatomyTitle: "Satu mark, empat pembacaan utama.",
      usageKicker: "Identitas Terapan",
      usageTitle: "Sederhana, tapi tetap kuat di berbagai media.",
      usageLead: "Logonya tetap terbaca di apparel, media cetak, maupun digital karena strukturnya bersih dan mudah diadaptasi.",
      principles: [
        {
          title: "Orbit Inti",
          text: "Lingkaran luar merepresentasikan kesinambungan dan gerak maju.",
          image: "assets/identity/logo-bulat.webp"
        },
        {
          title: "Sumbu Vertikal",
          text: "Susunan atas dan bawah memberi keseimbangan serta poros visual yang tegas.",
          image: "assets/identity/logo-atasbawah.webp"
        },
        {
          title: "Inisial A",
          text: "Huruf A merujuk pada Astral dan menjadi titik angkat di pusat mark.",
          image: "assets/identity/logo-a.webp"
        },
        {
          title: "Inisial D",
          text: "Huruf D merujuk pada DevX dan menghubungkan identitas ini dengan proses pengembangan.",
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
      en: "A marketplace concept with a stronger visual atmosphere, designed to make product browsing feel more premium and memorable.",
      id: "Konsep marketplace dengan atmosfer visual yang lebih kuat, dirancang agar pengalaman melihat produk terasa lebih premium dan mudah diingat."
    },
    description: {
      en: "An e-commerce interface that balances product clarity with a more distinctive visual identity and a polished browsing flow.",
      id: "Antarmuka e-commerce yang menjaga kejelasan produk, sekaligus menghadirkan identitas visual yang lebih kuat dan alur jelajah yang lebih halus."
    },
    role: {
      en: "Creative coding, visual system, responsive build",
      id: "Creative coding, sistem visual, dan build responsif"
    },
    impact: {
      en: "Explores how a commerce experience can feel expressive without compromising usability.",
      id: "Menunjukkan bahwa pengalaman belanja online tetap bisa terasa ekspresif tanpa mengorbankan kenyamanan penggunaan."
    },
    stack: ["UI Design", "Frontend", "Animation"],
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
      en: "Won 1st place at the national anti-corruption education campaign video competition and became one of my most meaningful school-era projects.",
      id: "Meraih Juara 1 tingkat nasional dalam lomba video kampanye pendidikan antikorupsi dan menjadi salah satu karya sekolah yang paling berkesan bagi saya."
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
      en: "A redesign project of the NPC Global website focusing on structure, visual appeal, and optimized user flows.",
      id: "Proyek redesign website NPC Global yang berfokus pada struktur informasi, estetika visual, dan optimalisasi alur pengguna."
    },
    description: {
      en: "This redesign reimagines the online presence of NPC Global with a cleaner style, clearer navigation, and a modern design language that fits their industry.",
      id: "Redesign ini merancang ulang kehadiran online NPC Global dengan gaya yang bersih, navigasi yang lebih jelas, serta bahasa desain modern yang sesuai dengan industrinya."
    },
    role: {
      en: "UI/UX design, layout system, and responsive frontend implementation",
      id: "Desain UI/UX, sistem layout, dan implementasi frontend responsif"
    },
    impact: {
      en: "Created a more professional presentation of NPC's business services, enhancing user trust and layout responsiveness.",
      id: "Menghasilkan presentasi layanan bisnis NPC yang lebih profesional, meningkatkan kepercayaan pengguna dan responsivitas layout."
    },
    stack: ["UI Design", "Frontend", "CSS"],
    meta: {
      en: "2026 / Redesign",
      id: "2026 / Redesign"
    },
    image: "assets/projects/project-npc.webp",
    link: "https://npc-global.id/",
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
      en: "Focused on upgrading the look of PODSI with dynamic elements, clear scheduling for events, and a solid sporting aesthetic.",
      id: "Berfokus untuk meningkatkan tampilan PODSI dengan elemen dinamis, jadwal acara yang jelas, dan estetika olahraga yang solid."
    },
    role: {
      en: "UI design direction and modern layout prototype",
      id: "Arah desain UI dan prototipe layout modern"
    },
    impact: {
      en: "Makes information regarding national rowing events and updates much more accessible for sports enthusiasts and athletes.",
      id: "Membuat informasi seputar acara dayung nasional dan pembaruan lebih mudah diakses oleh penggemar olahraga dan atlet."
    },
    stack: ["UI Design", "Frontend", "CSS Grid"],
    meta: {
      en: "2026 / Redesign",
      id: "2026 / Redesign"
    },
    image: "assets/projects/project-podsi.webp",
    link: "https://podsi.or.id/",
    group: "redesign"
  },
  {
    title: {
      en: "Geolocation & Selfie Attendance System",
      id: "Sistem Absensi Geolocation & Selfie"
    },
    category: {
      en: "Original Project / Fullstack",
      id: "Proyek Original / Fullstack"
    },
    summary: {
      en: "An internal office system combining live selfie capture, GPS coordinates verification, and automated monthly payroll calculation.",
      id: "Sistem kantor internal yang menggabungkan verifikasi foto selfie langsung, koordinat GPS, dan perhitungan upah bulanan otomatis."
    },
    description: {
      en: "A secure web application designed to track employee attendance using location tracking and facial verification, integrating directly with an automated payroll engine.",
      id: "Aplikasi web aman yang dirancang untuk melacak kehadiran karyawan menggunakan pelacakan lokasi dan verifikasi wajah, terintegrasi langsung dengan mesin perhitungan gaji otomatis."
    },
    role: {
      en: "Fullstack development, Geolocation API integration, and payroll logic calculation",
      id: "Pengembangan fullstack, integrasi API Geolocation, dan logika kalkulasi sistem upah"
    },
    impact: {
      en: "Prevents fake attendance logs and automates HR finance calculations, saving hours of manual Excel processing.",
      id: "Mencegah manipulasi absen dan mengotomatiskan kalkulasi keuangan HR, menghemat waktu pemrosesan manual Excel."
    },
    stack: ["React", "Node.js", "Geolocation API", "Database"],
    meta: {
      en: "2026 / Original",
      id: "2026 / Original"
    },
    image: "assets/projects/project-absensi-kantor.webp",
    link: "#",
    group: "original"
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
