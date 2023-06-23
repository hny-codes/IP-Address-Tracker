'use client';

import { ChangeEvent, Dispatch, useState } from 'react';

type Props = {
  ip: string;
  city: string;
  region: string;
  postalCode: string;
  timezone: string;
  isp: string;
  setIp: Dispatch<string>;
};

export default function InputSection({
  ip,
  city,
  region,
  postalCode,
  timezone,
  isp,
  setIp,
}: Props) {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <section
      className={`relative bg-[url('/images/pattern-bg-mobile.png')] sm:bg-[url('/images/pattern-bg-desktop.png')] bg-cover py-6 z-10 font-rubik`}
    >
      <div className='relative w-[85%] mx-auto flex flex-col items-center'>
        <h1 className='text-2xl text-white font-bold mb-5'>
          IP Address Tracker
        </h1>
        <div className='mb-28 sm:mb-[5.5rem] flex justify-center w-full'>
          <input
            className='w-full py-3 px-6 rounded-xl rounded-r-none max-w-sm cursor-pointer'
            type='text'
            value={value}
            onChange={handleChange}
            placeholder='Search for any IP address or domain'
          />
          <button
            className='py-3 px-6 bg-black text-white font-bold rounded-xl rounded-l-none hover:bg-[var(--clr-very-dark-gray)] transition'
            onClick={() => setIp(value)}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
              <path
                fill='none'
                stroke='#FFF'
                strokeWidth='3'
                d='M2 1l6 6-6 6'
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-col sm:grid sm:grid-cols-4 justify-evenly gap-4 sm:gap-2 p-4 sm:py-8 sm:px-0 text-center sm:text-left bg-white w-full sm:max-w-5xl border rounded-xl shadow-md absolute top-[7.5rem] sm:top-[8.5rem] sm:divide-x-2'>
          <div className='sm:pl-10'>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              ip address
            </h3>
            <p className='font-bold text-lg sm:mt-2'>{ip}</p>
          </div>
          <div className='sm:pl-10'>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              location
            </h3>
            <p className='font-bold text-lg sm:mt-2'>
              {city}, {region} {postalCode}
            </p>
          </div>
          <div className='sm:pl-10'>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              timezone
            </h3>
            <p className='font-bold text-lg sm:mt-2'>UTC {timezone}</p>
          </div>
          <div className='sm:pl-10'>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              isp
            </h3>
            <p className='font-bold text-lg sm:mt-2'>{isp}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
