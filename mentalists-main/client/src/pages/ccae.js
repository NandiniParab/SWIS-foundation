import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Particle Background Component
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array(25).fill().map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 8 + 2,
      }));
      setParticles(newParticles);
    };
    generateParticles();
    const interval = setInterval(generateParticles, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: -1,
    }}>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, #6D4C41, #4C2E2E)`,
            borderRadius: '50%',
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            x: particle.x + particle.vx * 150,
            y: particle.y + particle.vy * 150,
            opacity: [0.8, 0.4, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const CivilFellowship = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://via.placeholder.com/1200x400?text=Image+1",
    "https://via.placeholder.com/1200x400?text=Image+2",
    "https://via.placeholder.com/1200x400?text=Image+3",
    "https://via.placeholder.com/1200x400?text=Image+4",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ backgroundColor: '#F5F6FA', fontFamily: 'sans-serif' }}>
      {/* SEO Metadata */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <meta name="description" content="Civil Fellowship empowering leadership for social change" />
          <meta property="og:title" content="Civil Administrative Fellowship - CCAE" />
          <meta property="og:description" content="Empowering leaders for social change through fellowship and capacity building." />
          <meta property="og:type" content="website" />
        `
      }} />

      {/* Rotating Images Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: 'relative',
          height: '400px',
          overflow: 'hidden',
          backgroundColor: '#023080'
        }}
      >
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: index === currentImage ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
      </motion.div>

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: 'linear-gradient(135deg, #4C2E2E, #6D4C41)',
          color: '#FFFFFF',
          padding: '5rem 2rem',
          textAlign: 'center',
          borderBottom: '5px solid #9333EA'
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>Civil Administrative Fellowship</h1>
        <p style={{ fontSize: '1.4rem', maxWidth: '900px', margin: '1rem auto', fontStyle: 'italic' }}>
          Exclusive, honorary program designed for individuals committed to develop leadership skills and driving meaningful social change.
        </p>
      </motion.section>

      {/* Objectives Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '4rem 2rem', backgroundColor: '#FFFFFF' }}
        aria-label="Fellowship Objectives"
      >
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1E3A8A', marginBottom: '3rem', fontWeight: '600' }}>Objectives of this Fellowship</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { title: "Awareness", desc: "To raise awareness about the development sector." },
            { title: "Networking", desc: "To network with institutions, development professionals, organizations and governments." },
            { title: "Capacity Building", desc: "To build the capacities of youth through structured processes." },
            { title: "Leadership Skills", desc: "Develop the expertise and leadership skills necessary to lead impactful initiatives." },
            { title: "Skill Building", desc: "To develop learning publications and skill-building resources." },
            { title: "Social Leaders", desc: "To create a community pool of social-empathetic leaders." }
          ].map((obj, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              }}
              style={{ textAlign: 'center', padding: '1rem', background: '#F0F4F8', borderRadius: '10px' }}
            >
              <div style={{ backgroundColor: '#023080', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#FFFFFF', fontSize: '1.5rem' }}>Icon</span>
              </div>
              <h3 style={{ color: '#023080', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{obj.title}</h3>
              <p style={{ color: '#4B5563', fontSize: '0.9rem' }}>{obj.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Work in Numbers Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '4rem 2rem', backgroundColor: '#FFFFFF' }}
        aria-label="Fellowship Impact Numbers"
      >
        <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#4A2C2A', marginBottom: '2rem' }}>Our work in numbers</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', maxWidth: '1200px', margin: '0 auto' }}>
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
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              }}
              style={{
                backgroundColor: '#4A2C2A',
                color: '#FFFFFF',
                padding: '1rem',
                borderRadius: '10px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }} />
              <h3 style={{ fontSize: '2rem', fontWeight: '700', margin: '0.5rem 0' }}>{item.number}</h3>
              <p style={{ fontSize: '0.9rem', color: '#E0D8D5' }}>{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact Journey Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, type: 'spring', stiffness: 150 }}
        style={{
          padding: '4rem 2rem',
          background: 'linear-gradient(135deg, #4C2E2E, #6D4C41)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            color: '#FFFFFF',
            marginBottom: '3rem',
            fontWeight: '600',
          }}
        >
          Impact Journey
        </h2>
        <svg
          viewBox="0 0 1000 400"
          style={{ width: '100%', height: 'auto' }}
          aria-label="Impact over time chart"
        >
          {/* Timeline path */}
          <motion.path
            d="M50,350 L300,300 L500,250 L700,150 L900,50"
            fill="transparent"
            stroke="#9333EA"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />

          {/* Stages */}
          {[
            { label: "Prototype", x: 300, y: 300, icon: "🛠️" },
            { label: "Propagate", x: 500, y: 250, icon: "🌿" },
            { label: "Big Shift", x: 700, y: 150, icon: "🚀" },
            { label: "Proliferate", x: 900, y: 50, icon: "✨" },
          ].map((stage, i) => (
            <g key={i}>
              <motion.circle
                cx={stage.x}
                cy={stage.y}
                r="20"
                fill="#9333EA"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.4 }}
              />
              <text
                x={stage.x}
                y={stage.y + 40}
                fill="#FFFFFF"
                fontSize="1rem"
                textAnchor="middle"
              >
                {stage.label}
              </text>
              <text
                x={stage.x}
                y={stage.y + 20}
                fill="#FFFFFF"
                fontSize="1.5rem"
                textAnchor="middle"
              >
                {stage.icon}
              </text>
            </g>
          ))}
        </svg>
      </motion.section>

      {/* Key Highlights Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '4rem 2rem', backgroundColor: '#F5F6FA' }}
        aria-label="Fellowship Highlights"
      >
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1E3A8A', marginBottom: '3rem', fontWeight: '600' }}>Key Highlights of the Fellowship</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#023080', padding: '2rem' }}>
          {[
            {
              title: "Capacity-Building Programs",
              desc: "Focus on equipping fellows with essential leadership and skills development for effective social impact initiatives, covering areas like project management, CSR proposal writing, and impact measurement."
            },
            {
              title: "Speaker Sessions and Workshops",
              desc: "Provide fellows with opportunities to engage with experts on critical topics like inclusive policies, social stratification, public policy, ethics, and compassion in modern society."
            },
            {
              title: "Resource Generation and Mobilisation",
              desc: "Focuses on equipping fellows with the skills to develop fundraising strategies, create sustainable financial models, and leverage partnerships for long-term impact in nonprofit initiatives."
            },
            {
              title: "Volunteer Management and Engagement",
              desc: "Empowers fellows to lead in volunteer recruitment, training, community engagement programs, and creating sustainable strategies to enhance volunteer contributions."
            },
            {
              title: "Organizational Support and Practical Exposure",
              desc: "Provides fellows with hands-on experience in key functional areas, including communications, operations, research, impact assessment, and administration to build operational excellence."
            },
            {
              title: "Profile Building & Placement Assistance",
              desc: "Focuses on enhancing fellows' professional profiles through personalized training, skill development, and access to placement opportunities in their relevant field, ensuring career growth and industry alignment."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              }}
              style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '10px', textAlign: 'center' }}
            >
              <div style={{ backgroundColor: '#023080', borderRadius: '50%', width: '50px', height: '50px', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>Icon</span>
              </div>
              <h4 style={{ color: '#023080', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ color: '#4B5563', fontSize: '0.9rem' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CCAE Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '4rem 2rem', backgroundColor: '#FFFFFF' }}
        aria-label="About CCAE"
      >
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1E3A8A', marginBottom: '1rem', fontWeight: '600' }}>Centre for Civil Administration & Engagement (CCAE)</h2>
        <p style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', textAlign: 'justify', color: '#4B5563' }}>
          At SWIS, we believe that democracy thrives when citizens are engaged and informed. The Centre for Civil Administration & Engagement is our initiative to build civic consciousness through fellowships, structured volunteering, and real-world exposure to public systems. By placing young citizens in the heart of governance and community action, CCAE nurtures a new culture of ethical public engagement.
          <br /><br />
          Our goal is to create a generation that doesn’t just demand change—but knows how to deliver it. Through mentorship, training, and field experiences with local government bodies and civil society partners, CCAE transforms idealism into public leadership. Every program we run is an investment in participatory democracy and responsive governance.
        </p>
      </motion.section>
    </main>
  );
};

export default CivilFellowship;