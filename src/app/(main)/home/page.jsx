import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFireAlt, FaStar, FaUsers, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const HomePage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const rooms = await res.json();

    return (
        <div>
            {/* Matches your existing dark/teal background layout */}
            <div className="min-h-screen p-10 font-sans bg-gray-700">
                <div className="max-w-6xl mx-auto">

                    {/* Header with Hot Deals styling */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white px-2 flex justify-center items-center gap-3 text-center">
                        <span className='text-sky-300'><FaFireAlt /></span>
                        <span>Popular Study Rooms & Hot Time Slots</span>
                        <span className='text-sky-300'><FaFireAlt /></span>
                    </h2>

                    {/* Responsive Grid exactly like your original image structure */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rooms.slice(-3).map((room) => (
                            // Removed DaisyUI 'card', replaced with raw Tailwind
                            <div key={room._id} className="rounded-2xl overflow-hidden bg-sky-100 shadow-sm border border-sky-200/50 flex flex-col justify-between">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-w-768px) 100vw, 33vw"
                                        priority={room.id === 1}
                                    />
                                    <span className="absolute top-3 right-3 bg-[#1E3A8A] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                                        {room.category}
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col grow">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-1">{room.name}</h2>
                                    <p className="flex items-center gap-2 text-slate-500 font-medium text-lg mb-6">
                                        <FaMapMarkerAlt />
                                        <span>{room.location}</span>
                                    </p>

                                    <p className="text-slate-600 text-sm mb-4 grow">{room.description}</p>
                                    <div className="flex flex-col gap-2 border-t border-b border-sky-200/60 py-3 mb-4">
                                        <div className="text-base font-semibold text-slate-700 flex gap-2 items-center">
                                            <FaUsers className="text-[#1E3A8A]" /> Capacity: <span className="text-slate-900 font-normal">{room.capacity}</span>
                                        </div>
                                        <div className="text-base font-semibold text-slate-700 flex gap-2 items-center">
                                            Rating: <span className="text-slate-900 font-normal">{room.rating}</span>
                                            <span className='text-amber-500'><FaStar /></span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Hourly Rate</span>
                                            <p className='text-2xl font-extrabold text-[#1E3A8A]'>${room.price}/hr</p>
                                        </div>
                                        <Link href={`/rooms/${room._id}`}>
                                            <button className='px-5 py-2.5 rounded-xl font-semibold text-white bg-[#069494] hover:bg-[#057a7a] transition-all duration-200 flex items-center gap-2 shadow-sm shadow-teal-900/10 active:scale-95'>
                                                <FaRegClock /> Book Room
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
