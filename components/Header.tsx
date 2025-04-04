"use client";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import React from "react";

function Header() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1>
          {user?.firstName}
          {`'s`} space
        </h1>
      )}

      {/* Breadcrumbs */}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
