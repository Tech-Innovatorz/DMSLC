import React from 'react'
import Accordion from './Accordion'

const FaqSection = () => {
  return (
    <div className='padding-b xl:padding-l xl:padding-r'>
        <div className='flex flex-col max-xl:padding-x'>
            <h2 className='text-center text-8xl max-md:text-5xl font-bold mt-4 mb-8'>FAQs</h2>
            <p className='text-center text-slate-500 text-lg mb-4'>Everything you need to know about the product. Can't find the answer you're looking for? Please Conact Us.</p>
            <div className='flex flex-col xl:flex-row'>
                <Accordion accordionTitle="Can I use Signify on multiple devices?" accordionContent="Signify is your gateway to effortless, high-quality video conferencing. Join us in shaping the future Of communication!"/>
                <Accordion accordionTitle="Do I need to download any software to use ClearLink?" accordionContent="Signify is your gateway to effortless, high-quality video conferencing. Join us in shaping the future Of communication!"/>
                <Accordion accordionTitle="How Many Participants can join the Call?" accordionContent="Signify is your gateway to effortless, high-quality video conferencing. Join us in shaping the future Of communication!"/>

            </div>

        </div>
    </div>
  )
}

export default FaqSection