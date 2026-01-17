import ProductSkeleton from "@/components/ProductSkeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-6 lg:px-20 py-16 lg:py-24">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-[#111827] mb-12 text-center opacity-50">
        Shop All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {[...Array(8)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}