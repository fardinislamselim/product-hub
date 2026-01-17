"use client";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";

const ProductFilterBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');

  // Helper to create new query string
  const createQueryString = useCallback((name, value) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    // Reset page on filter change
    if (name !== 'page') {
      params.set('page', '1');
    }
    return params.toString();
  }, [searchParams]);

  // Handle Search Debounce
  const handleSearch = (term) => {
    setSearchTerm(term);
    const timeoutId = setTimeout(() => {
      router.push(pathname + '?' + createQueryString('search', term));
    }, 500);
    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-base-200 mb-8">
      {/* Search Input */}
      <div className="relative w-full mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <IoSearchOutline className="text-xl text-gray-400" />
        </div>
        <input
          type="text"
          className="w-full h-12 pl-12 pr-4 bg-[#f9fafb] border-none rounded-xl text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all font-medium"
          placeholder="Search for electronics, fashion, and more..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Label */}
          <span className="text-sm font-bold text-gray-500 hidden sm:inline-block mr-2">Filters:</span>
          
          {/* Category Select */}
          <select 
            className="select select-sm select-bordered rounded-lg bg-[#f9fafb] border-gray-200 text-gray-700 font-medium focus:border-primary focus:ring-0"
            value={searchParams.get('category') || ''}
            onChange={(e) => router.push(pathname + '?' + createQueryString('category', e.target.value))}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home Decor">Home Decor</option>
          </select>

           {/* Price Select */}
           <select 
            className="select select-sm select-bordered rounded-lg bg-[#f9fafb] border-gray-200 text-gray-700 font-medium focus:border-primary focus:ring-0"
            value={searchParams.get('price') || ''}
            onChange={(e) => {
              const val = e.target.value;
              const params = new URLSearchParams(searchParams);
              params.set('price', val);
              if (val === '0-50') { params.set('min', '0'); params.set('max', '50'); }
              else if (val === '50-100') { params.set('min', '50'); params.set('max', '100'); }
              else if (val === '100-MAX') { params.set('min', '100'); params.delete('max'); }
              else { params.delete('min'); params.delete('max'); params.delete('price'); }
              params.set('page', '1');
              router.push(pathname + '?' + params.toString());
            }}
          >
            <option value="">All Prices</option>
            <option value="0-50">Under $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-MAX">$100+</option>
          </select>
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-sm text-gray-500">Sort By:</span>
          <select 
            className="select select-sm select-bordered rounded-lg bg-[#f9fafb] border-gray-200 text-gray-700 font-medium focus:border-primary focus:ring-0 w-full sm:w-auto"
            value={searchParams.get('sort') || 'newest'}
            onChange={(e) => router.push(pathname + '?' + createQueryString('sort', e.target.value))}
          >
            <option value="newest">Newest</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterBar;
