import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { TrashBin } from "@gravity-ui/icons";

const MyBookingsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;

    // Handle case where user is not logged in yet
    if (!user) {
        return <div className="text-white p-8 text-center bg-gray-950 min-h-screen">Please log in to view your bookings.</div>;
    }

    const res = await fetch(`http://localhost:5000/bookings/${user.id}`);
    const bookings = await res.json();

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);

        // Check if the date string is actually valid to prevent crashes
        if (isNaN(date.getTime())) return "N/A";

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    return (
        <div className="bg-gray-950 min-h-screen p-6 flex flex-col items-center">
            {/* Column-wise Container: centered on page, cards stacked one by one */}
            <div className="w-full max-w-xl flex flex-col gap-4">
                <h1 className="text-xl font-bold text-white mb-2 text-center md:text-left">My Bookings</h1>

                {bookings && bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <Card
                            key={booking._id}
                            className="flex flex-col sm:flex-row bg-gray-900 border border-gray-800 p-3 gap-4 items-center rounded-2xl shadow-md"
                        >
                            {/* Smaller, tightly fitted responsive image wrapper */}
                            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-gray-800">
                                <Image
                                    alt={booking.roomName || "Room Image"}
                                    className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
                                    loading="lazy"
                                    src={booking.roomImage || "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg"}
                                    fill
                                    sizes="96px"
                                />
                            </div>

                            {/* Content block shrunk down for clean scanning */}
                            <div className="flex flex-1 flex-col w-full gap-2">
                                <Card.Header className="p-0 flex flex-col items-start">
                                    <Card.Title className="text-base font-bold text-white leading-tight">
                                        {booking.roomName}
                                    </Card.Title>
                                    <Card.Description className="text-xs text-gray-400 mt-0.5">
                                        Location: {booking.roomLocation}
                                    </Card.Description>
                                </Card.Header>

                                {/* Mini Metadata Footer section */}
                                <Card.Footer className="p-0 mt-2 flex w-full flex-row items-center justify-between gap-2">
                                    <div className="flex flex-col">
                                        <span className="text-xs font-semibold text-emerald-400">
                                            ${booking.roomPrice} / hour
                                        </span>
                                        <span className="text-[11px] text-gray-500">
                                            Duration: {booking.duration || "N/A"}
                                        </span>
                                        <span className="text-[11px] text-gray-500">
                                            Date: {formatDate(booking.bookedDate)}
                                        </span>
                                    </div>
                                    <Button
                                        size="sm"
                                        className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium px-3 py-1.5 h-8 rounded-lg transition-colors border border-red-500/20"
                                    >
                                        <TrashBin/>
                                        Cancel
                                    </Button>
                                </Card.Footer>
                            </div>
                        </Card>
                    ))
                ) : (
                    <p className="text-sm text-gray-500 text-center py-8">No bookings found.</p>
                )}
            </div>
        </div>
    );
};

export default MyBookingsPage;
