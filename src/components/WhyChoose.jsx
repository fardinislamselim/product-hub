import { IoCodeSlashOutline, IoFlashOutline, IoGridOutline, IoLockClosedOutline } from "react-icons/io5";

const features = [
  {
    icon: <IoFlashOutline className="text-3xl text-primary" />,
    title: "Fast Access",
    desc: "Lightning-fast search and product indexing for an effortless browsing experience."
  },
  {
    icon: <IoLockClosedOutline className="text-3xl text-primary" />,
    title: "Secure Login",
    desc: "State-of-the-art authentication protocols to keep your data and transactions safe."
  },
  {
    icon: <IoGridOutline className="text-3xl text-primary" />,
    title: "Simple UI",
    desc: "A clean, distraction-free interface focused on what matters: the products."
  },
  {
    icon: <IoCodeSlashOutline className="text-3xl text-primary" />,
    title: "Modern Tech",
    desc: "Built with the latest web standards to ensure high performance and reliability."
  }
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] mb-4">
            Why Choose ProductHub?
          </h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            We provide the smoothest e-commerce experience with modern tools and secure practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
