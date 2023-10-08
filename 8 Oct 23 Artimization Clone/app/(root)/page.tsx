export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-20  bg-[url('https://plus.unsplash.com/premium_photo-1677529496896-fa961d805d8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWdlbmN5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')] bg-center no-repeat bg-cover">
        <section className="p-20 pt-32 space-y-10">
          <div className="text-6xl font-semibold">Ready For Next</div>
          <div className="text-8xl font-bold">Big Thing?</div>
          <div className="text-2xl">
            We are data-driven digital marketing agency who knows how to elevate your online business ranking and create beautiful visuals that works best.
          </div>

          <ul className="flex gap-5 items-center">
            <button className="ring-1 rounded p-3 bg-red-600  font-semibold  text-xl">ABOUT COMPANY</button>
            <button className="border-2 rounded p-3 px-5 font-semibold text-xl">CONTACT US</button>
          </ul>
        </section>
        <section className="p-20">

        </section>
      </main>
    
    
      <section className="p-44 text-center space-y-10">
        <div className="text-lg text-red-500">
          12 Years of Brilliance
        </div>
        <div className="text-7xl font-semibold">
          1000+ Customers & 500+
          Online Reviews Being The Best
          Digital Marketing Company
        </div>
        <div className="text-2xl">
          Artimization is a digital marketing company that offers web design, website development,
          social media marketing, and SEO services globally. Our goal is to help your brand succeed
          on social media platforms and engage with your audience.
        </div>
        <div className="text-8xl font-bold">
          Projects
        </div>
    </section>
      

      <div className="grid grid-cols-2 p-20">
        <img src="https://www.artimization.com/wp-content/uploads/2023/01/lifestyle-redesign.jpg" alt="" className="rounded-3xl" />
        <div className="flex flex-col gap-8 items-start">
          <span className="text-lg p-1 px-3 border-2 rounded-full">E-COMMERCE, WEBSITE DESIGN</span>
          <div className="text-4xl font-semibold">
            Lifestyle Collection
          </div>
          <div className="text-lg">
            LifeStyle Collection is well known for its extensive assortment of branded, 100% authentic and genuine products, a one stop solution to associate the consumer with the brand savvy world.
          </div>
          <div className="text-lg text-red-500">
            SOLUTION OFFERINGS
          </div>
          <div className="">
            <div className="text-lg">Redesign & Development</div>
            <div className="text-lg">Worpress with Wocommerce</div>
            <div className="text-lg">Improve UI/UX</div>
            <div className="text-lg">Vultr High Frequency Server</div>
            <div className="text-lg">Content Delivery Network (CDN)</div>
            <div className="text-lg">Optimize Speed & Security</div>
          </div>

          <div className="text-lg text-red-500">
            Visit Live Website
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 p-20">
        <div className="flex flex-col gap-8 items-start">
          <span className="text-lg p-1 px-3 border-2 rounded-full">
            SOFTWARE, APPLICATION DESIGN
          </span>
          <div className="text-4xl font-semibold">
            Teamenia, Project & Chat
          </div>
          <div className="text-lg">
            The Teamenia Project Management System aims to serve managers by providing them with an easy-to-use digital system that assists in simple navigation, payment processing, and real time chat.
          </div>
          <div className="">
            <div className="text-lg">Design & Development</div>
            <div className="text-lg">PHP, Ajax chat, Reporting, Reporting</div>
          </div>
          <div className="text-lg text-red-500">
            Visit Live Website
          </div>
          <div className="shadow rounded-2xl p-10">
            <div className="text-md">
              “Our team has found great success in being able to collaborate, share information and updates, and keep ourselves organized with the use of the teamenia project management system.”
            </div>
            <div className="flex gap-3 pt-5">
              <img src="https://www.artimization.com/wp-content/uploads/2022/12/teamenia-icon.jpg" alt="" className="rounded-full" />
              <div className="">
                <div className="text-md font-semibold">Jasica</div>
                <div className="text-md">Director of Teamenia</div>
              </div>
            </div>
          </div>
        </div>
        <img src="https://www.artimization.com/wp-content/uploads/2023/01/teamenia.jpg" alt="" className="rounded-3xl" />
      </div>

      <div className="flex justify-center items-center">
        <button className="p-3 rounded px-5">SHOW ALL PORTFOLIO</button>
      </div>

      <section className="flex flex-col space-y-5 justify-center items-center p-20 bg-white text-black">
        <div className="text-5xl font-semibold text-center w-3/5">
          Excellent Services &
          Innovative Branding Strategies
        </div>
        <div className="text-md w-4/6 text-center w-2/5">
          Our state-of-the-art strategies are designed to take your business’s success to the
          next level, backed by industry experts with extensive experience in creating and
          executing winning strategies.
        </div>
        <div className="grid grid-cols-4  gap-14 py-10">

          <div className="flex flex-col justify-start items-start  gap-5 p-10">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/brand-development-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">
              Branding
              Development
            </div>
            <div className="text-md">
              Visual Identity
              Brand Assets
              Brand Guidelines
            </div>
            <div className="text-md font-semibold">
              Explore Now
            </div>
          </div>

          

          <div className="flex flex-col justify-start items-start  gap-5 p-10">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/digital-marketing.png.webp" alt="" />
            <div className="text-2xl font-semibold">
              Digital
              Marketing
            </div>
            <div className="text-md">
              Search Engine Optimization
              Social media marketing
              Improvement in ROI
            </div>
            <div className="text-md font-semibold">
              Explore Now
            </div>
          </div>



          <div className="flex flex-col justify-start items-start  gap-5 p-10">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/website-development-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">
              Website
              Development
            </div>
            <div className="text-md">
              Front-end Development
              CMS Development
              Web Apps
            </div>
            <div className="text-md font-semibold">
              Explore Now
            </div>
          </div>



          <div className="flex flex-col justify-start items-start  gap-5 p-10">
            <img src="https://www.artimization.com/wp-content/uploads/2020/02/graphic-design-icon.png.webp" alt="" />
            <div className="text-2xl font-semibold">
              Graphic
              Design
            </div>
            <div className="text-md">
              Logo Design
              Borchure Design
              Flyer Design, Many more
            </div>
            <div className="text-md font-semibold">
              Explore Now
            </div>
          </div>

        </div>

        <div className="flex justify-center items-center">
          <button className="p-3 rounded px-5  bg-black text-white">SHOW ALL PORTFOLIO</button>
        </div>

      </section>


      <section className="flex flex-col space-y-5 justify-center items-center p-20 bg-white text-black">
        <div className="text-6xl font-semibold text-center">
          Technology Partners
        </div>
        <div className="grid grid-cols-4  gap-14 py-10">
          <div className="flex flex-col justify-center items-center text-center  gap-5">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/adobe.png" alt="" />
            <div className="text-2xl font-semibold">
              Adobe Solution Partner Program
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center  gap-5">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/aws.png" alt="" />
            <div className="text-2xl font-semibold">
              Amazon Web Services Certified Partner
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center  gap-5">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/google.jpg" alt="" />
            <div className="text-2xl font-semibold">
              Google Developer Certified Agency
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center  gap-5">
            <img src="https://www.artimization.com/wp-content/uploads/2023/01/wordpress.jpg" alt="" />
            <div className="text-2xl font-semibold">
              WordPress VIP Developer Partner
            </div>
          </div>


        </div>
        </section>


      <section className="flex flex-col space-y-5 justify-center items-center p-10 bg-white text-black">
        <div className="text-6xl font-semibold text-center">
          Technologies We Work With
        </div>
        <div className="flex gap-14 justify-center items-center">
          <div className="text-xl font-semibold">Front End</div>
          <div className="text-xl font-semibold">Back End</div>
          <div className="text-xl font-semibold">CMS</div>
          <div className="text-xl font-semibold">Servers</div>
          <div className="text-xl font-semibold">Softwares</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-10 flex flex-col justify-center items-center">
            <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/angular.svg" alt="" />
            <div className="text-xl">Angular js</div>
          </div>
          <div className="p-10 flex flex-col justify-center items-center">
            <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/ts.svg" alt="" />
            <div className="text-xl">Typescript</div>
          </div>
          <div className="p-10 flex flex-col justify-center items-center">
            <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/vue.svg" alt="" className="h-20"/>
            <div className="text-xl">Vue js</div>
          </div>
          <div className="p-10 flex flex-col justify-center items-center">
            <img src="https://www.artimization.com/wp-content/themes/Artimization/svg/html.svg" alt="" className="h-20"/>
            <div className="text-xl">Html5</div>
          </div>
        </div>
      </section>


      <section className="flex flex-col space-y-5 justify-center items-center p-10 border">
        <div className="text-6xl font-semibold text-center">
          Do you have any Question?
        </div>
        <div className="text-xl w-4/6 text-center">
          Artimization team believes in entertaining our visitors and is ready to answer your questions.
          Type down your thoughts and get perfect possible solutions to your questions.
        </div>
        <ul className="flex gap-5 items-center">
          <button className="border-2 rounded p-3 px-5 font-semibold text-xl">CONTACT US</button>
          <button className="ring-1 rounded p-3 bg-red-600  font-semibold  text-xl">BUSINESS PROFILE</button>
        </ul>
      </section>

    </>
  )
}
