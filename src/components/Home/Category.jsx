import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import image1 from '../../assets/asset/home/slide1.jpg'
import image2 from '../../assets/asset/home/slide-2.jpg'
import image3 from '../../assets/asset/home/slide-3.jpg'
import image4 from '../../assets/asset/home/slide-4.jpg'
import image5 from '../../assets/asset/home/slide-5.jpg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Title from '../shared/Title/Title';
import './Home.css'

const Category = () => {

  const images = [
    {
      slide: image1,
      name: 'Bed Room'
    },
    {
      slide: image2,
      name: 'Dining Room'
    },
    {
      slide: image3,
      name: 'Living Room'
    },
    {
      slide: image4,
      name: 'Outdoor'
    },
    {
      slide: image5,
      name: 'Office'
    }
  ];
  return (
    <div  >
      <Title type={{ smallHeading: 'Discover stylish and functional furniture pieces to elevate every room in your home', title: 'ORDER ONLINE' }}></Title>
      <div className="flex justify-center">


        <Swiper

          slidesPerView={1}
          spaceBetween={2}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-11/12"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="slide container" ><img className="h-full w-11/12 flex mx-auto" src={image.slide} alt="" />
              <h1 className="text-overlay text-3xl text-center w-full">{image.name}</h1></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
