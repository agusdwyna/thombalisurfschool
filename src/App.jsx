import Header from "./components/Header";

// ─── Konfigurasi ────────────────────────────────────────────────────
const WA_NUMBER = "6282146828788"; // Ganti dengan nomor WA aktif

const makeWaLink = (message) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

// ─── Data Packages ──────────────────────────────────────────────────

 const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      label: "Website"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
        </svg>
      ),
      label: "Share"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: "Email"
    }
  ];
const packages = [
  {
    name: "Private Lesson",
    sub: "1 Session",
    price: "550K",
    priceLabel: "IDR",
    features: [
      { icon: "person", text: "1 instructor, 1 student" },
      { icon: "schedule", text: "1.5 hours session" },
      { icon: "check_circle", text: "Surf shirt, water, sunblock" },
    ],
    featured: false,
    popular: false,
    waMessage:
      "Halo Thom Bali Surf School! 🏄\n\nSaya tertarik dengan paket *Private Lesson* (550K IDR / 1 session).\n\nBoleh info ketersediaan jadwal dan cara bookingnya? Terima kasih!",
  },
  {
    name: "Group Lesson",
    sub: "1 Session",
    price: "450K",
    priceLabel: "PER PERSON",
    features: [
      { icon: "groups", text: "1 instructor, 2-3 students" },
      { icon: "schedule", text: "1.5 hours session" },
      { icon: "check_circle", text: "Surf shirt, water, sunblock" },
    ],
    featured: false,
    popular: false,
    waMessage:
      "Halo Thom Bali Surf School! 🏄\n\nSaya tertarik dengan paket *Group Lesson* (450K IDR per orang / 1 session).\n\nBoleh info ketersediaan dan berapa orang yang bisa join? Terima kasih!",
  },
  {
    name: "Private Package",
    sub: "3 Days Intense",
    price: "1,500K",
    priceLabel: "IDR TOTAL",
    features: [
      { icon: "military_tech", text: "1 instructor, 1 student" },
      { icon: "date_range", text: "1.5 hours per session" },
      { icon: "check_circle", text: "All gear included" },
    ],
    featured: true,
    popular: true,
    waMessage:
      "Halo Thom Bali Surf School! 🏄🔥\n\nSaya tertarik dengan paket *Private Package* (1,500K IDR total / 3 hari intensif).\n\nBisa bantu konfirmasi jadwal dan detail paket ini? Terima kasih!",
  },
  {
    name: "Group Package",
    sub: "3 Days Fun",
    price: "1,200K",
    priceLabel: "PER PERSON",
    features: [
      { icon: "diversity_3", text: "1 instructor, 2-3 students" },
      { icon: "date_range", text: "1.5 hours per session" },
      { icon: "check_circle", text: "Full amenities included" },
    ],
    featured: false,
    popular: false,
    waMessage:
      "Halo Thom Bali Surf School! 🏄\n\nSaya tertarik dengan paket *Group Package* (1,200K IDR per orang / 3 hari).\n\nBoleh info ketersediaan dan detail paket seru ini? Terima kasih!",
  },
];

// ─── Gallery Images ─────────────────────────────────────────────────
const galleryImages = [
  {
    src: "3.jpeg",
    alt: "Student catching first wave",
  },
  {
    src: "2.jpeg",
    alt: "Instructor guiding student",
  },
  {
    src: "1.jpeg",
    alt: "Happy surf students",
  },
   {
    src: "4.jpeg",
    alt: "Happy surf students",
  },
];

// ─── WhatsApp SVG Icon ───────────────────────────────────────────────
const WhatsAppIcon = ({ className = "w-7 h-7" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.412 2.503 1.112 3.487l-.751 2.233 2.3-.736c.945.615 2.064.981 3.107.981 3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.764-5.767-5.764zm3.369 8.135c-.145.408-.84.739-1.159.78-.32.041-.733.074-2.137-.496-1.79-.729-2.913-2.553-3.003-2.673-.09-.12-.733-.973-.733-1.855 0-.882.456-1.317.618-1.492.162-.175.355-.219.474-.219.119 0 .237.001.341.005.108.004.254-.041.398.305.145.35.494 1.204.537 1.292.043.088.072.19.014.305-.058.115-.088.19-.175.291-.087.102-.183.228-.261.305-.087.087-.179.183-.077.359.102.176.452.746.969 1.206.666.592 1.229.776 1.405.864.176.088.278.073.38-.044.102-.117.439-.511.556-.686.117-.175.234-.146.395-.087s1.023.482 1.2.569c.176.087.293.131.336.204.043.073.043.423-.102.831z" />
  </svg>
);

// ─── Package Card Component ──────────────────────────────────────────
const PackageCard = ({ pkg }) => (
  <div
    className={`bg-[#f6f3ec] rounded-2xl p-6 flex flex-col gap-5 transition-transform hover:-translate-y-1 relative overflow-hidden h-full ${
      pkg.featured ? "border-2 border-[#00672c]/25 shadow-lg shadow-[#00672c]/10" : ""
    }`}
  >
    {pkg.popular && (
      <span className="absolute top-0 right-0 bg-[#00672c] text-white text-[8px] font-black px-4 py-1.5 tracking-widest uppercase rounded-bl-xl font-label">
        Popular
      </span>
    )}

    {/* Header */}
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-headline text-xl font-bold">{pkg.name}</h3>
        <p className="text-[#404850] text-sm mt-0.5">{pkg.sub}</p>
      </div>
      <div className="text-right shrink-0 ml-4">
        <span className="font-headline text-2xl font-black text-[#00672c]">{pkg.price}</span>
        <p className="text-[10px] text-[#404850] font-bold font-label">{pkg.priceLabel}</p>
      </div>
    </div>

    {/* Features */}
    <ul className="flex flex-col gap-3 flex-1">
      {pkg.features.map((f) => (
        <li key={f.text} className="flex items-center gap-3 text-sm text-[#404850]">
          <span className="material-symbols-outlined text-[#00672c]" style={{ fontSize: "18px" }}>
            {f.icon}
          </span>
          {f.text}
        </li>
      ))}
    </ul>

    {/* CTA */}
    <a
      href={makeWaLink(pkg.waMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-bold transition-all text-sm ${
        pkg.featured
          ? "bg-[#00672c] text-white shadow-md shadow-[#00672c]/20 hover:bg-[#00833a] active:scale-95"
          : "bg-white text-[#00672c] border border-[#00672c]/20 hover:bg-[#00672c] hover:text-white active:scale-95"
      }`}
    >
      <WhatsAppIcon className="w-4 h-4" />
      Book on WhatsApp
    </a>
  </div>
);

// ─── App ─────────────────────────────────────────────────────────────
export default function App() {
  const heroWaLink = makeWaLink(
    "Halo Thom Bali Surf School! 🏄\n\nSaya ingin tanya info tentang paket surf lesson di Bali. Bisa bantu saya memilih paket yang sesuai? Terima kasih!"
  );

  const ctaWaLink = makeWaLink(
    "Halo Thom Bali Surf School! 🏄\n\nSaya mau cek ketersediaan slot untuk surf lesson. Ada jadwal yang bisa untuk minggu ini? Terima kasih!"
  );

  return (
    <>
      <Header />
      <div className="bg-[#fcf9f2] text-[#1c1c18] font-body min-h-screen">

      

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[795px] flex flex-col justify-end px-6 pb-24 pt-32 overflow-hidden md:min-h-screen md:px-12 lg:px-20">
        <div className="absolute inset-0 z-0">
          <img
            src="1.jpeg"
            alt="Surfer catching wave in Bali"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcf9f2] via-[#fcf9f2]/40 to-transparent" />
        </div>
        <div className="relative z-10 space-y-6 max-w-lg md:max-w-2xl">
          <span className="inline-block bg-[#00833a]/20 text-[#00833a] px-3 py-1 rounded-full text-[10px] font-label font-bold tracking-widest uppercase">
            Kuta Beach, Bali
          </span>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1c1c18] leading-[1.05]">
            Learn to Surf in Bali the{" "}
            <span className="text-[#00672c]">Easy &amp; Fun</span> Way!
          </h1>
          <p className="text-[#404850] text-lg md:text-xl leading-relaxed max-w-md">
            Beginner-friendly lessons at Bali's best surf spots with certified local guides.
          </p>
          <a
            href={heroWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#00672c] hover:bg-[#00833a] text-white py-5 px-8 rounded-2xl font-bold transition-all active:scale-[0.98] shadow-lg shadow-[#00672c]/20 text-base"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              chat
            </span>
            Chat on WhatsApp Now
          </a>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="px-6 -mt-12 relative z-20 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-4 max-w-screen-lg mx-auto">
          <div className="bg-white p-6 rounded-2xl border-b-4 border-[#00672c]/10">
            <span className="text-[#00672c] font-headline font-bold text-2xl md:text-3xl block">100%</span>
            <span className="text-[#404850] text-xs uppercase tracking-wider font-label">Safety Record</span>
          </div>
          <div className="bg-white p-6 rounded-2xl border-b-4 border-[#006399]/10">
            <span className="text-[#006399] font-headline font-bold text-2xl md:text-3xl block">5.0</span>
            <span className="text-[#404850] text-xs uppercase tracking-wider font-label">TripAdvisor</span>
          </div>
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 lg:px-20" id="Packages">
        <div className="max-w-screen-lg mx-auto">
          <div className="mb-10">
            <span className="text-[#00672c] font-label font-bold tracking-[0.2em] text-[10px] uppercase">
              Pick Your Level
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mt-1">
              Our Packages
            </h2>
          </div>

          {/* Mobile: single column | Tablet: 2 col | Desktop: 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#e5e2db]/30 md:px-12 lg:px-20" id="Gallery">
        <div className="max-w-screen-lg mx-auto">
          <div className="mb-8">
            <span className="text-[#00672c] font-label font-bold tracking-[0.2em] text-[10px] uppercase">
              Visual Journey
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mt-1">
              Our Vibes
            </h2>
          </div>

          {/* Mobile: stacked | Tablet+: grid 3 kolom */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4 md:h-[600px]">
            {/* Gambar besar kiri — span 2 baris di md+ */}
            <div className="aspect-[4/5] md:aspect-auto md:row-span-2 rounded-2xl overflow-hidden">
              <img
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* 2 gambar kanan */}
            {galleryImages.slice(1).map((img) => (
              <div key={img.alt} className="aspect-square md:aspect-auto rounded-2xl overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#00833a] text-white text-center md:px-12 lg:px-20">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
          <span className="material-symbols-outlined" style={{ fontSize: "18rem" }}>waves</span>
        </div>
        <div className="relative z-10 flex flex-col items-center gap-8 max-w-xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold leading-tight">
            Ready to Ride Your First Wave?
          </h2>
          <p className="text-white/80 text-lg">
            Limited slots daily! We respond fast on WhatsApp to confirm your booking.
          </p>
          <a
            href={ctaWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#00833a] py-5 px-10 rounded-full font-black text-lg shadow-2xl active:scale-95 transition-transform hover:bg-[#f0fdf4]"
          >
            Check Availability
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>



 <footer className="bg-slate-100 py-12 px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <img
          src="/Logo.png"
          alt="Raiben Bar Surf Lesson Logo"
          className="w-24 h-24 object-contain" // bisa diperbesar tanpa memengaruhi tinggi header
        />
  
        <span className="font-bold text-xl tracking-tight">Thom Bali Surf Class</span>
      </div>
      <p className="text-sm mb-6">Pantai Nusa Dua, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali </p>
      <div className="flex justify-center gap-4 mb-8">
      
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#005a8d] transition-colors cursor-pointer"
            href="#"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-48 md:h-64 rounded-2xl overflow-hidden shadow-lg mx-auto">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.863844159175!2d115.23028364652767!3d-8.798860068770358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2437a659caaed%3A0x7a77c013697d4475!2sThom%20SURF%20LESSON%20Nusa%20Dua%20Bali!5e0!3m2!1sid!2sid!4v1775175218228!5m2!1sid!2sid"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      <p className="pt-4 text-xs">©2026 BomboraWeb</p>
    </footer>
      {/* ── WhatsApp FAB ─────────────────────────────────────────── */}
      <a
        href={heroWaLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/40 hover:scale-105 active:scale-90 transition-all"
      >
        <WhatsAppIcon />
      </a>
    </div>
    </>
  );
}