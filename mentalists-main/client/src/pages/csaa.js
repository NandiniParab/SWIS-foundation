import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  }, [images.length]);

  return (
    <div style={{ backgroundColor: '#F5F6FA', fontFamily: 'sans-serif' }}>
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
          backgroundColor: '#1E3A8A',
          color: '#FFFFFF',
          padding: '5rem 2rem',
          textAlign: 'center',
          borderBottom: '5px solid #9333EA'
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: '700' }}>
          Centre for Civil Administration & Engagement
        </h1>
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
      >
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1E3A8A', marginBottom: '3rem', fontWeight: '600' }}>
          Objectives of this Initiative
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
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
              whileHover={{ scale: 1.05 }}
              style={{ textAlign: 'center', padding: '1rem' }}
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

      {/* Key Highlights Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ padding: '4rem 2rem', backgroundColor: '#F5F6FA' }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1E3A8A', marginBottom: '3rem', fontWeight: '600' }}>
          Key Highlights of the Initiative
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto', backgroundColor: '#023080', padding: '2rem' }}>
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
              whileHover={{ scale: 1.05 }}
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
      >
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#1E3A8A', marginBottom: '1rem', fontWeight: '600' }}>
          Centre for Civil Administration & Engagement (CCAE)
        </h2>
        <p style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8', textAlign: 'justify', color: '#4B5563' }}>
          At SWIS, we believe that democracy thrives when citizens are engaged and informed. The Centre for Civil Administration & Engagement is our initiative to build civic consciousness through fellowships, structured volunteering, and real-world exposure to public systems. By placing young citizens in the heart of governance and community action, CCAE nurtures a new culture of ethical public engagement.
          <br /><br />
          Our goal is to create a generation that doesn’t just demand change—but knows how to deliver it. Through mentorship, training, and field experiences with local government bodies and civil society partners, CCAE transforms idealism into public leadership. Every program we run is an investment in participatory democracy and responsive governance.
        </p>
      </motion.section>
    </div>
  );
};

export default CentreSocialAwareness;