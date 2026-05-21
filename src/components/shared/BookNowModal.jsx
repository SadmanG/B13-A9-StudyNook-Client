"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField, FieldError } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaRegClock } from "react-icons/fa";

export function BookNowModal({ room }) {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [bookedDate, setBookedDate] = useState(null);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const duration = formData.get("duration");
        // const formData = new FormData(e.currentTarget);

        // const baseData = Object.fromEntries(formData.entries());
        // const amenities = formData.getAll('amenities[]').filter(item => item.trim() !== '');

        // const studyRoom = {
        //     ...baseData,
        //     price: Number(baseData.price),
        //     rating: Number(baseData.rating),
        //     amenities: amenities
        // };

        // delete studyRoom['amenities[]'];

        const bookedData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            roomId: room._id,
            roomName: room.name,
            roomLocation: room.location,
            roomPrice: room.price,
            roomCapacity: room.capacity,
            roomCategory: room.category,
            roomImage: room.image,
            bookedDate: new Date(bookedDate),
            duration: duration
        }

        const {data: tokenData} = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookedData)
        });
        const data = await res.json();
        toast.success(`You have Booked ${room.name} successfully!`)

        redirect('/rooms');
    };
    return (
        <Modal>
            <Button
                className="bg-[#069494] hover:bg-[#057a7a] text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-teal-950/20 active:scale-98 transition-all"
            >
                <FaRegClock className="text-xl" />
                Reserve Timeslot
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>Book This Study Room</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="space-y-6">
                                    <div>
                                        {/* Duration */}
                                        <TextField name="duration" isRequired>
                                            <Label>Duration</Label>
                                            <Input
                                                placeholder="2 Hours"
                                                className="rounded-2xl"
                                            />
                                            <FieldError />
                                        </TextField>

                                        {/* Booked Date */}
                                        <div className="md:col-span-2">
                                            <TextField onChange={setBookedDate} name="bookedDate" type="date" isRequired>
                                                <Label>Booking Date</Label>
                                                <Input type="date" className="rounded-2xl" />
                                                <FieldError />
                                            </TextField>
                                        </div>
                                    </div>
                                    <Modal.Footer>
                                        {/* Submit Button Block */}
                                        <Button
                                            type="submit"
                                            className="w-full bg-[#069494] hover:bg-[#057a7a] active:scale-[0.99] text-white font-bold py-4 text-base rounded-xl shadow-lg shadow-teal-950/20 transition-all mt-4"
                                        >
                                            <FaRegClock className="text-xl" />
                                            Book Now
                                        </Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}