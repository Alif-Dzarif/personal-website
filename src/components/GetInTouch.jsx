import React, { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedinIn, faInstagram, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser';

import 'react-toastify/dist/ReactToastify.css';


export default function GetInTouch({ bg }) {
  const form = useRef()
  const [hour, setHour] = useState(new Date().getHours())

  const timer = () => {
    setHour(new Date.getHours())
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
      emailjs.sendForm("service_99uakni", "template_f26h0je", form.current, '8CY5INcDbpBROTUfR')
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

  useEffect(() => {
    const intervalHour = setInterval(timer, 1000);
    return () => clearInterval(intervalHour);
  }, [])

  return (
    <div className='flex items-center px-10 py-20 flex-col h-screen w-screen' name="contact">
      <ToastContainer />
      <div className='text-center'>
        <h1 className='text-5xl font-bold mb-16'>GET IN TOUCH</h1>
      </div>
      <div className='flex'>
        <div className='shadow-xl w-[600px] h-[650px] rounded-2xl px-6 py-7 bg-slate-700 bg-opacity-20'>
          <h1 className='text-xl font-bold text-center'>Send A Message!</h1>
          <div className={`w-full border-b-4 leading-[1.6px] ${hour < 6 || hour >= 18 ? 'border-white' : 'border-black'} mt-3 mb-5 mx-0`} ></div>
          <form ref={form} onSubmit={handleSubmit} className='flex flex-col flex-wrap'>
            <div>
              <label className='font-bold text-lg'>FROM</label>
              <input type='text' name='from_name' className='shadow-inner focus:outline-none w-full bg-slate-600 bg-opacity-25 py-2 px-4 h-14 rounded-xl mt-3 text-lg font-medium' />
            </div>
            <div className='mt-6'>
              <label className='font-bold text-lg'>EMAIL</label>
              <input type='email' name='from_email' className=' shadow-inner w-full focus:outline-none bg-slate-600 bg-opacity-25 py-2 px-4 h-14 rounded-xl mt-3 text-lg font-medium' />
            </div>
            <div className='mt-6'>
              <label className='font-bold text-lg'>MESSAGE</label>
              <textarea name='message' className='shadow-inner w-full focus:outline-none bg-slate-600 rounded-xl bg-opacity-25 p-4 h-52 resize-none message-box text-lg font-medium'></textarea>
            </div>
            <div className='mt-6'>
              <button className='flex items-center justify-center h-8 w-24 bg-yellow-700 text-base font-bold rounded-3xl active:bg-yellow-600 px-10 py-5' type='submit'><span>SEND</span></button>
            </div>
          </form>
        </div>
        <div className='w-[500px] px-6 rounded-2xl bg-slate-700 bg-opacity-20 ml-7 py-5'>
          <h1 className='text-xl font-bold text-center'>Social Media</h1>
          <div className={`w-full border-b-4 leading-[1.6px] ${hour < 6 || hour >= 18 ? 'border-white' : 'border-black'} mt-3 mb-5 mx-0`}></div>
          <div className='flex flex-col'>
            <div className='mt-5'>
              <div onClick={() => window.open('https://www.linkedin.com/in/la-ode-abdul-dzarif-2b7060287/')} className={`icon-frame ${hour < 6 || hour >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#0a66c2] ${hour < 6 || hour >= 18 ? 'text-black' : 'text-white'} ${hour < 6 || hour >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faLinkedinIn} size='xl' className={`leading-[60px]`} />
                </div>
                <span className='text-[#0a66c2]'>La Ode Abdul Dzarif .I</span>
              </div>
            </div>
            <div className='mt-5'>
              <div onClick={() => window.open('https://github.com/Alif-Dzarif')} className={`icon-frame ${hour < 6 || hour >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#333] ${hour < 6 || hour >= 18 ? 'text-black' : 'text-white'} ${hour < 6 || hour >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faGithub} size='xl' className={`leading-[60px]`} />
                </div>
                <span className='text-[#333]'>Alif-Dzarif</span>
              </div>
            </div>
            <div className='mt-5'>
              <div onClick={() => window.open('https://www.instagram.com/shiro_neko.kun9/')} className={`icon-frame ${hour < 6 || hour >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#e701ce] ${hour < 6 || hour >= 18 ? 'text-black' : 'text-white'} ${hour < 6 || hour >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faInstagram} size='xl' className={`leading-[60px]`}/>
                </div>
                <span className='text-[#e701ce]'>shiro_neko.kun9</span>
              </div>
            </div>
            <div className='mt-5'>
              <div onClick={() => window.open('https://www.youtube.com/channel/UC0EJCX8exgloO5rr8GlNoAg')} className={`icon-frame ${hour < 6 || hour >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#ff0000] ${hour < 6 || hour >= 18 ? 'text-black' : 'text-white'} ${hour < 6 || hour >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
                  <FontAwesomeIcon icon={faYoutube} size='xl' className={`leading-[60px]`} />
                </div>
                <span className='text-[#ff0000]'>Shiro Neko-Kun</span>
              </div>
            </div>
            <div className='mt-5'>
              <div onClick={() => window.open('https://www.youtube.com/channel/UC0EJCX8exgloO5rr8GlNoAg')} className={`icon-frame ${hour < 6 || hour >= 18 ? 'bg-white' : 'bg-black'}`}>
                <div className={`icon-item hover:bg-[#525dea] ${hour < 6 || hour >= 18 ? 'text-black' : 'text-white'} ${hour < 6 || hour >= 18 ? 'hover:text-white' : 'hover:text-black'}`}>
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
