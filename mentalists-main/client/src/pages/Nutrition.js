
import React from 'react';
import { Heart, Users, School, Home, Target, TrendingUp, CheckCircle } from 'lucide-react';

const Nutrition = () => {
  const programs = [
    {
      title: "Daily Meal Programs in Orphanages & Shelter Homes",
      description: "A study by Childline India (2021) found that 1 in 3 children in shelter homes suffer from inadequate nutrition. We address this by providing fresh, balanced meals packed with essential nutrients, helping improve immunity, cognitive development, and emotional well-being.",
      icon: <Home className="w-8 h-8" />,
      color: "from-[#023080] to-[#04307b]"
    },
    {
      title: "Daily Meal Programs in Old Age Homes",
      description: "According to HelpAge India (2022), over 50% of elderly in institutional care are undernourished or have diet-related health issues. Our meals are tailored to meet the needs of the elderly—rich in fiber, calcium, and protein, while being easy to digest and suitable for conditions like diabetes and hypertension.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-[#04307b] to-[#8e9fc5]"
    },
    {
      title: "Mid-Day Meal Enhancement in Low-Income Schools",
      description: "More than 115 million children rely on the Mid-Day Meal Scheme (MoE, 2023), yet many schools struggle with poor quality and hygiene. We collaborate with schools to enhance nutrition, improve hygiene, and introduce locally sourced, diverse meals—leading to better attendance and academic focus.",
      icon: <School className="w-8 h-8" />,
      color: "from-[#8e9fc5] to-[#d2d5e0]"
    },
    {
      title: "Meal Planning, Health Screening & Supplementation",
      description: "NFHS-5 reports that 57% of women aged 15–49 and 68.9% of children aged 6–59 months are anemic. We conduct regular health screenings, provide iron and vitamin supplementation, and train caregivers in nutrient planning and hygiene, ensuring a holistic approach to nutrition.",
      icon: <Users className="w-8 h-8" />,
      color: "from-[#023080] to-[#8e9fc5]"
    }
  ];

  const stats = [
    { number: "1 in 3", description: "children in shelter homes do not receive adequate nutrition.", source: "Childline India Foundation, 2021" },
    { number: "50%+", description: "of elderly in care homes suffer from undernutrition or chronic deficiencies.", source: "HelpAge India, 2022" },
    { number: "115 million+", description: "children depend on Mid-Day Meals in India, yet quality, quantity, and safety remain major concerns.", source: "Ministry of Education, Govt. of India, 2023" }
  ];

  const impactNumbers = [
    { number: "02+", label: "States" },
    { number: "04+", label: "Locations" },
    { number: "10,000+", label: "Meals Served" },
    { number: "150+", label: "Beneficiaries Impacted" }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #FCFDFF 0%, #d2d5e0 50%, #8e9fc5 100%)' }}>
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-lg bg-white/20 rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-[#023080] mb-6">
                Nutrition Program
              </h1>
              <p className="text-lg md:text-xl text-[#04307b] mb-4 max-w-4xl mx-auto leading-relaxed">
                <span className="font-semibold">SAME AS DONE FOR EDUCATION</span>
              </p>
              <p className="text-lg md:text-xl text-[#04307b] max-w-4xl mx-auto leading-relaxed">
                India faces a silent nutrition crisis—over 35% of children under five are stunted and 32% are 
                underweight (NFHS-5). The impact is worse in rural, tribal, and underserved communities.
              </p>
            </div>

            {/* Crisis Statement */}
            <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-8 border border-white/40 mb-8">
              <p className="text-[#04307b] text-lg leading-relaxed mb-6">
                Hunger knows no age. Children in orphanages, the elderly in old age homes, and students in 
                low-income schools often receive irregular, inadequate meals. Despite government schemes like 
                the Mid-Day Meal Program, gaps in implementation leave many without consistent nutrition or care.
              </p>
              <p className="text-[#023080] text-lg font-semibold leading-relaxed">
                At SWIS, we believe that access to nutritious food is a basic human right, not a privilege. Our 
                interventions are rooted in empathy, dignity, and sustainability—ensuring that every child, every 
                elder, and every student under our care receives meals that nourish both body and mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#023080] mb-4">
              Our Nutrition Outreach Includes
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group">
                <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${program.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#023080] mb-4">
                    {program.title}
                  </h3>
                  <p className="text-[#04307b] leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Where We Work Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-lg bg-white/25 rounded-3xl p-8 md:p-12 border border-white/40 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#023080] mb-6">
                Where We Work
              </h2>
              <p className="text-xl text-[#04307b] mb-8">
                Orphanages | Schools | Old Age Homes
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {impactNumbers.map((item, index) => (
                <div key={index} className="text-center backdrop-blur-sm bg-white/30 rounded-xl p-6 border border-white/50">
                  <div className="text-2xl md:text-3xl font-bold text-[#023080] mb-2">
                    {item.number}
                  </div>
                  <div className="text-sm md:text-base text-[#04307b] font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="backdrop-blur-sm bg-white/30 rounded-2xl p-6 border border-white/50">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-[#023080]" />
                  <h3 className="text-xl font-bold text-[#023080]">Impact Goal</h3>
                </div>
                <p className="text-[#04307b] leading-relaxed">
                  By 2030, provide 600K+ healthy meals annually to vulnerable populations across shelter homes, 
                  schools, and senior care centers—fighting hunger, improving health, and restoring dignity for those 
                  most often forgotten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#023080] mb-4">
              Why It Matters: Key Nutrition Statistics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full text-center">
                  <div className="text-4xl md:text-5xl font-bold text-[#023080] mb-4">
                    {stat.number}
                  </div>
                  <p className="text-[#04307b] mb-4 leading-relaxed">
                    {stat.description}
                  </p>
                  <div className="text-sm text-[#8e9fc5] font-medium">
                    Source: {stat.source}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-8 border border-white/40 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-[#023080] mb-4">
              Join Our Mission to End Hunger
            </h3>
            <p className="text-lg text-[#04307b] mb-6">
              Every meal matters. Every life matters. Help us nourish communities and build a hunger-free future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#023080] to-[#04307b] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Support Our Cause</span>
              </button>
              <button className="border-2 border-[#023080] text-[#023080] px-8 py-3 rounded-xl font-semibold hover:bg-[#023080] hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Volunteer With Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
