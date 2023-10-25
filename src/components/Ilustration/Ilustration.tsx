import Image from "next/image";

import ilustration from "@/assets/Ilustration.png"

export function Ilustration() {
    return (
        <div className="container mx-auto ">
            <div className="w-full h-auto">
                <Image
                    src={ilustration}
                    alt="Ilustration"
                    width={800}
                    height={600}
                />
            </div>
        </div>
    );
}
