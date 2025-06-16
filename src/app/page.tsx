"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'
import { Sign } from 'crypto'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      Home
      
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default HomePage