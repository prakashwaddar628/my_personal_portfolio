import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className="fixed flex justify-between items-center 
      px-4 sm:px-6 md:px-10 py-2 shadow-2xl bg-gray-800 border
      text-white top-0 z-50 rounded-full sm:rounded-full
      mx-2 sm:mx-6 md:mx-10 my-3 shadow-glow backdrop-blur-lg w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%]"
    >
      <Link
        href="/"
        className="flex items-center 
        rounded-2xl shadow-2xl cursor-pointer group 
        transition duration-300 ease-in-out glow-on-hover"
      >
        <Image
          src="/images/pw_logo.png"
          alt="Logo"
          width={70}
          height={50}
          className="rounded-full shadow-lg 
          transition-transform duration-300 
          transform group-hover:scale-110"
          priority
        />
        <h3 className="ml-2 font-bold text-sm sm:text-base opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Prakash
        </h3>
      </Link>

      <div>
        <ul className="flex flex-wrap gap-3 sm:gap-5 md:space-x-6 text-sm sm:text-base md:text-lg">
          <li>
            <Link href="/">
              <span className="hover:text-gray-400 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-gray-400 cursor-pointer">About</span>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <span className="hover:text-gray-400 cursor-pointer">Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-gray-400 cursor-pointer">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
