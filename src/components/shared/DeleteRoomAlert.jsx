"use client";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteRoomAlert({room}) {
    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${room._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        redirect('/rooms');
    };
    return (
        <AlertDialog>
            <Button
                className="bg-red-500 hover:bg-red-600 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-teal-950/20 active:scale-98 transition-all"
            >
                <TrashBin className="text-xl" />
                Delete Room
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete this Study Room permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong className="text-red-500">{room.name}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Now
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}