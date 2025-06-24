import React, { useState, useEffect, useRef } from 'react';
import teamPhoto from "../img/tutor.jpg";

const History = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);

      const newVisibleSections = new Set();
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            newVisibleSections.add(index);
          }
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData = [
    {
      year: "2021",
      title: "Seeds of Change",
      subtitle: "The Beginning",
      description: "The foundation of our vision was laid with the birth of Sangharsh (संघर्ष). A movement that began with a simple yet powerful idea - to create meaningful change in society through youth-driven initiatives.",
      achievements: [
        "H1 2021: The seed of Sangharsh (संघर्ष) were sown with extensive research and community analysis",
        "Founder Soubhik Kundu began conceptualising a comprehensive youth-driven initiative for sustainable social change",
        "H2 2021: Strategic brainstorming sessions, extensive network-building, and meaningful community conversations established the foundation"
      ],
      icon: "🌱",
      color: "#10B981"
    },
    {
      year: "2022",
      title: "Taking Shape",
      subtitle: "Foundation Building",
      description: "From abstract concept to tangible reality - Sangharsh Empowerment Foundation was officially born. This year marked the transition from ideation to implementation with structured programs and dedicated team building.",
      achievements: [
        "H1 2022: Sangharsh Empowerment Foundation informally founded in Hyderabad with a core team of passionate changemakers",
        "Successfully launched pilot volunteering initiatives with the first cohort of dedicated youth volunteers",
        "H2 2022: Strategically expanded initial projects including systematic meal distribution and comprehensive awareness drives"
      ],
      icon: "🏗️",
      color: "#3B82F6"
    },
    {
      year: "2023",
      title: "Formal Recognition",
      subtitle: "Official Establishment",
      description: "Official registration marked our evolution into a structured, legally recognized organization. This milestone year established our credibility and opened doors to larger partnerships and collaborative opportunities.",
      achievements: [
        "H1 2023: Officially registered as a not-for-profit public charitable trust with comprehensive legal documentation",
        "Successfully built a robust core team and strategically onboarded the first cohort of committed long-term volunteers",
        "H2 2023: Established strategic partnerships with 7+ shelter homes across diverse regions of India"
      ],
      icon: "📋",
      color: "#8B5CF6"
    },
    {
      year: "2024",
      title: "Exponential Growth",
      subtitle: "Scaling Impact",
      description: "A transformative year of remarkable expansion and strategic evolution. Our reach extended across multiple states while maintaining quality and impact. Strategic planning sessions shaped our ambitious future vision.",
      achievements: [
        "H1 2024: Successfully operated in 12+ diverse locations across India with consistent quality standards",
        "Organizational growth: Core team expanded to 30+ dedicated members; volunteer base surpassed 400+ active contributors",
        "H2 2024: Comprehensive strategic planning initiatives for institutional transition and sustainable growth models"
      ],
      icon: "📈",
      color: "#F59E0B"
    },
    {
      year: "2025",
      title: "SWIS Foundation",
      subtitle: "Revolutionary Transformation",
      description: "The birth of SWIS Foundation - Social Welfare & Impact Solutions represents our evolution into a sophisticated, data-driven organization with ambitious goals and professional excellence at its core.",
      achievements: [
        "H1 2025: Successfully launched SWIS Foundation with enhanced operational capabilities and strategic focus",
        "Completed seamless transition from Sangharsh to SWIS, symbolizing structured growth and professional maturity",
        "Established ambitious vision to positively impact 2 million+ lives over the next 20 years through innovative programs"
      ],
      icon: "🚀",
      color: "#EF4444"
    }
  ];

  return (
    <div className="history-container">
      {/* Progress Bar */}
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Hero Section - IMAGE PLACEHOLDER 1: Hero background image */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>OUR JOURNEY</span>
          </div>
          <h1 className="hero-title">
            <span className="title-main">Our History</span>
            <span className="title-subtitle">From Vision to Impact</span>
          </h1>
          <div className="hero-description">
            <p>Over 4 years of dedicated service, transformative growth, and unwavering commitment to social change. From humble beginnings to revolutionary impact - this is our story.</p>
          </div>
          {/* IMAGE PLACEHOLDER 2: Team photo or collage */}
          <div className="hero-image-placeholder">
           <img
             src={teamPhoto} 
            alt="Team Photo or Foundation Collage"
            className="real-image"
            />
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">400+</div>
              <div className="stat-label">Volunteers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Locations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2M+</div>
              <div className="stat-label">Target Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Sections */}
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        
        {timelineData.map((item, index) => (
          <section
            key={index}
            ref={el => sectionsRef.current[index] = el}
            className={`timeline-section ${visibleSections.has(index) ? 'visible' : ''}`}
          >
            <div className="timeline-content">
              <div className={`timeline-layout ${index % 2 === 1 ? 'reverse' : ''}`}>
                
                {/* Timeline Node */}
                <div className="timeline-node" style={{ backgroundColor: item.color }}>
                  <div className="node-inner">
                    <span className="node-icon">{item.icon}</span>
                  </div>
                  <div className="node-year">{item.year}</div>
                </div>

                {/* Content Box */}
                <div className="content-box">
                  {/* IMAGE PLACEHOLDER 3: Year-specific images for each timeline section */}
                  <div className="timeline-image-placeholder">
                    <div className="image-placeholder">{item.year} Milestone Image</div>
                  </div>
                  
                  <div className="content-header">
                    <div className="content-badge" style={{ backgroundColor: item.color }}>
                      {item.subtitle}
                    </div>
                    <h2 className="content-title">{item.title}</h2>
                  </div>
                  
                  <div className="content-body">
                    <p className="content-description">{item.description}</p>
                    
                    <div className="achievements-section">
                      <h3 className="achievements-title">Key Achievements</h3>
                      <div className="achievements-grid">
                        {item.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="achievement-item">
                            <div className="achievement-bullet" style={{ backgroundColor: item.color }}></div>
                            <span className="achievement-text">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Future Vision Section */}
      <section 
        ref={el => sectionsRef.current[timelineData.length] = el}
        className={`future-section ${visibleSections.has(timelineData.length) ? 'visible' : ''}`}
      >
        <div className="future-content">
          <div className="future-badge">
            <span>LOOKING AHEAD</span>
          </div>
          <h2 className="future-title">The Journey Continues</h2>
          <div className="future-description">
            <p>From humble beginnings to transformative impact, our journey represents more than growth—it embodies evolution. SWIS Foundation stands as a testament to what's possible when vision meets action, and passion drives purpose.</p>
          </div>
          
          {/* IMAGE PLACEHOLDER 4: Future vision graphic or infographic */}
          <div className="future-image-placeholder">
            <div className="image-placeholder">Future Vision Infographic</div>
          </div>
          
          <div className="future-vision-grid">
            <div className="vision-item">
              <div className="vision-icon">🎯</div>
              <h3>Strategic Focus</h3>
              <p>Data-driven programs with measurable impact and sustainable outcomes</p>
            </div>
            <div className="vision-item">
              <div className="vision-icon">🌍</div>
              <h3>Global Vision</h3>
              <p>Expanding our reach while maintaining local relevance and community connection</p>
            </div>
            <div className="vision-item">
              <div className="vision-icon">💡</div>
              <h3>Innovation</h3>
              <p>Leveraging technology and innovative approaches for maximum social impact</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .history-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
          color: #f8fafc;
          overflow-x: hidden;
          position: relative;
          min-height: 100vh;
        }

        /* Progress Bar */
        .progress-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444);
          transition: width 0.1s ease;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          background: radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          max-width: 1200px;
          text-align: center;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50px;
          padding: 0.75rem 2rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .hero-badge span {
          font-size: 0.875rem;
          font-weight: 600;
          color: #3b82f6;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .hero-title {
          margin-bottom: 2rem;
        }

        .title-main {
          display: block;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4.5rem;
          font-weight: 300;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -2px;
        }

        .title-subtitle {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: #94a3b8;
          letter-spacing: 1px;
        }

        .hero-description {
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .hero-description p {
          font-size: 1.25rem;
          line-height: 1.8;
          color: #cbd5e1;
        }

        /* Image Placeholders */
        .hero-image-placeholder,
        .timeline-image-placeholder,
        .future-image-placeholder {
          margin: 2rem 0;
        }

        .image-placeholder {
          background: rgba(248, 250, 252, 0.05);
          border: 2px dashed rgba(248, 250, 252, 0.2);
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          color: #64748b;
          font-style: italic;
          transition: all 0.3s ease;
        }

        .image-placeholder:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: rgba(59, 130, 246, 0.3);
          color: #3b82f6;
        }

        .timeline-image-placeholder .image-placeholder {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .future-image-placeholder .image-placeholder {
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.5rem;
          font-weight: 300;
          color: #3b82f6;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Timeline */
        .timeline-wrapper {
          position: relative;
          padding: 4rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, #334155, transparent);
          transform: translateX(-50%);
        }

        .timeline-section {
          padding: 3rem 2rem;
          position: relative;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
        }

        .timeline-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-content {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-layout {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
        }

        .timeline-layout.reverse .content-box {
          grid-column: 1;
          grid-row: 1;
        }

        .timeline-layout.reverse .timeline-node {
          grid-column: 2;
          grid-row: 1;
        }

        .timeline-node {
          position: relative;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          grid-column: 2;
          justify-self: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .node-inner {
          width: 60px;
          height: 60px;
          background: rgba(15, 23, 42, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }

        .node-icon {
          font-size: 1.5rem;
        }

        .node-year {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: #f8fafc;
          background: rgba(15, 23, 42, 0.8);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(248, 250, 252, 0.1);
        }

        /* Content Box */
        .content-box {
          background: rgba(15, 23, 42, 0.6);
          border-radius: 20px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(248, 250, 252, 0.1);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
        }

        .content-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .content-header {
          margin-bottom: 1.5rem;
        }

        .content-badge {
          display: inline-block;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
        }

        .content-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 300;
          color: #f8fafc;
          margin-bottom: 0;
        }

        .content-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
        }

        .achievements-section {
          border-top: 1px solid rgba(248, 250, 252, 0.1);
          padding-top: 1.5rem;
        }

        .achievements-title {
          font-size: 1rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .achievements-grid {
          display: grid;
          gap: 0.75rem;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.75rem;
          background: rgba(248, 250, 252, 0.02);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .achievement-item:hover {
          background: rgba(248, 250, 252, 0.05);
        }

        .achievement-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-top: 0.5rem;
          flex-shrink: 0;
        }

        .achievement-text {
          font-size: 0.95rem;
          line-height: 1.5;
          color: #94a3b8;
        }

        .real-image {
        width: 100%;
        max-width: 100%;      /* Ensures it doesn't overflow */
        padding: 2rem;
        border-radius: 12px;
        display: block;
        margin: 0 auto;
        transition: all 0.3s ease;
        background: rgba(248, 250, 252, 0.05);
        object-fit: contain; /* Keeps image proportions */
        }

        /* Future Section */
        .future-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          position: relative;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease;
          background: radial-gradient(circle at 70% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
        }

        .future-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .future-content {
          max-width: 1000px;
          text-align: center;
        }

        .future-badge {
          display: inline-block;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 50px;
          padding: 0.75rem 2rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .future-badge span {
          font-size: 0.875rem;
          font-weight: 600;
          color: #10b981;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .future-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3rem;
          font-weight: 300;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, #f8fafc 0%, #cbd5e1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .future-description {
          font-size: 1.2rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin-bottom: 2rem;
        }

        .future-vision-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .vision-item {
          background: rgba(15, 23, 42, 0.6);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(248, 250, 252, 0.1);
          transition: all 0.3s ease;
          text-align: center;
        }

        .vision-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.4);
        }

        .vision-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .vision-item h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #f8fafc;
          margin-bottom: 0.75rem;
        }

        .vision-item p {
          color: #94a3b8;
          line-height: 1.5;
          font-size: 0.95rem;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .timeline-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
            justify-items: center;
          }

          .timeline-layout.reverse .content-box {
            grid-column: 1;
            grid-row: 2;
          }

          .timeline-layout.reverse .timeline-node {
            grid-column: 1;
            grid-row: 1;
          }

          .timeline-line {
            display: none;
          }

          .content-box {
            max-width: 600px;
          }
        }

        @media (max-width: 768px) {
          .title-main {
            font-size: 3rem;
          }

          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .content-title {
            font-size: 1.5rem;
          }

          .future-title {
            font-size: 2.5rem;
          }

          .future-vision-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .title-main {
            font-size: 2.5rem;
          }

          .hero-stats {
            grid-template-columns: 1fr;
          }

          .timeline-node {
            width: 60px;
            height: 60px;
          }

          .node-inner {
            width: 45px;
            height: 45px;
          }
        }
      `}</style>
    </div>
  );
};

export default History;