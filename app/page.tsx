import Image from 'next/image';
import dynamic from 'next/dynamic';

export default function Home() {
  const Map = dynamic(() => import('../components/LeafMap'),
    {
      loading: () => <p>A map is loading..</p>,
      ssr: false}
  )

  return (
    <main className=''>
      <div className=''>
        <Map />
      </div>
    </main>
  );
}
