import StatsSection from '../../components/StatsSection';
import AboutHero from './_components/AboutHero';
import AboutPhilosophy from './_components/AboutPhilosophy';
import AboutValues from './_components/AboutValues';
import MeetTheArchitects from './_components/MeetTheArchitects';
import PartnerSection from '@/components/PartnerSection';
import AboutStats from './_components/AboutStats';

export const metadata = {
    title: "About Us | Loop Technologies CO LTD",
    description: "Learn about Loop Technologies, our mission to empower businesses through technology, and our commitment to excellence in IT consulting.",
};

export default function AboutPage() {
    return (
        <>

         <AboutHero />
         <AboutPhilosophy />
         <AboutStats />
         <AboutValues />
         <MeetTheArchitects />
         <PartnerSection />
         
        </>
    );
}
