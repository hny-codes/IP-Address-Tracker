'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getIpLocationData, getClientIpLocationData } from '@/lib/getIpData';
import InputSection from '@/app/components/InputSection';

const Loading = () => {
  return (
    <>
      <p className='font-rubik font-bold'>A map is loading..</p>
    </>
  );
};

export default function App() {
  const [ip, setIp] = useState('');
  const [data, setData] = useState<IPLocation | null>(null);

  const Map = dynamic(() => import('../components/LeafMap'), {
    loading: () => <Loading />,
    ssr: false,
  });

  useEffect(() => {
    async function getData(param: string) {
      if (ip) {
        const res: IPLocation = await getIpLocationData(param);
        setData(res);
      } else if (ip === '') {
        const res: IPLocation = await getClientIpLocationData();
        setIp(res.ip);
        setData(res);
      }
    }

    getData(ip);
  }, [ip]);

  return (
    <div className='relative'>
      {data && (
        <InputSection
          ip={ip}
          city={data.location.city}
          region={data.location.region}
          postalCode={data.location.postalCode}
          timezone={data.location.timezone}
          isp={data.isp}
          setIp={setIp}
        />
      )}
      <div
        className={`relative z-0 flex justify-center items-center h-[calc(100vh-236px)]`}
      >
        {data && <Map lat={data.location.lat} lng={data.location.lng} />}
      </div>
    </div>
  );
}
