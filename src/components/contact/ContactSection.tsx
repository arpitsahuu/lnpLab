import React from 'react'
import Button from '../Button'

const ContactSection = () => {
  return (
    <section className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-8">Ready to Accelerate Your Success?</h2>

          <div className="flex justify-center mt-20">
            <Button href="/contact">Contact us</Button>
          </div>

        </section>
  )
}

export default ContactSection