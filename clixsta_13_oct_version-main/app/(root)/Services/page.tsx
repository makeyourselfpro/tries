"use client"
import { CForm } from "@/components/CForm";
import { Button } from "@material-tailwind/react";
import React from 'react'

const page = () => {
  return (
    <main>
      <div className="p-10 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-2 pt-32 gap-20  h-[100vh]">
        <div className="space-y-5 flex flex-col justify-center">
          <div className="text-6xl font-semibold">Services</div>
          <div className="text-2xl lg:pr-32 font-semibold">
            Professionally we transform
            your services into branding visuals
            & promotional content through our
            Digital Marketing
          </div>
          <ul className="flex gap-5">
            <Button className="p-3 bg-red-500 px-6 rounded">ABOUT COMPANY</Button>
            <Button className="p-3 border-2 px-6 rounded">CONTACT US</Button>
          </ul>
          <div className="text-2xl font-semibold">or call us: +1 617 275 4776</div>
        </div>
        <div className="flex flex-col gap-5 p-2 lg:p-10 border-2 rounded-lg">
          <CForm />
        </div>
      </div>

      <section className="flex p-10 lg:p-20 flex-col lg:flex-row">
        
        <div className="mt-44 p-10 lg:w-2/5 space-y-5 flex flex-col lg:justify-start lg:items-start ">
          <div className="text-4xl font-semibold">
            We create design &
            develop digital business
            that generate results
          </div>
          <div className="text-lg">
            Either you are zero dollar business or running
            a million dollar company. You always need change, innovation and creativity. Our digital capabilities knows what makes you great in untouched Space!
          </div>
          <Button className="p-3 bg-black text-white px-10 rounded">Our Portfolio </Button>
        </div>

        <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2">
          
          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/digital-marketing.png.webp" alt="" />
            <div className="text-2xl font-semibold">Digital Marketing</div>
            <div className="text-md">
              Let your brand to revolve
              efficiently around this digital world
              in the degree of 360 marketing
            </div>
            <div className="text-md font-semibold">Email | Social media | Seo | Content</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2015/08/logo-design-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">Graphic Design</div>
            <div className="text-md">
              Our graphics design services are very cost effective for small and medium size businesses around the world. Take a look of our pricing to know more!
            </div>
            <div className="text-md font-semibold">Logo Design | Brochure Branding | Print</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          
          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/website-development-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">Website Design</div>
            <div className="text-md">
              Web design is the supporting mechanism of your business that speaks emphatically about your services.
            </div>
            <div className="text-md font-semibold">Web Design | UI/UX Design | App Design</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          
          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/ecommerce-solutions.png.webp" alt="" />
            <div className="text-2xl font-semibold">E-Commerce Solutions</div>
            <div className="text-md">
              Upgrade your website with inclusive Ecommerce solutions services & stay 24/7 active in digital world.
            </div>
            <div className="text-md font-semibold">WordPress | Shopify | Magento | Php</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          
          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/Search-Engine-Optimization-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">Search Engine Optimization</div>
            <div className="text-md">
              Search Engine Optimization works as a supporting tool in ranking your website also, SEO assists in boosting revenue.
            </div>
            <div className="text-md font-semibold">Off page | On page | Seo Structure</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          

          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/social-media-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">Social Media Management</div>
            <div className="text-md">
              Our Social Media Management Company emphasizes your brand Marketing on each channel accordingly
            </div>
            <div className="text-md font-semibold">Facebook | Twitter | Instagram | Linkedin</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          

          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/brand-development-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">Branding Development</div>
            <div className="text-md">
              Your brand is the most expensive asset of your company which we build with valuable branding techniques.
            </div>
            <div className="text-md font-semibold">Corporate Identity | Illustrations | Icons</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          
          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/application-design-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">Application Design</div>
            <div className="text-md">
              We as digital company assures dedicated support for not only our co-partners but also for visitors.
            </div>
            <div className="text-md font-semibold">Restaurants | Ecommerce | Booking</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>


          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/web-maintaince.png.webp" alt="" />
            <div className="text-2xl font-semibold">Website Maintenance</div>
            <div className="text-md">
Great Website Maintenance Services function as an expression of maintained & updated modifications in your business
            </div>
            <div className="text-md font-semibold">Speed Up | Code errors | Support</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          
          <div className="text-start  p-10 pr-0 gap-2 flex flex-col border-r justify-start items-start space-y-3 hover:shadow-xl transition cursor-pointer">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/animation-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">Animation Videos</div>
            <div className="text-md">
              We provide the animation services that include 2D, 3D in which the viewer enjoys the every bit of the video and makes you feel something that is out of the world.
            </div>
            <div className="text-md font-semibold">Story Boarding | Whiteboard | Corporate</div>
            <div className="text-md text-red-500 font-semibold">Explore Now</div>
          </div>

          

        </div>

      </section>



      {/* section */}
      <section className="p-10 bg-red-500 text-center space-y-5 flex flex-col justify-center items-center">
        <div className="text-5xl text-center font-semibold">Do you have any Question?</div>
        <div className="text-md w-4/5">
          Artimization team believes in entertaining our visitors and is ready to answer your questions.
          Type down your thoughts and get perfect possible solutions to your questions.
        </div>
        <span className="flex gap-5">
          <Button className="p-3 px-6 rounded bg-white text-black">CONTACT US</Button>
          <Button className="p-3 px-6 rounded border-2">BUSINESS PROFILE</Button>
        </span>
      </section>
      {/* section */}

</main>
    )
}

export default page