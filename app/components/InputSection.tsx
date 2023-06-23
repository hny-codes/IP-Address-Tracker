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
            className='w-full py-3 px-6 rounded-xl rounded-r-none max-w-sm'
            type='text'
            value={value}
            onChange={handleChange}
            placeholder='Search for any IP address or domain'
          />
          <button
            className='py-3 px-6 bg-black text-white font-bold rounded-xl rounded-l-none'
            onClick={() => setIp(value)}
          >
            {'>'}
          </button>
        </div>
        <div className='flex flex-col sm:grid sm:grid-cols-4 justify-evenly sm:text-left gap-4 sm:gap-12 p-4 sm:py-8 text-center bg-white w-full border rounded-xl shadow-md absolute top-[7.5rem] sm:top-[8.5rem]'>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              ip address
            </h3>
            <p className='font-bold text-lg sm:mt-2'>{ip}</p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              location
            </h3>
            <p className='font-bold text-lg sm:mt-2'>
              {city}, {region} {postalCode}
            </p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              timezone
            </h3>
            <p className='font-bold text-lg sm:mt-2'>UTC {timezone}</p>
          </div>
          <div>
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
