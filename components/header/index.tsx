import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/public/icons/logo.png"

const Header = () => {
  return (
    <header>
        <nav>
            <Link href="/">
              <Image width={50} height={50} src={Logo} alt='arava logo'/>
            </Link>
        </nav>
    </header>
  )
}

export default Header