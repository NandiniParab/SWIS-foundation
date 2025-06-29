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
            background: `radial-gradient(circle, #9333EA, #1E3A8A)`,
            borderRadius: '50%',
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

const CentreSocialAwareness = () => {
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
    <main style={{ backgroundColor: '#F5F6FA', fontFamily: 'sans-serif', padding: '0 1rem' }}>
      {/* SEO Metadata */}
      <div dangerouslySetInnerHTML={{
        __html: `
          <meta name="description" content="Centre for Social Awareness empowering leadership for social change" />
          <meta property="og:title" content="Centre for Social Awareness - CCAE" />
          <meta property="og:description" content="Empowering leaders for social change through awareness and capacity building." />
          <meta property="og:type" content="website" />
        `
      }} />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Rotating Images Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: 'relative',
          height: '400px',
          overflow: 'hidden',
          backgroundColor: '#023080',
          borderRadius: '10px',
          margin: '2rem 0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
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
              transition: 'opacity 1.2s ease-in-out',
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: index === currentImage ? 1 : 1.1, opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          backgroundColor: '#1E3A8A',
          color: '#FFFFFF',
          padding: '4rem 2rem',
          textAlign: 'center',
          borderRadius: '10px',
          margin: '2rem 0',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem' }}
        >Centre for Civil Administration & Engagement</motion.h1>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#E0E7FF', marginBottom: '1.5rem' }}
          >
            Exclusive, honorary program designed for individuals committed to developing leadership skills and driving meaningful social change.
          </motion.p>
          <hr style={{ border: '0', height: '1px', background: '#E0E7FF', margin: '1.5rem 0' }} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ fontSize: '1.1rem', color: '#E0E7FF', marginBottom: '1.5rem' }}
          >
            At SWIS, we believe that democracy thrives when citizens are engaged and informed. The Centre for Civil Administration & Engagement is our initiative to build civic consciousness through fellowships, structured volunteering, and real-world exposure to public systems. By placing young citizens in the heart of governance and community action, CCAE nurtures a new culture of ethical public engagement.
          </motion.p>
          <hr style={{ border: '0', height: '1px', background: '#E0E7FF', margin: '1.5rem 0' }} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ fontSize: '1.1rem', color: '#E0E7FF' }}
          >
            Our goal is to create a generation that doesn’t just demand change—but knows how to deliver it. Through mentorship, training, and field experiences with local government bodies and civil society partners, CCAE transforms idealism into public leadership. Every program we run is an investment in participatory democracy and responsive governance.
          </motion.p>
        </div>
      </motion.section>

      {/* Objectives Section */}
          <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      style={{ padding: '4rem 2rem', backgroundColor: '#FFFFFF', margin: '2rem 0' }}
      aria-label="Initiative Objectives"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1E3A8A', marginBottom: '3rem', fontWeight: '600' }}
      >Objectives of this Initiative</motion.h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto 2rem' }}>
        {[
          { title: "Awareness", desc: "To raise awareness about the development sector." },
          { title: "Networking", desc: "To network with institutions, development professionals, organizations and governments." },
          { title: "Capacity Building", desc: "To build the capacities of youth through structured processes." }
        ].map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 15px rgba(0,0,0,0.1)' }}
            style={{ textAlign: 'center', padding: '1.5rem', background: '#F9FAFB', borderRadius: '10px', transition: 'all 0.3s ease' }}
          >
            <div style={{ backgroundColor: '#023080', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#FFFFFF', fontSize: '1.5rem' }}>Icon</span>
            </div>
            <h3 style={{ color: '#1E3A8A', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{obj.title}</h3>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: '1.4' }}>{obj.desc}</p>
          </motion.div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {[
          { title: "Leadership Skills", desc: "Develop the expertise and leadership skills necessary to lead impactful initiatives." },
          { title: "Skill Building", desc: "To develop learning publications and skill-building resources." },
          { title: "Social Leaders", desc: "To create a community pool of social-empathetic leaders." }
        ].map((obj, i) => (
          <motion.div
            key={i + 3}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i + 3) * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 15px rgba(0,0,0,0.1)' }}
            style={{ textAlign: 'center', padding: '1.5rem', background: '#F9FAFB', borderRadius: '10px', transition: 'all 0.3s ease' }}
          >
            <div style={{ backgroundColor: '#023080', borderRadius: '50%', width: '60px', height: '60px', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#FFFFFF', fontSize: '1.5rem' }}>Icon</span>
            </div>
            <h3 style={{ color: '#1E3A8A', fontSize: '1.2rem', marginBottom: '0.5rem' }}>{obj.title}</h3>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: '1.4' }}>{obj.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>

      {/* Our Work in Numbers Section */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ padding: '4rem 2rem', backgroundColor: '#FFFFFF', margin: '2rem 0' }}
        aria-label="Initiative Impact Numbers"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', fontSize: '2rem', color: '#1E3A8A', marginBottom: '2rem', fontWeight: '600' }}
        >Our Work in Numbers</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
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
              whileHover={{ scale: 1.03, boxShadow: '0 6px 15px rgba(0,0,0,0.1)' }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'all 0.3s ease' }}
            >
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
              <div style={{ backgroundColor: '#1E3A8A', color: '#FFFFFF', padding: '1rem', borderRadius: '8px', textAlign: 'center', width: '100%' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', margin: '0.5rem 0', color: '#9333EA' }}>{item.number}</h3>
                <p style={{ fontSize: '1rem', color: '#E0E7FF' }}>{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact Journey Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{
          padding: '4rem 2rem',
          backgroundColor: '#023080',
          margin: '2rem 0',
          position: 'relative',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
        aria-label="Impact Journey Chart"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', fontSize: '2.5rem', color: '#FFFFFF', marginBottom: '2rem', fontWeight: '600' }}
        >Impact Journey</motion.h2>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '10px',
          padding: '1rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        }}>
          <svg
            viewBox="0 0 1000 400"
            style={{ width: '100%', height: 'auto' }}
            aria-label="Impact over time chart"
          >
            {/* Axes */}
            <motion.path
              d="M50,350 L950,350 M50,350 L50,50"
              fill="transparent"
              stroke="#FFFFFF"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
            />
            {/* Dots at axis ends */}
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

            {/* Labels */}
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

            {/* Graph path */}
            <motion.path
              d="M50,350 L200,300 L400,200 L600,100 L900,50"
              fill="transparent"
              stroke="#FFFFFF"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              whileInView={{
                pathLength: [0, 0.25, 0.5, 0.75, 1],
                strokeDasharray: [0, 100, 200, 300, 400],
              }}
              transition={{
                duration: 4,
                times: [0, 0.25, 0.5, 0.75, 1],
                delay: 0,
                ease: "easeInOut",
              }}
            />

            {/* Stages with Icons and Animations */}
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ padding: '4rem 2rem', backgroundColor: '#F5F6FA', margin: '2rem 0' }}
        aria-label="Initiative Highlights"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1E3A8A', marginBottom: '2rem', fontWeight: '600' }}
        >Key Highlights of the Initiative</motion.h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto 1.5rem' }}>
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
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 15px rgba(0,0,0,0.1)' }}
              style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.3s ease' }}
            >
              <div style={{ backgroundColor: '#023080', borderRadius: '50%', width: '50px', height: '50px', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>Icon</span>
              </div>
              <h4 style={{ color: '#1E3A8A', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.4' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          {[
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (i + 3) * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: '0 6px 15px rgba(0,0,0,0.1)' }}
              style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '8px', textAlign: 'center', transition: 'all 0.3s ease' }}
            >
              <div style={{ backgroundColor: '#023080', borderRadius: '50%', width: '50px', height: '50px', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>Icon</span>
              </div>
              <h4 style={{ color: '#1E3A8A', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{item.title}</h4>
              <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.4' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </main>
  );
};

export default CentreSocialAwareness;