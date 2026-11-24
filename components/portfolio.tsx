"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Brain, BriefcaseBusiness, Check, ChevronDown,
  Code2, ExternalLink, Github, GraduationCap, Layers3, Linkedin, Mail, MapPin,
  Menu, Moon, Phone, Send, Sparkles, Sun, Terminal, Trophy, Users, X, BookOpen,
  Copy, CheckCircle2, Award, FileText
} from "lucide-react";
import { profile, projects, skillGroups, certifications } from "@/lib/data";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: .55, ease: "easeOut" } } };
const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(3, "Please add a subject."),
  message: z.string().min(10, "Message should be at least 10 characters.")
});
type FormValues = z.infer<typeof schema>;

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .25 }} className="section-heading">
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </motion.div>;
}

function Navbar({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const links = ["About", "Education", "Skills", "Projects", "Achievements", "Certifications", "Contact"];
  return <header className="navbar">
    <a className="brand" href="#home" aria-label="Vuppala Pranavi home"><span className="brand-mark">P.</span><span>pranavi<span className="brand-dot">.</span></span></a>
    <nav className={open ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
      {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}
    </nav>
    <div className="nav-actions">
      <button className="icon-button theme-button" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
      <a className="button button-small button-primary nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
      <button className="icon-button mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}

function Hero() {
  const titles = ["Software Developer", "AI & Full-Stack Enthusiast", "Problem Solver"];
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => { const timer = setInterval(() => setTitleIndex((v) => (v + 1) % titles.length), 2600); return () => clearInterval(timer); }, []);
  return <section id="home" className="hero section-shell">
    <div className="hero-grid-bg"/>
    <div className="hero-content">
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability"><span className="pulse-dot"/> OPEN TO INTERNSHIPS & ENTRY-LEVEL OPPORTUNITIES</motion.div>
      <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>HELLO, I'M</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}>Vuppala <span>Pranavi.</span></motion.h1>
      <div className="hero-role"><span className="role-prefix">I build as a</span> <AnimatePresence mode="wait"><motion.span key={titleIndex} className="typing-role" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .25 }}>{titles[titleIndex]}</motion.span></AnimatePresence><i className="typing-cursor"/></div>
      <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }}>{profile.intro}</motion.p>
      <motion.div className="hero-buttons" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 }}>
        <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17}/></a>
        <a className="button button-outline" href="/resume.pdf" download onClick={(e) => { if (typeof window !== "undefined" && !document.querySelector('a[href="/resume.pdf"]')?.getAttribute("href")) e.preventDefault(); }}>Download resume <FileText size={16}/></a>
        <a className="text-link" href="#contact">Contact me <ArrowRight size={16}/></a>
      </motion.div>
      <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}>
        <span>FIND ME ON</span><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a><a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2/></a>
      </motion.div>
    </div>
    <motion.div className="hero-visual" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
      <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
      <div className="profile-card">
        <div className="profile-topline"><span>DEVELOPER PROFILE</span><span className="profile-live"><i/> ACTIVE</span></div>
        <div className="avatar-placeholder"><span>VP</span><div className="avatar-spark"><Sparkles size={18}/></div></div>
        <h3>Vuppala Pranavi</h3><p>Information Technology · BVRIT</p>
        <div className="profile-divider"/>
        <div className="profile-mini-grid"><div><strong>8.15</strong><span>CGPA</span></div><div><strong>200+</strong><span>DSA SOLVED</span></div><div><strong>2027</strong><span>GRADUATION</span></div></div>
        <div className="profile-code"><span className="code-purple">const</span> <span className="code-blue">focus</span> = [<span className="code-green">"AI"</span>, <span className="code-green">"Full Stack"</span>, <span className="code-green">"DSA"</span>];</div>
      </div>
      <div className="float-chip chip-ai"><Brain size={16}/> AI / RAG</div><div className="float-chip chip-code"><Code2 size={16}/> Problem solving</div>
      <div className="hero-glow"/>
    </motion.div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
  </section>;
}

function About() {
  const cards = [{ icon: Code2, title: "200+ DSA problems", detail: "Consistent algorithmic practice" }, { icon: Brain, title: "AI-powered apps", detail: "OCR, semantic retrieval & LLMs" }, { icon: Layers3, title: "Full-stack builds", detail: "Frontend, backend & databases" }, { icon: Trophy, title: "Competitive coding", detail: "LeetCode, CodeChef & Codeforces" }];
  return <section id="about" className="section section-alt"><div className="container">
    <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curious by nature. Builder by choice." text="I enjoy turning ideas into useful software and learning the systems behind it."/>
    <div className="about-layout"><motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="about-copy">
      <span className="large-quote">“</span><h3>Building thoughtful solutions through <span>code, curiosity, and consistency.</span></h3>
      <p>I’m a final-year B.Tech Information Technology student at BVRIT, with a solid foundation in Data Structures and Algorithms, programming, Python, and SQL. I have hands-on experience developing AI-powered applications and full-stack web projects.</p>
      <p>I’m especially interested in Artificial Intelligence, Machine Learning, and Autonomous Systems. I like exploring how emerging technologies can be used to build scalable, practical applications that solve real-world problems.</p>
      <a className="text-link" href="#projects">See what I’ve been building <ArrowRight size={16}/></a>
    </motion.div><div className="about-highlights">{cards.map(({icon: Icon,title,detail},i)=><motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i*.07 }} className="highlight-card" key={title}><div className="highlight-icon"><Icon size={20}/></div><div><h4>{title}</h4><p>{detail}</p></div><ArrowUpRight className="highlight-arrow" size={17}/></motion.div>)}</div></div>
  </div></section>;
}

function Education() {
  const entries = [
    { degree: "Bachelor of Technology", school: "BVRIT – B.V. Raju Institute of Technology", field: "Information Technology", period: "2023 — 2027", score: "8.15 CGPA", current: true },
    { degree: "Senior Secondary (MPC)", school: "Narayana Junior College, Hyderabad", field: "Mathematics, Physics & Chemistry", period: "2021 — 2023", score: "93%", current: false }
  ];
  return <section id="education" className="section"><div className="container"><SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education" text="The academic foundation behind my technical journey."/>
    <div className="timeline">{entries.map((e,i)=><motion.div key={e.school} className="timeline-item" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="timeline-marker"><GraduationCap size={17}/></div><div className="education-card"><div className="education-meta"><span>{e.period}</span>{e.current && <span className="current-tag">CURRENT</span>}</div><div className="education-main"><div><h3>{e.degree}</h3><h4>{e.school}</h4><p>{e.field}</p></div><div className="score-pill">{e.score}</div></div></div></motion.div>)}</div>
  </div></section>;
}

function Skills() {
  const icons = [Code2, Layers3, Brain, Terminal, Users];
  return <section id="skills" className="section section-alt"><div className="container"><SectionHeading eyebrow="MY TOOLKIT" title="Technical skills" text="Technologies and fundamentals I use to learn, build, and solve problems."/>
    <div className="skills-grid">{skillGroups.map((group,i)=>{const Icon=icons[i];return <motion.div className="skill-card" key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i*.06 }}><div className="skill-card-head"><span className="skill-icon"><Icon size={19}/></span><h3>{group.title}</h3></div><div className="skill-tags">{group.skills.map(skill=><span key={skill}>{skill}</span>)}</div></motion.div>})}</div>
  </div></section>;
}

function Projects() {
  const [filter,setFilter]=useState("All"); const [selected,setSelected]=useState<(typeof projects)[number]|null>(null);
  const filters=["All","AI & RAG","Full Stack"];
  const visible=useMemo(()=>filter==="All"?projects:projects.filter(p=>p.category===filter),[filter]);
  return <section id="projects" className="section"><div className="container"><SectionHeading eyebrow="SELECTED WORK" title="Projects that bring ideas to life." text="A selection of practical applications across AI-powered systems and full-stack development."/>
    <div className="project-toolbar"><span className="project-count">FEATURED PROJECTS <b>0{visible.length}</b></span><div className="filter-pills" role="group" aria-label="Filter projects">{filters.map(f=><button key={f} className={filter===f?"filter-pill active":"filter-pill"} onClick={()=>setFilter(f)}>{f}</button>)}</div></div>
    <div className="projects-grid">{visible.map((p,i)=><motion.article layout key={p.id} className={`project-card project-${p.id}`} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i*.08 }}>
      <div className="project-art"><div className="art-orb"/><div className="art-window"><div className="window-dots"><i/><i/><i/></div>{p.id==="medalign"?<div className="medical-art"><div className="medical-cross">+</div><div className="medical-line line-a"/><div className="medical-line line-b"/><div className="medical-line line-c"/><span>MEDALIGN AI</span></div>:<div className="outpass-art"><div className="outpass-icon"><FileText size={28}/></div><div className="outpass-lines"><i/><i/><i/></div><div className="approval-stamp"><Check size={16}/> APPROVED</div></div>}</div><span className="art-label">{p.category}</span></div>
      <div className="project-body"><div className="project-title-row"><div><span className="project-number">0{i+1} / CASE STUDY</span><h3>{p.title}</h3><h4>{p.subtitle}</h4></div><a className="round-link" href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub repository`}><ArrowUpRight size={19}/></a></div><p>{p.description}</p><div className="project-stack">{p.stack.map(t=><span key={t}>{t}</span>)}</div><div className="project-actions"><button className="text-link" onClick={()=>setSelected(p)}>View details <ArrowRight size={16}/></button><a href={p.github} target="_blank" rel="noreferrer" className="repo-link"><Github size={16}/> GitHub <ExternalLink size={13}/></a></div></div>
    </motion.article>)}</div>
  </div>
  <AnimatePresence>{selected&&<div className="modal-backdrop" role="presentation" onMouseDown={(e)=>{if(e.target===e.currentTarget)setSelected(null)}}><motion.div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" initial={{opacity:0,y:20,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10}}><button className="modal-close icon-button" onClick={()=>setSelected(null)} aria-label="Close project details"><X/></button><span className="eyebrow">{selected.category} · PROJECT DETAILS</span><h2 id="modal-title">{selected.title}</h2><h3>{selected.subtitle}</h3><p>{selected.description}</p><h4>Key features</h4><ul className="modal-list">{selected.features.map(x=><li key={x}><CheckCircle2 size={16}/>{x}</li>)}</ul><h4>Project highlights</h4><ul className="modal-list">{selected.highlights.map(x=><li key={x}><ArrowRight size={15}/>{x}</li>)}</ul><h4>Technology stack</h4><div className="project-stack">{selected.stack.map(x=><span key={x}>{x}</span>)}</div><a className="button button-primary modal-repo" href={selected.github} target="_blank" rel="noreferrer">View repository <Github size={16}/></a></motion.div></div>}</AnimatePresence>
  </section>;
}

function Achievements() {
  const ratings=[{name:"LeetCode",rating:"1691",url:profile.leetcode,icon:"LC"},{name:"CodeChef",rating:"1164",url:profile.codechef,icon:"CC"},{name:"Codeforces",rating:"1022",url:profile.codeforces,icon:"CF"}];
  return <section id="achievements" className="section section-alt"><div className="container"><SectionHeading eyebrow="CONSISTENCY IN PRACTICE" title="Achievements & coding milestones" text="Small steps, repeated often. A snapshot of my problem-solving practice."/>
    <div className="achievement-grid"><motion.div className="problems-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}}><div className="achievement-icon"><Trophy size={22}/></div><span className="metric-label">PROBLEM SOLVING</span><div className="big-metric">200<span>+</span></div><h3>DSA problems solved</h3><p>Across multiple coding platforms, strengthening algorithmic thinking and programming fundamentals.</p><div className="metric-bottom"><span>Practice · Learn · Repeat</span><Code2 size={17}/></div></motion.div>
    <div className="rating-panel"><div className="rating-panel-head"><div><span className="eyebrow">CODING PLATFORMS</span><h3>Competitive programming ratings</h3></div><span className="rating-spark"><Sparkles size={19}/></span></div>{ratings.map((r,i)=><motion.a key={r.name} href={r.url} target="_blank" rel="noreferrer" className="rating-row" variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*.08}}><span className={`platform-mark mark-${r.icon.toLowerCase()}`}>{r.icon}</span><span className="rating-name">{r.name}</span><strong>{r.rating}</strong><ArrowUpRight size={17}/></motion.a>)}<p className="rating-note">Ratings shown as provided; they may change over time.</p></div></div>
  </div></section>;
}

function Certifications() {
  return <section id="certifications" className="section"><div className="container"><SectionHeading eyebrow="CONTINUOUS LEARNING" title="Certifications" text="Courses and learning experiences that complement my hands-on work."/>
    <div className="cert-grid">{certifications.map((c,i)=><motion.div className="cert-card" key={c.name} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*.06}}><div className="cert-top"><span className="cert-icon"><Award size={20}/></span><span className="cert-index">0{i+1}</span></div><h3>{c.name}</h3><p>{c.org}</p><span className="cert-category">{c.category}</span><span className="cert-unavailable">Certificate link not provided</span></motion.div>)}</div>
  </div></section>;
}

function CodingProfiles() {
  const profiles=[{name:"LeetCode",rating:"1691",url:profile.leetcode,desc:"Algorithmic problem solving",symbol:"LC"},{name:"CodeChef",rating:"1164",url:profile.codechef,desc:"Competitive programming",symbol:"CC"},{name:"Codeforces",rating:"1022",url:profile.codeforces,desc:"Programming contests",symbol:"CF"},{name:"GitHub",rating:"Repositories",url:profile.github,desc:"Explore my project work",symbol:"GH"}];
  return <section className="section section-alt"><div className="container"><SectionHeading eyebrow="FIND ME ONLINE" title="Coding profiles" text="My coding profiles reflect continuous practice in programming and algorithmic thinking."/><div className="coding-grid">{profiles.map((p,i)=><motion.a key={p.name} className="coding-card" href={p.url} target="_blank" rel="noreferrer" variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{delay:i*.06}}><span className="coding-symbol">{p.symbol}</span><div><h3>{p.name}</h3><p>{p.desc}</p></div><div className="coding-rating"><span>{p.rating}</span>{p.name!=="GitHub"&&<small>RATING</small>}</div><ArrowUpRight className="coding-arrow" size={17}/></motion.a>)}</div></div></section>;
}

function Contact() {
  const {register,handleSubmit,reset,formState:{errors}}=useForm<FormValues>({resolver:zodResolver(schema)});
  const [status,setStatus]=useState<{type:"success"|"error";message:string}|null>(null); const [loading,setLoading]=useState(false);
  const submit=async(values:FormValues)=>{setLoading(true);setStatus(null);try{const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values)});const data=await res.json();if(!res.ok)throw new Error(data.error||"Unable to send message.");setStatus({type:"success",message:"Thanks for reaching out! Your message has been sent."});reset();}catch(e){setStatus({type:"error",message:e instanceof Error?e.message:"Something went wrong. Please email me directly."});}finally{setLoading(false);}};
  return <section id="contact" className="section contact-section"><div className="container"><SectionHeading eyebrow="HAVE A PROJECT OR OPPORTUNITY?" title="Let's connect." text="I’m interested in software development opportunities, internships, technical collaborations, and projects involving AI and modern application development."/>
    <div className="contact-layout"><motion.div className="contact-info" variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}}><div className="contact-note"><span className="contact-note-icon"><Mail size={21}/></span><h3>Have something in mind?</h3><p>Feel free to reach out. I’d be happy to connect and discuss ideas, opportunities, or collaborations.</p></div><div className="contact-details"><a href={`mailto:${profile.email}`}><span><Mail size={17}/></span><div><small>EMAIL</small><strong>{profile.email}</strong></div><ArrowUpRight size={16}/></a><a href={`tel:${profile.phone}`}><span><Phone size={17}/></span><div><small>PHONE</small><strong>+91 80197 90096</strong></div><ArrowUpRight size={16}/></a><div><span><MapPin size={17}/></span><div><small>LOCATION</small><strong>{profile.location}</strong></div></div></div><div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div></motion.div>
    <motion.form className="contact-form" onSubmit={handleSubmit(submit)} variants={reveal} initial="hidden" whileInView="visible" viewport={{once:true}}><div className="form-heading"><span className="eyebrow">SEND A MESSAGE</span><h3>Start a conversation</h3></div><div className="form-row"><label>Your name<input {...register("name")} placeholder="Enter your name" aria-invalid={!!errors.name}/>{errors.name&&<small className="field-error">{errors.name.message}</small>}</label><label>Email address<input {...register("email")} type="email" placeholder="you@example.com" aria-invalid={!!errors.email}/>{errors.email&&<small className="field-error">{errors.email.message}</small>}</label></div><label>Subject<input {...register("subject")} placeholder="What would you like to discuss?" aria-invalid={!!errors.subject}/>{errors.subject&&<small className="field-error">{errors.subject.message}</small>}</label><label>Message<textarea {...register("message")} rows={5} placeholder="Write your message here..." aria-invalid={!!errors.message}/>{errors.message&&<small className="field-error">{errors.message.message}</small>}</label>{status&&<div role="status" className={`form-status ${status.type}`}>{status.type==="success"?<CheckCircle2 size={17}/>:<X size={17}/>} {status.message}</div>}<button className="button button-primary send-button" type="submit" disabled={loading}>{loading?"Sending...":"Send message"}{loading?<span className="spinner"/>:<Send size={16}/>}</button><p className="form-footnote">Your details are used only to respond to your message.</p></motion.form></div>
  </div></section>;
}

function Footer() {
  const nav=["About","Skills","Projects","Achievements","Contact"];
  return <footer className="footer"><div className="container"><div className="footer-main"><div><a className="brand footer-brand" href="#home"><span className="brand-mark">P.</span><span>pranavi<span className="brand-dot">.</span></span></a><p>Information Technology Student<br/>Software Developer · AI & Full Stack</p></div><div className="footer-nav"><span>EXPLORE</span>{nav.map(x=><a key={x} href={`#${x.toLowerCase()}`}>{x}</a>)}</div><div className="footer-nav"><span>CONNECT</span><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a><a href={profile.codechef} target="_blank" rel="noreferrer">CodeChef</a><a href={profile.codeforces} target="_blank" rel="noreferrer">Codeforces</a></div><div className="footer-email"><span>HAVE A GOOD ONE?</span><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={16}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Vuppala Pranavi. All rights reserved.</span><span>Designed & built with care <span className="footer-heart">♥</span></span><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a></div></div></footer>;
}

export default function Portfolio() {
  const [dark,setDark]=useState(true); const [loaded,setLoaded]=useState(false);
  useEffect(()=>{const saved=localStorage.getItem("portfolio-theme");const prefers=window.matchMedia("(prefers-color-scheme: dark)").matches;setDark(saved?saved==="dark":prefers);const timer=setTimeout(()=>setLoaded(true),450);return()=>clearTimeout(timer);},[]);
  useEffect(()=>{document.documentElement.classList.toggle("dark",dark);localStorage.setItem("portfolio-theme",dark?"dark":"light");},[dark]);
  return <div className={dark?"site theme-dark":"site theme-light"}>
    <AnimatePresence>{!loaded&&<motion.div className="loading-screen" initial={{opacity:1}} exit={{opacity:0}}><span className="loading-logo">P.</span><div className="loading-line"><i/></div></motion.div>}</AnimatePresence>
    <Navbar dark={dark} toggle={()=>setDark(!dark)}/><main><Hero/><About/><Education/><Skills/><Projects/><Achievements/><Certifications/><CodingProfiles/><Contact/></main><Footer/>
    <a href="#home" className="floating-top" aria-label="Back to top"><ArrowUp size={18}/></a>
  </div>;
}
