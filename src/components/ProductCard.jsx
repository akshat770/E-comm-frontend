import Badge from './Badge.jsx';
import Rating from './Rating.jsx';
import { Heart, GitCompare } from 'lucide-react';

export default function ProductCard({ product, selectedColor }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden group">
      <div
        className="relative"
        style={{ backgroundColor: selectedColor || '#f0f0f0', transition: 'background-color 0.3s' }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-40 sm:h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        {product.isHot && <Badge>HOT</Badge>}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white hover:text-blue-400 transition-colors" aria-label="Add to wishlist">
            <Heart size={20} />
          </button>
          <button className="text-white hover:text-blue-400 transition-colors" aria-label="Compare">
            <GitCompare size={20} />
          </button>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-gray-800 text-sm truncate">{product.name}</h3>
        <div className="my-2">
          <Rating value={product.ratingValue} count={product.ratingCount} />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-blue-500 font-bold">${product.discountPrice.toFixed(2)}</p>
          <p className="text-gray-400 line-through text-sm">${product.price.toFixed(2)}</p>
          <p className="text-red-500 font-semibold text-sm">{product.discountPercent}% Off</p>
        </div>
      </div>
    </div>
  );
}


