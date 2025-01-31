import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import setMetadata from '../utils/setMetadata.ts';
import { useEffect } from "react";
import socialShareHome from '../../public/assets/images/socialShare.jpg'

const metadataByRoute: Record<string, { title: string; description: string; imageUrl: string; keywords: string }> = {
  '/': {
    title: 'Home | MSTA Engineering',
    description: 'Welcome to MSTA Engineering. We specialize in elevator services.',
    imageUrl: socialShareHome,
    keywords: 'elevator installation, elevator repair, elevator maintenance, engineering services',
  },
  '/about-us': {
    title: 'About Us | MSTA Engineering',
    description: 'Learn about our 20 years of expertise in elevator engineering.',
    imageUrl: socialShareHome,
    keywords: 'elevator experts, elevator engineering, about MSTA Engineering',
  },
  '/elevator-modernization': {
    title: 'Services | Elevator Modernization | MSTA Engineering',
    description: 'Upgrade your elevator system with our reliable and cost-effective modernization solutions.',
    imageUrl: socialShareHome,
    keywords: 'elevator modernization, upgrade elevators, elevator safety, modern elevator systems',
  },
  '/elevator-repairs': {
    title: 'Services | Elevator Repairs | MSTA Engineering',
    description: 'Fast and reliable elevator repair services to ensure safe and efficient operations.',
    imageUrl: socialShareHome,
    keywords: 'elevator repair services, elevator troubleshooting, elevator maintenance and repair',
  },
  '/elevator-installation': {
    title: 'Services | Elevator Installation | MSTA Engineering',
    description: 'Professional elevator installation services tailored to your building’s needs.',
    imageUrl: socialShareHome,
    keywords: 'elevator installation, new elevators, elevator design, custom elevator installation',
  },
  '/elevator-maintenance': {
    title: 'Services | Elevator Maintenance | MSTA Engineering',
    description: 'Regular elevator maintenance to ensure safety, efficiency, and long-term performance.',
    imageUrl: socialShareHome,
    keywords: 'elevator maintenance, elevator upkeep, elevator inspection, MSTA Engineering maintenance',
  },
  '/gallery': {
    title: 'Gallery | MSTA Engineering',
    description: 'Explore our portfolio of successful elevator projects and installations.',
    imageUrl: socialShareHome,
    keywords: 'elevator projects, elevator installation photos, MSTA Engineering gallery',
  },
  '/testimonials': {
    title: 'Testimonials | What Our Clients Say | MSTA Engineering',
    description: 'Read what our satisfied customers have to say about our elevator services and solutions.',
    imageUrl: socialShareHome,
    keywords: 'elevator service testimonials, client feedback, customer reviews, MSTA Engineering testimonials',
  },
  '/faqs': {
    title: 'FAQs | Frequently Asked Questions | MSTA Engineering',
    description: 'Find answers to common questions about our elevator services and solutions.',
    imageUrl: socialShareHome,
    keywords: 'elevator FAQs, frequently asked questions, MSTA Engineering support',
  },
  '/contact': {
    title: 'Contact Us | Get in Touch | MSTA Engineering',
    description: 'Reach out to us for all your elevator service needs. We’re here to help!',
    imageUrl: socialShareHome,
    keywords: 'contact MSTA Engineering, elevator service contact, customer support, get in touch',
  },
};

const RootLayout=()=>{
    const location = useLocation();

  useEffect(() => {
    const metadata = metadataByRoute[location.pathname];
    if (metadata) {
      setMetadata(metadata);
    }
  }, [location]);
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}

export default RootLayout;