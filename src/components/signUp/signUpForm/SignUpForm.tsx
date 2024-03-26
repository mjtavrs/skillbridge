"use client";

import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";

import PasswordInput from "../../shared/passwordInput/PasswordInput";
import GoogleButton from "../../shared/googleButton/GoogleButton";
import Input from "../../shared/input/Input";

export default function SignUpForm() {
    return (
        <div className="border-t-[1px] border-white_95 mx-4">
            <div className="bg-white mt-12 p-8 rounded-xl">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="text-3xl text-grey_15 font-semibold">
                            Sign Up
                        </h2>
                        <p className="text-sm text-grey_30 text-center">
                            Create an account to unlock exclusive features.
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-5">
                            <Input
                                label="Full Name"
                                type="text"
                                name="text"
                                id="text"
                                placeholder="Enter your Name"
                            />
                            <Input
                                label="Email"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your Email"
                            />
                            <div className="flex flex-col gap-3 relative">
                                <PasswordInput />
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="remember-user"
                                    id="remember-user"
                                    className="h-6 w-6"
                                />
                                <label htmlFor="remember-user" className="text-sm text-grey_40 leading-[150%]">
                                    I agree with <span className="underline">Terms of Use</span> and <span className="underline">Privacy Policy</span>
                                </label>
                            </div>
                            <Link
                                href="#"
                                className="pointer-events-none"
                                aria-disabled={true}
                                tabIndex={-1}
                            >
                                <div className="bg-orange_50 flex justify-center px-5 py-3 rounded-md">
                                    <p className="text-sm text-white font-medium">
                                        Sign Up
                                    </p>
                                </div>
                            </Link>
                        </div>
                        {/* This div will separate the login options */}
                        <div className="my-6 flex items-center">
                            <div className="flex-1 h-[1px] bg-white_90"></div>
                            <p className="text-sm text-grey_60 mx-4">
                                OR
                            </p>
                            <div className="flex-1 h-[1px] bg-white_90"></div>
                        </div>
                        <Link
                            href="https://www.google.com"
                            target="_blank"
                            title="This button will redirect you to Google.com"
                        >
                            <GoogleButton
                                buttonTitle="Sign up with Google"
                            />
                        </Link>
                        <div className="flex items-center justify-center gap-2 text-sm text-grey_15 mt-6 leading-[150%]">
                            <div className="flex items-center">
                                <p>
                                    Already have an account?&nbsp;
                                </p>
                                <Link
                                    href="/login"
                                    className="font-medium underline"
                                >
                                    Login
                                </Link>
                            </div>
                            <FiArrowUpRight
                                className="text-xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}