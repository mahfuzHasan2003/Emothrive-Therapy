import Image from 'next/image'
import React from 'react'
import { CgArrowTopRightO } from "react-icons/cg";

const Theraphy = () => {
  return (
    <div>
      {/*Section-2*/}
      <div style={{
        background: 'linear-gradient(253deg, rgba(2, 191, 2, 0.20) 0%, rgba(0, 68, 0, 0.20) 100%)',
      }} className='h-[532px] flex justify-center items-center text-center px-4'>
        <p className='lg:py-14 text-2xl lg:text-[66px] text-center font-serif font-bold'>Explore personalized, <span className='text-[#018801] italic font-playfair'>AI-guided</span> <br /> therapy approaches tailored to <br /> your needs.</p>
      </div>

      {/*Section-2*/}
      <div className='lg:flex gap-28 mt-28 justify-center'>
        <div>
          <h1 className="text-[#018001] border border-[#018001] rounded-sm text-center font-semibold py-1 w-72">
            Cognitive Behavioral Therapy (CBT)
          </h1>
          <h1 className=' text-2xl lg:text-4xl font-semibold mb-3'>Anxiety, depression, <span className='text-[#018801] italic font-semibold'>negative</span> thought <br /> patterns.</h1>
          <p className='text-lg'>Helps you recognize and reframe unhelpful thoughts and behaviors through <br /> structured tools and real-time AI support</p>
          <CgArrowTopRightO className='mt-3 text-4xl text-[#018801]' />
        </div>


        <div>
          <Image src='/project-image/rectangle.png'
            alt='profile'
            width={550}
            height={550}
          />
        </div>
        
      </div>

      {/*Section-3*/}
      <div style={{background: "linear-gradient(253deg, rgba(2, 191, 2, 0.20) 0%, rgba(0, 68, 0, 0.20) 100%);"}} className=' lg:h-[388px] lg:flex gap-28 mt-3 lg:mt-28 justify-center items-center'>
        <div>
          <Image src='/project-image/rectangle.png'
            alt='profile'
            width={550}
            height={550}
          />
        </div>

        <div>
          <h1 className="text-[#018001] border border-[#018001] rounded-sm text-center font-semibold py-1 w-72 mt-2 lg:mt-0">
            Dialectical Behavior Therapy (DBT)
          </h1>
          <h1 className=' text-2xl lg:text-4xl font-semibold mb-3 mt-2.5'>Emotional regulation, <span className='text-[#018801] italic font font-playfair'>trauma,</span> <br /> borderline personality</h1>
          <p className='text-lg'>Focuses on mindfulness, distress tolerance, emotional control, and <br /> interpersonal effectiveness.</p>
          <CgArrowTopRightO className='mt-3 text-4xl text-[#018801]' />
        </div>
      </div>


      
      {/*Section-4*/}
      <div className='lg:flex gap-28 mt-28 justify-center'>
        <div>
          <h1 className="text-[#018001] border border-[#018001] rounded-sm text-center font-semibold py-1 w-88">
            Acceptance and Commitment Therapy (ACT)
          </h1>
          <h1 className=' text-2xl lg:text-4xl font-semibold mb-3'>Anxiety, depression, OCD, <span className='text-[#018801] italic font-semibold'>trauma,</span> <br /> life transitions</h1>
          <p className='text-lg'>ACT focuses on psychological flexibility: the ability to stay present and <br /> choose value-driven behavior in any situation.</p>
          <CgArrowTopRightO className='mt-3 text-4xl text-[#018801]' />
        </div>

        <div>
          <Image src='/project-image/rectangle3.png'
            alt='profile'
            width={550}
            height={550}
          />
        </div>
      </div>


    </div>
  )
}

export default Theraphy