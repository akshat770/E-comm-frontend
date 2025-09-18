import { Star } from 'lucide-react';

export default function Rating({ value = 0, count = 0 }) {
  const fullStars = Math.floor(value);
  const halfStar = value % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
      {halfStar && (
        <Star
          key="half"
          className="w-4 h-4 text-yellow-400 fill-current"
          style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" />
      ))}
      <span className="text-xs text-gray-500 ml-2">({count})</span>
    </div>
  );
}


