"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className=" z-30 sticky p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between ">
        <Link href={"/"}>
          <Image
            className="rounded-full"
            src="/default.png"
            width={50}
            height={50}
            alt="mylogo"
          />
        </Link>

        <input
          type="text"
          className=" p-2 bg-gray-100 w-[270px] border border-slate-300 rounded-lg outline-none"
          placeholder="Search... "
        />

        {session ? (
          <>
            {" "}
            <Image
              className="rounded-full cursor-pointer"
              src={session.user.image}
              width={50}
              height={50}
              alt="profileimage"
              onClick={signOut}
            />
          </>
        ) : (
          <>
            {" "}
            <button onClick={signIn} className="font-semibold text-blue-600">
              Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
