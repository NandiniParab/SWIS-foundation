import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data Collection",
      content:
        "We collect personal information such as name, email address, contact number, and address solely for the purpose of communication, donation processing, and providing updates on our activities.",
    },
    {
      title: "Information Usage",
      content:
        "The personal data collected will be used only for the intended purposes and will not be shared, sold, or rented to third parties unless required by law.",
    },
    {
      title: "Security Measures",
      content:
        "We employ industry-standard security measures to safeguard the personal information provided to us against unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      title: "Data Retention",
      content:
        "Personal information will be retained only for as long as necessary to fulfill the purposes for which it was collected or as required by law.",
    },
    {
      title: "Cookies",
      content:
        "Our website may use cookies to enhance user experience. Users can choose to set their web browsers to refuse cookies or to alert them when cookies are being sent.",
    },
    {
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites.",
    },
    {
      title: "Children's Privacy",
      content:
        "We do not knowingly collect personal information from children under the age of 13. If you believe that we may have collected personal information from a child under 13, please contact us immediately.",
    },
    {
      title: "Opt-Out",
      content:
        "Users can opt-out of receiving communications from us at any time by contacting us directly or using the unsubscribe link provided in our communications.",
    },
    {
      title: "Updates to Privacy Policy",
      content:
        "We reserve the right to update our privacy policy at any time. Users will be notified of any changes to our privacy policy on our website.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCFDFF] font-sans">
      {/* Header */}
      <header className="py-8 md:py-10 border-b border-[#d2d5e0]">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#023080] mb-3">
            Privacy Policy
          </h1>
          <p className="text-[#04307b] text-base md:text-lg max-w-4xl">
            At SWIS, we are committed to protecting your privacy and ensuring the security of your personal information. This policy outlines how we collect, use, and safeguard your data.
          </p>
        </div>
      </header>

      {/* Policy Sections */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-[#d2d5e0] border border-[#8e9fc5] rounded-md p-6 md:p-8 space-y-8">
          {sections.map((section, i) => (
            <section key={i} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-5 w-5 text-[#023080]" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#023080] mb-1">
                  {section.title}
                </h3>
                <p className="text-[#04307b]">{section.content}</p>
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#023080] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          If you have questions or concerns about this Policy, please{" "}
          <Link
            to="/ContactPage"
            className="underline hover:text-[#d2d5e0] transition"
          >
            contact us
          </Link>
          .
        </p>
      </div>
    </footer>

    </div>
  );
};

export default PrivacyPolicy;
