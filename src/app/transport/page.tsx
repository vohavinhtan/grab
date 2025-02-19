'use client';
import Slider from '@/components/Transport/Slider';
import {
  Bike,
  Car,
  ChevronDown,
  CircleDot,
  Heart,
  Map,
  MapPin,
  MoveLeft,
  MoveRight,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import React, { JSX } from 'react';

interface FavoriteItem {
  name: string;
  address: string;
  icon: JSX.Element;
}

const favoriteList: FavoriteItem[] = [
  {
    name: 'Julie',
    address: '1234, 5th Avenue, New York',
    icon: <Heart fill="green" />,
  },
  {
    name: 'Dominos Pizza',
    address: '313 Đ. Nguyễn Tri Phương, Phường 8, Quận 10, Hồ Chí Minh',
    icon: <MapPin fill="green" />,
  },
  {
    name: 'The Gangs Urban',
    address: '212 Đ. Lý Thái Tổ, Phường 1, Quận 3, Hồ Chí Minh',
    icon: <MapPin fill="green" />,
  },
];

interface SaleItem {
  name: string;
  sale: string;
  thumbnail: string;
}

const saleList: SaleItem[] = [
  {
    name: 'Baozi',
    sale: '20% off',
    thumbnail: '/images/que-nha.webp',
  },
  {
    name: 'Beanthere Cafe',
    sale: '30% off',
    thumbnail: '/images/que-nha.webp',
  },
  {
    name: 'Lush Bar',
    sale: '15% off',
    thumbnail: '/images/que-nha.webp',
  },
  {
    name: 'Om Nướng',
    sale: '25% off',
    thumbnail: '/images/que-nha.webp',
  },
  {
    name: 'Quê Nhà',
    sale: '15% off',
    thumbnail: '/images/que-nha.webp',
  },
];

const preBookSlides = [
  {
    id: 1,
    description: 'Book ahead, never be late',
    subtext: 'Your driver will arrive on time or early',
    image: '/images/booking.jpg',
  },
  {
    id: 2,
    description: 'Breeze past last-minute stress',
    subtext: 'And enjoy extended wait times',
    image: '/images/booking.jpg',
  },
];

const discoverSlides = [
  {
    id: 3,
    description: 'Get up to 20% off rides',
    subtext: 'Book GrabBike Saver from 6am-9am',
    image: '/images/discover.jpg',
  },
  {
    id: 4,
    description: 'Explore voucher packs',
    subtext: 'Save big with transport deals',
    image: '/images/discover.jpg',
  },
  {
    id: 5,
    description: 'Shop with Grab',
    subtext: 'Discounted rides to malls',
    image: '/images/discover.jpg',
  },
  {
    id: 6,
    description: 'Breeze past last-minute stress',
    subtext: 'And enjoy extended wait times',
    image: '/images/discover.jpg',
  },
  {
    id: 7,
    description: 'Breeze past last-minute stress',
    subtext: 'And enjoy extended wait times',
    image: '/images/discover.jpg',
  },
];

const moreWaysSlides = [
  {
    id: 8,
    description: 'Make an Advance Booking',
    subtext: 'Your driver will arrive on time or early',
    image: '/images/way.jpg',
  },
  {
    id: 9,
    description: 'Try a Saver rides',
    subtext: 'And enjoy extended wait times',
    image: '/images/way.jpg',
  },
  {
    id: 10,
    description: 'Breeze past last-minute stress',
    subtext: 'And enjoy extended wait times',
    image: '/images/way.jpg',
  },
];

const rideSafeSlides = [
  {
    id: 11,
    description: 'Only book for people you know',
    subtext: 'Your driver will arrive on time or early',
    image: '/images/ride.jpg',
  },
  {
    id: 12,
    description: 'Access to emergency services',
    subtext: 'And enjoy extended wait times',
    image: '/images/ride.jpg',
  },
  {
    id: 13,
    description: 'Breeze past last-minute stress',
    subtext: 'And enjoy extended wait times',
    image: '/images/ride.jpg',
  },
];

function TransportPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen w-full bg-white">
      <section className="mx-auto max-w-md bg-green-300 px-5 pb-4 pt-10">
        <div className="flex justify-between">
          <div
            className="flex items-center gap-3"
            onClick={() => router.push('/')}
          >
            <MoveLeft color="black" />
            <h1 className="text-2xl font-bold text-black">Transport</h1>
          </div>

          <div className="flex space-x-2 rounded-full bg-green-200 px-4 py-2">
            <Map color="black" size={20} />
            <p className="text-sm text-black">Map</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-xs font-light text-black">
            Where&#39;re you&#39;re going, let&#39;s get <br /> you there!
          </p>
          <Image
            src="/images/car.png"
            alt="Transport"
            width={150}
            height={50}
            className="translate-x-8 object-contain"
          />
        </div>
      </section>
      <section className="mx-auto max-w-md px-5">
        <div className="z-50 flex w-full max-w-md -translate-y-7 items-center justify-between rounded-2xl bg-white shadow-md">
          <CircleDot className="ml-4 h-4 w-4 text-white" fill="red" />
          <input
            type="text"
            placeholder="Where to?"
            className="flex-1 bg-white px-2 text-sm font-semibold text-gray-900 placeholder-gray-600 outline-none"
          />

          <button className="flex h-14 items-center justify-center gap-3 border-l-2 border-gray-200 pl-5 pr-3 text-sm font-light text-gray-700">
            Now <ChevronDown color="black" size={14} />
          </button>
        </div>

        <div>
          {favoriteList.map((item, index) => (
            <div
              key={index}
              className="z-50 mt-4 flex w-full max-w-md -translate-y-7 items-center justify-between bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="flex space-x-2 rounded-full bg-green-100 p-3">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-black">
                    {item.name}
                  </p>
                  <p className="line-clamp-1 text-xs font-light text-black">
                    {item.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-5 max-w-md pl-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            <Car fill="red" />
            <h3 className="text-xl font-bold text-black">GrabHotSpot</h3>
            <Bike fill="yellow" />
          </div>
          <div className="mr-5 flex rounded-full bg-green-100 p-2">
            <MoveRight color="green" size={15} />
          </div>
        </div>

        <div className="hide-scrollbar flex gap-5 overflow-x-auto">
          {saleList.map((item, index) => (
            <div
              key={index}
              className="mt-4 flex shrink-0 items-center justify-between bg-white"
            >
              <div className="space-y-3">
                <div className="rounded-2xl">
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    width={150}
                    height={150}
                    className="rounded-2xl object-contain"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-base font-semibold text-black">
                    {item.name}
                  </p>
                  <div className="max-w-[55px] rounded-md border border-orange-300 bg-orange-100 p-1.5">
                    <p className="line-clamp-1 text-xs font-light text-orange-600">
                      {item.sale}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-md px-5">
        <h3 className="text-xl font-bold text-black">
          Rides for your every need
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex h-20 justify-between rounded-lg bg-cyan-300 p-4 pr-2">
            <span className="font-semibold text-black">
              Advance <br /> Booking
            </span>
            <div className="mr-2 text-3xl">📅</div>
          </div>
          <div className="flex h-20 justify-between rounded-lg bg-green-300 p-4 pr-2">
            <span className="font-semibold text-black">
              Rent by <br /> the hour
            </span>
            <div className="mr-2 text-3xl">👮</div>
          </div>
          <div className="flex h-20 justify-between rounded-lg bg-orange-300 p-4 pr-2">
            <span className="font-semibold text-black">Car Plus</span>
            <div className="mr-2 text-3xl">🚕</div>
          </div>
          <div className="flex h-20 justify-between rounded-lg bg-cyan-300 p-4 pr-2">
            <span className="font-semibold text-black">7 seater car</span>
            <div className="mr-2 text-3xl">🚗</div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-5 max-w-md pl-5">
        <h3 className="text-xl font-bold text-black">Pre-book your rides</h3>
        <Slider slideList={preBookSlides} />
      </section>

      <section className="mx-auto mt-5 max-w-md pl-5">
        <h3 className="text-xl font-bold text-black">
          Discover more with Grab
        </h3>
        <Slider slideList={discoverSlides} />
      </section>

      <section className="mx-auto mt-5 max-w-md pl-5">
        <h3 className="text-xl font-bold text-black">More ways to use Grab</h3>
        <Slider slideList={moreWaysSlides} />
      </section>

      <section className="mx-auto mt-5 max-w-md pl-5">
        <h3 className="text-xl font-bold text-black">Keep every ride safe</h3>
        <Slider slideList={rideSafeSlides} />
      </section>
    </main>
  );
}

export default TransportPage;
