
import React from 'react';
import { Users, Heart, Briefcase, Mail, Building2, UserPlus, Target, Lightbulb } from 'lucide-react';

const JoinUs = () => {
  const individualOptions = [
    {
      title: "Centre for Civil Administration & Engagement",
      description: "Work with government bodies and public institutions to enhance civic engagement and administrative efficiency.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-[#023080] to-[#04307b]"
    },
    {
      title: "Centre for Social Awareness & Action",
      description: "Drive social change through community outreach, awareness campaigns, and grassroots activism.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-[#04307b] to-[#8e9fc5]"
    },
    {
      title: "Centre for Research & Development",
      description: "Contribute to policy research, data analysis, and innovative solutions for social challenges.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-[#8e9fc5] to-[#d2d5e0]"
    },
    {
      title: "General Volunteer",
      description: "Join our community of changemakers and contribute to various initiatives across all our programs.",
      icon: <UserPlus className="w-8 h-8" />,
      color: "from-[#023080] to-[#8e9fc5]"
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FCFDFF 0%, #d2d5e0 50%, #8e9fc5 100%)' }}>
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#023080] mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-[#04307b] mb-8 max-w-3xl mx-auto">
              Be part of a community dedicated to creating positive social change and building a better tomorrow for all.
            </p>
            <div className="flex items-center justify-center space-x-2 text-[#8e9fc5]">
              <Users className="w-6 h-6" />
              <span className="text-lg font-medium">Together We Make a Difference</span>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Joining Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#023080] mb-4">
              Individual Opportunities
            </h2>
            <p className="text-lg text-[#04307b] max-w-2xl mx-auto">
              Choose the area where you'd like to make the most impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {individualOptions.map((option, index) => (
              <div key={index} className="group">
                <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#023080] mb-4 text-center">
                    {option.title}
                  </h3>
                  <p className="text-[#04307b] text-sm leading-relaxed mb-6 text-center">
                    {option.description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-[#023080] to-[#04307b] text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Organization Partnership Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/25 rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#023080] to-[#8e9fc5] flex items-center justify-center text-white mb-8 mx-auto">
                <Building2 className="w-10 h-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#023080] mb-6">
                Organizational Partnership
              </h2>
              <p className="text-lg text-[#04307b] mb-8 leading-relaxed">
                Is your organization interested in partnering with us to create meaningful social impact? 
                We welcome collaborations that align with our mission and values.
              </p>
              
              <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/50 mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Mail className="w-6 h-6 text-[#023080]" />
                  <h3 className="text-xl font-bold text-[#023080]">Get in Touch</h3>
                </div>
                <p className="text-[#04307b] mb-4">
                  Send us an email to discuss partnership opportunities:
                </p>
                <a 
                  href="mailto:swisfoundation@gmail.com"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#023080] to-[#04307b] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  <span>swisfoundation@gmail.com</span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/30">
                  <Target className="w-8 h-8 text-[#023080] mx-auto mb-2" />
                  <h4 className="font-semibold text-[#023080] mb-1">Strategic Partnerships</h4>
                  <p className="text-sm text-[#04307b]">Long-term collaborations</p>
                </div>
                <div className="backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/30">
                  <Users className="w-8 h-8 text-[#023080] mx-auto mb-2" />
                  <h4 className="font-semibold text-[#023080] mb-1">Corporate Social Responsibility</h4>
                  <p className="text-sm text-[#04307b]">CSR initiatives</p>
                </div>
                <div className="backdrop-blur-sm bg-white/20 rounded-xl p-4 border border-white/30">
                  <Heart className="w-8 h-8 text-[#023080] mx-auto mb-2" />
                  <h4 className="font-semibold text-[#023080] mb-1">Community Projects</h4>
                  <p className="text-sm text-[#04307b]">Joint community impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 border border-white/40 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#023080] mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-[#04307b] mb-6">
              Every journey begins with a single step. Take yours today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#023080] to-[#04307b] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-[#023080] text-[#023080] px-8 py-3 rounded-xl font-semibold hover:bg-[#023080] hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
