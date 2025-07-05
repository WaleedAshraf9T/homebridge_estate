"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="flex">
      <div className="h-screen w-[54%] bg-[url('/images/login-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between px-12 pb-14">
        {/* Logo */}
        <div className="w-full flex flex-col items-center mt-[-15px]">
          <Image
            src={"/images/logo.svg"}
            width={0}
            height={0}
            className="w-[48%]"
            alt="HOMEBRIDGE ESTATE Logo"
          />
        </div>

        {/* Heading */}
        <h1 className="text-white font-ivy-presto-display font-thin text-[2.5rem] leading-[3.5rem]">
          Caring for The Most Prestigious
          <br />
          Institutions in the Caribbean
        </h1>
      </div>

      {/* Form Container */}
      <div className="h-screen w-[46%] bg-[#F6F4F1] flex flex-col items-center justify-center">
        <div className="w-[70%] py-[15%] bg-white rounded-lg p-8 flex flex-col justify-center space-y-6">
          {/* Heading */}
          <div>
            <h2 className="text-[1.7rem] font-ivy-presto-text font-thin mb-2 tracking-[-0.05em]">
              The Estate Command Portal
            </h2>
            <p className="font-sohne font-thin text-[0.9rem] tracking-[-0.03em]">
              Select your category and authenticate with your issued credentials
              to sign in.
            </p>
          </div>

          {/* Sign in Role */}
          <div className="w-full rounded-md bg-[#F6F4F1] flex items-center justify-between p-1">
            <div className="active px-3 bg-white font-normal py-3 font-light text-[0.82rem] rounded-md tracking-[-0.02em] flex items-center justify-center">
              Seat Member
            </div>
            <div className="font-sohne px-3 py-3 font-light text-[0.82rem] rounded-md tracking-[-0.02em] flex items-center justify-center">
              Artisans-In-Residence
            </div>
            <div className="font-sohne px-3 py-3 font-light text-[0.82rem] rounded-md tracking-[-0.02em] flex items-center justify-center">
              Staff Access
            </div>
          </div>

          {/* Form */}
          <div className="w-full">
            {/* Member ID Field */}
            <div class="relative mb-3 mt-4">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image
                  src="/images/person.svg"
                  alt="User"
                  width={0}
                  height={0}
                  className="w-4 text-gray-400"
                />
              </div>
              <input
                type="text"
                id="member-id"
                placeholder="HBR-MEM-BB-[Enter code]"
                class="w-full pl-10 pr-4 py-3 border border-[#EDEBE8] rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-grey-400 font-sohne font-light text-[0.9rem]"
              />
            </div>

            {/* Password Field  */}
            <div class="relative mb-3">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Image
                  src="/images/lock.svg"
                  alt="Lock"
                  width={0}
                  height={0}
                  className="w-4 text-gray-400"
                />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                class="w-full pl-10 pr-12 py-3 border border-[#EDEBE8] rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-grey-400 font-sohne font-light text-[0.9rem]"
              />
              <button
                type="button"
                onClick={togglePassword}
                class="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {/* Eye Open Icon  */}
                <img
                  id="eye-open"
                  src={
                    showPassword
                      ? "/images/eye_closed.svg"
                      : "/images/eye_open.svg"
                  }
                  alt="Show"
                  class="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                />
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="w-full flex items-center justify-between mb-4 mt-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="mr-2 w-4 h-4 border border-gray-400 rounded-lg checked:bg-[#706C56] checked:border-[#706C56] focus:ring-0 focus:ring-offset-0 cursor-pointer [&:checked]:bg-[#706C56] [&:checked]:border-[#706C56]"
                  style={{
                    accentColor: "#706C56",
                    borderRadius: "50%",
                  }}
                />
                <label
                  htmlFor="remember-me"
                  className="font-sohne font-light text-[0.8rem] cursor-pointer"
                >
                  Remember Me
                </label>
              </div>
              <Link href="#" className="font-sohne font-light text-[0.8rem]">
                Forgot Password?
              </Link>
            </div>

            {/* Sign in Button */}
            <div className="w-full mt-6">
              <button className="w-full bg-[#141110] text-white font-sohne font-light text-[0.8rem] px-4 py-4 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-[20%]"></div>
                <span className="relative z-10 font-sohne font-light text-[0.75rem]">
                  Sign In
                </span>
              </button>
            </div>

            {/* Divider OR */}
            <div className="w-full flex items-center justify-center mt-6">
              <div className="w-full h-[1px] bg-[#EDEBE8]"></div>
              <span className="text-[#141110] text-[0.7em] px-2 font-ivy-ora font-medium">
                OR
              </span>
              <div className="w-full h-[1px] bg-[#EDEBE8]"></div>
            </div>

            {/* text */}
            <div className="w-full flex items-center justify-center mt-6">
              <p className="text-[#141110] text-[0.8em] opacity-60 font-sohne font-light">
                Contact your Estate Curator for Member Access
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
