import React from 'react'
import Header from '../components/Header'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import client from '../assets/images/client.jpg'
import client1 from '../assets/images/client1.jpg'
import client2 from '../assets/images/client2.jpg'
import client3 from '../assets/images/client3.jpg'
import client4 from '../assets/images/client4.jpg'
import OurChart from '../components/OurChart'

const Main = () => {
  return (
    <section className='w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4'>
      <Header />

      {/* main section starts here  */}
      <div id='main-section'
        className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-full h-screen'
      >

        <div id='left' className='col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full'>

          {/* three grid layout  */}
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-full mb-4'>
            <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-md text-black font-semibold'>Facebook</h1>
                <h1 className='text-green-600 font-semibold'>+21.75%</h1>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-1'>
                  <h1 className='text-3xl text-black font-semibold'>10,328</h1>
                  <p className='text-slate-700'>Followers</p>
                </div>

                <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full'>
                  <FaFacebookF className='w-[30px] h-[30px]' />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center bg-red-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-md text-black font-semibold'>Instagram</h1>
                <h1 className='text-red-600 font-semibold'>+21.75%</h1>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-1'>
                  <h1 className='text-3xl text-black font-semibold'>23,328</h1>
                  <p className='text-slate-700'>Followers</p>
                </div>

                <div className='bg-red-400 hover:bg-red-500 cursor-pointer text-black p-3 rounded-full'>
                  <FaFacebookF className='w-[30px] h-[30px]' />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-md text-black font-semibold'>Twitter</h1>
                <h1 className='text-green-600 font-semibold'>+21.75%</h1>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-1'>
                  <h1 className='text-3xl text-black font-semibold'>34,328</h1>
                  <p className='text-slate-700'>Followers</p>
                </div>

                <div className='bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full'>
                  <FaFacebookF className='w-[30px] h-[30px]' />
                </div>
              </div>
            </div>
          </div>
          {/* grid layout ends here  */}

          <OurChart />
        </div>
        {/* left section ends here  */}

        {/* right section starts from here  */}

        <div id='right' className='p-2 flex flex-col justify-center items-center gap-4 h-full'>
          <div id='top' className='bg-slate-100 p-8 w-full rounded-xl flex flex-col justify-center items-center gap-6 h-fit'>
            <div id='image-box' className='w-full flex flex-col justify-center items-center gap-4'>
              <img src={client} alt="client-image" className='rounded-full w-[100px] h-[100px]' />
              <div className='flex flex-col justify-center items-center'>
                <h1 className='text-black font-bold text-2xl'>Jack Anderson</h1>
                <p className='text-slate-700 text-lg'>@jack_anderson</p>
              </div>
            </div>

            <div id='followers-info' className='flex justify-between items-center gap-8 w-full'>
              <div className='flex flex-col justify-center items-start'>
                <h1 className='text-2xl text-black font-semibold'>193</h1>
                <p>Posts</p>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className='text-2xl text-black font-semibold'>17,536</h1>
                <p>Followers</p>
              </div>
              <div className='flex flex-col justify-center items-start'>
                <h1 className='text-2xl text-black font-semibold'>274</h1>
                <p>Following</p>
              </div>
            </div>
          </div>

          <div id='bottom' className='bg-black w-full h-full p-6 rounded-xl flex flex-col justify-center items-center gap-8'>
            <div className='flex md:flex-row flex-col justify-between items-center w-full gap-2'>
              <h1 className='text-white text-md'>Facebook Campaign</h1>
              <button className='bg-green-600 text-white px-6 py-1 rounded-xl cursor-pointer text-md'>Active</button>
            </div>

            <div className='flex justify-between items-center w-full h-fit flex-col md:flex-row gap-4'>
              <div className='flex flex-col justify-center items-start gap-1'>
                <h1 className='text-white text-2xl font-bold'>1,129</h1>
                <p className='text-slate-200 text-sm'>Followers Today</p>
              </div>
              <div className='flex flex-col justify-center items-start gap-1'>
                <h1 className='text-white text-2xl font-bold'>50,000</h1>
                <p className='text-slate-200 text-sm'>Followers Goals</p>
              </div>
              <div className='flex flex-col justify-center items-start gap-1'>
                <h1 className='text-white text-2xl font-bold'>10,000</h1>
                <p className='text-slate-200 text-sm'>Followers Online</p>
              </div>
            </div>

            <div className='flex md:flex-row flex-col justify-between items-center w-full'>
              <div className='flex -space-x-4 rt1:space-x-reverse w-full md:justify-start justify-center items-start'>
                <img src={client1} alt="client image" className='w-10 h-10 border-2 border-white rounded-full' />
                <img src={client2} alt="client image" className='w-10 h-10 border-2 border-white rounded-full' />
                <img src={client3} alt="client image" className='w-10 h-10 border-2 border-white rounded-full' />
                <img src={client2} alt="client image" className='w-10 h-10 border-2 border-white rounded-full' />
                <img src={client1} alt="client image" className='w-10 h-10 border-2 border-white rounded-full' />
                <img src={client3} alt="client image" className='w-10 h-10 border-2 border-white rounded-full' />
                <img src={client1} alt="client image" className='w-10 h-10 border-2 border-white rounded-full' />
              </div>

              <div className='flex flex-col justify-center items-center gap-1'>
                <h1 className='text-white text-xl font-bold'>+7,294</h1>
                <p className='text-slate-200 text-sm'>All Time</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Main