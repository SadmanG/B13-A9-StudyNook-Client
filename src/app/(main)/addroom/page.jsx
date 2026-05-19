'use client'
import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import React from 'react';

const AddRoomPage = () => {
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const studyRoom = Object.fromEntries(formData.entries());
        // console.log(studyRoom);
        const res = await fetch('http://localhost:5000/rooms', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(studyRoom)
        })
        const data = await res.json();
        // console.log(data);
    }
    return (
        <div className='p-5 max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold'>Add A New Study Room</h1>
            <Card className='bg-gray-900'>
                <form
                    onSubmit={onSubmit}
                    className="p-10 space-y-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Study Room Name */}
                        <div className="md:col-span-2">
                            <TextField name="name" isRequired>
                                <Label className='text-white'>Study Room Name</Label>
                                <Input placeholder="Innovation Brainstorm Room" className="rounded-2xl" />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Location */}
                        <TextField name="location" isRequired>
                            <Label className='text-white'>Location</Label>
                            <Input placeholder="Engineering Lab" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Category - Updated Select Component */}
                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label className='text-white'>Category</Label>
                                <Select.Trigger className="rounded-2xl">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Private Suite" textValue="Private Suite">
                                            Private Suite
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Media Room" textValue="Media Room">
                                            Media Room
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Individual Pod" textValue="Individual Pod">
                                            Individual Pod
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Research Cell" textValue="Research Cell">
                                            Research Cell
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Conference Hall" textValue="Conference Hall">
                                            Conference Hall
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cozy Alcove" textValue="Cozy Alcove">
                                            Cozy Alcove
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label className='text-white'>Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="30"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Location */}
                        <TextField name="capacity" isRequired>
                            <Label className='text-white'>Capacity</Label>
                            <Input placeholder="12-15 People" className="rounded-2xl" />
                            <FieldError />
                        </TextField>

                        {/* Rating */}
                        <TextField name="rating" type="number" isRequired>
                            <Label className='text-white'>Rating</Label>
                            <Input
                                type="number"
                                placeholder="4.5"
                                className="rounded-2xl"
                            />
                            <FieldError />
                        </TextField>

                        {/* Image URL - Removed preview */}
                        <div className="md:col-span-2">
                            <TextField name="image" isRequired>
                                <Label className='text-white'>Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/ibr.jpg"
                                    className="rounded-2xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label className='text-white'>Description</Label>
                                <TextArea
                                    placeholder="Describe the Study Room..."
                                    className="rounded-3xl"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Buttons */}

                    <Button
                        type="submit"
                        variant="outline"
                        className=" rounded-none w-full bg-cyan-500 text-white"
                    >
                        Add Study Room
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default AddRoomPage;

// {/* Duration */ }
// <TextField name="duration" isRequired>
//     <Label className='text-white'>Duration</Label>
//     <Input
//         placeholder="7 Days / 6 Nights"
//         className="rounded-2xl"
//     />
//     <FieldError />
// </TextField>

// {/* Departure Date */ }
// <div className="md:col-span-2">
//     <TextField name="departureDate" type="date" isRequired>
//         <Label className='text-white'>Departure Date</Label>
//         <Input type="date" className="rounded-2xl" />
//         <FieldError />
//     </TextField>
// </div>