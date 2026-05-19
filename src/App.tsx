/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { 
  BookOpen, 
  ChevronDown, 
  Computer, 
  GraduationCap, 
  MapPin, 
  MessageCircle, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Clock, 
  Users, 
  Award, 
  ArrowRight,
  Menu,
  X,
  Plus,
  Minus,
  Star,
  Quote
} from "lucide-react";

// --- Types ---
interface Course {
  id: string;
  title: string;
  description: string;
  icon: any;
  duration: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Data ---
const COURSES: Course[] = [
  {
    id: "computer",
    title: "Computer Training",
    description: "Master essential computer skills, from basic operations to advanced office software.",
    icon: Computer,
    duration: "4 - 8 Weeks"
  },
  {
    id: "professional",
    title: "Professional Development",
    description: "Enhance your leadership, communication, and management skills for the modern workplace.",
    icon: Award,
    duration: "6 Weeks"
  },
  {
    id: "office",
    title: "Office Administration",
    description: "Learn professional administration tasks, secretarial duties, and office management.",
    icon: BookOpen,
    duration: "12 Weeks"
  },
  {
    id: "career",
    title: "Career Readiness",
    description: "Prepare for your dream job with interview coaching, CV writing, and job search strategies.",
    icon: GraduationCap,
    duration: "2 Weeks"
  },
  {
    id: "business",
    title: "Business Skills",
    description: "Understand the fundamentals of business, entrepreneurship, and customer service.",
    icon: Users,
    duration: "8 Weeks"
  },
  {
    id: "practical",
    title: "Practical Skills Training",
    description: "Hands-on training in industry-specific tasks to make you immediately employable.",
    icon: CheckCircle2,
    duration: "Various"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Tinashe Moyo",
    role: "Admin Assistant",
    content: "The computer training at Career Solutions Academy changed my life. I went from having zero skills to being fully confident in an office environment.",
    rating: 5
  },
  {
    id: 2,
    name: "Sizakele Ndlovu",
    role: "Business Owner",
    content: "The professional development course helped me structure my small business better. The mentors truly care about your success.",
    rating: 5
  },
  {
    id: 3,
    name: "Blessing Sibanda",
    role: "Recent Graduate",
    content: "I finally achieved my dream of getting a professional certification. The Christian values and encouraging environment kept me going.",
    rating: 5
  }
];

const FAQS: FAQItem[] = [
  {
    question: "What courses do you offer?",
    answer: "We offer a wide range of courses including Computer Training, Office Administration, Professional Development, and Career Readiness programs."
  },
  {
    question: "How do I enrol?",
    answer: "You can enrol by visiting our campus in Bulawayo, filling out the online form below, or contacting us via WhatsApp at +263 78 085 0300."
  },
  {
    question: "Where are you located?",
    answer: "We are at No. 52, 1st Floor Masters Building, Between 3rd & 4th Avenue, Along Fort Street, Bulawayo, Zimbabwe."
  },
  {
    question: "Are the programs beginner-friendly?",
    answer: "Yes! Most of our courses are designed to take you from beginner to professional level with hands-on support."
  },
  {
    question: "How do I contact the academy?",
    answer: "You can reach us by phone/WhatsApp at +263 78 085 0300 or email us at careertrainingacademy5@gmail.com."
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Why Us", href: "#why-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white">
            <BookOpen size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-lg leading-tight ${isScrolled ? "text-teal-900" : "text-white sm:text-teal-900"}`}>Career Solutions</span>
            <span className={`text-[10px] uppercase tracking-widest font-semibold ${isScrolled ? "text-teal-600" : "text-teal-100 sm:text-teal-600"}`}>Academy</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors ${isScrolled ? "text-gray-600 hover:text-teal-600" : "text-white/80 hover:text-white sm:text-gray-600 sm:hover:text-teal-600"}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#enrol" 
            className="bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20"
          >
            Enrol Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className={isScrolled ? "text-teal-900" : "text-white"} /> : <Menu size={28} className={isScrolled ? "text-teal-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-teal-600"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#enrol" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-teal-600 text-white px-6 py-3 rounded-xl text-center font-semibold text-lg"
              >
                Enrol Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50 rounded-l-[100px] hidden lg:block -z-10" />
      
      <div className="container mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Star size={14} className="fill-teal-700" />
            Empowering Your Future
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-teal-950 leading-[1.1] mb-6">
            Upgrade Your <br />
            <span className="text-teal-600 italic">Career Standards</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
            Professional career training designed to help you grow your skills, unlock opportunities, and achieve your future goals with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#enrol" 
              className="w-full sm:w-auto bg-teal-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 group"
            >
              Enrol Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/263780850300"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-teal-50 transition-all"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-gray-100 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-teal-900">500+</span>
              <span className="text-sm text-gray-500 font-medium">Students Trained</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-teal-900">95%</span>
              <span className="text-sm text-gray-500 font-medium">Success Rate</span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-teal-900">10+</span>
              <span className="text-sm text-gray-500 font-medium">Programs</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl shadow-teal-900/10 aspect-[4/5] sm:aspect-square">
            <img 
              src="/src/assets/images/career_hero_1779179693514.png" 
              alt="Students learning" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating elements */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-teal-50 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Verified Training</p>
              <p className="text-sm font-bold text-teal-900">Professional Excellence</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 z-20 bg-teal-900 p-6 rounded-2xl shadow-2xl text-white max-w-[200px]"
          >
            <GraduationCap size={40} className="mb-3 text-teal-400" />
            <p className="text-sm font-serif italic mb-1 leading-tight">
              "Every career goal is achievable."
            </p>
            <p className="text-[10px] uppercase font-bold text-teal-400">In God we trust</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/src/assets/images/computer_lab_1779179710811.png" 
                  alt="Training" 
                  className="rounded-3xl shadow-lg border-4 border-white"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="/src/assets/images/workshop_group_1779179756268.png" 
                  alt="Workshop" 
                  className="rounded-3xl shadow-lg border-4 border-white"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-12">
                <img 
                  src="/src/assets/images/graduation_joy_1779179737714.png" 
                  alt="Graduation" 
                  className="rounded-3xl shadow-lg border-4 border-white h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600 mb-4 inline-block border-b-2 border-teal-600 pb-1">
              About the Academy
            </h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold text-teal-950 mb-8 leading-tight">
              Committed to your <br />
              <span className="italic">Career Achievement</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                Career Solutions Academy is a professional career training institute based in Bulawayo, committed to helping individuals improve their skills, confidence, and career opportunities through quality training and education.
              </p>
              <p>
                We believe that hope is the foundation of growth. Our mission is to upgrade career standards for everyone, providing the solutions seekers need to navigate the modern job market.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-teal-600 shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-900 mb-1">Christian Values</h4>
                    <p className="text-sm text-gray-500 italic">"In God we trust."</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-teal-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-900 mb-1">Located in Bulawayo</h4>
                    <p className="text-sm text-gray-500">Accessible city-center campus.</p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-900 p-8 rounded-[32px] text-white mt-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
                <Quote size={40} className="text-teal-400/30 mb-4" />
                <p className="text-xl font-serif text-teal-50 mb-4 relative z-10 italic">
                  “Every career goal is achievable. In God we trust.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-teal-400" />
                  <p className="text-xs uppercase tracking-widest font-bold text-teal-400">Our Founder's Promise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600 mb-4">Our Programs</h2>
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-teal-950 mb-6">Explore Our <span className="italic">Career Training</span></h3>
          <p className="text-gray-600 text-lg">
            Each of our programs is designed with industry standards in mind, ensuring you gain practical, employable skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, idx) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[40px] bg-white border border-gray-100 hover:border-teal-100 hover:shadow-2xl hover:shadow-teal-900/5 transition-all group relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-50 rounded-full group-hover:scale-110 transition-transform -z-0 opacity-50" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <course.icon size={32} />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-teal-600" />
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{course.duration}</span>
                </div>
                
                <h4 className="text-2xl font-bold text-teal-950 mb-4">{course.title}</h4>
                <p className="text-gray-500 mb-8 line-clamp-3">
                  {course.description}
                </p>
                
                <a 
                  href="#enrol" 
                  className="inline-flex items-center gap-2 font-bold text-teal-600 group-hover:gap-3 transition-all"
                >
                  Enrol Now
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-teal-50 p-8 rounded-[40px] border border-teal-100 max-w-2xl">
            <h4 className="text-xl font-bold text-teal-900">Don't see the training you need?</h4>
            <p className="text-gray-600">Contact us to discuss custom corporate training or upcoming specialized programs.</p>
            <a 
              href="#contact" 
              className="bg-white border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-2xl font-bold hover:bg-teal-600 hover:text-white transition-all shadow-md shadow-teal-900/5"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    { title: "Career-Focused", icon: Award, text: "Curriculum designed to make you stand out in the job market." },
    { title: "Professional Trainers", icon: Users, text: "Learn from experts who bring real-world experience." },
    { title: "Supportive Environment", icon: MessageCircle, text: "A welcoming, Christian-based atmosphere that builds confidence." },
    { title: "Affordable Training", icon: CheckCircle2, text: "Quality education that is accessible and value-driven." },
    { title: "Growth Opportunities", icon: ArrowRight, text: "Unlock your potential and achieve achievable goals." },
    { title: "Practical Learning", icon: Computer, text: "Beyond theory—we focus on hands-on practical skills." }
  ];

  return (
    <section id="why-us" className="py-24 bg-teal-950 text-white overflow-hidden relative">
      <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full -top-64 -right-64" />
      <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full -bottom-96 -left-96" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-400 mb-4">Why Choose Us</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight">
              Your Future is <br />
              <span className="italic text-teal-400">Our Priority</span>
            </h3>
            <p className="text-teal-100/70 text-lg mb-10 leading-relaxed">
              We don't just provide courses; we provide a path to professional transformation. Our focus is on the individual—upgrading your standards so you can reach your goals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-teal-950 transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-bold">Recognized Certificates</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-teal-950 transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-bold">1-on-1 Mentorship</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-teal-400 group-hover:bg-teal-400 group-hover:text-teal-950 transition-colors">
                  <CheckCircle2 size={24} />
                </div>
                <span className="font-bold">Job Search Support</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div 
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-[32px] border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 bg-teal-400/20 rounded-2xl flex items-center justify-center text-teal-400 mb-6 group-hover:bg-teal-400 group-hover:text-teal-950 transition-all">
                  <reason.icon size={28} />
                </div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-teal-100/60 leading-relaxed">
                  {reason.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SuccessSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-teal-50 rounded-[64px] p-12 lg:p-20 overflow-hidden relative text-center">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600 mb-6">Student Success</h2>
            <h3 className="text-4xl lg:text-6xl font-serif font-bold text-teal-950 mb-10 leading-tight">
              Believe in your <span className="italic">Transformation</span>
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-12 mb-16">
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">98%</div>
                <p className="font-bold text-teal-900 uppercase text-xs tracking-widest">Satisfaction rate</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">250+</div>
                <p className="font-bold text-teal-900 uppercase text-xs tracking-widest">Jobs Secured</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-5xl font-bold text-teal-600 mb-2">5.0</div>
                <p className="font-bold text-teal-900 uppercase text-xs tracking-widest">Average Rating</p>
              </div>
            </div>
            
            <img 
              src="/src/assets/images/graduation_joy_1779179737714.png" 
              alt="Success" 
              className="w-full max-w-4xl mx-auto rounded-[40px] shadow-2xl border-4 border-white mb-12"
              referrerPolicy="no-referrer"
            />
            
            <p className="text-xl text-teal-900 font-serif italic max-w-2xl mx-auto">
              "Joining Career Solutions Academy was the best decision for my career. The confidence I gained is priceless."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Choose Your Training", icon: BookOpen, text: "Select a program that matches your career goals and interests." },
    { title: "Register & Learn", icon: Clock, text: "Join our classes in Bulawayo and learn from professional trainers." },
    { title: "Upgrade Your Future", icon: GraduationCap, text: "Get certified and unlock new professional opportunities immediately." }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600 mb-4">The Journey</h2>
          <h3 className="text-4xl font-serif font-bold text-teal-950">How It <span className="italic">Works</span></h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-teal-100 -translate-y-12" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10">
              <div className="w-24 h-24 bg-white border-2 border-teal-600 rounded-full flex items-center justify-center text-teal-600 mb-8 shadow-xl shadow-teal-900/5 group">
                <step.icon size={40} className="group-hover:scale-110 transition-transform" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-teal-950 mb-4">{step.title}</h4>
              <p className="text-gray-500 leading-relaxed px-4">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const images = [
    "/src/assets/images/career_hero_1779179693514.png",
    "/src/assets/images/computer_lab_1779179710811.png",
    "/src/assets/images/workshop_group_1779179756268.png",
    "/src/assets/images/graduation_joy_1779179737714.png",
    "/src/assets/images/career_hero_1779179693514.png", // Reuse for grid fill
    "/src/assets/images/computer_lab_1779179710811.png"
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600 mb-4">Our Campus</h2>
          <h3 className="text-4xl font-serif font-bold text-teal-950">Academy <span className="italic">Gallery</span></h3>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-lg border-4 border-white break-inside-avoid shadow-teal-900/5 group"
            >
              <img 
                src={src} 
                alt={`Academy Life ${idx}`} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600 mb-4">Student Voices</h2>
          <h3 className="text-4xl font-serif font-bold text-teal-950">What Our <span className="italic">Students Say</span></h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-10 rounded-[48px] bg-white border border-gray-100 shadow-xl shadow-teal-900/5 flex flex-col justify-between group h-full">
              <div>
                <div className="flex gap-1 text-teal-400 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 font-medium leading-relaxed mb-8">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-teal-900">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EnrollmentForm = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus("loading");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <section id="enrol" className="py-24 bg-teal-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-400 mb-6">Take the first step</h2>
            <h3 className="text-4xl lg:text-5xl font-serif font-bold mb-8 leading-tight">
              Start Building <br />
              <span className="italic text-teal-400">Your Future Today</span>
            </h3>
            <p className="text-teal-100/80 text-lg mb-10 leading-relaxed">
              Join Career Solutions Academy and take the next step toward your professional goals. Fill out the form and our career advisor will contact you.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp Inquiry</h4>
                  <p className="text-teal-100/60">+263 78 085 0300</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-teal-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email Admissions</h4>
                  <p className="text-teal-100/60">careertrainingacademy5@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-[40px] p-8 lg:p-12 text-gray-900 shadow-2xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-2xl font-bold text-teal-900 mb-2">Request Received!</h4>
                  <p className="text-gray-500 mb-8">Thank you for your interest. A career consultant will be in touch within 24 hours.</p>
                  <button 
                    onClick={() => setFormStatus("idle")}
                    className="text-teal-600 font-bold hover:underline"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Enter your name"
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-teal-600 focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-teal-900 mb-2 uppercase tracking-widest">Phone / WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+263 ..."
                        className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-teal-600 focus:bg-white transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-teal-900 mb-2 uppercase tracking-widest">Course Choice</label>
                      <select className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-teal-600 focus:bg-white transition-all outline-none appearance-none">
                        <option>Computer Training</option>
                        <option>Business Skills</option>
                        <option>Professional Dev</option>
                        <option>Office Skills</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-teal-900 mb-2 uppercase tracking-widest">Message (Optional)</label>
                    <textarea 
                      rows={3}
                      placeholder="How can we help you achieve your goals?"
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-teal-600 focus:bg-white transition-all outline-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    disabled={formStatus === "loading"}
                    className="w-full bg-teal-600 text-white py-5 rounded-[24px] font-bold text-lg hover:bg-teal-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {formStatus === "loading" ? "Processing..." : "Submit Enrolment Request"}
                    <ArrowRight size={22} />
                  </button>
                  <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">In God we trust. We respect your privacy.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600 mb-4">Location</h2>
            <h3 className="text-4xl font-serif font-bold text-teal-950 mb-8">Visit Our <span className="italic">Campus</span></h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-teal-900 mb-2">Bulawayo Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    No. 52, 1st Floor Masters Building,<br />
                    Between 3rd & 4th Avenue,<br />
                    Along Fort Street, Bulawayo, Zimbabwe
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-teal-900 mb-2">Opening Hours</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex justify-between w-64"><span>Monday - Friday:</span> <span className="font-bold">8:00 AM - 4:30 PM</span></li>
                    <li className="flex justify-between w-64"><span>Saturday:</span> <span className="font-bold">9:00 AM - 12:00 PM</span></li>
                    <li className="flex justify-between w-64"><span>Sunday:</span> <span className="font-bold">Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-1 bg-gray-100 rounded-[40px] overflow-hidden shadow-inner h-[300px]">
               {/* Mock Map */}
               <div className="w-full h-full bg-teal-50 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative z-10 text-center p-6">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 animate-bounce">
                      <MapPin size={32} />
                    </div>
                    <p className="font-bold text-teal-900">Career Solutions Academy</p>
                    <p className="text-sm text-gray-500">1st Floor Masters Building, Fort Street</p>
                    <a 
                      href="https://www.google.com/maps/search/Masters+Building+Bulawayo" 
                      target="_blank"
                      className="mt-4 inline-block text-teal-600 font-bold text-sm bg-white px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
                    >
                      Open in Google Maps
                    </a>
                  </div>
               </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-600 mb-4">Questions?</h2>
            <h3 className="text-4xl font-serif font-bold text-teal-950 mb-8">Frequently Asked <span className="italic">Questions</span></h3>
            
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface AccordionProps {
  question: string;
  answer: string;
  key?: any;
}

const AccordionItem = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-100 rounded-[24px] overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between text-teal-950 hover:bg-teal-50/30 transition-colors"
      >
        <span className="font-bold text-lg">{question}</span>
        {isOpen ? <Minus size={20} className="text-teal-600" /> : <Plus size={20} className="text-teal-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 text-gray-500 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center text-white">
                <BookOpen size={28} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-tight text-teal-950">Career Solutions</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-teal-600">Academy</span>
              </div>
            </div>
            <p className="text-gray-500 mb-8 italic">
              “Hope for the hopeless, solution for the seekers”
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-teal-600 hover:border-teal-600 transition-all cursor-pointer">
                <Users size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-teal-600 hover:border-teal-600 transition-all cursor-pointer">
                <Mail size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-400 hover:text-teal-600 hover:border-teal-600 transition-all cursor-pointer">
                <Phone size={18} />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-teal-950 mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#about" className="hover:text-teal-600 transition-colors">About Academy</a></li>
              <li><a href="#courses" className="hover:text-teal-600 transition-colors">Our Programs</a></li>
              <li><a href="#enrol" className="hover:text-teal-600 transition-colors">Application Form</a></li>
              <li><a href="#gallery" className="hover:text-teal-600 transition-colors">Campus Gallery</a></li>
              <li><a href="#contact" className="hover:text-teal-600 transition-colors">Contact Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-teal-950 mb-6 uppercase tracking-widest text-sm">Our Programs</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#courses" className="hover:text-teal-600 transition-colors">Computer Training</a></li>
              <li><a href="#courses" className="hover:text-teal-600 transition-colors">Office Skills</a></li>
              <li><a href="#courses" className="hover:text-teal-600 transition-colors">Career Readiness</a></li>
              <li><a href="#courses" className="hover:text-teal-600 transition-colors">Business Skills</a></li>
              <li><a href="#courses" className="hover:text-teal-600 transition-colors">Admin Courses</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-teal-950 mb-6 uppercase tracking-widest text-sm">Bulawayo Office</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li className="flex gap-3">
                <MapPin size={20} className="shrink-0 text-teal-600" />
                <span>No. 52, 1st Floor Masters Building, Fort St</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="shrink-0 text-teal-600" />
                <span>+263 78 085 0300</span>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="shrink-0 text-teal-600" />
                <span className="break-all">careertrainingacademy5@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Career Solutions Academy. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>In God we trust</span>
            <span className="text-teal-200">•</span>
            <span>Achieve Success</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyUs />
        <SuccessSection />
        <HowItWorks />
        <GallerySection />
        <Testimonials />
        <EnrollmentForm />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/263780850300"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-teal-600 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-teal-700 hover:scale-110 transition-all animate-bounce"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
