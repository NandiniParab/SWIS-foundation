import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import founderimage from "../img/soubhik1.jpeg";
import gallery1 from "../img/foundergal1.jpeg";
import gallery2 from "../img/foundergal2.jpeg";
import gallery3 from "../img/foundergal3.jpeg";
import gallery4 from "../img/foundergal4.jpeg";
import gallery5 from "../img/foundergal5.jpeg";
import gallery6 from "../img/foundergal6.jpeg";
import gallery7 from "../img/foundergal7.jpeg";
import start1 from "../img/founder1.jpeg";
import start2 from "../img/founder2.jpeg";
import start3 from "../img/founder3.jpeg";
import start4 from "../img/founder4.jpeg";
import award1 from "../img/awd1.jpeg";
import award2 from "../img/awd2.jpeg";
import award3 from "../img/awd3.jpeg";
import award4 from "../img/awd4.jpeg";
import award5 from "../img/awd5.jpeg";
import award6 from "../img/awd6.jpeg";

const rotatingImages = [
  start1,
  start2,
  start3,
  start4,
];

const FounderChairman = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([gallery1, gallery2, gallery3]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rotatingImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const allGalleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

  const handlePrev = () => {
    setGalleryImages((prev) => {
      const currentFirstIndex = allGalleryImages.indexOf(prev[0]);
      const newFirstIndex = (currentFirstIndex - 1 + allGalleryImages.length) % allGalleryImages.length;
      return [
        allGalleryImages[newFirstIndex],
        allGalleryImages[(newFirstIndex + 1) % allGalleryImages.length],
        allGalleryImages[(newFirstIndex + 2) % allGalleryImages.length],
      ];
    });
  };

  const handleNext = () => {
    setGalleryImages((prev) => {
      const currentLastIndex = allGalleryImages.indexOf(prev[2]);
      const newFirstIndex = (currentLastIndex + 1) % allGalleryImages.length;
      return [
        allGalleryImages[newFirstIndex],
        allGalleryImages[(newFirstIndex + 1) % allGalleryImages.length],
        allGalleryImages[(newFirstIndex + 2) % allGalleryImages.length],
      ];
    });
  };

  const scrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return scrollHeight ? (scrollTop / scrollHeight) * 100 : 0;
  };

  return (
    <div style={{ backgroundColor: '#FCFDFF', fontFamily: 'serif', position: 'relative' }}>
      {/* Scroll Progress Line */}
      <div style={{
        width: '100%',
        height: '5px',
        background: 'rgba(0, 0, 139, 0.2)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000
      }}>
        <div style={{
          height: '100%',
          background: '#023080',
          width: `${scrollProgress()}%`,
          transition: 'width 0.1s linear'
        }} />
      </div>

      {/* Rotating Banner Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          background: `url(${rotatingImages[currentImageIndex]}) center/cover no-repeat`,
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          transition: 'background-image 0.5s ease-in-out',
          position: 'relative',
          color: '#fff'
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          style={{
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h1 style={{ fontSize: '2rem', fontWeight: '600' }}>A timeless visionary</h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 50 }}
            style={{ fontSize: '1rem', width: '60%' }}
          >
            whose legacy emboldens the imagination of a billion people
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Quote Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        style={{ display: 'flex', backgroundColor: '#023080', padding: '2rem', color: '#FCFDFF', flexWrap: 'wrap' }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          style={{
            flex: 1,
            minWidth: '250px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(5px)',
            padding: '1rem',
            borderRadius: '10px',
            margin: '0.5rem'
          }}
        >
          <h2 style={{ fontWeight: '300', fontSize: '1.2rem' }}>
            Our dreams have to be bigger. Our ambitions higher. Our commitment deeper.
            And our efforts greater. This is my dream for SWIS and for India.
          </h2>
          <h1 style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>Soubhik Kundu</h1>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          style={{ flex: 1, textAlign: 'right', minWidth: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <motion.img
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
            whileHover={{ scale: 1.2, y: -5 }}
            src={founderimage}
            alt="Soubhik Kundu"
            style={{ width: '60%', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 139, 0.5)' }}
          />
        </motion.div>
      </motion.section>

      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        style={{ backgroundColor: '#d2d5e0', padding: '2rem' }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          style={{ backgroundColor: '#FCFDFF', borderRadius: '8px', padding: '1.5rem', maxWidth: '85%', margin: '0 auto', textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '1.8rem', color: '#04307b', marginBottom: '0.5rem' }}>Founder–Chairman</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, padding: '0.5rem', textAlign: 'left', minWidth: '250px' }}>
              <p style={{ color: '#000', lineHeight: '1.5', fontSize: '0.9rem' }}>
                <strong>Soubhik Kundu</strong><br />
                Chairman & Managing Trustee – SWIS Foundation<br />
                Board Member – Institute for Social Welfare and Impact Solutions (SWIS Institute)<br /><br />
                Soubhik Kundu is a passionate changemaker, institution builder, and social impact strategist who
                serves as the Chairman & Managing Trustee of the SWIS Foundation – Social Welfare and Impact
                Solutions – a mission-driven organisation committed to advancing equity, grassroots
                transformation, and inclusive development across India. He also serves as a Board Member at the
                SWIS Institute, which anchors research, capacity building, and strategic program delivery under the
                foundation’s umbrella.<br /><br />
                Driven by the vision of empowering communities through expert-led and equity-centered
                leadership, Soubhik has built a diverse ecosystem of projects, fellowships, and outreach programs
                that span education, livelihoods, civic participation, and impact policy engagement. His efforts have
                catalysed the formation of numerous institutional partnerships and have mobilized hundreds of
                young changemakers across the country.<br /><br />
                He is also a Life Member of the Indian Red Cross Society (IRCS), reflecting his commitment to
                humanitarian work and public service.<br /><br />
                Soubhik completed his schooling at St. Patrick's School, Telangana, and graduated from St.
                Xavier’s College (Autonomous), Kolkata in Economics with Sociology, Political Science, and
                International Relations post which he moved to pursue his Master’s in Political Science from the
                University of Delhi.
              </p>
            </div>
            <div style={{ flex: 1, padding: '0.5rem', textAlign: 'left', minWidth: '250px' }}>
              <p style={{ color: '#000', lineHeight: '1.5', fontSize: '0.9rem' }}>
                His professional experiences span the social sector, entrepreneurship, and consulting. He has
                previously worked with organisations including Singhal Enterprises, Scholaride Consulting,
                Pixstory, and Unschool. Alongside this, he has actively volunteered with NCC, NSS, Youth for
                Seva, and TBWA, demonstrating his deep-rooted ethos of service and civic duty.<br /><br />
                Soubhik’s approach blends grassroots insight with institutional thinking, combining innovation,
                empathy, and strategic leadership. His commitment to nation-building through youth engagement
                and social innovation continues to inspire a generation of emerging leaders and social
                entrepreneurs.<br /><br />
                As the founder of the SWIS Foundation, Soubhik envisions building a next-generation impact
                infrastructure for India – one that is powered by research, compassion, policy literacy, and
                community leadership, with the long-term goal of fostering a more just, equitable, and inclusive
                society.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', position: 'relative' }}>
            <motion.button
              onClick={handlePrev}
              initial={{ opacity: 0.7 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                position: 'absolute',
                left: '-50px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#023080',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
              }}
            >
              ←
            </motion.button>
            <motion.div
              style={{ display: 'flex', gap: '1rem', width: '900px', overflow: 'hidden' }}
            >
              {galleryImages.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  initial={{ opacity: 0, x: i === 0 ? -50 : i === 1 ? 0 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ width: '300px', height: '200px', borderRadius: '6px', objectFit: 'cover', flexShrink: 0 }}
                />
              ))}
            </motion.div>
            <motion.button
              onClick={handleNext}
              initial={{ opacity: 0.7 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                position: 'absolute',
                right: '-50px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#023080',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                fontSize: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
              }}
            >
              →
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Memorable Speeches */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        style={{ backgroundColor: '#FCFDFF', padding: '2rem', textAlign: 'center' }}
      >
        <motion.h2
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          style={{ color: '#04307b', fontSize: '1.8rem', marginBottom: '0.5rem' }}
        >
          Memorable Speeches
        </motion.h2>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '0.9rem' }}
        >
          A collection of memorable speeches by the Founder–Chairman that shed light on his persona and inspired scores of people to believe in their dreams
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
              style={{ width: '180px', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '8px', margin: '0.5rem', textAlign: 'center' }}
            >
              <p style={{ fontSize: '0.9rem' }}>Lifetime Achievement Award The Economic Times Awards</p>
            </motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
              style={{ width: '180px', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '8px', margin: '0.5rem', textAlign: 'center' }}
            >
              <p style={{ fontSize: '0.9rem' }}>Wharton Dean's Medal<br />Wharton School, UPenn</p>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}
          >
            <motion.img
              initial={{ scale: 0.9, y: 100 }}
              whileInView={{ scale: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              whileHover={{ scale: 1.2, y: -5 }}
              src={founderimage}
              alt="Chairman"
              style={{ width: '250px', borderRadius: '15px', boxShadow: '0 0 15px rgba(0, 0, 139, 0.5)' }}
            />
          </motion.div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
              style={{ width: '180px', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '8px', margin: '0.5rem', textAlign: 'center' }}
            >
              <p style={{ fontSize: '0.9rem' }}>Man of the Century Award<br />Chemtech Foundation</p>
            </motion.div>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
              style={{ width: '180px', backgroundColor: '#fff', padding: '0.5rem', borderRadius: '8px', margin: '0.5rem', textAlign: 'center' }}
            >
              <p style={{ fontSize: '0.9rem' }}>Civic Address & Reception<br />Bombay Municipal Corp</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Shareholders' Speeches */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        style={{ backgroundColor: '#023080', color: '#FCFDFF', padding: '2rem', textAlign: 'center' }}
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}
        >
          Speeches at Reliance Shareholders' Meetings
        </motion.h2>
        <div style={{ backgroundColor: '#fff', color: '#000', padding: '1rem', borderRadius: '8px', maxWidth: '750px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {[
            { date: "APR 08, 2002", desc: "Equity Shareholders Meeting" },
            { date: "JUN 15, 2001", desc: "27th Annual General Meeting" },
            { date: "JUN 13, 2000", desc: "26th Annual General Meeting" },
            { date: "JUN 24, 1999", desc: "25th Annual General Meeting" },
            { date: "JUN 26, 1998", desc: "24th Annual General Meeting" },
            { date: "OCT 16, 1997", desc: "Extraordinary General Meeting" }
          ].map((speech, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 50 }}
              style={{ width: '180px', textAlign: 'center', margin: '0.5rem', backgroundColor: '#e0e0e0', padding: '0.5rem', borderRadius: '8px' }}
            >
              <p style={{ fontSize: '0.9rem' }}>{speech.date}</p>
              <p style={{ fontSize: '0.9rem' }}>{speech.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 50 }}
        style={{ backgroundColor: '#d2d5e0', padding: '2rem', textAlign: 'center' }}
      >
        <h2 style={{ color: '#04307b', fontSize: '1.8rem' }}>Awards & Recognitions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem', justifyContent: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            {["awd1", "awd2", "awd3"].map((name, i) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                style={{ position: 'relative', width: '200px', height: '160px', overflow: 'hidden', borderRadius: '8px' }}
              >
                <img
                  src={name === "awd1" ? award1 : name === "awd2" ? award2 : award3}
                  alt={`Award ${name}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 139, 0.5)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <p style={{ fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'center' }}>{`Award ${i + 1}`}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
            {["awd4", "awd5", "awd6"].map((name, i) => (
              <motion.div
                key={name}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                style={{ position: 'relative', width: '200px', height: '160px', overflow: 'hidden', borderRadius: '8px' }}
              >
                <img
                  src={name === "awd4" ? award4 : name === "awd5" ? award5 : award6}
                  alt={`Award ${name}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 139, 0.5)',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease'
                  }}
                >
                  <p style={{ fontSize: '0.9rem', fontWeight: 'bold', textAlign: 'center' }}>{`Award ${i + 4}`}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FounderChairman;