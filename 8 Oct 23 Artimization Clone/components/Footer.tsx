function Footer() {
  return (
    <footer className="p-10 border flex flex-col justify-center items-center space-y-7 p-20 pb-10">
      <img src="https://www.artimization.com/wp-content/themes/Artimization/assets/images/mobile-nav-logo.png" alt="" />
      <div className="text-5xl">
        Let's Get Started
      </div>
      <div className="text-lg w-3/5 text-center">
        Artimization along with its team is scoring its winning goal in the world of Digital Marketing.
        The professionals of Artimization are recognized as one of the most experienced and skilled creatives,
        around the world. Our professionals have high commands over online branding, SEO,
        Web designing and offering excellent customer services.
      </div>
      <div className="border gap-10 border-2 p-3 flex justify-between items-center w-4/6 px-20">
        <div className="text-xl">WHATSAPP</div>
        <div className="text-xl">CHATON</div>
        <div className="text-xl">MESSENGER</div>
      </div>
      <section className="grid grid-cols-2 gap-32">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg text-center">CALL US</div>
          <div className="flex gap-5">
            <div className="text-2xl">+12345678</div>
            <div className="text-2xl">|</div>
            <div className="text-2xl">+12345678</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg text-center">CONNECT US ON</div>
          <div className="flex gap-5">
            <div className="text-lg text-center">Facebook</div>
            <div className="text-lg text-center">|</div>
            <div className="text-lg text-center">Twitter</div>
            <div className="text-lg text-center">|</div>
            <div className="text-lg text-center">Instagram</div>
            <div className="text-lg text-center">|</div>
            <div className="text-lg text-center">Pinterest</div>
            <div className="text-lg text-center">|</div>
            <div className="text-lg text-center">Linkedin</div>
          </div>
        </div>
        
      </section>
      <div className="px-20 w-full">
        <hr className="w-full" />
      </div>
      <section className="grid grid-cols-2 gap-32">
        <div className="flex flex-col justify-center items-center">
          <div className="text-lg text-center flex justify-center items-center gap-2">
            <img src="https://images.dmca.com/Badges/dmca_protected_1_120.png?ID=2eb945cf-5b7a-458d-8f57-28a9d478dd11" alt="" className="h-7" />
            © Copyright 2023 by Artimization. All Rights Reserved.
          </div>
        </div>
        <div className="flex gap-5 justify-center items-center">
          <div className="text-lg ">Email us: info@artimization.com</div>
          <div className="text-lg text-center">|</div>
          <div className="text-lg">Terms OF Use Refund Policies</div>
        </div>

      </section>
    </footer>
  )
}
export default Footer;