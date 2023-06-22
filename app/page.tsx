import Image from 'next/image';
import dynamic from 'next/dynamic';
import { getIpData, getIpLocationData } from '@/lib/getIpData';
import InputSection from './components/InputSection';

export default async function Home() {
  const res: IPLocation = await getIpLocationData('8.8.8.8');
  const Map = dynamic(() => import('../components/LeafMap'), {
    loading: () => <p>A map is loading..</p>,
    ssr: false,
  });

  return (
    <main className=''>
      <div className='relative'>
        <InputSection />
        <div className='relative z-0'>
          <Map lat={res.location.lat} lng={res.location.lng} />
        </div>
      </div>
    </main>
  );
}
