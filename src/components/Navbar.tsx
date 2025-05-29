import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className="flex justify-between items-center 
    px-10 py-2 shadow-2xl bg-gray-800
    text-white sticky top-0 z-50 rounded-3xl mx-10 my-3"
    >
      <div className="flex items-center 
      rounded-2xl shadow-2xl cursor-pointer group 
      transition duration-300 ease-in-out glow-on-hover
      ">
        <Image
          src="/images/pw_logo.png"
          alt="Logo"
          width={60}
          height={50}
          className="rounded-full shadow-lg 
          transition-transform duration-300 
          transform group-hover:scale-110"
          priority
        />
        <h3 className="font-bold pr-2 opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
          Prakash
        </h3>
      </div>

      <div>
        <ul className="flex space-x-6 text-lg">
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
              <span className="hover:text-gray-400 cursor-pointer">
                Projects
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-gray-400 cursor-pointer">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
