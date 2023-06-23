'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getIpLocationData } from '@/lib/getIpData';
import InputSection from '@/app/components/InputSection';

export default function App() {
  const [ip, setIp] = useState('8.8.8.8');
  const [data, setData] = useState<IPLocation | null>(null);

  const Map = dynamic(() => import('../components/LeafMap'), {
    loading: () => <p>A map is loading..</p>,
    ssr: false,
  });

  useEffect(() => {
    async function getData(param: string) {
      const res: IPLocation = await getIpLocationData(param);
      setData(res);
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
      <div className='relative z-0'>
        {data && <Map lat={data.location.lat} lng={data.location.lng} />}
      </div>
    </div>
  );
}
