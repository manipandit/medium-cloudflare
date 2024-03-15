import Circle from "./Circle";

export default function BlogsSkeleton() {
  return (
    <>
      <div role="status" className="animate-pulse">
        <div className="grid grid-cols-12 px-20 pt-10 gap-x-12">
          <div className="flex flex-col col-span-9 gap-y-5">
            <div className="w-screen max-w-screen-md p-4 pb-4 border-b cursor-pointer border-slate-200">
              {/* Title */}
              <div className="flex items-center mb-4">
                <div className="w-48 h-4 bg-gray-200 rounded-full"></div>
              </div>
              {/* Date */}
              <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-1/4"></div>
              {/* Content */}
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
              {/* Author */}
              <div className="flex items-center mt-4">
                <Circle />
                <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-1/2"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          {/* Placeholder for author */}
          <div className="flex flex-col col-span-3 gap-y-4"></div>
        </div>
      </div>
    </>
  );
}
