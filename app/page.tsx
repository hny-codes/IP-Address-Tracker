import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getIpData } from '@/lib/getIpData';

export default async function Home() {
  const res: IP = await getIpData('8.8.8.8');
  const Map = dynamic(() => import('../components/LeafMap'), {
    loading: () => <p>A map is loading..</p>,
    ssr: false,
  });

  return (
    <main className=''>
      <div className=''>
        <Map />
        <p>{res.location.country}</p>
      </div>
    </main>
  );
}
