import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedinIn, faInstagram, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser';

import 'react-toastify/dist/ReactToastify.css';


export default function GetInTouch({ bg, hour2, contactRef }) {
  const form = useRef()

  const timer = () => {
    setHour(new Date().getHours())
  }

  const notify = () => {
    toast.warn("input are undefine", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const success = () => {
    toast.success("Message Sent", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const failed = () => {
    toast.error("Something wrong", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.current.from_name.value || !form.current.from_email.value || !form.current.message.value) {
      notify()
    }
    else {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
          console.log("message sent");
          success()
        }, (error) => {
          console.log(error.text);
          failed()
        });

      form.current.reset()
    }
  }

  return (
    <div ref={contactRef} className='flex items-center max-[1680px]:px-10 max-[1680px]:py-24 min-[1681px]:px-10 min-[1681px]:py-20 flex-col h-screen w-screen' name="contact">
      <ToastContainer />
      <div className='text-center'>
        <h1 className=' max-[1680px]:text-4xl min-[1681px]:text-5xl font-bold max-[1680px]:mb-10 min-[1681px]:mb-16'>GET IN TOUCH</h1>
      </div>
      <div className='flex'>
        <div className={`shadow-xl max-[1680px]:w-[450px] min-[1681px]:w-[600px] max-[1680px]:h-[520px] min-[1681px]:h-[660px] rounded-2xl px-6 py-7 ${hour2 < 4 || hour2 >= 18 ? 'bg-slate-600' : 'bg-slate-900'} bg-opacity-20`}>
          <h1 className='max-[1680px]:text-lg min-[1681px]:text-xl font-bold text-center'>Send A Message!</h1>
          <div className={`w-full border-b-4 leading-[1.6px] ${hour2 < 6 || hour2 >= 18 ? 'border-white' : 'border-black'} mt-3 mb-5 mx-0`} ></div>
          <form ref={form} onSubmit={handleSubmit} className='flex flex-col flex-wrap'>
            <div>
              <label className='font-bold max-[1680px]:text-base min-[1681px]:text-lg'>FROM</label>
              <input type='text' name='from_name' className={`shadow-inner focus:outline-none border w-full ${hour2 < 4 || hour2 >= 19 ? 'bg-slate-600' : 'bg-slate-800'} ${hour2 < 3 || hour2 >= 18 ? 'border-gray-500' : 'border-none'} bg-opacity-25 min-[1681px]:py-1 max-[1680px]:px-2 min-[1681px]:px-4 max-[1680px]:h-10 min-[1681px]:h-14 max-[1680px]:rounded-lg min-[1681px]:rounded-xl max-[1680px]:mt-2 min[1681px]:mt-3 max-[1680px]:text-xs min-[1681px]:text-lg font-medium`} />
            </div>
            <div className=' max-[1680px]:mt-3  min-[1681px]:mt-6'>
              <label className='font-bold max-[1680px]:text-base min-[1681px]:text-lg'>EMAIL</label>
              <input type='email' name='from_email' className={`shadow-inner focus:outline-none border w-full ${hour2 < 4 || hour2 >= 19 ? 'bg-slate-600' : 'bg-slate-800'} ${hour2 < 3 || hour2 >= 18 ? 'border-gray-500' : 'border-none'} bg-opacity-25 min-[1681px]:py-1 max-[1680px]:px-2 min-[1681px]:px-4 max-[1680px]:h-10 min-[1681px]:h-14 max-[1680px]:rounded-lg min-[1681px]:rounded-xl max-[1680px]:mt-2 min[1681px]:mt-3 max-[1680px]:text-xs min-[1681px]:text-lg font-medium`} />
            </div>
            <div className='mt-6'>
              <label className='font-bold max-[1680px]:text-base min-[1681px]:text-lg'>MESSAGE</label>
              <textarea name='message' className={`shadow-inner w-full focus:outline-none border ${hour2 < 4 || hour2 >= 19 ? 'bg-slate-600' : 'bg-slate-800'} ${hour2 < 3 || hour2 >= 18 ? 'border-gray-500' : 'border-none'} rounded-xl bg-opacity-25 max-[1680px]:p-2 max-[1680px]:h-32 min-[1681px]:p-4 min-[1681px]:h-52 resize-none message-box max-[1680px]:text-xs min-[1681px]:text-lg font-medium`}></textarea>
            </div>
            <div className='mt-6'>
              <button className={`flex items-center justify-center max-[1681px]:h-4 max-[1681px]:w-20 min-[1681px]:h-8 min-[1681px]:w-24 max-[1680px]:text-sm min-[1681px]:text-base font-bold rounded-3xl max-[1680px]:px-5 max-[1680px]:py-4 min-[1681px]:px-10 min-[1681px]:py-5 ${hour2 < 4 || hour2 >= 18 ? 'bg-yellow-600' : 'bg-yellow-400'} ${hour2 < 4 || hour2 >= 18 ? 'active:bg-yellow-300' : 'active:bg-yellow-600'}`} type='submit'><span>SEND</span></button>
            </div>
          </form>
        </div>
        <div className={`max-[1680px]:w-[400px] min-[1681px]:w-[500px] px-6 rounded-2xl ${hour2 < 4 || hour2 >= 18 ? 'bg-slate-600' : 'bg-slate-900'} bg-opacity-20 ml-7 py-5`}>
          <h1 className=' max-[1680px]:text-lg min-[1681px]:text-xl font-bold text-center'>Social Media</h1>
          <div className={`w-full border-b-4 leading-[1.6px] ${hour2 < 6 || hour2 >= 18 ? 'border-white' : 'border-black'} mt-3 mb-5 mx-0`}></div>
          <div className='flex flex-col'>
            <div className='mt-5'>
              <div onClick={() => window.open('https://www.linkedin.com/in/la-ode-abdul-dzarif-2b7060287/')} className={`icon-frame ${hour2 < 6 || hour2 >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#0a66c2] ${hour2 < 6 || hour2 >= 18 ? 'text-black' : 'text-white'} ${hour2 < 6 || hour2 >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faLinkedinIn} size='xl' className={`leading-[60px]`} />
                </div>
                <span className='text-[#0a66c2]'>La Ode Abdul Dzarif .I</span>
              </div>
            </div>
            <div className='mt-5'>
              <div onClick={() => window.open('https://github.com/Alif-Dzarif')} className={`icon-frame ${hour2 < 6 || hour2 >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item ${hour2 < 6 || hour2 >= 18 ? 'hover:bg-[#333]' : 'hover:bg-white'} ${hour2 < 6 || hour2 >= 18 ? 'text-black' : 'text-white'} ${hour2 < 6 || hour2 >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faGithub} size='xl' className={`leading-[60px]`} />
                </div>
                <span className={`${hour2 < 6 || hour2 >= 18 ? 'text-[#333]' : 'text-white'}`}>Alif-Dzarif</span>
              </div>
            </div>
            <div className='mt-5'>
              <div onClick={() => window.open('https://www.instagram.com/shiro_neko.kun9/')} className={`icon-frame ${hour2 < 6 || hour2 >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#e701ce] ${hour2 < 6 || hour2 >= 18 ? 'text-black' : 'text-white'} ${hour2 < 6 || hour2 >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faInstagram} size='xl' className={`leading-[60px]`} />
                </div>
                <span className='text-[#e701ce]'>shiro_neko.kun9</span>
              </div>
            </div>
            <div className='mt-5'>
              <div onClick={() => window.open('https://www.youtube.com/channel/UC0EJCX8exgloO5rr8GlNoAg')} className={`icon-frame ${hour2 < 6 || hour2 >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#ff0000] ${hour2 < 6 || hour2 >= 18 ? 'text-black' : 'text-white'} ${hour2 < 6 || hour2 >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faYoutube} size='xl' className={`leading-[60px]`} />
                </div>
                <span className='text-[#ff0000]'>Shiro Neko-Kun</span>
              </div>
            </div>
            <div className='mt-5'>
              <div onClick={() => window.open('https://www.youtube.com/channel/UC0EJCX8exgloO5rr8GlNoAg')} className={`icon-frame ${hour2 < 6 || hour2 >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#525dea] ${hour2 < 6 || hour2 >= 18 ? 'text-black' : 'text-white'} ${hour2 < 6 || hour2 >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faDiscord} size='xl' className={`leading-[60px]`} />
                </div>
                <span className='text-[#525dea]'>.kuronekokun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
