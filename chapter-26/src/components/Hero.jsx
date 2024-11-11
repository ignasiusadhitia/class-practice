import React from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <div className="container mx-auto px-0 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 min-h-96">
        <HeroCard
          title="PersiapanIFW 2024? Tokopedia Fashion Market x Indonesia Fasion Week Punya Kejutan Bua"
          time
        />
        <div className="md:hidden overflow-x-auto">
          <div className="flex gap-1">
            <HeroCard
              imgUrl="https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg"
              height="h-44"
              width="w-96"
            />
            <HeroCard
              title="Implementasi AI di Tokopedia, dari Gudang Pintar"
              imgUrl="https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg"
              text="text-sm"
              height="h-44"
              width="w-96"
            />
            <HeroCard
              title="CPO Tokopedia Berbagi Cara Menerapkan"
              imgUrl="https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg"
              text="text-sm"
              height="h-44"
              width="w-96"
            />
          </div>
        </div>
        <div className="hidden md:grid grid-rows-2 gap-1">
          <HeroCard imgUrl="https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg" />
          <div className="grid grid-cols-2 gap-1">
            <HeroCard
              title="Implementasi AI di Tokopedia, dari Gudang Pintar"
              imgUrl="https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg"
              text="text-sm"
            />
            <HeroCard
              title="CPO Tokopedia Berbagi Cara Menerapkan"
              imgUrl="https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg"
              text="text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
