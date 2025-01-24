import Fancybox from '../Fancybox/Fancybox';
import SubInnerContent from '../SubInnerContent';
import '../OurAchievements/style.css';

// Import images
import AchievementImg1 from './images/Achivement-img-1.jpg';
import AchievementImg2 from './images/Achivement-img-2.jpg';
import AchievementImg3 from './images/Achivement-img-3.jpg';
import AchievementImg4 from './images/Achivement-img-4.jpg';
import AchievementImg5 from './images/Achivement-img-5.jpg';
import AchievementImg6 from './images/Achivement-img-6.jpg';

const OurAchievements = () => {
  return (
    <Fancybox
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <div className="OurAchievements ptb100">
        <div className="wrapper">
          <SubInnerContent
            subtitle=""
            heading="Discover Our Newest Elevator Achievements and Innovations!"
          />
          <div className="gallary-section">
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
          </div>
        </div>
      </div>
    </Fancybox>
  );
};

export default OurAchievements;
