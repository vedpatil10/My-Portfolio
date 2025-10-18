import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import AnimatedBackground from "@/components/animated-background.tsx";
import ThemeToggle from "@/components/theme-toggle.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";

const skills = [
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "Machine Learning", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Deep Learning", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "NLP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Computer Vision", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "Statistical Modelling", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Scikit-learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
  { name: "Transformers", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "ReactJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "Google Colab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
];

const projects = [
  {
    title: "Crowdfunding & Event Management Platform",
    description:
      "Designed a web platform for technical fest registrations and payments, enabling students to browse events, register, and pay securely online through Razorpay. Built backend APIs using Express.js and Node.js for participant management and payment tracking.",
    tech: ["ReactJS", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    github: "https://github.com/vedpatil10",
  },
  {
    title: "YouTube Transcript Summarizer",
    description:
      "Built a Flask app that fetches YouTube transcripts and generates TLDRs with TextRank; delivers adjustable summaries in seconds, reducing time-to-insight by ~80–90% on typical 10–20 minute videos. Packaged for fast local setup (4 commands) and one-command run on port 5000.",
    tech: ["Python", "Flask", "TextRank", "NLP", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/vedpatil10",
  },
  {
    title: "Early Breast Cancer Detection",
    description:
      "Built ML/DL system with 8 models (SVM, Random Forest, XGBoost, CNN) achieving 90%+ accuracy. XGBoost reached 93.4% on 9,686 mammogram images using SMOTE for class balance.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "XGBoost", "CNN"],
    github: "https://github.com/vedpatil10",
  },
  {
    title: "Predictive Maintenance in Railways",
    description:
      "LSTM-based system on 8,000+ sensor records achieving 87.3% accuracy and 89.4% ROC AUC. Built ReactJS dashboard with real-time visualizations and failure alerts.",
    tech: ["Python", "LSTM", "TensorFlow", "ReactJS", "Time-Series"],
    github: "https://github.com/vedpatil10",
  },
  {
    title: "SmartSite Studio",
    description:
      "Unified SaaS dashboard for WordPress, Shopify & Webflow. Automated 20+ checks, improved Lighthouse scores 20-40%, enabled 60s backups/migrations & A/B tests increasing CTR 8-15%.",
    tech: ["React", "Node.js", "TypeScript", "MySQL", "JWT"],
    github: "https://github.com/vedpatil10",
  },
  {
    title: "AI Content Optimizer",
    description:
      "WordPress plugin with React, TypeScript & PHP. 20+ SEO/readability checks with AI suggestions, reducing editing time 30-50%. REST API with caching and exportable reports.",
    tech: ["React", "TypeScript", "PHP", "WordPress", "REST API"],
    github: "https://github.com/vedpatil10",
  },
  {
    title: "Auto Reply AI Chatbot",
    description:
      "Intelligent chatbot with BERT & Sentence Transformers for sentiment analysis and intent recognition. 85% accuracy in real-time contextual responses.",
    tech: ["Python", "BERT", "NLP", "Machine Learning"],
    github: "https://github.com/vedpatil10",
  },
  {
    title: "AI Code Forge",
    description:
      "Full-stack AI code generator supporting 12+ languages. Real-time generation with syntax highlighting, 1-2s response time, 20+ persistent sessions with secure CORS & Helmet.",
    tech: ["ReactJS", "Node.js", "Express", "OpenAI API"],
    github: "https://github.com/vedpatil10",
  },
];

const experience = [
  {
    title: "Central Railway Intern",
    company: "Government of India",
    location: "Mumbai",
    period: "May 2023 – Jun 2023",
    description:
      "Monitored railway signal systems, documented findings, and collaborated across departments, gaining practical skills in data management, problem-solving, and large-scale workflow operations.",
  },
  {
    title: "Data Science Intern",
    company: "Spinnaker Analytics",
    location: "Work From Home",
    period: "Nov 2024 – Feb 2025",
    description:
      "Built ETL pipelines and visualizations in Matplotlib improving reporting by 25%. Developed predictive models with scikit-learn including feature engineering.",
  },
  {
    title: "Full Stack Developer (Freelancer)",
    company: "IoT Cell, KJSIT",
    location: "Mumbai",
    period: "Jun 2024 – Sep 2024",
    description:
      "Built event management platform with Razorpay integration, digitizing 100% of fest entries and reducing manual work significantly.",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Quixta",
    location: "Work From Home",
    period: "Mar 2024 – Aug 2024",
    description:
      "Built 5 WordPress websites with PHP, MySQL & ReactJS. Delivered responsive, SEO-optimized designs improving load performance by 40%.",
  },
  
  {
    title: "Web Development Intern",
    company: "Tantrasoft Solutions",
    location: "Work From Home",
    period: "Jan 2022 – April 2022",
    description:
      "Developed client web applications, fixed bugs, implemented UI features. Optimized database queries reducing load times by 25%.",
  },
];

const education = [
  {
    degree: "B.Tech in Electronics and Telecommunication",
    honors: "Honours in Data Science",
    institution: "K.J.Somaiya Institute of Technology, Mumbai",
    period: "Nov 2022 – May 2025",
    grade: "CGPA: 9.47/10",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Trimurti Polytechnic",
    period: "Dec 2020 – May 2022",
    grade: "Percentage: 80%",
  },
];

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary cursor-pointer ml-2"
          >
            VP
          </motion.h1>
          <nav className="hidden md:flex gap-6 items-center">
            {["About", "Experience", "Projects", "Skills", "Education", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </a>
              ),
            )}
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-chart-2/20 to-chart-5/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-chart-2/20 via-chart-5/20 to-primary/20"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                {/* Lightning effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 40px rgba(139, 92, 246, 0.6)",
                      "0 0 60px rgba(139, 92, 246, 0.3)",
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              {/* Main photo container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary via-chart-2 to-chart-5 p-1 shadow-2xl hover:shadow-primary/50 transition-all duration-300">
                <motion.div
                  className="w-full h-full rounded-full overflow-hidden bg-background flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/photo1.png"
                    alt="Vedant Patil"
                    className="w-full h-full object-cover scale-125"
                    style={{ objectPosition: 'center 10%' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                Hi, I'm{" "}
                <motion.span 
                  className="bg-gradient-to-r from-primary via-chart-2 to-chart-5 bg-clip-text text-transparent"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    textShadow: [
                      "0 0 0px rgba(139, 92, 246, 0)",
                      "0 0 20px rgba(139, 92, 246, 0.8)",
                      "0 0 0px rgba(139, 92, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Vedant Patil
                </motion.span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Software Developer and Data Science Enthusiast
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Welcome to my digital space! I'm passionate about creating innovative solutions that bridge the gap between data science and software development.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    (window.location.href = "mailto:vedantpatil1450@gmail.com")
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Gmail
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/vedant-patil-vp10",
                      "_blank",
                    )
                  }
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer hover:scale-105 transition-transform"
                  onClick={() =>
                    window.open("https://github.com/vedpatil10", "_blank")
                  }
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center group cursor-pointer">
              <motion.span
                className="inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 20px rgba(139, 92, 246, 0.8)",
                    "0 0 0px rgba(139, 92, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                About Me
              </motion.span>
            </h2>
            <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate <span className="text-primary font-semibold">Software Developer</span> and <span className="text-primary font-semibold">Data Science Enthusiast</span> with extensive expertise in building innovative solutions across multiple domains. 
                  I specialize in <span className="text-primary font-semibold">Python</span>, <span className="text-primary font-semibold">Machine Learning</span>, <span className="text-primary font-semibold">Deep Learning</span> (Neural Networks, CNN, LSTM), <span className="text-primary font-semibold">NLP</span>, <span className="text-primary font-semibold">Computer Vision</span>, <span className="text-primary font-semibold">Statistical Modelling</span>, and <span className="text-primary font-semibold">Full-Stack Development</span>.
                  With hands-on experience in developing scalable applications, AI-powered systems, data-driven solutions, and web platforms, I'm committed to creating impactful technology that solves real-world problems and drives innovation in the field of software development and data science.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Mumbai, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:vedantpatil1450@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        vedantpatil1450@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-muted-foreground">+91-8421340256</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Github className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <a
                        href="https://github.com/vedpatil10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        github.com/vedpatil10
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Linkedin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/vedant-patil-vp10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                      >
                        linkedin.com/in/vedant-patil-vp10
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center group cursor-pointer">
              <motion.span
                className="inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 20px rgba(139, 92, 246, 0.8)",
                    "0 0 0px rgba(139, 92, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Work Experience
              </motion.span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium mb-1">
                            {exp.company}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            {exp.location} | {exp.period}
                          </p>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center group cursor-pointer">
              <motion.span
                className="inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 20px rgba(139, 92, 246, 0.8)",
                    "0 0 0px rgba(139, 92, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Featured Projects
              </motion.span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.03] transition-all duration-300 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full cursor-pointer group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center group cursor-pointer">
              <motion.span
                className="inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 20px rgba(139, 92, 246, 0.8)",
                    "0 0 0px rgba(139, 92, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Skills
              </motion.span>
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/5 transition-all cursor-pointer group"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.8)] transition-all"
                    />
                    <p className="text-xs font-medium text-center group-hover:text-primary transition-colors">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center group cursor-pointer">
              <motion.span
                className="inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 20px rgba(139, 92, 246, 0.8)",
                    "0 0 0px rgba(139, 92, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Education
              </motion.span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          {edu.honors && (
                            <p className="text-primary font-medium mb-1">
                              {edu.honors}
                            </p>
                          )}
                          <p className="text-muted-foreground mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            {edu.period}
                          </p>
                          <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">{edu.grade}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Certifications
            </h2>
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
              {[
                "Data Base Management System - NPTEL (2023)",
                "Python - Spoken Tutorial (2023)",
                "Linux OS - Spoken Tutorial (2024)",
                "Data Analytics and Visualization - Accenture Forage (2024)",
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <p className="text-sm group-hover:text-primary transition-colors">
                          {cert}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  (window.location.href = "mailto:vedantpatil1450@gmail.com")
                }
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vedant-patil-vp10",
                    "_blank",
                  )
                }
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => window.open("https://github.com/vedpatil10", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-8">
            <p className="text-center text-muted-foreground">
              © {new Date().getFullYear()} Vedant Patil. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
