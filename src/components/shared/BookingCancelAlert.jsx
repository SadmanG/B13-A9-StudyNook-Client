"use client";

import { authClient } from "@/lib/auth-client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";

export function BookingCancelAlert({ booking }) {
    const handleCancelBooking = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        });
        window.location.reload();
    }
    return (
        <AlertDialog>
            <Button
                size="sm"
                className="bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-medium px-3 py-1.5 h-8 rounded-lg transition-colors border border-red-500/20"
            >
                <TrashBin />
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Want to Cancel this Booking?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will cancel your booking of <strong>{booking.roomName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                <TrashBin />
                                Cancel Booking Now
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}