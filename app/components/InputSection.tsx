
export default function InputSection() {
  return (
    <section
      className={`relative bg-[url('/images/pattern-bg-mobile.png')] bg-cover py-6 z-10 font-rubik`}
    >
      <div className='relative w-[90%] mx-auto flex flex-col items-center'>
        <h1 className='text-3xl text-white font-bold mb-8'>
          IP Address Tracker
        </h1>
        <div className='mb-28 flex w-full'>
          <input className='w-full py-4 px-6 rounded-xl rounded-r-none' type='text' />
          <button className='py-4 px-6 bg-black text-white font-bold rounded-xl rounded-l-none'>
            {'>'}
          </button>
        </div>
        <div className='flex flex-col justify-evenly gap-6 p-4 text-center bg-white w-full border rounded-xl shadow-md absolute top-36 '>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.7rem]'>
              ip address
            </h3>
            <p className='font-bold text-xl'>{'8.8.8.8'}</p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.7rem]'>
              location
            </h3>
            <p className='font-bold text-xl'></p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.7rem]'>
              timezone
            </h3>
            <p className='font-bold text-xl'>{}</p>
          </div>
          <div>
            <h3 className='uppercase text-dark-gray font-[700] text-[0.7rem]'>
              isp
            </h3>
            <p className='font-bold text-xl'></p>
          </div>
        </div>
      </div>
    </section>
  );
}
