import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col gap-4 w-full cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square rounded-[24px] overflow-hidden bg-[#f3f4f6]">
        <Image
          src={product.image} 
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h3 className="text-[19px] font-bold text-[#111827] truncate pr-2">{product.name}</h3>
          <span className="text-[#0070f3] font-extrabold text-[18px]">
            ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
          </span>
        </div>
        <p className="text-[#9ca3af] text-[15px] font-medium line-clamp-1">
          {product.description}
        </p>
      </div>

      {/* View Details Button */}
      <Link 
        href={`/products/${product._id}`}
        className="mt-2 btn btn-outline border-[#0070f3] text-[#0070f3] hover:bg-[#0070f3] hover:border-[#0070f3] hover:text-white rounded-[14px] font-bold text-[16px] h-[52px] min-h-[52px] transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
