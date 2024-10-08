import React, { useEffect } from 'react'

const SafetySignsPage = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='w-screen flex flex-col gap-8 py-16 justify-center items-center'>
    <iframe src="https://lottie.host/embed/40d0234e-3cce-48c6-a246-ade36efce989/SXFjPyM2r9.json"></iframe>
    <h2 className='text-6xl font-bold text-primary/50'>We Are Coming Soon</h2>
  </div>
  )
}

export default SafetySignsPage