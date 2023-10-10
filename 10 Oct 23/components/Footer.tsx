import React from 'react'

const Footer = () => {
  return (
    <footer className="p-10 text-center space-y-5 flex flex-col space-y-5 justify-center items-center">
      <img src="https://www.artimization.com/wp-content/themes/Artimization/assets/images/mobile-nav-logo.png" alt="" />
      <div className="text-5xl text-center font-semibold">Let's Get Started</div>
      <div className="text-md w-3/5">
        Artimization along with its team is scoring its winning goal in the world of Digital Marketing.
        The professionals of Artimization are recognized as one of the most experienced and skilled creatives,
        around the world. Our professionals have high commands over online branding, SEO,
        Web designing and offering excellent customer services.
      </div>
      <span className="border-2 p-3 rounded gap-20 px-20 flex justify-between items-center">
        <div className="text lg font-semibold">W H A T S A P P</div>
        <div className="text lg font-semibold">  C H A T O N  </div>
        <div className="text lg font-semibold">M E S S E N G E R</div>
      </span>
      <div className="grid grid-cols-2 border-b">
        <div className="flex flex-col justify-center items-center border-r">
          <div className="text-sm">CALL US</div>
          <div className="grid grid-cols-2 p-5 gap-10">
            <div className="text-md">+1234567890</div>
            <div className="text-md">+1234567890</div>
          </div>
        </div>
        <div className="">
          <div className="text-sm">CALL US</div>
          <div className="grid grid-cols-5 p-5 gap-10 px-20">
            <div className="text-md">Facebook</div>
            <div className="text-md">Twitter</div>
            <div className="text-md">Instagram</div>
            <div className="text-md">Pinterest</div>
            <div className="text-md">Linkedin</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full">
        <div className="flex justfy-start items-center gap-3 text-start">
          <img src="https://images.dmca.com/Badges/dmca_protected_1_120.png?ID=2eb945cf-5b7a-458d-8f57-28a9d478dd11" alt="" className="h-6" />
          <div className="text-sm">© Copyright 2023 by Artimization. All Rights Reserved</div>
        </div>
        <div className="flex justify-end items-start">
          <div className="text-sm text-end">
            Email us: info@artimization.com  |  Terms Of UseRefund Policy
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer