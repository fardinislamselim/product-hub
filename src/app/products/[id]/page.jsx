import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline, IoChevronBack, IoHeartOutline } from "react-icons/io5";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.description?.slice(0, 160) || "View product details.",
    openGraph: {
      images: [product.image],
    },
  };
}

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product || !product.name) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcfcfd]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <Link href="/products" className="btn btn-primary text-white">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfd] min-h-screen py-10 lg:py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Back Button */}
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium mb-8 transition-colors"
        >
          <IoChevronBack /> Back to Shop
        </Link>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Product Image */}
          <div className="flex-1">
            <div className="relative aspect-square w-full rounded-[32px] overflow-hidden bg-white shadow-xl shadow-gray-200/50 border border-white">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Category Badge */}
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide mb-6 w-fit h-fit">
              {product.category || "General"}
            </span>

            <h1 className="text-4xl lg:text-5xl font-black text-[#111827] mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="text-3xl font-bold text-primary mb-6">
              ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
            </div>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 border-l-4 border-gray-200 pl-6">
              {product.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary btn-lg rounded-2xl px-10 text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all">
                <IoCartOutline className="text-2xl mr-2" />
                Add to Cart
              </button>
              
              <button className="btn btn-ghost btn-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-2xl text-gray-600">
                <IoHeartOutline className="text-2xl" />
              </button>
            </div>

            {/* Additional Metadata */}
            <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 gap-8 text-sm">
                <div>
                   <span className="block text-gray-400 font-medium mb-1">Rating</span>
                   <div className="flex items-center gap-1 text-yellow-500 font-bold text-lg">
                     <span>★</span>
                     <span>{product.rating || "4.5"}</span>
                     <span className="text-gray-300 font-normal ml-1">/ 5.0</span>
                   </div>
                </div>
                <div>
                   <span className="block text-gray-400 font-medium mb-1">Stock Status</span>
                   <span className="text-green-600 font-bold text-lg">In Stock</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
