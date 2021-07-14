import Link from 'next/link'
import { useState } from 'react'
import SVG from 'react-inlinesvg'

const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link href={href}>
        <a className="block py-4 border-b border-gray-200 md:py-0 md:border-b-0 md:border-transparent">
          {children}
        </a>
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [menu, setMenu] = useState(false)

  return (
    <div className="flex items-center bg-white shadow-lg">
      <div className="container">
        <div className="justify-between py-6 row">
          <div className="col-6">
            <p className="text-2xl font-bold text-gray-800">Next Starter</p>
          </div>
          <div className="block col-2 md:hidden">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className="w-6 h-6 text-black fill-current"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>

          <div
            className={`md:col-6 md:flex justify-center md:justify-end ${
              menu ? ' flex' : ' hidden'
            }`}
          >
            <ul className="flex flex-col items-center w-full p-5 md:w-auto md:p-0 md:flex-row">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/about">About</NavItem>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
