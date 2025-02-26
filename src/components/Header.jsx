import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'

const Header = () => {

    const [showSignIn, setShowSignIn] = useState(false)

    return (
        <>
            <nav className='py-4  flex justify-between items-center'>
                <Link>
                    <img src="/logo.png" className='h-20' />
                </Link>

                <div className='flex gap-8'>
                    <SignedOut>
                        <Button variant="outline" onClick={() => setShowSignIn(true)}>Login</Button>
                    </SignedOut>
                    <SignedIn>
                        {/* Add a condition here */}
                        <Button variant="destructive" className="rounded-full">
                            <PenBox size={20} className='mr-2' />
                            Post a Job
                        </Button>
                        <Link to="post-job"></Link>
                        <UserButton />
                    </SignedIn>
                </div>
            </nav>
            {
                showSignIn && (
                    <div>
                        <SignIn
                            signUpForceRedirectUrl='/onboarding'
                            fallbackRedirectUrl='/onboarding'
                        />
                    </div>
                )
            }
        </>
    )
}

export default Header