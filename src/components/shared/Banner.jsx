import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <section className="relative h-[90vh] min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="https://plus.unsplash.com/premium_photo-1681488273126-034082703c2f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero Background" width={1000} height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-1 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6">
          Summer Sale!<br />
          <span className="text-yellow-400">Upto 50% OFF!</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto mb-10">
          A modern eCommerce platform where you can explore and purchase summer essentials like sunglasses, summer outfits, skincare, beach accessories, and more. You can browse products, view their details, and place your order.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={'/products'}><button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
            See Our Products
            <span className="text-xl">→</span>
          </button></Link>
          <Link href={'/login'}><button className="bg-green-400 hover:bg-green-500 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all">
            Login to Start Ordering
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;