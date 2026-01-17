import { getProducts } from "@/actions/server/product";
import ProductCard from "@/components/ProductCard";
import ProductFilterBar from "@/components/ProductFilterBar";
import ProductPagination from "@/components/ProductPagination";

const ProductsPage = async (props) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const category = searchParams?.category || "";
  const sort = searchParams?.sort || "newest";
  const page = parseInt(searchParams?.page || "1", 10);

  const minPrice = searchParams?.min || null;
  const maxPrice = searchParams?.max || null;

  const { products, totalCount, totalPages } = await getProducts({
    search,
    category,
    sort,
    page,
    limit: 8,
    minPrice,
    maxPrice,
  });

  return (
    <div className="bg-[#fcfcfd] min-h-screen pt-8 pb-20">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Filter Section */}
        <ProductFilterBar />

        {/* Results Header */}
        <div className="mb-8 flex items-end gap-3">
          <h1 className="text-2xl font-extrabold text-[#111827]">
            All Products
          </h1>
          <span className="text-sm font-medium text-gray-500 mb-1">
            ({totalCount} items)
          </span>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500 max-w-sm">
              We couldn't find any products matching your search. Try adjusting your filters.
            </p>
          </div>
        )}

        {/* Pagination */}
        <ProductPagination totalPages={totalPages} currentPage={page} />
      </div>
    </div>
  );
};

export default ProductsPage;
