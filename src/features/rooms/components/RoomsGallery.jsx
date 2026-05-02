"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "../../../shared/components/Button";
import GalleryBox from "./GalleryBox";

const RoomsGallery = ({ room }) => {
  const [isOpenGallery, setIsOpenGallery] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-75 md:h-125 rounded-2xl overflow-hidden shadow-lg mb-10">
      <div className="md:col-span-2 relative overflow-hidden group">
        <Image
          width={1000}
          height={800}
          src={room?.image}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt="Main"
          unoptimized
        />
        <Button
          onClick={() => setIsOpenGallery(true)}
          className="md:hidden absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all"
        >
          View All Photos
        </Button>
      </div>
      <div className="hidden md:grid grid-rows-2 gap-4 col-span-1">
        <Image
          width={1000}
          height={800}
          src={room?.gallery[0]}
          className="h-full w-full object-cover"
          alt="Gallery 1"
          unoptimized
        />
        <Image
          width={1000}
          height={800}
          src={room?.gallery[1]}
          className="h-full w-full object-cover"
          alt="Gallery 2"
          unoptimized
        />
      </div>
      <div className="hidden md:block col-span-1 relative">
        <Image
          width={1000}
          height={800}
          src={room?.gallery[2]}
          className="h-full w-full object-cover"
          alt="Gallery 3"
          unoptimized
        />
        <Button
          onClick={() => setIsOpenGallery(true)}
          className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-bold shadow-md transition-all"
        >
          View All Photos
        </Button>
      </div>

      {isOpenGallery && (
        <GalleryBox
          setIsOpen={setIsOpenGallery}
          images={[room?.image, ...room?.gallery]}
        />
      )}
    </div>
  );
};

export default RoomsGallery;
