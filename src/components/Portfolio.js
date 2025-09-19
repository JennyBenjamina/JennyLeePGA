import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  User,
  Award,
  Code,
  UserRoundCog,
  Smartphone,
  Globe,
  Menu,
  X,
} from "lucide-react";
import ExperienceSection from "./Experience";

const Portfolio = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div
        className="min-h-screen bg-primary"
        style={{
          "--primary-color": "#ff3b5c", // vibrant pink/red
          "--primary-hover": "#ff1f3d", // darker bold pink for hover
          "--accent-color": "#ffb800", // bright golden yellow
          "--text-primary": "#1a1a1a", // strong black for main text
          "--text-secondary": "#333333", // slightly lighter for secondary text
          "--bg-primary": "#ffffff", // clean white background
          "--bg-secondary": "#f0f0f5", // light gray for panels
          "--shadow": "0 4px 8px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.10)", // bolder shadow
        }}
      >
        {/* Google Fonts Import */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Poppins', sans-serif; }
        
        .text-primary { color: var(--text-primary); }
        .text-secondary { color: var(--text-secondary); }
        .bg-primary { background-color: var(--bg-primary); }
        .bg-secondary { background-color: var(--bg-secondary); }
        .border-primary { border-color: var(--primary-color); }
        .shadow-custom { box-shadow: var(--shadow); }
        
        .btn-primary { 
          background-color: var(--primary-color); 
          color: white;
        }
        .btn-primary:hover { 
          background-color: var(--primary-hover); 
        }
        .accent-color { color: var(--accent-color); }
        .bg-accent { background-color: var(--accent-color); }
      `}</style>

        {/* Pastel Geometric Background Elements - Updated for Bold Theme */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Vibrant pink/red */}
          <div
            className="absolute top-0 left-0 w-64 h-64 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, #ff3b5c 60%, #ffb800 100%)",
              opacity: 0.7,
              transform: "rotate(45deg) translate(-8rem, -8rem)",
            }}
          ></div>
          {/* Golden yellow accent */}
          <div
            className="absolute top-24 right-0 w-48 h-48 rounded-full"
            style={{
              background: "linear-gradient(135deg, #ffb800 80%, #ff3b5c 100%)",
              opacity: 0.7,
              transform: "rotate(12deg) translate(6rem, -3rem)",
            }}
          ></div>
          {/* White/gray for contrast */}
          <div
            className="absolute bottom-0 left-0 w-40 h-40 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #ffffff 70%, #f0f0f5 100%)",
              opacity: 0.7,
              transform: "rotate(45deg) translate(-5rem, 5rem)",
            }}
          ></div>
          {/* Bold pink/red with yellow accent */}
          <div
            className="absolute bottom-24 right-0 w-56 h-56 rounded-full"
            style={{
              background: "linear-gradient(135deg, #ff3b5c 70%, #ffb800 100%)",
              opacity: 0.7,
              transform: "rotate(12deg) translate(7rem, 7rem)",
            }}
          ></div>
        </div>

        <div className="flex min-h-screen relative z-10">
          {/* Desktop Sidebar */}
          <div className="w-80 bg-primary shadow-custom hidden md:block">
            <div className="p-8 h-full font-sans">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/djymzrhvb/image/upload/f_auto,q_auto,g_face,c_thumb,w_128,h_128/headshot_zrakr3.jpg"
                    alt="Jenny Lee Headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-bold text-primary font-serif mb-1">
                  Jenny Lee, PGA
                </h1>
                <p className="text-secondary font-sans font-medium">
                  Golf Professional
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-secondary">
                  <MapPin
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--accent-color)" }}
                  />
                  <span className="text-sm font-sans">Los Angeles, CA</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <Mail
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--accent-color)" }}
                  />
                  <span className="text-sm font-sans">Jenny.Lee@pga.com</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <Phone
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--accent-color)" }}
                  />
                  <span className="text-sm font-sans">213-393-0206</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                <a
                  href="https://linkedin.com/in/jenny-lee-pga"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:bg-accent group"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-colors duration-300 group-hover:text-white text-[#0A66C2]"
                  >
                    <rect width="24" height="24" rx="6" fill="currentColor" />
                    <path
                      d="M7 8.5C7.82843 8.5 8.5 7.82843 8.5 7C8.5 6.17157 7.82843 5.5 7 5.5C6.17157 5.5 5.5 6.17157 5.5 7C5.5 7.82843 6.17157 8.5 7 8.5Z"
                      fill="#fff"
                    />
                    <rect
                      x="5.5"
                      y="10"
                      width="3"
                      height="8.5"
                      rx="1.5"
                      fill="#fff"
                    />
                    <path
                      d="M10.5 10H13.5V11.5C14.1 10.7 15.2 10 16.5 10C19 10 19 12.2 19 14.5V18.5H16V14.5C16 13.7 16 12.5 15 12.5C14 12.5 14 13.7 14 14.5V18.5H10.5V10Z"
                      fill="#fff"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/connectproam"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:bg-accent group"
                  aria-label="Instagram"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-colors duration-300 group-hover:text-white text-[#E1306C]"
                  >
                    <rect width="24" height="24" rx="6" fill="currentColor" />
                    <circle cx="12" cy="12" r="5" fill="#fff" />
                    <circle cx="17" cy="7" r="1.5" fill="#fff" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@connectproam"
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:bg-accent group"
                  aria-label="TikTok"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-colors duration-300 group-hover:text-white text-[#000000]"
                  >
                    <rect width="24" height="24" rx="6" fill="currentColor" />
                    <path
                      d="M15 7V15.5C15 17.433 13.433 19 11.5 19C9.567 19 8 17.433 8 15.5C8 13.567 9.567 12 11.5 12C12.3284 12 13 12.6716 13 13.5V7H15Z"
                      fill="#fff"
                    />
                    <circle cx="17" cy="7" r="2" fill="#fff" />
                  </svg>
                </a>
              </div>

              {/* Download CV Button */}
              <a
                href="/Jenny%20Lee%20Resume%20Golf%202025.pdf"
                download
                className="w-full btn-primary py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 font-sans font-medium"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Mobile Sidebar Overlay */}
          <div
            className={`fixed inset-0 z-50 md:hidden ${
              sidebarOpen ? "block" : "hidden"
            }`}
          >
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            ></div>
            <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-br from-white via-[#f0f0f5] to-[#ffe5f0] shadow-custom rounded-r-3xl">
              <div className="p-8 font-sans relative h-full flex flex-col">
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="absolute top-4 right-4 text-secondary hover:text-primary"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Mobile Profile Section */}
                <div className="text-center mb-8 mt-8">
                  <div className="mx-auto mb-4 w-32 aspect-square rounded-3xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/djymzrhvb/image/upload/f_auto,q_auto,w_256,h_256,c_fill/IMG_2151_knmhma_d4034c.jpg"
                      alt="Jenny Lee Headshot"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-primary font-serif mb-1">
                    Jenny Lee, PGA
                  </h1>
                  <p className="text-secondary font-sans font-medium">
                    Golf Professional
                  </p>
                </div>

                {/* Mobile Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-secondary">
                    <MapPin
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--accent-color)" }}
                    />
                    <span className="text-sm font-sans">Los Angeles, CA</span>
                  </div>
                  <div className="flex items-center gap-3 text-secondary">
                    <Mail
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--accent-color)" }}
                    />
                    <span className="text-sm font-sans">Jenny.Lee@pga.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-secondary">
                    <Phone
                      className="w-4 h-4 flex-shrink-0"
                      style={{ color: "var(--accent-color)" }}
                    />
                    <span className="text-sm font-sans">213-393-0206</span>
                  </div>
                </div>

                {/* Mobile Social Links */}
                <div className="flex justify-center gap-4 mb-8">
                  <a
                    href="https://linkedin.com/in/jenny-lee-pga"
                    className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  >
                    {/* LinkedIn SVG */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="currentColor" />
                      <path
                        d="M7 8.5C7.82843 8.5 8.5 7.82843 8.5 7C8.5 6.17157 7.82843 5.5 7 5.5C6.17157 5.5 5.5 6.17157 5.5 7C5.5 7.82843 6.17157 8.5 7 8.5Z"
                        fill="#fff"
                      />
                      <rect
                        x="5.5"
                        y="10"
                        width="3"
                        height="8.5"
                        rx="1.5"
                        fill="#fff"
                      />
                      <path
                        d="M10.5 10H13.5V11.5C14.1 10.7 15.2 10 16.5 10C19 10 19 12.2 19 14.5V18.5H16V14.5C16 13.7 16 12.5 15 12.5C14 12.5 14 13.7 14 14.5V18.5H10.5V10Z"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/connectproam"
                    className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    {/* Instagram SVG */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="currentColor" />
                      <circle cx="12" cy="12" r="5" fill="#fff" />
                      <circle cx="17" cy="7" r="1.5" fill="#fff" />
                      <circle cx="12" cy="12" r="3" fill="currentColor" />
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com/@connectproam"
                    className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  >
                    {/* TikTok SVG */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="currentColor" />
                      <path
                        d="M15 7V15.5C15 17.433 13.433 19 11.5 19C9.567 19 8 17.433 8 15.5C8 13.567 9.567 12 11.5 12C12.3284 12 13 12.6716 13 13.5V7H15Z"
                        fill="#fff"
                      />
                      <circle cx="17" cy="7" r="2" fill="#fff" />
                    </svg>
                  </a>
                </div>

                {/* Mobile Download CV Button */}
                <button className="w-full btn-primary py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 font-sans font-medium">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            {/* Mobile Profile Image - visible only on mobile */}
            <div className="block md:hidden text-center mt-8 mb-6">
              <div className="w-28 h-28 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl mx-auto flex items-center justify-center overflow-hidden shadow-lg">
                <img
                  src="https://res.cloudinary.com/djymzrhvb/image/upload/f_auto,q_auto,g_face,c_thumb,w_128,h_128/headshot_zrakr3.jpg"
                  alt="Jenny Lee Headshot"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-xl font-bold text-primary font-serif mt-3 mb-1">
                Jenny Lee, PGA
              </h1>
              <p className="text-secondary font-sans font-medium">
                Golf Professional
              </p>
            </div>
            {/* Mobile Menu Button with Animation */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden fixed top-4 left-4 z-40 btn-primary p-3 rounded-lg shadow-custom flex items-center justify-center"
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            >
              <span className="relative w-6 h-6 block">
                {/* Hamburger Icon */}
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    sidebarOpen
                      ? "opacity-0 scale-75 rotate-45"
                      : "opacity-100 scale-100 rotate-0"
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </span>
                {/* Close Icon */}
                <span
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    sidebarOpen
                      ? "opacity-100 scale-100 rotate-0"
                      : "opacity-0 scale-75 -rotate-45"
                  }`}
                >
                  <X className="w-6 h-6" />
                </span>
              </span>
            </button>

            <div className="p-6 md:p-12 max-w-4xl">
              {/* About Me Section */}
              <section className="mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-primary font-serif">
                    About Me
                  </h2>
                  <div
                    className="h-1 w-16 rounded"
                    style={{ backgroundColor: "var(--accent-color)" }}
                  ></div>
                </div>
                <div className="bg-primary rounded-lg p-8 shadow-custom mb-8">
                  <p className="text-secondary leading-relaxed mb-4 font-sans">
                    I'm Jenny Lee, a versatile PGA Golf Professional with
                    experience in competitive play, instruction, and club
                    operations. I bring a unique blend of creativity and
                    analytical skills to my work, combining my passion for golf
                    with my expertise in web design and development.
                  </p>
                  <p className="text-secondary leading-relaxed font-sans">
                    My education includes a bachelor's degree in Psychology with
                    a specialization in Computing from UCLA , and I hold a PGA
                    Class A certification as well as a Golf Genius certificate.
                  </p>
                </div>
              </section>

              {/* What I'm Doing Section */}
              <section className="mb-16">
                <h3 className="text-2xl font-bold text-primary font-serif mb-8">
                  What I'm Doing
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary p-6 rounded-lg shadow-custom flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary font-serif mb-2">
                        Web Design
                      </h4>
                      <p className="text-secondary text-sm font-sans">
                        The most modern and high-quality design made at a
                        professional level.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary p-6 rounded-lg shadow-custom flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary font-serif mb-2">
                        Web Development
                      </h4>
                      <p className="text-secondary text-sm font-sans">
                        High-quality development of sites at the professional
                        level.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary p-6 rounded-lg shadow-custom flex gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary font-serif mb-2">
                        Golf Instruction
                      </h4>
                      <p className="text-secondary text-sm font-sans">
                        Professional analysis of your golf swing and tips to
                        improve your game.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary p-6 rounded-lg shadow-custom flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <UserRoundCog className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary font-serif mb-2">
                        Golf Operations
                      </h4>
                      <p className="text-secondary text-sm font-sans">
                        Experience managing golf events, daily operations, and
                        enhancing member experience.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <ExperienceSection />
              {/* Experience Section */}
              {/* <section className="mb-16">
                <h3 className="text-2xl font-bold text-primary font-serif mb-8">
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="bg-primary p-8 rounded-lg shadow-custom">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary font-serif">
                          Senior Creative Director
                        </h4>
                        <p
                          className="font-medium font-sans"
                          style={{ color: "var(--primary-color)" }}
                        >
                          Company Name
                        </p>
                      </div>
                      <span className="text-secondary text-sm bg-secondary px-3 py-1 rounded-full font-sans mt-2 sm:mt-0">
                        2022 - Present
                      </span>
                    </div>
                    <p className="text-secondary font-sans">
                      Led innovative projects and drove significant improvements
                      in efficiency and outcomes. Managed cross-functional teams
                      and delivered exceptional results.
                    </p>
                  </div>

                  <div className="bg-primary p-8 rounded-lg shadow-custom">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary font-serif">
                          UI/UX Designer
                        </h4>
                        <p
                          className="font-medium font-sans"
                          style={{ color: "var(--primary-color)" }}
                        >
                          Previous Company
                        </p>
                      </div>
                      <span className="text-secondary text-sm bg-secondary px-3 py-1 rounded-full font-sans mt-2 sm:mt-0">
                        2020 - 2022
                      </span>
                    </div>
                    <p className="text-secondary font-sans">
                      Developed and implemented design solutions that enhanced
                      user experience and operational effectiveness.
                    </p>
                  </div>

                  <div className="bg-primary p-8 rounded-lg shadow-custom">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-primary font-serif">
                          Junior Designer
                        </h4>
                        <p
                          className="font-medium font-sans"
                          style={{ color: "var(--primary-color)" }}
                        >
                          Earlier Company
                        </p>
                      </div>
                      <span className="text-secondary text-sm bg-secondary px-3 py-1 rounded-full font-sans mt-2 sm:mt-0">
                        2018 - 2020
                      </span>
                    </div>
                    <p className="text-secondary font-sans">
                      Contributed to key design initiatives and gained valuable
                      experience in industry best practices.
                    </p>
                  </div>
                </div>
              </section> */}

              {/* Portfolio/Video Section */}
              <section className="mb-16">
                <h3 className="text-2xl font-bold text-primary font-serif mb-8">
                  Golf Swing
                </h3>
                <div className="bg-primary rounded-lg shadow-custom overflow-hidden">
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <video
                      controls
                      preload="none"
                      poster="https://res.cloudinary.com/djymzrhvb/image/upload/f_auto,q_auto/v1757887087/12B4FCF8-34DC-4B4E-9079-15F51885D049IMG_2163_vqavvt.jpg"
                      className="w-full h-full rounded-lg object-cover bg-black"
                    >
                      <source
                        src="https://res.cloudinary.com/djymzrhvb/video/upload/f_auto,q_auto/IMG_3177_1_bytsij.mov"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-primary font-serif mb-2">
                      Driver down the line
                    </h4>
                    <p className="text-secondary font-sans">
                      Hole 18 of Friendly Hills Country Club
                    </p>
                  </div>
                </div>
              </section>
              {/* Achievements Section */}
              <section className="mb-16">
                <h3 className="text-2xl font-bold text-primary font-serif mb-8">
                  PlayingAchievements
                </h3>
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="bg-primary p-6 rounded-lg shadow-custom flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-primary font-semibold font-serif">
                        2025 SCPGA Women’s Match Play Champion
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-primary font-semibold font-serif">
                        2025 SCPGA Women’s Section Champion
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-primary font-semibold font-serif">
                        2025 Rolex Women’s Player of the Year
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-primary font-semibold font-serif">
                        Former Member of the Epson Tour & Ladies European Tour
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* Footer  */}
      <footer
        className="bg-primary text-secondary mt-16 py-8 border-t border-primary"
        style={{ borderColor: "var(--primary-color)" }}
      >
        {/* Bottom Note */}
        <div className="mt-4 text-center text-sm text-secondary font-sans">
          <span>© {new Date().getFullYear()} Jenny Lee, PGA | </span>
          <span> Website designed and developed myself.</span>
        </div>
      </footer>
      ;
    </>
  );
};

export default Portfolio;
