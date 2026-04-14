import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Menu, X, ArrowRight } from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
  ];

  const videoLinks = [
    { title: "Fast-Paced Edit", url: "https://f.io/TqsxIJMa" },
    { title: "Cinematic Reel", url: "https://f.io/e-VfcycR" },
    { title: "Motion Showcase", url: "https://f.io/YM9TbmgQ" },
  ];

  const clientReels = [
    { title: "Client Reel 01", url: "https://www.instagram.com/reel/DNigZ7lTHxQ/" },
    { title: "Client Reel 02", url: "https://www.instagram.com/reel/DNqe1ACzxWP/" },
    { title: "Client Reel 03", url: "https://www.instagram.com/reel/DOGdOauk02J/" },
    { title: "Client Reel 04", url: "https://www.instagram.com/reel/DObHT0aE_oQ/" },
    { title: "Throwback Edit", url: "https://www.instagram.com/reel/CgE20YQI6gO/" },
    { title: "Creative Cut", url: "https://www.instagram.com/reel/DDW5lgpzMUm/" },
  ];

  const managedPages = [
    { handle: "@acs_shoutouts", url: "https://www.instagram.com/acs_shoutouts" },
    { handle: "@aanya.biz", url: "https://www.instagram.com/aanya.biz" },
    { handle: "@zurihassan.ai", url: "https://www.instagram.com/zurihassan.ai" },
    { handle: "@elena.theron", url: "https://www.instagram.com/elena.theron" },
    { handle: "@olaconleyy", url: "https://www.instagram.com/olaconleyy" },
  ];

  const services = [
    {
      title: "Graphic Design",
      description: "Brand guidelines, color palettes, typography systems, marketing assets, social graphics",
    },
    {
      title: "Video Editing",
      description: "Adobe Premiere Pro, DaVinci Resolve, After Effects, fast-paced edits delivered in 3-7 business days with up to 2 revision rounds",
    },
    {
      title: "Motion Design",
      description: "Motion graphics, visual storytelling, AI-assisted workflows (Higgsfield, Heygen, ElevenLabs)",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-black">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center">
        <a href="#" className="font-display text-2xl tracking-[0.2em] uppercase text-white font-bold">Imran</a>
        
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest text-white/70 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="text-sm uppercase tracking-widest text-white border-b border-white/30 hover:border-white pb-1 transition-colors">
            Contact
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col justify-center items-center">
          <button className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-display text-5xl uppercase tracking-widest hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="font-display text-5xl uppercase tracking-widest text-accent hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}

      {/* 2. HERO */}
      <section className="h-screen flex flex-col justify-center px-6 pt-20">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col"
        >
          <div className="overflow-hidden">
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-[18vw] leading-[0.8] uppercase font-black text-white m-0 p-0 tracking-tighter"
            >
              MOHAMMED
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-[18vw] leading-[0.8] uppercase font-black text-white m-0 p-0 tracking-tighter text-right"
            >
              IMRAN
            </motion.h1>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
        >
          <p className="text-white/60 text-lg md:text-xl font-light tracking-wide max-w-lg">
            Graphic Design · Video Editing · Motion Design
          </p>
          <a 
            href="#work"
            className="group relative inline-flex items-center justify-center px-8 py-4 border border-white text-sm uppercase tracking-widest font-medium overflow-hidden transition-all duration-500 hover:border-accent"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">View Work</span>
            <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
        </motion.div>
      </section>

      {/* 3. SERVICES TICKER */}
      <section className="py-24 overflow-hidden border-y border-white/5 bg-background">
        <div className="flex w-[200%] animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8 items-center whitespace-nowrap">
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">Graphic Design</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">·</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">Brand Identity</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">·</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">Video Editing</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">·</span>
            </div>
          ))}
        </div>
        <div className="flex w-[200%] animate-marquee-reverse mt-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-16 px-8 items-center whitespace-nowrap">
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">Motion Graphics</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">·</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">Social Content</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">·</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">Visual Storytelling</span>
              <span className="font-display text-6xl md:text-8xl font-bold uppercase text-white/10">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SELECTED WORK — VIDEO EDITING */}
      <section id="work" className="py-32 px-6 max-w-screen-2xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-6xl md:text-8xl uppercase font-bold mb-16">
            Selected <span className="text-accent italic">Work</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {/* Fast-Paced Edits */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h3 className="text-xl text-white/60 uppercase tracking-widest mb-8 font-medium">Fast-Paced Edits</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoLinks.map((video, idx) => (
                <motion.a 
                  key={idx}
                  variants={fadeInUp}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video bg-card border border-white/10 p-8 flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-accent/90 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 flex items-center justify-center">
                    <span className="font-display text-4xl uppercase font-bold text-black flex items-center gap-4">
                      Watch <ArrowRight size={32} />
                    </span>
                  </div>
                  <div className="z-0">
                    <Play size={24} className="text-white/40 mb-4" />
                  </div>
                  <div className="z-0">
                    <h4 className="font-display text-3xl uppercase font-bold text-white mb-2">{video.title}</h4>
                    <p className="text-white/40 text-sm truncate font-mono">{video.url}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Client Reels */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h3 className="text-xl text-white/60 uppercase tracking-widest mb-8 font-medium">Freelance Client Work</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {clientReels.map((reel, idx) => (
                <motion.a 
                  key={idx}
                  variants={fadeInUp}
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[4/5] bg-card border border-white/10 p-8 flex flex-col justify-between overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-accent/90 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-10 flex items-center justify-center">
                    <span className="font-display text-4xl uppercase font-bold text-black flex items-center gap-4">
                      Watch <ArrowRight size={32} />
                    </span>
                  </div>
                  <div className="z-0">
                    <Play size={24} className="text-white/40 mb-4" />
                  </div>
                  <div className="z-0">
                    <h4 className="font-display text-3xl uppercase font-bold text-white mb-2">{reel.title}</h4>
                    <p className="text-white/40 text-sm truncate font-mono">{reel.url}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. MANAGED PAGES & 6. DESIGN PORTFOLIO */}
      <section className="py-32 px-6 border-t border-white/5 bg-black/40">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-5xl uppercase font-bold mb-12">Social <span className="text-accent italic">Presence</span></h2>
            <p className="text-white/60 mb-8 max-w-md">Pages managed and edited by Mohammed.</p>
            <div className="flex flex-col gap-4">
              {managedPages.map((page, idx) => (
                <a 
                  key={idx}
                  href={page.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 border border-white/10 bg-card hover:border-accent transition-colors duration-300"
                >
                  <span className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-accent transition-colors">{page.handle}</span>
                  <ArrowRight className="text-white/30 group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-5xl uppercase font-bold mb-8">Design <span className="text-accent italic">Portfolio</span></h2>
            <p className="text-white/60 mb-12 text-lg">Thumbnails · Posters · Logo Design</p>
            <a 
              href="https://drive.google.com/drive/folders/1P89XvfA7vGCGo7gJkJ7TvY_yNH2DVbk5?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center p-12 border border-white/20 bg-card overflow-hidden transition-all duration-500 hover:border-accent"
            >
              <div className="relative z-10 flex flex-col items-center gap-6 group-hover:text-black transition-colors duration-500">
                <span className="font-display text-4xl md:text-5xl uppercase font-bold tracking-widest text-center">View Design Portfolio</span>
                <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </a>
          </motion.div>

        </div>
      </section>

      {/* 7. SERVICES & 8. TOOLKIT */}
      <section id="services" className="py-32 px-6 max-w-screen-2xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-32"
        >
          {services.map((service, idx) => {
            const titleWords = service.title.split(" ");
            return (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col">
                <h3 className="font-display text-5xl uppercase font-bold mb-6 tracking-wide">
                  {titleWords.map((word, i) => (
                    <span key={i} className={i === 0 ? "text-accent italic" : ""}>{word} </span>
                  ))}
                </h3>
                <p className="text-white/60 leading-relaxed text-lg">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="border-t border-white/10 pt-16 flex flex-col md:flex-row gap-16"
        >
          <div className="flex-1">
            <h4 className="text-sm text-white/40 uppercase tracking-widest mb-6 font-medium">Tools</h4>
            <p className="font-display text-3xl md:text-4xl uppercase text-white/90 leading-snug">
              Adobe Premiere Pro, After Effects, Photoshop, DaVinci Resolve, Figma
            </p>
          </div>
          <div className="flex-1">
            <h4 className="text-sm text-white/40 uppercase tracking-widest mb-6 font-medium">AI Tools</h4>
            <p className="font-display text-3xl md:text-4xl uppercase text-white/90 leading-snug">
              Claude, Gemini, Perplexity, ChatGPT, Higgsfield, Heygen, ElevenLabs
            </p>
          </div>
        </motion.div>
      </section>

      {/* 9. ABOUT */}
      <section id="about" className="py-32 px-6 border-y border-white/5 bg-card/30">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <div className="w-full md:w-1/3 aspect-[3/4] relative overflow-hidden bg-white/5 grayscale contrast-125 brightness-90">
              <img 
                src="/imran-photo.jpg" 
                alt="Mohammed Imran Ahmed" 
                className="w-full h-full object-cover object-center absolute inset-0 mix-blend-luminosity opacity-80"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h2 className="font-display text-6xl md:text-8xl uppercase font-bold mb-12">
                The <span className="text-accent italic">Editor</span>
              </h2>
              <div className="space-y-6 text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed">
                <p>B.Tech CSE 2025 graduate.</p>
                <p>Currently crafting narratives at Growth School.</p>
                <p>Available for freelance projects worldwide.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 10. CTA BANNER */}
      <section id="contact" className="py-40 px-6 bg-black flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-6xl md:text-[10vw] leading-none uppercase font-black mb-12 tracking-tighter">
            Let's build<br/>something.
          </h2>
          <a 
            href="mailto:mdimran19181@gmail.com" 
            className="block font-display text-4xl md:text-6xl text-accent hover:text-white transition-colors duration-300 uppercase tracking-wider mb-8"
          >
            mdimran19181@gmail.com
          </a>
          <p className="text-xl text-white/60 font-mono">+91-6362013676</p>
        </motion.div>
      </section>

      {/* 11. FOOTER */}
      <footer className="py-8 px-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm uppercase tracking-widest text-white/40">
        <span className="font-display text-xl text-white tracking-[0.2em] font-bold">IMRAN</span>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center">
          <a href="mailto:mdimran19181@gmail.com" className="hover:text-white transition-colors">mdimran19181@gmail.com</a>
          <span>© 2025</span>
        </div>
      </footer>
    </div>
  );
}
