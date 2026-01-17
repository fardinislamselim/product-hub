import { getProducts } from "@/actions/server/product";
import ProductCard from "@/components/ProductCard";

const ShopPage = async () => {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-6 lg:px-20 py-16 lg:py-24">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-[#111827] mb-12 text-center">
        Shop All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No products found. Check back later!
        </div>
      )}
    </div>
  );
};

export default ShopPage;
