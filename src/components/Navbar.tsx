"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { DumbbellIcon, HomeIcon, UserIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {

    const {isSignedIn} = useUser();

  return (

    <header className="top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-5">
        <div className="container mx-auto flex items-center justify-between">

            {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 ml-4 ">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-bold font-mono">
            Fit<span className="text-primary">Nova</span>
          </span>
        </Link>

        {/*Navigation*/}
        <nav className="flex items-center gap-5 mr-4">
          {isSignedIn ? (
            <>
              <Link
                href="/"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <HomeIcon size={16} />
                <span>Home</span>
              </Link>

              <Link
                href="/generate-program"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <DumbbellIcon size={16} />
                <span>Generate</span>
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
              >
                <UserIcon size={16} />
                <span>Profile</span>
              </Link>
              <Button
                asChild
                variant="outline"
                className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
              >
                <Link href="/generate-program">Get Started</Link>
              </Button>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Button
                  variant={"outline"}
                  className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                >
                  Sign In
                </Button>
              </SignInButton>

              <SignUpButton>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Sign Up
                </Button>
              </SignUpButton>
            </>
          )}
        </nav>
        </div>
    </header>
  );
};

export default Navbar;