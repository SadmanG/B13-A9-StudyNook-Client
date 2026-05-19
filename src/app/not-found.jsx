import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 text-center">
      {/* Visual Anchor: Large Sun / Icon */}
      <div className="relative mb-8">
        <div className="text-[120px] sm:text-[180px] font-black text-yellow-400 opacity-20 select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl sm:text-8xl animate-bounce">☀️</span>
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
        Oops! You&apos;ve gone off-grid.
      </h1>
      <p className="text-gray-600 max-w-md mb-10 text-lg leading-relaxed">
        It looks like this page has melted away under the sun. Let&apos;s get you back to the shade.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <Link href="/">
          <button className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-yellow-200 w-full sm:w-auto">
            Back to Home
          </button>
        </Link>
        <Link href="/shop">
          <button className="px-8 py-4 bg-white border-2 border-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-50 transition-all w-full sm:w-auto">
            Browse Sunscreen
          </button>
        </Link>
      </div>

      {/* Decorative Bottom Element */}
      <div className="mt-20 flex gap-2">
        <div className="h-1.5 w-12 bg-yellow-400 rounded-full"></div>
        <div className="h-1.5 w-4 bg-yellow-200 rounded-full"></div>
        <div className="h-1.5 w-4 bg-yellow-100 rounded-full"></div>
      </div>
    </div>
  );
};

export default NotFound;
