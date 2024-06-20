import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About() {
  return (
    <>
      <Navbar />
      <div classnmae="mt-[68px]">
        <div className=' items-center justify-center text-center mt-[68px]  '>
          <h1 className=' text-xl md:text-4xl mt-5'>About Us</h1>
          <p className='mt-9'>Welcome to Book Store, your ultimate destination for all things books! Our mission is to create a haven
            for book lovers, where the joy of reading meets the convenience of digital technology. At Book Haven, we
            believe that books have the power to enlighten, entertain, and transform lives, and we are dedicated to
            making this treasure trove of knowledge accessible to everyone.</p>

          <br />
          <h1 className=' text-xl md:text-4xl mt-5'>Our Story</h1>
          <p className='mt-3'> Book Store was born out of a passion for literature and a desire to build a community of avid readers.
            Whether you're into fiction, non-fiction, mystery, romance, science fiction, or any other genre, our
            extensive collection caters to diverse tastes and preferences. Our founders, a group of book
            enthusiasts, envisioned a platform where book lovers could easily find, purchase, and enjoy their
            favorite reads</p>

          <br />
          <h1 className='text-xl md:text-4xl mt-5'>What we Offer </h1>
          <p><span className='mt-3 text-[20px]'>Extensive Collection : </span> We offer a wide range of books across multiple genres and categories, ensuring there's something for everyone.</p>          
          <p><span className='mt-3 text-[20px]'>Personalized Recommendations : </span> Our intelligent recommendation system helps you discover new books based on your reading preferences.</p>
          <p><span className='mt-3 text-[20px]'>User-Friendly Interface : </span> Enjoy a seamless browsing and shopping experience with our intuitive and easy-to-navigate website.</p>
          
          <br />
          <h1 className='text-xl md:text-4xl mt-5'>Our Mission</h1>
          <p className='mt-3'>At Book Haven, our mission is to inspire and nurture a love for reading by providing a vast selection
            of books and a platform that is both user-friendly and community-driven. We strive to support authors
            and publishers by bringing their works to a wider audience and to create an inclusive space where
            readers can share their passion for books.</p>

          <br />
          <h1 className='text-xl md:text-4xl mt-5'>Why Choose Us</h1>
          <p> <span className='mt-3 text-[20px]'>Quality Selection :</span> Carefully curated books to ensure a high-quality reading experience.</p>
          <p><span className='mt-3 text-[20px]'>Convenience:</span> Easily accessible from the comfort of your home.</p>
          <br />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
