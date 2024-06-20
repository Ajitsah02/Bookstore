import React from 'react'
import {Link} from 'react-router-dom'
function Contact() {
    return (
        <div className='max-w-screen-2xl containter mx-auto md:px-20 px-4'>

            <div className='mt-[68px] items-center justify-center text-center ' >
                <div className='space-x-2 space-y-2'>
                    <span>Name</span>
                    <br />
                    <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-1 border rounded-md outline-none text-black bg-white' />
                    <br />

                </div>

                <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br />
                    <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none text-black bg-white' />
                    <br />

                </div>
                <div className='mt-4 space-y-2'>
                    <span>Message</span>
                    <br />
                    <textarea className="w-80 h-[120px] textarea textarea-bordered text-black bg-white" placeholder="Message"></textarea>
                </div>

                <div className='mt-3 space-y-2 mb-5' >
                    <Link to='/'>
                        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Submit</button>
                    </Link>
                </div>
                {/* <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2">
                    Name
                    <input type="text" className="grow" placeholder="Daisy" />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-full md:w-1/2">
                    Email
                    <input type="text" className="grow" placeholder="daisy@site.com" />
                </label>
                <h1>Name</h1>
                <input className='rounded-md mt-5 mx-5 py-2 px-2  cursor-pointer  dark:bg-slate-900 dark:text-white' type='text' placeholder='Ajit Kumar Sah' />
                <h1>Email</h1>
                <input className="rounded-md mt-5 mx-5" type="email" placeholder='ajitkumar.dell321@gmail.com' /> */}
            </div>
        </div>
    )
}

export default Contact
