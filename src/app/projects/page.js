import Testimonials from '@/components/Testimonials';
import ProjectsHero from './_components/ProjectsHero';
import styles from './projects.module.css';
import Link from 'next/link';
import PartnerSection from '@/components/PartnerSection';
import RequestQuote from '@/components/RequestQuote';

export const metadata = {
    title: "Our Projects | Loop Technologies CO LTD",
    description: "Explore our portfolio of successful IT projects including web applications, e-commerce platforms, and custom software solutions.",
};

const projects = [
    {
        id: 1,
        title: "Dunamis IT Solutions Platform",
        category: "Full-Stack Development",
        description: "Complete business platform for US-based client featuring a professional website, full e-commerce online store, and comprehensive admin dashboard for managing the entire platform.",
        tags: ["Next.js", "E-Commerce", "Admin Dashboard", "Payment Integration"],
        stats: { metric: "3-in-1", label: "Platform Suite" },
        color: "#6366f1",
        url: "https://dunamisitsolutions.com"
    },
    {
        id: 2,
        title: "Emmaris25 Wedding Platform",
        category: "Custom Software",
        description: "Innovative wedding management system with static wedding website, admin dashboard for generating and sharing WhatsApp invitations, unique QR code generation for guests, Excel export, and custom mobile app for scanning guests on wedding day.",
        tags: ["React", "QR Code", "Mobile App", "WhatsApp API", "Admin Panel"],
        stats: { metric: "End-to-End", label: "Wedding Solution" },
        color: "#7c3aed",
        url: "https://emmaris25.com"
    },
    {
        id: 3,
        title: "Enterprise Network Infrastructure",
        category: "Network Design",
        description: "Complete network overhaul for business clients, reducing outages and significantly improving data transfer speeds with enterprise-grade equipment.",
        tags: ["Cisco", "Fiber Optics", "VLAN", "Security"],
        stats: { metric: "99.9%", label: "Uptime" },
        color: "#8b5cf6",
        url: null
    },
    {
        id: 4,
        title: "Cloud Migration & Training",
        category: "Cloud Computing",
        description: "Migrated legacy infrastructure to Google Cloud Platform with comprehensive staff training programs for businesses in Cameroon.",
        tags: ["GCP", "Kubernetes", "DevOps", "Training"],
        stats: { metric: "50%", label: "Cost Reduction" },
        color: "#6366f1",
        url: null
    }
];

export default function ProjectsPage() {
    return (
        <>
            <ProjectsHero />
            

            <RequestQuote />
            <Testimonials />
            <PartnerSection />
           
        </>
    );
}
