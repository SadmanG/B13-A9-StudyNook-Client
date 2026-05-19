import Link from "next/link";
import { FaBookOpen, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-6 text-center text-white font-sans">
      
      {/* Visual Anchor: Large Library No-Entry Icon */}
      <div className="relative mb-8">
        <div className="text-[120px] sm:text-[180px] font-black text-[#09A1A1] opacity-10 select-none tracking-widest">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl sm:text-8xl animate-bounce drop-shadow-[0_10px_10px_rgba(9,161,161,0.3)]">
            📚
          </span>
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
        This Study Nook Doesn&apos;t Exist!
      </h1>
      <p className="text-gray-400 max-w-md mb-10 text-base sm:text-lg leading-relaxed">
        It looks like the room you are searching for is checked out, relocated, or deep within the silent stacks. Let&apos;s find you another workspace.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
        <Link href="/" className="w-full sm:w-auto">
          <button className="px-8 py-4 bg-[#069494] hover:bg-[#057a7a] text-white font-bold rounded-xl transition-all transform hover:scale-102 shadow-lg shadow-teal-950/40 w-full flex items-center justify-center gap-2">
            <FaBookOpen /> Return to Dashboard
          </button>
        </Link>
        
        <Link href="/rooms" className="w-full sm:w-auto">
          <button className="px-8 py-4 bg-gray-800 border border-gray-700 text-gray-200 font-bold rounded-xl hover:bg-gray-750 hover:text-white transition-all w-full flex items-center justify-center gap-2">
            <FaSearch /> Browse All Rooms
          </button>
        </Link>
      </div>

      {/* Decorative Academic Progress Indicator */}
      <div className="mt-20 flex gap-2">
        <div className="h-1.5 w-12 bg-[#09A1A1] rounded-full"></div>
        <div className="h-1.5 w-4 bg-[#1E3A8A] rounded-full"></div>
        <div className="h-1.5 w-4 bg-gray-700 rounded-full"></div>
      </div>

    </div>
  );
};

export default NotFound;
