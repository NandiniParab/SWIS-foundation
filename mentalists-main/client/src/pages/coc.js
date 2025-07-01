import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  ChevronRight, 
  Users, 
  Shield, 
  BookOpen, 
  AlertTriangle,
  FileText,
  Clock,
  Lock,
  Globe,
  UserCheck,
  Gavel,
  PenTool,
  Award
} from 'lucide-react';

const CodeOfConduct = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Purpose and Scope",
      icon: <BookOpen className="w-6 h-6" />,
      content: [
        {
          subtitle: "Purpose",
          text: "The Institute for Social Welfare and Impact Solutions (SWIS Institute), an initiative under the SWIS Foundation, has established this Code of Conduct to outline the ethical, professional, and behavioral standards expected of all individuals associated with the institute. These standards are designed to protect the institute's reputation, ensure effective operations, and maintain a respectful, inclusive environment."
        },
        {
          subtitle: "Applicability", 
          text: "This Code applies to all members. By accepting employment or any form of affiliation with SWIS Institute, all members agree to adhere to this Code."
        }
      ]
    },
    {
      id: 2,
      title: "Organizational Values and Expectations",
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: "Mission Alignment",
          text: "Members are expected to carry out their responsibilities in a manner that advances the institute's mission of social welfare and community impact."
        },
        {
          subtitle: "Professional Behavior",
          text: "All members should maintain respect, courtesy, and dignity in interactions with colleagues, beneficiaries, donors, partners, the public, and other stakeholders. Disruptive, aggressive, or inappropriate conduct, whether in person or online, is to be avoided."
        },
        {
          subtitle: "Integrity and Accountability",
          text: "Honesty is essential in all professional dealings. Misrepresentation of facts or data will not be tolerated. Members must take ownership of their responsibilities and meet deadlines unless there are extenuating circumstances, which should be communicated promptly."
        }
      ]
    },
    {
      id: 3,
      title: "Attendance and Leave Policy",
      icon: <Clock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Regular Attendance",
          text: "All members are required to adhere to agreed-upon work schedules, commitments, and attend meetings as scheduled. Chronic lateness or unexcused absences may lead to disciplinary action, including termination."
        },
        {
          subtitle: "Leave Requests",
          text: "Leave requests, including for health, exams, travel, and emergencies, must be submitted in writing to the HR Department (or designated supervisor) at least 5 days in advance. In emergencies, members should notify HR as soon as possible."
        },
        {
          subtitle: "Approval Process",
          text: "Leave must be approved by the supervisor. Excessive or unapproved leave can result in disciplinary warnings or termination."
        }
      ]
    },
    {
      id: 4,
      title: "Confidentiality and Intellectual Property",
      icon: <Lock className="w-6 h-6" />,
      content: [
        {
          subtitle: "Confidential Information",
          text: "Members must protect proprietary or sensitive information, including donor data, project research, financial records, and internal communications. Unauthorized sharing or use of confidential information for personal gain is strictly prohibited."
        },
        {
          subtitle: "Intellectual Property Rights",
          text: "All materials created or work performed during the course of one's role (e.g., reports, data analysis, marketing materials, proposals) are the exclusive property of SWIS Institute. Duplication, resale, or distribution of intellectual property without prior written permission is not allowed."
        },
        {
          subtitle: "Post-Separation Obligations",
          text: "Confidentiality obligations extend beyond the end of an individual's association with the institute. Violations of post-separation confidentiality may lead to legal action."
        }
      ]
    },
    {
      id: 5,
      title: "Public Representation, Social Media & Ethical Leadership",
      icon: <Globe className="w-6 h-6" />,
      content: [
        {
          subtitle: "Authorization for Public Statements",
          text: "Only Board Members are authorized to speak, post, or publish content on behalf of SWIS Institute. This includes media interviews, press releases, social media communications, and public presentations. No other members may make public statements without written authorization."
        },
        {
          subtitle: "Personal Social Media Use",
          text: "Members may maintain personal social media accounts but must not: Present personal views related to the institute, Share official documents or confidential information, Use SWIS Institute branding or logos without permission."
        },
        {
          subtitle: "Post-Termination Restrictions",
          text: "Former members are prohibited from making statements, sharing internal information, or representing the institute in any capacity without prior written approval. Violations may lead to legal action, disassociation, or revocation of certifications."
        }
      ]
    },
    {
      id: 6,
      title: "Conflict of Interest and Non-Compete",
      icon: <Shield className="w-6 h-6" />,
      content: [
        {
          subtitle: "Conflict of Interest",
          text: "Members must avoid situations that could compromise or appear to compromise their judgment or objectivity in acting for the institute's best interests. Conflicts of interest may arise from personal financial interests, relationships with vendors or donors, or external engagements."
        },
        {
          subtitle: "Disclosure Requirement",
          text: "Any potential conflicts of interest must be reported in writing to HR or the relevant supervisor. The institute will determine if further action is necessary."
        },
        {
          subtitle: "Non-Compete and Non-Solicitation",
          text: "Members must not join or establish any competing organization without written consent. They must also refrain from soliciting employees, volunteers, donors, or beneficiaries to leave or cease supporting SWIS Institute."
        }
      ]
    },
    {
      id: 7,
      title: "Zero Tolerance for Discrimination and Harassment",
      icon: <UserCheck className="w-6 h-6" />,
      content: [
        {
          subtitle: "Equal Opportunity and Inclusion",
          text: "SWIS Institute prohibits discrimination based on race, color, religion, ethnicity, gender identity, sexual orientation, disability, age, or any legally protected characteristic. Inclusion and equity are prioritized in all work environments, team formations, and project decisions."
        },
        {
          subtitle: "Harassment and Bullying",
          text: "Any form of harassment—sexual, verbal, physical, or cyber—will not be tolerated. Bullying, intimidation, or offensive language targeting any individual or group will result in immediate disciplinary action."
        },
        {
          subtitle: "Complaint Procedure",
          text: "Members facing or witnessing harassment or discrimination should report the issue to HR or a designated Grievance Officer. SWIS Institute guarantees a prompt investigation and prohibits retaliation against the complainant."
        }
      ]
    },
    {
      id: 8,
      title: "Behavioral Standards and Workplace Conduct",
      icon: <Award className="w-6 h-6" />,
      content: [
        {
          subtitle: "Integrity in Communications",
          text: "All communications (internal & external) must be honest, respectful, and fact-based. Spreading rumors, false information, or personal attacks is prohibited."
        },
        {
          subtitle: "Use of Organizational Resources",
          text: "SWIS Institute resources, such as computers and email systems, are for official use. Personal use should be minimal and must not interfere with work responsibilities."
        }
      ]
    },
    {
      id: 9,
      title: "Promotion and Transfer to a New Role",
      icon: <Users className="w-6 h-6" />,
      content: [
        {
          subtitle: "New Role Responsibilities",
          text: "Employees who are promoted or transferred to a new role within the organization must: Adapt to new responsibilities with diligence and professionalism, Acknowledge any changes in compensation, benefits, or terms of employment, Continue to adhere to the Code of Conduct and other policies."
        }
      ]
    },
    {
      id: 10,
      title: "Disciplinary Action",
      icon: <Gavel className="w-6 h-6" />,
      content: [
        {
          subtitle: "Grounds for Disciplinary Measures",
          text: "Breach of confidentiality, Discrimination or harassment, Performance-related issues, absenteeism, or insubordination, Unauthorized public statements or misuse of social media, Fraud or financial misconduct."
        },
        {
          subtitle: "Types of Disciplinary Actions",
          text: "Verbal or Written Warning: For minor or first-time offenses. Suspension or Probation: For repeated or serious violations. Termination of Association: For severe breaches or failure to perform duties effectively. Legal Proceedings: If violations involve legal infractions, legal action may be taken."
        }
      ]
    },
    {
      id: 11,
      title: "Termination and Resignation",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        {
          subtitle: "Termination by Institute",
          text: "SWIS Institute reserves the right to terminate a member immediately if they: Compromise the institute's integrity or reputation, Engage in illegal or unethical activities, Violate essential clauses of this Code."
        },
        {
          subtitle: "Resignation",
          text: "Members must submit a formal resignation at least 1 month in advance, clearly explaining the reason and ensuring a proper handover of tasks and documentation."
        },
        {
          subtitle: "Exit Formalities",
          text: "Upon resignation or termination, members must return all organizational property, clear any outstanding tasks, and sign out of all official accounts."
        }
      ]
    },
    {
      id: 12,
      title: "Record-Keeping and Documentation",
      icon: <FileText className="w-6 h-6" />,
      content: [
        {
          subtitle: "Personal and Professional Records",
          text: "Members must keep personal data (e.g., address, phone number) updated with HR. Accurate and up-to-date records of work, attendance, and performance must be maintained."
        },
        {
          subtitle: "Data Integrity",
          text: "Members handling internal systems or data must ensure accuracy, security, and integrity, avoiding manipulation for personal gain or external requests."
        }
      ]
    },
    {
      id: 13,
      title: "Communication of Policy Changes",
      icon: <Globe className="w-6 h-6" />,
      content: [
        {
          subtitle: "Amendments and Updates",
          text: "SWIS Institute reserves the right to revise this Code of Conduct at any time. Members will be notified of significant changes via official email and posted on WhatsApp groups."
        },
        {
          subtitle: "Member Responsibility",
          text: "Continued engagement with the institute after policy updates implies acceptance of revised terms. Members are encouraged to seek clarification from HR or management on new provisions."
        }
      ]
    },
    {
      id: 14,
      title: "Commitment to Learning and Development",
      icon: <Award className="w-6 h-6" />,
      content: [
        {
          subtitle: "Professional Development",
          text: "Members are encouraged to pursue professional development opportunities, attend training sessions, and engage in initiatives aimed at skill enhancement and knowledge sharing. The institute supports ongoing learning and growth as part of its commitment to fostering a dynamic and skilled workforce."
        }
      ]
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6">
              Code of Conduct
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ethical, professional, and behavioral standards for all individuals associated with SWIS Institute
            </p>
            <div className="mt-8 p-4 bg-blue-800/50 rounded-lg inline-block">
              <p className="text-sm text-blue-200">
                The term "members" refers to all individuals associated with the organization, including full-time, part-time, and contractual staff, volunteers, fellows, interns, board members, and alumni.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-blue-600">
                      {section.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {section.id}. {section.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    {expandedSection === section.id ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {expandedSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="space-y-6 pt-4 border-t border-gray-100">
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} className="space-y-3">
                          <h4 className="font-semibold text-blue-800 text-base">
                            ({String.fromCharCode(105 + itemIndex)}) {item.subtitle}
                          </h4>
                          <p className="text-gray-700 leading-relaxed pl-4 border-l-2 border-blue-100">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConduct;