import Image from 'next/image';
import ilustration from '@/assets/Ilustration.png';

export function Ilustration() {
  return (
    <div id='home' className="container mx-auto">
      <div className="w-full h-auto">
        <Image
          src={ilustration}
          alt="Ilustration"
          layout="responsive" 
          className="w-full mx-auto h-auto"
        />
      </div>
    </div>
  );
}
