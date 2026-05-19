import Image from 'next/image';
import { FaStar, FaUsers, FaRegClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { Button } from '@heroui/react';

export const metadata = {
  title: 'StudyNook | Room Details',
  description: 'View premium study room configurations, scheduling requirements, and time conflicts.'
}

const roomsData = [
  {
    "id": 1,
    "name": "Elite Quad Study Suite",
    "location": "Central Library - 3rd Floor",
    "price": 15,
    "rating": 4.9,
    "capacity": "4-6 People",
    "amenities": ["4K Presentation Monitor", "Glass Whiteboard", "Acoustic Insulation", "Type-C Power Hub"],
    "description": "Quiet, soundproof suite optimized for collaborative group work, presentations, or heavy coding blocks. Outfitted with high-speed corporate grade Wi-Fi and modular seating arrangements.",
    "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Private Suite"
  },
  {
    "id": 2,
    "name": "Collaborative Media Hub",
    "location": "North Wing - 1st Floor",
    "price": 25,
    "rating": 4.8,
    "capacity": "8-10 People",
    "amenities": ["Dual Display Monitors", "Wireless Screen Casting", "Surround Sound Speakers", "Direct Ethernet LAN"],
    "description": "Perfect for large group projects and interactive workshops. Features high-speed network connections, multiple casting interfaces, and a dry-erase surface wall.",
    "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Media Room"
  },
  {
    "id": 3,
    "name": "Solo Focus Pod",
    "location": "Law Library - Quiet Zone",
    "price": 8,
    "rating": 4.7,
    "capacity": "1 Person",
    "amenities": ["Ergonomic Task Chair", "Dimmable Focus Desk Light", "Noise-Canceling Panels", "AC Power Outlet"],
    "description": "Ergonomic workspace tailored specifically for intensive individual research, online tests, or undisturbed reading blocks. Located inside the strict zero-noise sector.",
    "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Individual Pod"
  },
  {
    "id": 4,
    "name": "Postgrad Research Cell",
    "location": "Main Library - Level 4",
    "price": 12,
    "rating": 4.6,
    "capacity": "2 People",
    "amenities": ["4K Presentation Monitor", "Glass Whiteboard", "Acoustic Insulation", "Type-C Power Hub"],
    "description": "Designed for long focus sessions. Features dual desktop monitors and access to reference material stacks.",
    "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Research Cell"
  },
  {
    "id": 5,
    "name": "Innovation Brainstorm Room",
    "location": "Engineering Lab - Annex B",
    "price": 30,
    "rating": 4.9,
    "capacity": "12-15 People",
    "amenities": ["Dual Display Monitors", "Wireless Screen Casting", "Surround Sound Speakers", "Direct Ethernet LAN"],
    "description": "Large workspace featuring premium video conferencing gear, wrap-around whiteboards, and high-tier routers.",
    "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Conference Hall"
  },
  {
    "id": 6,
    "name": "Silent Reading Alcove",
    "location": "Old East Wing - Vault Room",
    "price": 6,
    "rating": 4.5,
    "capacity": "1 Person",
    "amenities": ["Ergonomic Task Chair", "Dimmable Focus Desk Light", "Noise-Canceling Panels", "AC Power Outlet"],
    "description": "A cozy, ambient spot featuring natural classic window illumination. Ideal for undistracted book reviews.",
    "image": "https://plus.unsplash.com/premium_photo-1703701579660-8481915a7991?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "category": "Cozy Alcove"
  }
];

const RoomDetails = async ({ params }) => {
  // Swapped friendId to match a cleaner folder name structure like /rooms/[roomId]
  const { roomId } = await params;
  const room = roomsData.find((r) => r.id === Number(roomId)) || roomsData[0]; // Fallback to first room if undefined

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6 md:p-12 font-sans">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* --- LEFT SIDE: ROOM IMAGE WRAPPER --- */}
        <div className="relative w-full max-w-lg aspect-square overflow-hidden rounded-2xl shadow-2xl border border-gray-800 bg-gray-800">
          <Image
            src={room.image}
            alt={room.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-w-1024px) 100vw, 50vw"
            priority
          />
          <span className="absolute top-4 left-4 bg-[#1E3A8A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg shadow-md">
            {room.category}
          </span>
        </div>

        {/* --- RIGHT SIDE: ROOM DETAILS WORKSPACE --- */}
        <div className="w-full flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">{room.name}</h1>

          <div className="flex items-center gap-2 text-sky-400 font-medium text-lg mb-6">
            <FaMapMarkerAlt />
            <span>{room.location}</span>
          </div>

          {/* Core Specifications Row */}
          <div className="flex flex-wrap gap-6 items-center py-4 px-5 bg-gray-800/50 rounded-xl border border-gray-800 mb-6">
            <div className="flex items-center gap-2 text-gray-300">
              <FaUsers className="text-[#09A1A1] text-xl" />
              <span className="font-semibold">Capacity:</span>
              <span className="text-white">{room.capacity}</span>
            </div>
            <div className="h-4 w-px bg-gray-700 hidden sm:block"></div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="font-semibold">Rating:</span>
              <span className="text-white flex items-center gap-1">
                {room.rating} <FaStar className='text-amber-500' />
              </span>
            </div>
          </div>

          {/* Description Text */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-base">{room.description}</p>
          </div>

          {/* Room Amenities Checklist */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-3">Included Utilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-200">
                  <FaCheckCircle className="text-[#09A1A1] flex-shrink: 0" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-800">
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Total Rate</span>
              <p className='text-3xl font-black text-white'>
                ${room.price} <span className="text-lg font-medium text-gray-400">/ hour</span>
              </p>
            </div>

            {/* Native Touch-Safe HeroUI Action Button */}
            <Button
              className="bg-[#069494] hover:bg-[#057a7a] text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-teal-950/20 active:scale-98 transition-all"
              startContent={<FaRegClock className="text-xl" />}
            >
              Reserve Timeslot
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
