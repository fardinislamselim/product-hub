import Link from "next/link";
import { IoGameControllerOutline, IoLaptopOutline, IoShirtOutline, IoWatchOutline } from "react-icons/io5";

const categories = [
  {
    name: "Electronics",
    icon: <IoLaptopOutline />,
    href: "/products?category=Electronics"
  },
  {
    name: "Fashion",
    icon: <IoShirtOutline />,
    href: "/products?category=Fashion"
  },
  {
    name: "Accessories",
    icon: <IoWatchOutline />,
    href: "/products?category=Home Decor" // Mapping to existing mock data category or just Accessories
  },
  {
    name: "Gadgets",
    icon: <IoGameControllerOutline />,
    href: "/products?category=Electronics"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-extrabold text-[#111827] mb-12">
          Browse Categories
        </h2>

        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={cat.href}
              className="group flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-32 h-32 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#2563eb] text-5xl shadow-sm group-hover:shadow-md group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                {cat.icon}
              </div>
              <span className="font-bold text-[#111827] text-lg group-hover:text-[#2563eb] transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
