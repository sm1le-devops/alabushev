'use client';

export default function Background() {
  return (
    <div className="absolute inset-0 w-full h-full -z-30 bg-[#020205]">
      <div 
        className="absolute inset-0 w-full h-full bg-[url('/q2.jpg')] bg-cover bg-top bg-no-repeat opacity-100" 
      />
    </div>
  );
}