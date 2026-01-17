import { IoBagHandleOutline } from "react-icons/io5";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative flex flex-col items-center">
        {/* Animated Logo Icon */}
        <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-white shadow-2xl shadow-primary/40 animate-bounce">
           <IoBagHandleOutline className="text-4xl" />
        </div>
        
        {/* Loading Text */}
        <div className="mt-8 flex flex-col items-center gap-2">
           <span className="text-2xl font-black tracking-tight text-[#111827]">
             Product<span className="text-primary">Hub</span>
           </span>
           <div className="flex gap-1.5 mt-2">
             <div className="h-2 w-2 bg-primary rounded-full animate-pulse"></div>
             <div className="h-2 w-2 bg-primary rounded-full animate-pulse delay-150"></div>
             <div className="h-2 w-2 bg-primary rounded-full animate-pulse delay-300"></div>
           </div>
        </div>
      </div>
    </div>
  );
}
