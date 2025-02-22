import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from './ui/button'

const Header = () => {
    return (
        <nav className='py-4  flex justify-between items-center'>
            <Link>
                <img src="/logo.png" className='h-20' />
            </Link>

            <header>
                <Button variant="outline">Login</Button>
                {/* <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn> */}
            </header>
        </nav>
    )
}

export default Header