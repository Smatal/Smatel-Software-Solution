export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer Ring */}
        <div className="w-16 h-16 rounded-full border-4 border-teal-100 border-t-[#21BDBC] animate-spin"></div>
        
        {/* Inner pulsing logo shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-md bg-gradient-to-tr from-[#21BDBC] to-[#38BDF8] animate-pulse"></div>
        
        {/* Loading Text */}
        <div className="mt-8 text-sm font-semibold tracking-widest uppercase text-[#21BDBC] animate-pulse">
          Loading
        </div>
      </div>
    </div>
  );
}
