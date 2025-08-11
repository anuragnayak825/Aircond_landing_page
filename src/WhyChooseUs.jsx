import React from 'react'
import img1 from './assets/gal1.webp'
import img2 from './assets/gal2.webp'
import img5 from './assets/gal5.webp'
import img8 from './assets/gal8.webp'


const why = [
  {
    t: "Premium service you can trust:",
    p: "Our skilled technicians take pride in their craftsmanship and uphold our strong reputation."
  },
  {
    t: "Excellent customer service:",
    p: "Ensures a smooth experience for you and turns you into a repeat customer"
  },
  {
    t: "Excellent customer service:",
    p: "Ensures a smooth experience for you and turns you into a repeat customer"
  },
  {
    t: "Trustworthy: ",
    p: "633+ Google Reviews & 4.7 rating"
  },
  {
    t: "Transparent: ",
    p: "Zero hidden charges, get a free 20 psi gas top up , 45-Day Warranty Includes on the service Enjoy peace of mind ."
  },
]
export default function WhyChooseUs() {
  return (
    <div className='w-full h-auto bg-gray-100 flex flex-col-reverse lg:flex-row justify-between items-center xl:px-24 px-4 md:px-10 lg:px-10  py-8 gap-10'>
      <div className='lg:w-1/2 w-full h-full flex flex-col items-center lg:items-start  '>
        <h1 className='text-xl xl:text-4xl font-bold italic tracking-wide'>Why Choose Us for Aircond Service?</h1>
        <ul className='space-y-5 xl:space-y-9 mt-4 xl:mt-7'>
          {
            why?.map((e) => (
              <li className='text-base xl:text-2xl  md:list-disc italic tracking-wider '><strong>{e?.t}</strong> {e?.p}</li>
            ))
          }
        </ul>


        <button className=' zoomin-out shadow-md shadow-gray-400 w-auto px-3 py-2 rounded-md mt-5 xl:mt-8 my-0 text-base xl:text-xl cursor-pointer  font-semibold italic bg-yellow-400'>Claim Your Free 20 PSI Gas Top-Up</button>
      </div>
      <div className='lg:w-1/2 w-full h-full  '>
        <div className='w-full h-full bg-white'>
          <div className="columns-2 gap-2 space-y-2 p-2.5">
            <div className='w-full h-[43vh] '>
              <img src={img5} alt="" className=' w-full h-full object-cover' />
            </div>
            <div className='w-full h-[40vh] '>
              <img src={img2} alt="" className=' w-full h-full object-cover' />
            </div>
            <div className='w-full h-[48vh] '>
              <img src={img1} alt="" className=' w-full h-full object-cover' />
            </div>
            <div className='w-full h-[35vh] '>
              <img src={img8} alt="" className=' w-full h-full object-cover' />
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}
