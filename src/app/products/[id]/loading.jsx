const Loading = () => {
  return (
    <div className="bg-white min-h-screen py-10 lg:py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Image Skeleton */}
          <div className="flex-1">
            <div className="skeleton w-full aspect-square rounded-[32px]"></div>
          </div>

          {/* Details Skeleton */}
          <div className="flex-1 flex flex-col gap-6 pt-4">
            <div className="skeleton h-4 w-24 rounded-full"></div>
            <div className="skeleton h-12 w-3/4 rounded-lg"></div>
            <div className="skeleton h-8 w-32 rounded-lg"></div>
            <div className="skeleton h-24 w-full rounded-xl"></div>
            
            <div className="flex gap-4 mt-6">
              <div className="skeleton h-14 w-40 rounded-xl"></div>
              <div className="skeleton h-14 w-14 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
