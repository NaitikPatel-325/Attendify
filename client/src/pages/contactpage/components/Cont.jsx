import React from 'react'

export const Cont = () => {
  return (
    <div class='pt-20 flex'>
    <div>
      <div class='col pl-4 sm:pl-8 md:pl-16 lg:pl-20 xl:pl-40'>
        <div class='text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl '>
          <h1>CONTACT US</h1>
        </div>
      
        <div class='pt-14 text-2xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-3xl  items-center hidden sm:flex'>
          <span class="mr-2 text-green-500"><i class="fa-solid fa-phone"></i></span>
          <h1 class='ml-2'>Call Us</h1>
        </div>
      </div>
</div>



<div class='ml-auto pr-24 pt-10'>
  <form action=" " method="POST" class='mx-4 sm:mx-0 p-4'>
    <div class='flex flex-col sm:flex-row'>
      <div class='mb-4 sm:mb-0 sm:mr-4'>
        <label for='Email' class=''>Email</label><br/>
        <input id='email' type='text' placeholder='Enter your Email' class='h-10 focus:border-blue-500 focus:outline-none border-none'/>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>

      <div class='mb-4 sm:mb-0 sm:ml-4'>
        <label for='Name' class=''>Name</label><br/>
        <input id='name' type='text' placeholder='Enter your Name' class='h-10 focus:outline-none border-none'/>
        <div className="flex-grow border-t border-gray-800"></div>
      </div>
    </div>

    <div class='mt-8'>
      <label for='Address' class=''>Address</label><br/>
      <input id='address' type='text' placeholder='Enter your Address' class='h-10 w-full focus:outline-none border-none'/>
      <div className="flex-grow border-t border-gray-800"></div>
    </div>

    <div class='mt-8'>
      <label for='Message' class=''>Message</label><br/>
      <input id='message' type='text' placeholder='Enter your message' class='pb-14 w-full focus:outline-none border-none'/>
      <div className="flex-grow border-t border-gray-800"></div>
    </div>

    <div class='mt-8'>
      <button id='submit' type='submit' class='w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'>
        Submit
      </button>
    </div>
  </form>
</div>


</div>

  )
}
