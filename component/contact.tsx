import React from 'react'

const contact = () => {
  return (
    <div id='contact' className='flex flex-auto mx-[200px] gap-[200px] bg-red-500 lg:bg-blue-500 md:bg-yellow-500 sm:bg-pink-400'>
        <div className=''>
            <h1 className='font-bold text-4xl mb-5'>CONTACT US</h1>
            <p className='font-bold text-lg mb-5'>Drop Us A Line And We&apos;ll Get Back To You</p>

            <form action="" className=''>
                <div className='flex flex-row gap-6 mb-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname">First Name*</label>
                        <input 
                        type="username"
                        id="firstname"
                        required
                        placeholder=""
                        title="firstname"
                        className='w-[175px] border-b-2 border-black hover:border-gray-500 transition-colors duration-300'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname">Last name*</label>
                        <input 
                        type="username"
                        id="lastname"
                        required
                        placeholder=""
                        title="lastname"
                        className='w-[175px] border-b-2 border-black hover:border-gray-500 transition-colors duration-300'
                        />
                    </div>
                </div>

                <div className='flex flex-row gap-6 mb-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname">Email*</label>
                        <input 
                        type="email"
                        id="email"
                        required
                        placeholder=""
                        title="email"
                        className='w-[175px] border-b-2 border-black hover:border-gray-500 transition-colors duration-300'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="firstname">Subject</label>
                        <input 
                        type="text"
                        id="subject"
                        required
                        placeholder=""
                        title="subject"
                        className='w-[175px] border-b-2 border-black hover:border-gray-500 transition-colors duration-300'
                        />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="">Leave Us A Message...</label>
                    <input
                    type="text"
                    id="message"
                    required
                    placeholder=""
                    title="Message"
                    className='w-[375px] h-[75px] border-b-2 border-black  mb-4 hover:border-gray-500 transition-colors duration-300' />

                    <input type="submit" className='w-[75px] ml-auto border-2 py-1 px-2 hover:text-white hover:bg-red-500 hover:border-red-500 transition-colors duration-300'/>
                </div>
            </form>
        </div>

        <div className='ml-auto'>
            <h1 className='font-bold text-4xl mb-5'>WE&apos;RE OPEN</h1>
            <p>Monday-Friday : 11am-10pm</p>
            <p>Saturday-Sunday: 11am-12am</p>
            <br />
            <p>500 Terry Francois Street,</p>
            <p>San Francisco, CA 94158</p>
            <br />
            <p>Tel: 123-456-7890</p>
           <p>Email: info@mysite.com</p>
            <br />
            <div className='flex flex-row gap-1'>
            <h2>img</h2>
            <h2>img</h2>
            <h2>img</h2>
            </div> 
        </div>
    </div>
  )
}

export default contact
