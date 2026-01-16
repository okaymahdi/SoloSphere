// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import carousel1 from '../../assets/images/carousel1.jpg';
import carousel2 from '../../assets/images/carousel2.jpg';
import carousel3 from '../../assets/images/carousel3.jpg';
import Slide from './Slide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className='container px-8 py-10 mx-auto'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={carousel1}
            title='Build your new'
            highlight='SaaS Project'
            buttonText='Post Job & Hire Expert'
            buttonLink='/jobs'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={carousel2}
            title='Grow your'
            highlight='Startup Team'
            buttonText='Find Developers'
            buttonLink='/developers'
          />
        </SwiperSlide>

        <SwiperSlide>
          <Slide
            image={carousel3}
            title='Launch your'
            highlight='Next Idea'
            buttonText='Get Started Now'
            buttonLink='/register'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
