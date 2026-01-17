"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const ProductPagination = ({ totalPages, currentPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    router.push(pathname + '?' + params.toString());
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-16">
      <button 
        className="btn btn-square btn-sm btn-ghost text-gray-500 disabled:bg-transparent"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <IoChevronBack className="text-lg" />
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        // Simple logic to show limited pages could go here, for now showing all implies small dataset or simplistic requirement
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`btn btn-sm w-10 h-10 rounded-xl border-none font-bold transition-all ${
              currentPage === page 
                ? 'bg-[#0070f3] text-white shadow-lg shadow-blue-500/30' 
                : 'bg-transparent text-gray-500 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        );
      })}

      <button 
        className="btn btn-square btn-sm btn-ghost text-gray-500 disabled:bg-transparent"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <IoChevronForward className="text-lg" />
      </button>
    </div>
  );
};

export default ProductPagination;
