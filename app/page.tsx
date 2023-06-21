import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getIpData, getIpLocationData } from '@/lib/getIpData';

export default async function Home() {
  const res: IPLocation = await getIpLocationData('8.8.8.8');
  const Map = dynamic(() => import('../components/LeafMap'), {
    loading: () => <p>A map is loading..</p>,
    ssr: false,
  });

  return (
    <main className=''>
      <div className=''>
        <Map />
        <p>
          {res.location.lat} {res.location.lng}
        </p>
      </div>
    </main>
  );
}
