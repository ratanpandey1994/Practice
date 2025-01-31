import Fancybox from '../Fancybox/Fancybox';
import '../GallarySection/style.css';

// Import images
import AchievementImg1 from './images/Achivement-img-1.jpg';
import AchievementImg2 from './images/Achivement-img-2.jpg';
import AchievementImg3 from './images/Achivement-img-3.jpg';
import AchievementImg4 from './images/Achivement-img-4.jpg';
import AchievementImg5 from './images/Achivement-img-5.jpg';
import AchievementImg6 from './images/Achivement-img-6.jpg';
import Gallary5 from './images/Gallary-5.jpg';
import Gallary6 from './images/Gallary-6.jpg';
import Gallary7 from './images/Gallary-7.jpg';
import Gallary8 from './images/Gallary-8.jpg';
import Gallary9 from './images/Gallary-9.jpg';
import Gallary10 from './images/Gallary-10.jpg';

const GallarySection = () => {
  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className="GallarySection ptb100">
        <div className="wrapper">
          <div className="GallarySectionInner">
            <a data-fancybox="gallery" href={AchievementImg1}>
              <img
                src={AchievementImg1}
                width="200"
                height="150"
                alt="Achievement 1"
              />
            </a>
            <a data-fancybox="gallery" href={AchievementImg2}>
              <img
                src={AchievementImg2}
                width="200"
                height="150"
                alt="Achievement 2"
              />
            </a>
            <a data-fancybox="gallery" href={AchievementImg3}>
              <img
                src={AchievementImg3}
                width="200"
                height="150"
                alt="Achievement 3"
              />
            </a>
            <a data-fancybox="gallery" href={AchievementImg4}>
              <img
                src={AchievementImg4}
                width="200"
                height="150"
                alt="Achievement 4"
              />
            </a>
            <a data-fancybox="gallery" href={AchievementImg5}>
              <img
                src={AchievementImg5}
                width="200"
                height="150"
                alt="Achievement 5"
              />
            </a>
            <a data-fancybox="gallery" href={AchievementImg6}>
              <img
                src={AchievementImg6}
                width="200"
                height="150"
                alt="Achievement 6"
              />
            </a>
            <a data-fancybox="gallery" href={Gallary5}>
              <img
                src={Gallary5}
                width="200"
                height="150"
                alt="Achievement 6"
              />
            </a>
            <a data-fancybox="gallery" href={Gallary6}>
              <img
                src={Gallary6}
                width="200"
                height="150"
                alt="Achievement 6"
              />
            </a>
            <a data-fancybox="gallery" href={Gallary7}>
              <img
                src={Gallary7}
                width="200"
                height="150"
                alt="Achievement 6"
              />
            </a>
            <a data-fancybox="gallery" href={Gallary8}>
              <img
                src={Gallary8}
                width="200"
                height="150"
                alt="Achievement 6"
              />
            </a>
            <a data-fancybox="gallery" href={Gallary9}>
              <img
                src={Gallary9}
                width="200"
                height="150"
                alt="Achievement 6"
              />
            </a>
            <a data-fancybox="gallery" href={Gallary10}>
              <img
                src={Gallary10}
                width="200"
                height="150"
                alt="Achievement 6"
              />
            </a>
          </div>
        </div>
      </div>
    </Fancybox>
  );
};

export default GallarySection;
