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
      className={`relative bg-[url('/images/pattern-bg-mobile.png')] bg-cover py-6 z-10 font-rubik`}
    >
      <div className='relative w-[85%] mx-auto flex flex-col items-center'>
        <h1 className='text-2xl text-white font-bold mb-5'>
          IP Address Tracker
        </h1>
        <div className='mb-28 flex w-full'>
          <input
            className='w-full py-3 px-6 rounded-xl rounded-r-none'
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
        <div className='flex flex-col justify-evenly gap-5 p-4 text-center bg-white w-full border rounded-xl shadow-md absolute top-[7.5rem] '>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              ip address
            </h3>
            <p className='font-bold text-lg'>{ip}</p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              location
            </h3>
            <p className='font-bold text-lg'>
              {city}, {region} {postalCode}
            </p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              timezone
            </h3>
            <p className='font-bold text-lg'>UTC {timezone}</p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.6rem]'>
              isp
            </h3>
            <p className='font-bold text-lg'>{isp}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
