'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';

const AddRoomPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const baseData = Object.fromEntries(formData.entries());
        const amenities = formData.getAll('amenities[]').filter(item => item.trim() !== '');

        const studyRoom = {
            ...baseData,
            price: Number(baseData.price),
            rating: Number(baseData.rating),
            amenities: amenities
        };

        delete studyRoom['amenities[]'];

        const res = await fetch('http://localhost:5000/rooms', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studyRoom)
        });
        redirect('/rooms');
    };

    return (
        <div className="min-h-screen bg-gray-950 p-4 sm:p-8 flex items-center justify-center font-sans">
            {/* Reduced max-w from 7xl to 3xl to make it compact and visually professional */}
            <Card className="w-full max-w-3xl bg-gray-900 border border-gray-800 shadow-2xl p-6 sm:p-10 rounded-3xl">

                {/* Clean Header Area */}
                <div className="mb-8 border-b border-gray-800 pb-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Add New Study Room
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">
                        Fill out the specifications below to register a new workspace configuration.
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    {/* SECTION 1: Core Identification */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                            <TextField name="name" isRequired>
                                <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Study Room Name</Label>
                                <Input placeholder="Innovation Brainstorm Room" className="rounded-xl bg-gray-950 text-white" />
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>
                        </div>

                        <TextField name="location" isRequired>
                            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Location / Placement</Label>
                            <Input placeholder="Engineering Lab - 2nd Floor" className="rounded-xl bg-gray-950 text-white" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        <div>
                            <Select name="category" isRequired className="w-full" placeholder="Select category">
                                <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Category</Label>
                                <Select.Trigger className="rounded-xl bg-gray-950 border-gray-800 text-white">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox className="bg-gray-800 text-white rounded-xl">
                                        <ListBox.Item id="Private Suite" textValue="Private Suite">Private Suite</ListBox.Item>
                                        <ListBox.Item id="Media Room" textValue="Media Room">Media Room</ListBox.Item>
                                        <ListBox.Item id="Individual Pod" textValue="Individual Pod">Individual Pod</ListBox.Item>
                                        <ListBox.Item id="Research Cell" textValue="Research Cell">Research Cell</ListBox.Item>
                                        <ListBox.Item id="Conference Hall" textValue="Conference Hall">Conference Hall</ListBox.Item>
                                        <ListBox.Item id="Cozy Alcove" textValue="Cozy Alcove">Cozy Alcove</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                    </div>

                    {/* SECTION 2: Numeric Specifications */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-gray-950/40 p-4 rounded-2xl border border-gray-800/60">
                        <TextField name="price" type="number" isRequired>
                            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Hourly Price (USD)</Label>
                            <Input type="number" placeholder="30" className="rounded-xl bg-gray-950 text-white" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        <TextField name="capacity" isRequired>
                            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Seat Capacity</Label>
                            <Input placeholder="12-15 People" className="rounded-xl bg-gray-950 text-white" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        <TextField name="rating" type="number" isRequired>
                            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Initial Rating</Label>
                            <Input type="number" step="0.1" placeholder="4.5" className="rounded-xl bg-gray-950 text-white" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>
                    </div>

                    {/* SECTION 3: Amenities Utilities Array Grid */}
                    <div className="border-t border-gray-800 pt-5">
                        <Label className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 block">
                            Included Utilities & Amenities
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <TextField name="amenities[]" isRequired>
                                <Input placeholder="4K Display" className="rounded-xl bg-gray-950 text-white" />
                            </TextField>
                            <TextField name="amenities[]" isRequired>
                                <Input placeholder="Glass Board" className="rounded-xl bg-gray-950 text-white" />
                            </TextField>
                            <TextField name="amenities[]" isRequired>
                                <Input placeholder="Soundproofing" className="rounded-xl bg-gray-950 text-white" />
                            </TextField>
                            <TextField name="amenities[]" isRequired>
                                <Input placeholder="Power Hub" className="rounded-xl bg-gray-950 text-white" />
                            </TextField>
                        </div>
                    </div>

                    {/* SECTION 4: Media & Markdown Descriptions */}
                    <div className="space-y-5 border-t border-gray-800 pt-5">
                        <TextField name="image" isRequired>
                            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Display Image URL</Label>
                            <Input type="url" placeholder="https://unsplash.com" className="rounded-xl bg-gray-950 text-white" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        <TextField name="description" isRequired>
                            <Label className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-1.5 block">Overview Description</Label>
                            <TextArea placeholder="Describe room highlights, setups, environment textures, or hardware configurations..." className="rounded-xl bg-gray-950 min-h-25 text-white" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>
                    </div>

                    {/* Submit Button Block */}
                    <Button
                        type="submit"
                        className="w-full bg-[#069494] hover:bg-[#057a7a] active:scale-[0.99] text-white font-bold py-4 text-base rounded-xl shadow-lg shadow-teal-950/20 transition-all mt-4"
                    >
                        Publish Study Room Space
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddRoomPage;
