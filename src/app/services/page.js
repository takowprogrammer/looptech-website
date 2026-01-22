
import { EquipmentIllustration, CloudIllustration, WebDevIllustration, SecurityIllustration, NetworkIllustration, MobileIllustration } from '@/components/Illustrations';
import ServicesHero from './_components/ServicesHero';
import ServicesListing from './_components/ServicesListing';
import PartnerSection from '@/components/PartnerSection';
import WhyUs from '@/components/WhyUs';
import RequestQuote from '@/components/RequestQuote';

export const metadata = {
    title: "Our Services | Loop Technologies CO LTD",
    description: "Explore our comprehensive IT services including cloud computing, web development, CCTV installation, network design, and mobile app development.",
};

const services = [
    {
        id: 'equipment',
        title: 'IT Equipment Analysis & Procurement',
        subtitle: 'Enterprise-Grade Hardware Solutions',
        description: 'We don’t just sell hardware; we provide a strategic analysis of your infrastructure needs. Our procurement service ensures you get high-performance, durable, and cost-effective equipment that aligns with your long-term business goals.',
        features: [
            'Needs Assessment & Consulting',
            'Enterprise Laptop & Desktop Fleets',
            'High-Performance Servers & Storage',
            'Network Peripherals & Cabling',
            'Bulk Software Licensing',
            'Lifecycle Management'
        ],
        benefits: [
            'Reduce procurement costs by up to 20%',
            'Ensure hardware compatibility and longevity',
            'Minimize downtime with reliable, warranty-backed gear',
            'Streamlined setup and deployment services'
        ],
        deliverables: [
            'Hardware Audit Report',
            'Custom Procurement Strategy',
            'Installation & Configuration',
            '3-Year Warranty & Support'
        ],
        icon: <EquipmentIllustration />
    },
    {
        id: 'cloud',
        title: 'Cloud Computing & Digital Transformation',
        subtitle: 'GCP Certified Premier Partner',
        description: 'Accelerate your digital journey with Google Cloud. We help businesses migrate, modernize, and innovate with secure, scalable cloud architectures. From simple data backups to complex AI/ML pipelines, we unlock the full power of the cloud.',
        features: [
            'Legacy to Cloud Migration',
            'Hybrid & Multi-Cloud Strategy',
            'Kubernetes & Microservices',
            'Data Warehouse & Analytics',
            'Cloud Security Posture Mgmt',
            'Disaster Recovery Planning'
        ],
        benefits: [
            'Scale resources instantly based on demand',
            'Cut infrastructure maintenance costs by 40%',
            'Enhance data security with enterprise-grade compliance',
            'Boost developer productivity with modern CI/CD'
        ],
        deliverables: [
            'Cloud Architecture Blueprint',
            'Migration Execution Plan',
            'Cost Optimization Report',
            'Staff Training Sessions'
        ],
        icon: <CloudIllustration />,
        highlighted: true
    },
    {
        id: 'web-dev',
        title: 'Full Stack Web & Software Engineering',
        subtitle: 'Building The Future of Web',
        description: 'We craft high-performance, pixel-perfect web applications that captivate users and drive conversions. Our engineering team leverages the latest frameworks (Next.js, React, Node) to build scalable, SEO-optimized, and secure digital platforms.',
        features: [
            'Custom Web App Development',
            'Progressive Web Apps (PWA)',
            'E-commerce & Payment Systems',
            'API Design & Integration',
            'Headless CMS Implementation',
            'Performance Optimization'
        ],
        benefits: [
            'Lightning-fast load times for better SEO',
            'Seamless experience across all devices',
            'Robust security against modern web threats',
            'Easy-to-manage content systems'
        ],
        deliverables: [
            'Interactive UI/UX Prototypes',
            'Production-Ready Source Code',
            'Admin Dashboard & Documentation',
            '3 Months Post-Launch Support'
        ],
        icon: <WebDevIllustration />
    },
    {
        id: 'cctv',
        title: 'Advanced Surveillance & Security Systems',
        subtitle: 'Protecting What Matters Most',
        description: 'Secure your assets with intelligent surveillance solutions. We install state-of-the-art CCTV systems with AI-powered analytics, remote monitoring, and cloud storage integrations, giving you 24/7 visibility and peace of mind.',
        features: [
            'IP & Analog Camera Systems',
            'AI Motion & Face Detection',
            'Remote Mobile Monitoring',
            'Cloud & Hybrid Storage',
            'Access Control Integration',
            '24/7 Maintenance Service'
        ],
        benefits: [
            'Deter theft and unauthorized access',
            'Monitor operations from anywhere in the world',
            'Automated alerts for suspicious activity',
            'Evidence-grade video clarity'
        ],
        deliverables: [
            'Security Site Survey',
            'Custom Camera Layout Design',
            'Professional Installation',
            'Mobile App Configuration'
        ],
        icon: <SecurityIllustration />,
        process: [
            { number: '01', title: 'Risk Audit', desc: 'We analyze your site’s vulnerabilities.' },
            { number: '02', title: 'Design', desc: 'Custom coverage map for zero blind spots.' },
            { number: '03', title: 'Deploy', desc: 'Professional cabling and camera mounting.' },
            { number: '04', title: 'Train', desc: 'We teach you to use the monitoring tools.' }
        ]
    },
    {
        id: 'network',
        title: 'Enterprise Network Infrastructure',
        subtitle: 'The Backbone of Your Business',
        description: 'A slow network kills productivity. We design and install robust, high-speed network infrastructures using fiber optics, enterprise-grade routers, and secure firewalls. Guaranteed 99.9% uptime for mission-critical operations.',
        features: [
            'LAN/WAN Network Design',
            'Fiber Optic Cabling',
            'Secure Wi-Fi (WLAN) Setup',
            'VPN & Remote Access',
            'Network Security & Firewalls',
            'Bandwidth Management'
        ],
        benefits: [
            'Eliminate dead zones and connection drops',
            'Secure internal data from external threats',
            'Support high-bandwidth applications (Video, VoIP)',
            'Future-proof cabling infrastructure'
        ],
        deliverables: [
            'Network Topology Diagram',
            'Certified Cabling Installation',
            'Hardware Configuration',
            'Network Performance Report'
        ],
        icon: <NetworkIllustration />
    },
    {
        id: 'mobile',
        title: 'Native & Cross-Platform Mobile Apps',
        subtitle: 'Your Business in Every Pocket',
        description: 'Engage your customers with intuitive, high-performance mobile apps. Whether for iOS or Android, we build beautiful, responsive applications that offer seamless user experiences and powerful offline capabilities.',
        features: [
            'iOS & Android Development',
            'React Native / Flutter',
            'UI/UX Mobile Design',
            'Push Notifications',
            'Offline Data Sync',
            'App Store Optimization'
        ],
        benefits: [
            'Direct channel to engage customers',
            'Higher retention than mobile websites',
            'Leverage device features (Camera, GPS)',
            'Brand presence on App Store & Play Store'
        ],
        deliverables: [
            'High-Fidelity Wireframes',
            'Published App Store Binaries',
            'Analytics Dashboard Integration',
            'User Guide & Training'
        ],
        icon: <MobileIllustration />
    }
];

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesListing />
            <WhyUs />
            <RequestQuote />
            <PartnerSection />
        
        </>
    );
}
