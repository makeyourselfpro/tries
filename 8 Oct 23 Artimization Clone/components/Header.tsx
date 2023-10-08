import Link from "next/link";
function Header() {
  return (
    <header className="p-5 px-10 lg:p-20 lg:py-10 flex justify-between items-center fixed top-0 left-0 right-0 bg-gray-900 shadow-lg opacity opacity-80 z-10 ">
      <Link className="font-semibold text-xl" href="/">
        <img src="https://www.artimization.com/wp-content/themes/Artimization/assets/images/logo.svg" alt="" className="h-10" />
      </Link>
      <ul className="hidden lg:block flex gap-5 justify-between items-center">
        <Link className="font-semibold text-xl" href="/About">About</Link>
        <Link className="font-semibold text-xl" href="/Services">Services</Link>
        <Link className="font-semibold text-xl" href="/Pricing">Pricing</Link>
        <Link className="font-semibold text-xl" href="/Portfolio">Portfolio</Link>
        <Link className="font-semibold text-xl" href="/Media">Media</Link>
        <Link className="font-semibold text-xl" href="/Contact">Contact</Link>
      </ul>
      <ul className=" hidden lg:block flex gap-5 items-center justify-between">
        <button className="border-2 border rounded p-2 px-5 font-semibold text-xl">+1234567890</button>
        <button className="ring-1 rounded p-2 bg-red-600  font-semibold  text-xl">Quote</button>
      </ul>
      <ul className="block lg:hidden">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
</ul>
    </header>
  )
}
export default Header;