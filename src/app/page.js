import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { EquipmentIllustration, CloudIllustration, WebDevIllustration, SecurityIllustration, NetworkIllustration, MobileIllustration } from '@/components/Illustrations';
import styles from './page.module.css';
import Link from 'next/link';
import ReviewsSection from '@/components/ReviewsSection';
import TrustBar from '@/components/TrustBar';
import ServicesPreview from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import ProjectsSection from '@/components/projects';
import PartnerSection from '@/components/PartnerSection';
import Testimonials from '@/components/Testimonials';
import RequestQuote from '@/components/RequestQuote';

export default function Home() {
    return (
        <div className='bg-primary-100'>        
            <Hero />
            <TrustBar />
            <ServicesPreview />
            <WhyUs />
             <PartnerSection />
            
            <RequestQuote />
            <ProjectsSection />
            <PartnerSection />
            <Testimonials />
            
        </div>
    );
}
