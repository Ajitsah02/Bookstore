import React, { useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

import axios from "axios"
// import list from '../../public/list.json';
function FreeBook() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data);
        const data = res.data.filter((data) => data.category === "free")
        setBook(data);
        console.log(data);
      } catch (error) {
        console.log(error)

      }
    }
    getBook();
  }, [])
  //const filterData = list.filter((data) => data.category === "free");
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='max-w-screen-2xl containter mx-auto md:px-20 px-4'>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>
          Welcome to Book Haven, your ultimate destination for free literature. Dive into a vast collection of books at no cost, spanning various genres and interests. Explore, discover, and enjoy your next favorite read without spending a dime. Our shelves are stocked with classics, contemporary works, and hidden gems just waiting to be found. Join our community of passionate readers and share the joy of reading. Sign up today and embark on countless literary adventures. Happy reading!
        </p>


        <Slider {...settings}>
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  )
}
export default FreeBook;
