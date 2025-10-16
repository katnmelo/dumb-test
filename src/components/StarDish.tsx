import Image from 'next/image';

interface StarDishProps {
  emoji: string;
  name: string;
  review: string;
  className?: string;
}

export default function StarDish({ emoji, name, review, className = '' }: StarDishProps) {
  return (
    <div className={`${className}`}>
      <div className="grid grid-cols-2 gap-12 items-center">
        {/* Left side - Placeholder Cutout */}
        <div className="flex justify-center items-center">
          <Image 
            src="/images/placeholders/placeholder-cutout.png" 
            alt="Placeholder cutout"
            width={320}
            height={320}
            className="w-80 h-80 object-contain"
          />
        </div>
        
        {/* Right side - Quote with smaller attribution */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{emoji}</span>
            <h3 className="text-2xl font-bold text-stone-900">{name}</h3>
          </div>
          <p className="text-lg text-stone-700 leading-relaxed">
            {review}
          </p>
        </div>
      </div>
    </div>
  );
}
