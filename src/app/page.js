import Categories from "@/components/Categories";

import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import LatestProducts from "@/components/LatestProducts";
import Newsletter from "@/components/Newsletter";
import SpecialOffer from "@/components/SpecialOffer";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Categories />
      <LatestProducts />
      <WhyChoose />
      <SpecialOffer />
      <CustomerReviews />
      <Newsletter />
    </div>
  );
}
