import Image from 'next/image';

export default function PhoneDisplay() {
  return (
    <div className="relative">
      {/* Colorful ring effect with updated colors */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute right-0 w-full h-full">
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-xl opacity-50"
            style={{ background: 'linear-gradient(to right, #00E7F9, #FC004E, #00E7F9)' }}
          ></div>
        </div>
      </div>
      
      {/* Phone image */}
      <div className="relative z-10 transform rotate-6">
        <Image 
          src="/phone-mockup.png" 
          alt="Fametonic App Dashboard" 
          width={700}
          height={900}
          className="object-contain"
        />
      </div>
    </div>
  );
}