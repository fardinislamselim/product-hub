const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="skeleton h-64 w-full rounded-2xl"></div>
      <div className="flex justify-between items-center">
        <div className="skeleton h-6 w-1/2"></div>
        <div className="skeleton h-6 w-1/4"></div>
      </div>
      <div className="skeleton h-4 w-3/4"></div>
      <div className="skeleton h-12 w-full rounded-xl mt-2"></div>
    </div>
  );
};

export default ProductSkeleton;
