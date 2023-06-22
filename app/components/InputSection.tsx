
export default function InputSection() {
  return (
    <section
      className={`flex flex-col items-center bg-[url('/images/pattern-bg-mobile.png')] bg-cover py-6`}
    >
      <div className='relative'>
        <h1 className='text-3xl text-white font-bold mb-8'>
          IP Address Tracker
        </h1>
        <div className='mb-28'>
          <input
            className='py-4 px-6 rounded-xl rounded-r-none'
            type='text'
          />
          <button
            className='py-4 px-6 bg-black text-white font-bold rounded-xl rounded-l-none'
          >
            {'Enter'}
          </button>
        </div>
        <div className='flex flex-col justify-evenly gap-6 p-4 text-center bg-white w-full border rounded-xl shadow-md absolute top-36 '>
          <div>
            <h3 className='uppercase text-dark-gray font-bold text-sm'>
              ip address
            </h3>
            <p className='font-bold text-xl'>{'8.8.8.8'}</p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-bold text-sm'>
              location
            </h3>
            <p className='font-bold text-xl'></p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-bold text-sm'>
              timezone
            </h3>
            <p className='font-bold text-xl'>{}</p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-bold text-sm'>isp</h3>
            <p className='font-bold text-xl'></p>
          </div>
        </div>
      </div>
    </section>
  );
}
