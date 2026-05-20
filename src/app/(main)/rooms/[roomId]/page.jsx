import Image from 'next/image';
import { FaStar, FaUsers, FaRegClock, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { Button } from '@heroui/react';

export const metadata = {
  title: 'StudyNook | Room Details',
  description: 'View premium study room configurations, scheduling requirements, and time conflicts.'
}

const RoomDetails = async ({ params }) => {
  const {roomId} = await params;
  const res = await fetch(`http://localhost:5000/rooms/${roomId}`);
  const room = await res.json();
  // 3. Fallback handle if the specific room does not exist
  if (!room) {
    return <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">Room not found.</div>;
  }

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
