"use client";
import { getFeaturedProducts } from '@/actions/server/product';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const data = await getFeaturedProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading latest products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMethods();
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#111827] mb-2">Latest Products</h2>
            <p className="text-[#6b7280] font-medium">Fresh arrivals just for you.</p>
          </div>
          <Link href="/products" className="text-[#0070f3] font-bold flex items-center gap-1 hover:underline text-sm lg:text-base">
            View All Items <span>→</span>
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {loading ? (
             // Show 4 Skeletons
             [...Array(4)].map((_, i) => <ProductSkeleton key={i} />)
          ) : (
             products.map((product) => (
               <ProductCard key={product._id} product={product} />
             ))
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
