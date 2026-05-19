import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar, FaUsers, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';

export const metadata = {
    title: "StudyNook | Rooms",
    description: "Browse and book premium private study rooms and collaborative spaces.",
};

const StudyRoomsPage = async () => {
    const res = await fetch('http://localhost:5000/rooms');
    const rooms = await res.json();
    // const roomsData = [
    //     {  
    //         "name": "Elite Quad Study Suite", 
    //         "location": "Central Library - 3rd Floor", 
    //         "price": 15, 
    //         "rating": 4.9, 
    //         "capacity": "4-6 People",
    //         "description": "Quiet, soundproof suite equipped with a 4K presentation monitor and glass whiteboard.", 
    //         "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    //         "category": "Private Suite" 
    //     },
    //     {  
    //         "name": "Collaborative Media Hub", 
    //         "location": "North Wing - 1st Floor", 
    //         "price": 25, 
    //         "rating": 4.8, 
    //         "capacity": "8-10 People",
    //         "description": "Perfect for group projects. Features ultra-fast Wi-Fi, wireless casting setups, and modular desks.", 
    //         "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    //         "category": "Media Room" 
    //     },
    //     {  
    //         "name": "Solo Focus Pod", 
    //         "location": "Law Library - Quiet Zone", 
    //         "price": 8, 
    //         "rating": 4.7, 
    //         "capacity": "1 Person",
    //         "description": "Ergonomic seating with noise-canceling acoustics designed for intensive individual study blocks.", 
    //         "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    //         "category": "Individual Pod" 
    //     },
    //     {  
    //         "name": "Postgrad Research Cell", 
    //         "location": "Main Library - Level 4", 
    //         "price": 12, 
    //         "rating": 4.6, 
    //         "capacity": "2 People",
    //         "description": "Designed for long focus sessions. Features dual desktop monitors and access to reference material stacks.", 
    //         "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    //         "category": "Research Cell" 
    //     },
    //     {  
    //         "name": "Innovation Brainstorm Room", 
    //         "location": "Engineering Lab - Annex B", 
    //         "price": 30, 
    //         "rating": 4.9, 
    //         "capacity": "12-15 People",
    //         "description": "Large workspace featuring premium video conferencing gear, wrap-around whiteboards, and high-tier routers.", 
    //         "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    //         "category": "Conference Hall" 
    //     },
    //     {  
    //         "name": "Silent Reading Alcove", 
    //         "location": "Old East Wing - Vault Room", 
    //         "price": 6, 
    //         "rating": 4.5, 
    //         "capacity": "1 Person",
    //         "description": "A cozy, ambient spot featuring natural classic window illumination. Ideal for undistracted book reviews.", 
    //         "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    //         "category": "Cozy Alcove" 
    //     }
    // ];

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
                                        
                                        <Link href={`/rooms/${room.id}`}>
                                            <button className='px-4 py-2 rounded-xl text-sm font-bold text-white bg-[#069494] hover:bg-[#057a7a] transition-colors shadow-sm active:scale-95 duration-150'>
                                                See Details
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
