import { IoStar } from "react-icons/io5";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Verified Buyer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "The minimalist interface makes it so easy to find exactly what I need. Shipping was incredibly fast too!",
    stars: 5,
  },
  {
    name: "Marcus Thorne",
    role: "Tech Enthusiast",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
    text: "ProductHub is my go-to for all tech accessories. The quality control is clearly on another level compared to others.",
    stars: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Interior Designer",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    text: "Finally an e-commerce platform that doesn't feel cluttered. Elegant, fast, and secure. Highly recommended.",
    stars: 5,
  }
];

const CustomerReviews = () => {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] text-center mb-16">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
              
              <div>
                <div className="flex gap-1 text-orange-400 text-sm mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <IoStar key={i} />
                  ))}
                </div>
                
                <p className="text-gray-600 font-medium italic mb-8 leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#111827] text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-400 font-medium">{review.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
