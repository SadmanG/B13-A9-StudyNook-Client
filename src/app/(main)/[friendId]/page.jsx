import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

export const metadata = {
  title: 'SunCart | Details',
  description: 'Product Details'
}

const productsData = [
  { "id": 1, "name": "UV Protection Sunglasses", "brand": "SunShade", "price": 15, "rating": 4.7, "stock": 10, "description": "Stylish UV protection sunglasses perfect for summer outings.", "image": "https://plus.unsplash.com/premium_photo-1693222144072-7f9ddceeb7c7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "category": "Accessories" },
  { "id": 2, "name": "Quick-Dry Beach Towel", "brand": "AquaSoft", "price": 25, "rating": 4.8, "stock": 45, "description": "Sand-free microfiber towel that dries three times faster than cotton.", "image": "https://images.unsplash.com/photo-1625931046289-e51edea3e176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYWNoJTIwdG93ZWx8ZW58MHx8MHx8fDA%3D", "category": "Outdoor Gear" },
  { "id": 3, "name": "Portable Handheld Fan", "brand": "CoolBreeze", "price": 12, "rating": 4.5, "stock": 100, "description": "Rechargeable mini fan with three speed settings for instant cooling.", "image": "https://plus.unsplash.com/premium_photo-1752929587329-4cb507a964f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydGFibGUlMjBmYW58ZW58MHx8MHx8fDA%3D", "category": "Electronics" },
  { "id": 4, "name": "Broad Spectrum SPF 50 Sunscreen", "brand": "SkinGuard", "price": 18, "rating": 4.9, "stock": 60, "description": "Water-resistant, non-greasy formula perfect for high-intensity sun exposure.", "image": "https://images.unsplash.com/photo-1657023828553-18c23601c4d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3Vuc2NyZWVufGVufDB8fDB8fHww", "category": "Skincare" },
  { "id": 5, "name": "Insulated Water Bottle", "brand": "HydroChill", "price": 30, "rating": 4.6, "stock": 25, "description": "Double-walled stainless steel bottle that keeps drinks cold for 24 hours.", "image": "https://images.unsplash.com/photo-1625708458528-802ec79b1ed8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdWxhdGVkJTIwd2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D", "category": "Home & Kitchen" },
  { "id": 6, "name": "Foldable Wide-Brim Sun Hat", "brand": "SummerVibe", "price": 22, "rating": 4.4, "stock": 15, "description": "Breathable straw hat with an adjustable chin strap for windy beach days.", "image": "https://images.unsplash.com/photo-1758900494591-482f42d473a6?q=80&w=1114&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "category": "Apparel" }
]

const ProductDetails = async ({ params }) => {
  const { friendId } = await params;
  const product = productsData.find((p) => p.id === Number(friendId));
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-lg shadow-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <h1 className="pt-6 text-2xl font-bold">Brand: {product.brand}</h1>
          <p className="pt-6 text-xl">
            Category: {product.category}
          </p>
          <p className="py-6">
            Description: {product.description}
          </p>
          <p className="pb-6 text-xl">
            Price: {product.price} $
          </p>
          <p className="pb-6 text-xl flex gap-2 items-center">
            Rating: {product.rating} <span className='text-yellow-500'><FaStar /></span>
          </p>
          <button className="btn btn-info text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

