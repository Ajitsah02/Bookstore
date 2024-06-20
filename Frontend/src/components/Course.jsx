import React, { useState, useEffect } from 'react'
import Cards from './Cards'
// import list from '../../public/list.json'
import axios from "axios"
import { Link } from 'react-router-dom'


function Course() {
  const [book, setBook] = useState([])

  useEffect(() => {
    const getBook = async () => {

      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  }, [])

  return (
    <>
      <div className='max-w-screen-2xl containter mx-auto md:px-20 px-4'>
        <div className="mt-[68px]">
          <div className=' items-center justify-center text-center'>
            <h1 className=' text-2xl md:text-4xl'>we're delighted to have you {" "} <span className='text-pink-500'>Here! :)</span> </h1>
            <p className='mt-12'>
              Welcome to Book Haven, your destination for free literature. Dive into a world of diverse books at no cost. Explore, discover, and enjoy your next favorite read. Join our community of passionate readers today!
            </p>
            <Link to='/'>
              <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
            </Link>
          </div>

          <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
