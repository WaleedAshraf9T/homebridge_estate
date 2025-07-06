"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("member"); // member, artisan, staff
  const [formData, setFormData] = useState({
    memberId: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    memberId: "",
    password: "",
  });
  const [isMemberIdFocused, setIsMemberIdFocused] = useState(false);

  const getInitialPrefix = (role) => {
    switch (role) {
      case "artisan":
        return "HBR-ART-";
      case "staff":
        return "HBR-EMP-";
      default:
        return "HBR-MEM-BB-";
    }
  };

  const handleMemberIdFocus = () => {
    setIsMemberIdFocused(true);
    if (!formData.memberId) {
      setFormData((prev) => ({
        ...prev,
        memberId: getInitialPrefix(selectedRole),
      }));
    }
  };

  const handleMemberIdBlur = () => {
    setIsMemberIdFocused(false);
    if (formData.memberId === getInitialPrefix(selectedRole)) {
      setFormData((prev) => ({
        ...prev,
        memberId: "",
      }));
    }
  };

  // Update member ID prefix when role changes
  useEffect(() => {
    if (isMemberIdFocused) {
      setFormData((prev) => ({
        ...prev,
        memberId: getInitialPrefix(selectedRole),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        memberId: "",
      }));
    }
  }, [selectedRole, isMemberIdFocused]);

  const handleMemberIdChange = (e) => {
    const prefix = getInitialPrefix(selectedRole);
    const value = e.target.value;

    // Ensure prefix is always present
    if (!value.startsWith(prefix)) {
      setFormData((prev) => ({
        ...prev,
        memberId: prefix,
      }));
      return;
    }

    // Only allow typing after the prefix
    setFormData((prev) => ({
      ...prev,
      memberId: value,
    }));

    // Clear error when user starts typing
    setErrors((prev) => ({
      ...prev,
      memberId: "",
    }));
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "member-id") {
      handleMemberIdChange(e);
    } else {
      setFormData((prev) => ({
        ...prev,
        password: value,
      }));
      setErrors((prev) => ({
        ...prev,
        password: "",
      }));
    }
  };

  const handleMemberIdKeyDown = (e) => {
    const prefix = getInitialPrefix(selectedRole);
    // Prevent backspace from deleting the prefix
    if (e.key === "Backspace" && formData.memberId.length <= prefix.length) {
      e.preventDefault();
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getMemberIdPlaceholder = () => {
    switch (selectedRole) {
      case "artisan":
        return "HBR-ART-[Enter Code]";
      case "staff":
        return "HBR-EMP-[Enter Code]";
      default:
        return "HBR-MEM-BB-[Enter code]";
    }
  };

  const validateMemberId = (id) => {
    if (!id) return "Member ID is required";

    const patterns = {
      member: /^HBR-MEM-BB-[A-Z0-9-]+$/,
      artisan: /^HBR-ART-[A-Z0-9-]+$/,
      staff: /^HBR-EMP-[A-Z0-9-]+$/,
    };

    if (!patterns[selectedRole].test(id)) {
      return `Invalid ${
        selectedRole === "member"
          ? "Member"
          : selectedRole === "artisan"
          ? "Artisan"
          : "Staff"
      } ID format`;
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 8) return "Password must be at least 8 characters";
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password))
      return "Password must contain both uppercase and lowercase letters";
    if (!/(?=.*\d)/.test(password))
      return "Password must contain at least one number";
    if (!/(?=.*[!@#$%^&*])/.test(password))
      return "Password must contain at least one special character";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const memberIdError = validateMemberId(formData.memberId);
    const passwordError = validatePassword(formData.password);

    setErrors({
      memberId: memberIdError,
      password: passwordError,
    });

    if (!memberIdError && !passwordError) {
      // Proceed with form submission
      console.log("Form is valid", formData);
    }
  };

  return (
    <main className="flex">
      <div className="h-screen lg:w-[54%] w-screen bg-[url('/images/login-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-between px-12 pb-12 pt-9">
        {/* Logo */}
        <div className="w-full flex-col items-center lg:flex hidden mt-2">
          <img
            src={"/images/logo.png"}
            width={0}
            height={0}
            className="w-[30%]"
            alt="HOMEBRIDGE ESTATE Logo"
          />
        </div>

        {/* Heading */}
        <h1 className="text-white font-ivy-presto-display font-thin text-[2.5rem] leading-[3.5rem] lg:block hidden">
          Caring for The Most Prestigious
          <br />
          Institutions in the Caribbean
        </h1>
      </div>

      {/* Form Container */}
      <div className="h-screen lg:w-[46%] w-full lg:relative absolute flex z-10 lg:bg-[#F6F4F1] flex-col items-center justify-center">
        <div className="lg:w-[70%] w-[95%] py-[15%] lg:bg-white bg-white/70 backdrop-blur-xl rounded-lg p-8 flex flex-col justify-center space-y-6">
          {/* Logo */}
          <div className="w-full flex-col items-center justify-center mt-[-15px] lg:hidden flex">
            <img
              src={"/images/logo.png"}
              width={0}
              height={0}
              className="w-[65%] "
              alt="HOMEBRIDGE ESTATE Logo"
            />
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-[1.7rem] font-ivy-presto-text font-thin mb-2 lg:tracking-[-0.05em]">
              The Estate Command Portal
            </h2>
            <p className="font-sohne font-thin text-[0.9rem] tracking-[-0.03em]">
              Select your category and authenticate with your issued credentials
              to sign in.
            </p>
          </div>

          {/* Sign in Role */}
          <div className="w-full rounded-md bg-[#F6F4F1] flex items-center justify-between p-1">
            <div
              onClick={() => setSelectedRole("member")}
              className={`cursor-pointer lg:px-3 px-2 py-3 font-light text-[0.82rem] rounded-md tracking-[-0.02em] flex items-center justify-center transition-all duration-300 ${
                selectedRole === "member"
                  ? "bg-white font-normal"
                  : "font-sohne"
              }`}
            >
              Seat Member
            </div>
            <div
              onClick={() => setSelectedRole("artisan")}
              className={`cursor-pointer lg:px-3 px-2 py-3 font-light text-[0.82rem] rounded-md tracking-[-0.02em] flex items-center justify-center transition-all duration-300 ${
                selectedRole === "artisan"
                  ? "bg-white font-normal"
                  : "font-sohne"
              }`}
            >
              Artisans-In-Residence
            </div>
            <div
              onClick={() => setSelectedRole("staff")}
              className={`cursor-pointer px-3 py-3 font-light text-[0.82rem] rounded-md tracking-[-0.02em] flex items-center justify-center transition-all duration-300 ${
                selectedRole === "staff" ? "bg-white font-normal" : "font-sohne"
              }`}
            >
              Staff Access
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* Member ID Field */}
            <div className="relative lg:mt-4 mt-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                value={formData.memberId}
                onChange={handleInputChange}
                onKeyDown={handleMemberIdKeyDown}
                onFocus={handleMemberIdFocus}
                onBlur={handleMemberIdBlur}
                placeholder={getMemberIdPlaceholder()}
                className={`w-full pl-10 pr-4 py-3 border ${
                  errors.memberId ? "border-red-500" : "border-[#EDEBE8]"
                } rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-grey-400 font-sohne font-light text-[0.9rem]`}
              />
            </div>
            {errors.memberId && (
              <p className="mt-1 text-red-500 text-xs font-sohne">
                {errors.memberId}
              </p>
            )}

            {/* Password Field  */}
            <div className="relative mt-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className={`w-full pl-10 pr-12 py-3 border ${
                  errors.password ? "border-red-500" : "border-[#EDEBE8]"
                } rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 text-gray-700 placeholder-grey-400 font-sohne font-light text-[0.9rem]`}
              />

              <button
                type="button"
                onClick={togglePassword}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <Image
                  id="eye-open"
                  src={
                    showPassword
                      ? "/images/eye_closed.svg"
                      : "/images/eye_open.svg"
                  }
                  width={0}
                  height={0}
                  alt="Show"
                  className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                />
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-red-500 text-xs font-sohne">
                {errors.password}
              </p>
            )}

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
              <button
                type="submit"
                className="w-full bg-[#141110] text-white font-sohne font-light text-[0.8rem] px-4 py-4 rounded-lg relative overflow-hidden hover:opacity-90 transition-opacity duration-200"
              >
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
          </form>
        </div>
      </div>
    </main>
  );
}
