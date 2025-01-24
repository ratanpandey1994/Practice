import '../../pages/Gallery/style.css';
import InnerBanner from '../../components/InnerBanner';
import GallaryInnerBannerImg from '../Gallery/images/GallaryBannerImg.jpg';
import GallarySection from '../../components/GallarySection';

const Gallery = () => {
  return (
    <div className='GallarySection'>
      {/* Inner Banner Section */}
      <InnerBanner
        imgSrc={GallaryInnerBannerImg}
        InnerHeading={
          <>
            Explore Our Latest Elevator Innovations and Milestones!
          </>
        }
        InnerContent="Discover Our Latest Elevator Creations – Innovative Designs, Flawless Installations, and Unrivaled Excellence!"
      />
      <GallarySection />
    </div>
  );
};

export default Gallery;
