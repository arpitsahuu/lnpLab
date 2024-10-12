import ButtonGradient from '@/assets/svg/ButtonGradient';
import AboutInfo from '@/components/about/AboutInfo';
import Mission from '@/components/about/Mission';
import Whytnplab from '@/components/about/Whytnplab';
import Faq from '@/components/faq/Faq';
import Location from '@/components/location/Location';
import ContactSection from '@/components/contact/ContactSection';

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden mt-14" style={{
      backgroundImage: "linear-gradient(to bottom right, rgba(0,0,255,0.1) 0%, transparent 50%), repeating-linear-gradient(to right, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)"
    }}>
      <main className="container mx-auto px-4 py-20">

        <AboutInfo />
        <Mission />
        <Whytnplab />
        <Faq/>
        <Location/>
        <ContactSection/>
      </main>
      <ButtonGradient />
    </div>
  )
}