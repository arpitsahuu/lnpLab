import ButtonGradient from '@/assets/svg/ButtonGradient'
import Button from '@/components/Button'
import Training from '@/components/Training'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden pt-10" style={{
      backgroundImage: "linear-gradient(to bottom right, rgba(0,0,255,0.1) 0%, transparent 50%), repeating-linear-gradient(to right, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)"
    }}>
      <Training />
      <div className="flex justify-center ">
        <Button href="/contact">Contact us</Button>
      </div>

      <ButtonGradient />
    </div>
  )
}

export default page