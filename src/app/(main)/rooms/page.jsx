import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar, FaUsers, FaMapMarkerAlt, FaGraduationCap, FaRegClock } from 'react-icons/fa';

export const metadata = {
    title: "StudyNook | Rooms",
    description: "Browse and book premium private study rooms and collaborative spaces.",
};

const StudyRoomsPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    const res = await fetch('http://localhost:5000/rooms', {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const rooms = await res.json();
    return (
        <div>
            {/* Matches your dark layout theme */}
            <div className="min-h-screen p-10 font-sans bg-gray-900">
                <div className="max-w-6xl mx-auto">

                    {/* Academic Heading Banner */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white px-2 flex justify-center items-center gap-3 text-center">
                        <span className='text-[#069494]'><FaGraduationCap /></span>
                        <span>Find Your Perfect Focus & Study Space!</span>
                        <span className='text-[#069494]'><FaGraduationCap /></span>
                    </h2>

                    {/* Clean Layout Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rooms.map((room) => (
                            <div key={room._id} className="rounded-2xl overflow-hidden bg-sky-100 shadow-sm border border-sky-200/40 flex flex-col justify-between hover:shadow-md transition-all duration-200">

                                {/* Image Frame Block */}
                                <div className="relative h-64 w-full bg-gray-200">
                                    <Image
                                        src={room.image}
                                        alt={room.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-w-768px) 100vw, 33vw"
                                    />
                                    <span className="absolute top-3 right-3 bg-[#1E3A8A] text-white text-xs font-bold px-2.5 py-1 rounded-md shadow">
                                        {room.category}
                                    </span>
                                </div>

                                {/* Details Body Layout */}
                                <div className="p-6 flex flex-col grow">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-1">{room.name}</h2>

                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-3">
                                        <FaMapMarkerAlt className="text-slate-400" />
                                        <span>{room.location}</span>
                                    </div>

                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{room.description}</p>

                                    {/* Capacity Metrics and Reviews Row */}
                                    <div className="flex flex-col gap-2 border-t border-b border-sky-200/50 py-3 mb-4 text-sm font-semibold text-slate-700">
                                        <div className="flex gap-2 items-center">
                                            <FaUsers className="text-[#1E3A8A] text-base" />
                                            <span>Capacity: <span className="text-slate-900 font-normal">{room.capacity}</span></span>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <span>Rating: <span className="text-slate-900 font-normal">{room.rating}</span></span>
                                            <span className='text-amber-500'><FaStar /></span>
                                        </div>
                                    </div>

                                    {/* Rate Indicator & Nav Link Wrapper */}
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Hourly Rate</span>
                                            <p className='text-xl font-extrabold text-[#1E3A8A]'>${room.price}/hr</p>
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

export default StudyRoomsPage;
