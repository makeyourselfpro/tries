import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>




      {/* Header */}
      <header className="grid grid-cols-2 p-20 py-10">
        <div className="space-y-10">
          <div className="text-5xl font-semibold">Ready For Next</div>
          <div className="text-8xl font-bold">Big Thing?</div>
          <div className="text-2xl">
            We are data-driven digital marketing agency who knows how to elevate your online business ranking and create beautiful visuals that works best.
          </div>
          <ul className="flex gap-5">
            <button className="p-2 bg-red-500 px-5 rounded">ABOUT COMPANY</button>
            <button className="p-2 border-2 rounded">CONTACT US</button>
          </ul>
          <div className="text-sm font-bold">
            SCROLL TO EXPLORE
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="clircle bg-red-500 p-24 rounded-full"></div>
        </div>
      </header>
      {/* Header */}


      {/* section */}
      <section className="p-20 px-44 text-center space-y-5 flex flex-col justify-center items-center">
        <div className="text-xl text-red-500">12 Years of Brilliance</div>
        <div className="text-6xl ">
          1000+ Customers & 500+
          Online Reviews Being The Best
          Digital Marketing Company
        </div>
        <div className="text-xl w-5/6">
          Artimization is a digital marketing company that offers web design, website development,
          social media marketing, and SEO services globally. Our goal is to help your brand succeed
          on social media platforms and engage with your audience.
        </div>
        <div className="text-8xl font-bold">Projects</div>
      </section>
      {/* section */}



      {/* section */}
      <div className="grid grid-cols-2 p-20 gap-10">
        <img src="https://www.artimization.com/wp-content/uploads/2023/01/lifestyle-redesign.jpg" alt="" className='rounded-2xl' />
        <div className="space-y-5">
          <span className="text-sm border-2 rounded-full p-1 px-3">E-COMMERCE, WEBSITE DESIGN</span>
          <div className="text-4xl">Lifestyle Collection</div>
          <div className="text-lg">
            LifeStyle Collection is well known for its extensive assortment of branded, 100% authentic and genuine products, a one stop solution to associate the consumer with the brand savvy world.
          </div>
          <div className="text-lg text-red-500">SOLUTION OFFERINGS</div>
          <div className="">
            <div className="text-lg">Redesign & Development</div>
            <div className="text-lg">Worpress with Wocommerce</div>
            <div className="text-lg">Improve UI/UX</div>
            <div className="text-lg">Vultr High Frequency Server</div>
            <div className="text-lg">Content Delivery Network (CDN)</div>
            <div className="text-lg">Optimize Speed & Security</div>
          </div>
          <div className="text-lg text-red-500">Visit Live Website</div>
        </div>
      </div>
      {/* section */}


      {/* section */}
      <div className="grid grid-cols-2 p-20 gap-10">
        <div className="space-y-5">
          <span className="text-sm border-2 rounded-full p-1 px-3">SOFTWARE, APPLICATION DESIGN</span>
          <div className="text-4xl">Teamenia, Project & Chat</div>
          <div className="text-lg">
            The Teamenia Project Management System aims to serve managers by providing them with an easy-to-use digital system that assists in simple navigation, payment processing, and real time chat.
          </div>
          <div className="">
            <div className="text-lg">Design & Development</div>
            <div className="text-lg">PHP, Ajax chat, Reporting, Reporting</div>
          </div>
          <div className="text-lg text-red-500">Visit Live Website</div>
          <div className="p-10 space-y-3">
            <div className="text-sm">
              “Our team has found great success in being able to collaborate, share information and updates, and keep ourselves organized with the use of the teamenia project management system.”
            </div>
            <div className=" flex gap-2">
              <img src="https://www.artimization.com/wp-content/uploads/2022/12/teamenia-icon.jpg" alt="" className='rounded-full' />
              <div className="">
                <div className="text-sm font-bold">Jasica</div>
                <div className="text-sm">Director of Teamenia</div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://www.artimization.com/wp-content/uploads/2023/01/teamenia.jpg" alt="" className='rounded-2xl' />
      </div>
      {/* section */}

      <div className="flex justify-center items-center">
        <button className="p-3 px-10 rounded bg-white text-black">SHOW ALL PORTFOLIO</button>
      </div>

      {/* section */}
      <section className="flex text-center flex-col justify-center items-center p-20 space-y-5">
        <div className="text-5xl w-4/6">
          Excellent Services &
          Innovative Branding Strategies
        </div>
        <div className="text-xl w-4/6">
          Our state-of-the-art strategies are designed to take your business’s success to the
          next level, backed by industry experts with extensive experience in creating and
          executing winning strategies.
        </div>
        <div className="grid grid-cols-4">
          <div className="text-start p-10 gap-2 flex flex-col border-r justify-start items-start">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/brand-development-icon.png.webp" alt="" />
            <div className="text-2xl">Branding
              Development</div>
            <div className="text-md">
              Visual Identity <br />
              Brand Assets <br />
              Brand Guidelines
            </div>
            <div className="text-lg text-red-500">Explore Now</div>
          </div>
          <div className="text-start pt-10 pl-10 gap-2 flex flex-col border-r justify-start items-start">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/digital-marketing.png.webp" alt="" />
            <div className="text-2xl">Digital <br />
              Marketing</div>
            <div className="text-md">
              Search Engine Optimization
              Social media marketing
              Improvement in ROI
            </div>
            <div className="text-lg text-red-500">Explore Now</div>
          </div>
          <div className="text-start p-10 gap-2 flex flex-col border-r justify-start items-start">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/website-development-icon.png.webp" alt="" />
            <div className="text-2xl">Website
              Development</div>
            <div className="text-md">
              Front-end Development
              CMS Development
              Web Apps
            </div>
            <div className="text-lg text-red-500">Explore Now</div>
          </div>
          <div className="text-start p-10  gap-2 flex flex-col  justify-start items-start">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/graphic-design-icon.png.webp" alt="" />
            <div className="text-2xl">Graphic <br />
              Design</div>
            <div className="text-md">
              Logo Design
              Borchure Design
              Flyer Design, Many more
            </div>
            <div className="text-lg text-red-500">Explore Now</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="p-3 px-10 rounded bg-white text-black">VIEW ALL SERVICES</button>
        </div>
      </section>
      {/* section */}





      {/* section */}
      <div className="p-20">
        <section className="grid grid-cols-2 border">
          <div className=" space-y-10 p-10">
            <div className="text-lg text-red-500">WATCH NOW</div>
            <div className="text-4xl font-semibold">
              I Got My First Order With SEO Services Taken From Artimization
            </div>
            <div className="text-md">
              Online Jewelry Store Owner Expresses Her Feedback & Experience About Our Branding & Marketing Services. In Just 3 Months, She have got her first order through our Targetted SEO services.
            </div>
            <div className="text-lg text-red-500">Hear From Happy Client</div>
          </div>
          <div className="bg-gray-800 p-10">
            <img src="" alt="" />
          </div>
        </section>

        <section className=" py-20 flex gap-24">
          <div className="w-3/5 space-y-5">
            <div className="text-4xl font-semibold">Let’s Get You Ranked!</div>
            <div className="text-xl">Measure Your Websites Performance</div>
            <div className="grid grid-cols-2 gap-5">
              <input type="text" placeholder='Your Name*' className="p-3 rounded" />
              <input type="text" placeholder='Your Email*' className="p-3 rounded" />
              <input type="text" placeholder='Phone*' className="p-3 rounded" />
              <input type="text" placeholder='Website URL*' className="p-3 rounded" />
            </div>
            <select name="" id="" className='text-gray-500 w-full p-3 text-md rounded'>
              <option value="">What are you interested in?</option>
            </select>
            <button className="rounded p-3 px-6 bg-red-500">INCREASE MY SALES</button>
            <div className="text-lg">
              Will contact you in 1 working day*
            </div>
          </div>
          <div className="w-2/5 space-y-5">
            <div className="text-4xl font-semibold">
              Want to speak with an
              SEO strategist? Reach us here!
            </div>
            <div className="text-lg text-red-500">CALL US:</div>
            <div className="text-lg">+1234567890</div>
            <div className="text-lg text-red-500">Email</div>
            <div className="text-lg">email@gmail.com</div>
            <div className="text-lg text-red-500">FAX</div>
            <div className="text-3xl font-semibold">Seriously?</div>
          </div>
        </section>
      </div>
      {/* section */}



      {/* section */}
      <section className="p-20  text-black bg-white flex flex-col justify-center items-center">
        <div className="text-5xl text-center font-semibold">Technology Partners</div>
        <div className="grid grid-cols-4 py-20">

          <div className="text-start p-5 gap-2 flex flex-col border-r justify-center items-center">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/adobe.png" alt="" />
            <div className="text-xl text-center">Adobe Solution Partner Program</div>
          </div>


          <div className="text-start p-5 gap-2 flex flex-col border-r justify-center items-center">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/aws.png" alt="" />
            <div className="text-xl text-center">Amazon Web Services Certified Partner</div>
          </div>



          <div className="text-start p-5 gap-2 flex flex-col border-r justify-center items-center">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/google.jpg" alt="" />
            <div className="text-xl text-center">Google Developer Certified Agency</div>
          </div>



          <div className="text-start p-5 gap-2 flex flex-col border-r justify-center items-center">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/wordpress.jpg" alt="" />
            <div className="text-xl text-center">WordPress VIP Developer Partner</div>
          </div>


        </div>


        <div className="text-5xl text-center font-semibold">Technologies We Work With</div>
        <div className="border py-10 w-3/5">
          <div className="grid grid-cols-5">
            <div className="text-xl text-center">Front End</div>
            <div className="text-xl text-center">Backend</div>
            <div className="text-xl text-center">CMS</div>
            <div className="text-xl text-center">Servers</div>
            <div className="text-xl text-center">Software</div>
          </div>
          <div className="flex justify-center items-center py-10 gap-10">
            <div className="text-center space-y-5">
              <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/angular.svg" className='h-20' alt="" />
              <div className="text-xl text-center">Angular Js</div>
            </div>
            <div className="text-center space-y-5">
              <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/ts.svg" className='h-20' alt="" />
              <div className="text-xl text-center">Typescript</div>
            </div>
            <div className="text-center space-y-5">
              <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/vue.svg" className='h-20' alt="" />
              <div className="text-xl text-center">Vue Js</div>
            </div>
            <div className="text-center space-y-5">
              <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/html.svg" className='h-20' alt="" />
              <div className="text-xl text-center">Html5</div>
            </div>
          </div>
        </div>


      </section>
      {/* section */}


      {/* section */}
      <section className="p-10 bg-red-500 text-center space-y-5 flex flex-col justify-center items-center">
        <div className="text-5xl text-center font-semibold">Do you have any Question?</div>
        <div className="text-md w-4/5">
          Artimization team believes in entertaining our visitors and is ready to answer your questions.
          Type down your thoughts and get perfect possible solutions to your questions.
        </div>
        <span className="flex gap-5">
          <button className="p-3 px-6 rounded bg-white text-black">CONTACT US</button>
          <button className="p-3 px-6 rounded border-2">BUSINESS PROFILE</button>
        </span>
      </section>
      {/* section */}


    </main>
  )
}
