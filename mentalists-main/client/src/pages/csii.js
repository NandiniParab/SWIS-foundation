import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Particle Background Component
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array(20).fill().map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 6 + 2,
      }));
      setParticles(newParticles);
    };
    generateParticles();
    const interval = setInterval(generateParticles, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
      zIndex: -1,
    }}>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, #9333EA, #1E3A8A)`,
            borderRadius: "50%",
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            x: particle.x + particle.vx * 120,
            y: particle.y + particle.vy * 120,
            opacity: [0.7, 0.3, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

// AnimatedCounter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", countAnimated }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!countAnimated) return;

    let startTime = null;
    const startCount = 0;

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOutCubic);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [countAnimated, end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// CSII Component
const CSII = () => {
  const [isVisible, setIsVisible] = useState({
    objectives: false,
    metrics: false,
    highlights: false,
    impactJourney: false,
  });
  const [countAnimated, setCountAnimated] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [circleImageIndex, setCircleImageIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/1200x400?text=Image+1",
    "https://via.placeholder.com/1200x400?text=Image+2",
    "https://via.placeholder.com/1200x400?text=Image+3",
    "https://via.placeholder.com/1200x400?text=Image+4",
  ];
  const circleImages = [
    "https://via.placeholder.com/300?text=Circle+Image+1",
    "https://via.placeholder.com/300?text=Circle+Image+2",
    "https://via.placeholder.com/300?text=Circle+Image+3",
  ];
  const movingImages = [
    "https://via.placeholder.com/200x200?text=Moving+Image+1",
    "https://via.placeholder.com/200x200?text=Moving+Image+2",
    "https://via.placeholder.com/200x200?text=Moving+Image+3",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            if (entry.target.id === "metrics") {
              setTimeout(() => setCountAnimated(true), 500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[id]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, [images.length]);

  useEffect(() => {
    const circleInterval = setInterval(() => {
      setCircleImageIndex((prev) => (prev + 1) % circleImages.length);
    }, 3000);
    return () => clearInterval(circleInterval);
  }, [circleImages.length]);

  return (
    <main
      style={{
        backgroundColor: "#F5F6FA",
        fontFamily: "sans-serif",
        padding: "0 1rem",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* SEO Metadata */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <meta name="description" content="Centre for Social Awareness & Action empowering leadership for social change" />
            <meta property="og:title" content="Centre for Social Awareness & Action - CSII" />
            <meta property="og:description" content="Empowering leaders for social change through awareness and action." />
            <meta property="og:type" content="website" />
          `,
        }}
      />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          background: "linear-gradient(135deg, #023080, #1E3A8A)",
          color: "#FFFFFF",
          padding: "4rem 2rem",
          textAlign: "center",
          borderRadius: "15px",
          margin: "2rem 0",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ fontSize: "3.5rem", fontWeight: "700", marginBottom: "1rem" }}
        >
          Centre for Social Awareness & Action
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            fontSize: "1.2rem",
            color: "#E0E7FF",
            maxWidth: "800px",
            margin: "0 auto 1.5rem",
          }}
        >
          Exclusive, honorary program designed for individuals committed to developing leadership skills and driving meaningful social change.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            padding: "1rem",
            borderRadius: "10px",
            backdropFilter: "blur(5px)",
          }}
        >
          <p style={{ fontSize: "1rem", color: "#D1D5DB" }}>
            Join us to transform communities through awareness and action.
          </p>
        </motion.div>
      </motion.section>

      {/* Rotating Images Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "relative",
          height: "400px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #023080, #9333EA)",
          borderRadius: "15px",
          margin: "2rem 0",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: index === currentImage ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: index === currentImage ? 1 : 1.1, opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
      </motion.section>

      {/* Circular Animation Section */}
      <motion.section
        id="circularAnimation"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          padding: "4rem 2rem",
          background: "linear-gradient(135deg, #F5F6FA, #E0E7FF)",
          borderRadius: "15px",
          margin: "2rem 0",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "2.5rem", color: "#1E3A8A", marginBottom: "2rem", fontWeight: "600" }}
        >
          Our Vision in Motion
        </motion.h2>
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "relative",
            width: "300px",
            height: "300px",
            margin: "0 auto",
          }}
        >
          {circleImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Circle ${index + 1}`}
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "50%",
                opacity: index === circleImageIndex ? 1 : 0.3,
                transition: "opacity 0.5s ease-in-out",
              }}
              animate={{
                x: index === 0 ? "0" : index === 1 ? "100px" : "-100px",
                y: index === 0 ? "-100px" : index === 1 ? "0" : "100px",
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </motion.section>

      {/* Objectives Section */}
      <motion.section
        id="objectives"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ padding: "4rem 2rem", backgroundColor: "#FFFFFF", margin: "2rem 0" }}
        aria-label="Initiative Objectives"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", fontSize: "2.5rem", color: "#1E3A8A", marginBottom: "3rem", fontWeight: "600" }}
        >
          Objectives of this Initiative
        </motion.h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            { title: "Knowledge & Skills Development", desc: "Equips students with knowledge and skills in social issues, policies, and interventions, while enhancing their expertise in grant writing, CSR proposals, research, analysis, presentation, fundraising, and impact measurement." },
            { title: "Civic Engagement & Empathy", desc: "Through on-ground activities like volunteering and community visits, students develop responsibility and empathy, gaining firsthand insights into social challenges. This fosters volunteerism and active citizenship, empowering them to become compassionate changemakers." },
            { title: "Creative Thinking & Innovation", desc: "Encouraging students to develop unique solutions for social challenges through brainstorming, design thinking, and innovative project ideas." },
            { title: "Project Management", desc: "Building skills to manage time effectively, meet deadlines, and execute projects with efficiency and organization." },
            { title: "Institutions", desc: "Collaborating with key institutions to enhance impact and outreach." },
          ].map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(0,0,0,0.1)" }}
              style={{
                textAlign: "center",
                padding: "1.5rem",
                background: "linear-gradient(135deg, #F9FAFB, #E0E7FF)",
                borderRadius: "10px",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #023080, #1E3A8A)",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  margin: "0 auto 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#FFFFFF", fontSize: "1.5rem" }}>Icon</span>
              </div>
              <h3 style={{ color: "#1E3A8A", fontSize: "1.2rem", marginBottom: "0.5rem" }}>{obj.title}</h3>
              <p style={{ color: "#4B5563", fontSize: "0.9rem", lineHeight: "1.4" }}>{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Work in Numbers Section */}
      <motion.section
        id="metrics"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #F5F6FA, #D1D5DB)", margin: "2rem 0" }}
        aria-label="Initiative Impact Numbers"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", fontSize: "2rem", color: "#1E3A8A", marginBottom: "2rem", fontWeight: "600" }}
        >
          Our Work in Numbers
        </motion.h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            { number: "09", title: "States", image: "https://via.placeholder.com/200x200?text=States+Image" },
            { number: "03", title: "Centres", image: "https://via.placeholder.com/200x200?text=Centres+Image" },
            { number: "09", title: "Programs", image: "https://via.placeholder.com/200x200?text=Programs+Image" },
            { number: "100K+", title: "Households served", image: "https://via.placeholder.com/200x200?text=Households+Image" },
            { number: "16K+", title: "Youth employed", image: "https://via.placeholder.com/200x200?text=Youth+Image" },
            { number: "100+", title: "Nonprofits supported", image: "https://via.placeholder.com/200x200?text=Nonprofits+Image" },
            { number: "03", title: "Grand challenges launched", image: "https://via.placeholder.com/200x200?text=Challenges+Image" },
            { number: "04", title: "Annual convenings executed", image: "https://via.placeholder.com/200x200?text=Convenings+Image" },
            { number: "29", title: "Senior leaders working with state governments", image: "https://via.placeholder.com/200x200?text=Leaders+Image" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0 6px 15px rgba(0,0,0,0.1)" }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", transition: "all 0.3s ease" }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "1rem" }}
              />
              <div
                style={{
                  background: "linear-gradient(135deg, #023080, #1E3A8A)",
                  color: "#FFFFFF",
                  padding: "1rem",
                  borderRadius: "8px",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                <h3 style={{ fontSize: "1.8rem", fontWeight: "700", margin: "0.5rem 0", color: "#9333EA" }}>
                  <AnimatedCounter end={parseInt(item.number)} suffix={item.number.includes("+") ? "+" : ""} countAnimated={countAnimated} />
                </h3>
                <p style={{ fontSize: "1rem", color: "#E0E7FF" }}>{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact Journey Section */}
      <motion.section
        id="impactJourney"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{
          padding: "4rem 2rem",
          background: "linear-gradient(135deg, #023080, #1E3A8A)",
          margin: "2rem 0",
          position: "relative",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
        aria-label="Impact Journey Chart"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", fontSize: "2.5rem", color: "#FFFFFF", marginBottom: "2rem", fontWeight: "600" }}
        >
          Impact Journey
        </motion.h2>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            padding: "1rem",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <svg
            viewBox="0 0 1000 400"
            style={{ width: "100%", height: "auto" }}
            aria-label="Impact over time chart"
          >
            <motion.path
              d="M50,350 L950,350 M50,350 L50,50"
              fill="transparent"
              stroke="#FFFFFF"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
            />
            <motion.circle
              cx="950"
              cy="350"
              r="5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="5"
              fill="#FFFFFF"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            />
            <motion.text
              x="60"
              y="60"
              fill="#FFFFFF"
              fontSize="1rem"
              textAnchor="start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
              Impact
            </motion.text>
            <motion.text
              x="50"
              y="370"
              fill="#FFFFFF"
              fontSize="1rem"
              textAnchor="end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            >
              Time
            </motion.text>
            <motion.path
              d="M50,350 L200,300 L400,200 L600,100 L900,50"
              fill="transparent"
              stroke="#FFFFFF"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: [0, 0.25, 0.5, 0.75, 1] }}
              transition={{ duration: 4, times: [0, 0.25, 0.5, 0.75, 1], delay: 0, ease: "easeInOut" }}
            />
            {[
              { label: "Design Effective Solution", x: 200, y: 300, icon: "⚙️" },
              { label: "Drive Adoption", x: 400, y: 200, icon: "📈" },
              { label: "Support Scale", x: 600, y: 100, icon: "🌐" },
              { label: "Max Impact", x: 900, y: 50, icon: "🏆" },
            ].map((stage, i) => (
              <g key={i}>
                <motion.circle
                  cx={stage.x}
                  cy={stage.y}
                  r="15"
                  fill="rgba(255, 255, 255, 0.3)"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.5, duration: 0.5, ease: "easeOut" }}
                />
                <motion.text
                  x={stage.x}
                  y={stage.y + 30}
                  fill="#FFFFFF"
                  fontSize="0.9rem"
                  textAnchor="middle"
                  initial={{ opacity: 0, y: stage.y + 40 }}
                  whileInView={{ opacity: 1, y: stage.y + 30 }}
                  transition={{ delay: i * 0.5 + 0.2, duration: 0.5 }}
                >
                  {stage.label}
                </motion.text>
                <motion.text
                  x={stage.x}
                  y={stage.y + 15}
                  fill="#9333EA"
                  fontSize="1.2rem"
                  textAnchor="middle"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.5 + 0.4, duration: 0.5 }}
                >
                  {stage.icon}
                </motion.text>
              </g>
            ))}
          </svg>
        </div>
      </motion.section>

      {/* Key Highlights Section */}
      <motion.section
        id="highlights"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #FFFFFF, #F5F6FA)", margin: "2rem 0" }}
        aria-label="Initiative Highlights"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", fontSize: "2.5rem", color: "#1E3A8A", marginBottom: "2rem", fontWeight: "600" }}
        >
          Key Highlights of the Initiative
        </motion.h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Introduction to the Social Sector",
              desc: "This provides a foundational understanding of the social sector, covering key issues, public policies, and interventions. They gain insights into the roles of NGOs, social enterprises, and government programs, helping them understand how various stakeholders drive social change.",
            },
            {
              title: "Talk Shows and Workshops",
              desc: "Will focus on social issues, policies, and interventions, covering topics such as public policy, social entrepreneurship, advocacy, and impact measurement. These interactive sessions will enhance students' practical knowledge and critical thinking skills.",
            },
            {
              title: "Action-Based Projects",
              desc: "Students engage in hands-on projects addressing real-world social challenges. They develop skills in research, planning, execution, and impact assessment by working on live initiatives. This promotes practical problem-solving and encourages innovative solutions.",
            },
            {
              title: "Field Visits",
              desc: "By participating in volunteering, community visits, and fieldwork, students gain firsthand exposure to social issues. This experience fosters empathy, civic responsibility, and active citizenship, enabling them to become compassionate and socially conscious individuals.",
            },
            {
              title: "Expert Engagement",
              desc: "Through expert engagement, students gain insights into social issues, leadership strategies, and sector-specific skills. They connect with industry leaders through guest lectures and Q&A sessions, gaining valuable mentorship and networking opportunities.",
            },
            {
              title: "Crowdfunding as a Lifeskill",
              desc: "Teaches students to mobilize resources, market ideas, and raise funds for social causes. It enhances financial literacy, creativity, and persuasive communication. This empowers students to drive meaningful impact and develop social responsibility.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(0,0,0,0.1)" }}
              style={{
                background: "linear-gradient(135deg, #FFFFFF, #E0E7FF)",
                padding: "1.5rem",
                borderRadius: "8px",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #023080, #1E3A8A)",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  margin: "0 auto 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "#FFFFFF", fontSize: "1.2rem" }}>Icon</span>
              </div>
              <h4 style={{ color: "#1E3A8A", fontSize: "1.3rem", marginBottom: "0.5rem" }}>{item.title}</h4>
              <p style={{ color: "#4B5563", fontSize: "0.95rem", lineHeight: "1.4" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Continuous Moving Image Animation */}
      <div
        style={{
          position: "relative",
          height: "150px",
          background: "linear-gradient(90deg, #F5F6FA, #D1D5DB)",
          margin: "2rem 0",
          overflow: "hidden",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            position: "absolute",
            whiteSpace: "nowrap",
            animation: "moveImages 20s linear infinite",
          }}
        >
          {movingImages.concat(movingImages).map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`Moving ${index + 1}`}
              style={{
                width: "200px",
                height: "150px",
                objectFit: "cover",
                marginRight: "20px",
                borderRadius: "10px",
              }}
            />
          ))}
        </motion.div>
        <style>{`
          @keyframes moveImages {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </div>
    </main>
  );
};

export default CSII;