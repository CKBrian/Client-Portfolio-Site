import HeroSection from './hero';
// import IntroSection from './intro';
import ServicesSection from './services';
import PortfolioSection from './portfolio';
import ContactSection from './contacts';
import TestimonialsSection from './testimonials';

const HomePage = () => {
    return (
        <>
        <HeroSection/>
        {/* <IntroSection/> */}
        <ServicesSection/>
        <PortfolioSection/>
        <TestimonialsSection/>
        <ContactSection/>
        </>
    );
}

export default HomePage;