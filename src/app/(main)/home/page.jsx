import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFireAlt, FaStar } from 'react-icons/fa';

const HomePage = () => {
    const productsData = [
        { "id": 1, "name": "UV Protection Sunglasses", "brand": "SunShade", "price": 15, "rating": 4.7, "stock": 10, "description": "Stylish UV protection sunglasses perfect for summer outings.", "image": "https://plus.unsplash.com/premium_photo-1693222144072-7f9ddceeb7c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "category": "Accessories" },
        { "id": 2, "name": "Quick-Dry Beach Towel", "brand": "AquaSoft", "price": 25, "rating": 4.8, "stock": 45, "description": "Sand-free microfiber towel that dries three times faster than cotton.", "image": "https://images.unsplash.com/photo-1625931046289-e51edea3e176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwdG93ZWx8ZW58MHx8MHx8fDA%3D", "category": "Outdoor Gear" },
        { "id": 5, "name": "Insulated Water Bottle", "brand": "HydroChill", "price": 30, "rating": 4.6, "stock": 25, "description": "Double-walled stainless steel bottle that keeps drinks cold for 24 hours.", "image": "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdWxhdGVkJTIwd2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D", "category": "Home & Kitchen" }
    ]
    return (
        <div>
            <div className="min-h-screen p-10 font-sans">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-8 text-white px-2 flex justify-center items-center"><span className='text-red-600'><FaFireAlt /></span> <p className='flex justify-center items-center'>Our Popular Products and Hot Deals</p> <span className='text-red-600'><FaFireAlt /></span></h2>

                    {/* Responsive Grid exactly like the image */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {productsData.map((product) => (
                            <div key={product.id} className="card bg-sky-100 shadow-sm">
                                <figure className="relative h-64 w-full">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{product.name}</h2>
                                    <p>{product.description}</p>
                                    <p className="text-xl flex gap-2 items-center">
                                        Rating: {product.rating} <span className='text-yellow-400'><FaStar /></span>
                                    </p>
                                    <p className='text-xl'>Price: {product.price} $</p>
                                    <div className="card-actions justify-end">
                                        <Link href={`/${product.id}`}><button className='btn bg-[#069494] text-white'>See Details</button></Link>
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

export default HomePage;