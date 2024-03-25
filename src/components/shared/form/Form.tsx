import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export default function Form() {
    return (
        <div className="border-t-[1px] border-white_95 mx-4">
            <div className="bg-white mt-12 p-8 rounded-xl">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2 items-center">
                        <h2 className="text-3xl text-grey_15 font-semibold">
                            Login
                        </h2>
                        <p className="text-sm text-grey_30 text-center">
                            Welcome back! Please log in to access your account.
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-3">
                                <label
                                    htmlFor="email"
                                    className="text-sm text-grey_15 font-medium leading-[150%]"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-white_99 border-[1px] border-white_95 text-sm text-grey_40 p-5 rounded-lg"
                                    placeholder="Enter your Email"
                                />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label
                                    htmlFor="password"
                                    className="text-sm text-grey_15 font-medium leading-[150%]"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="bg-white_99 border-[1px] border-white_95 text-sm text-grey_40 p-5 rounded-lg"
                                    placeholder="Enter your Password"
                                />
                                <Link
                                    href="#"
                                    className="text-sm text-grey_30 text-right"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="remember-user"
                                    id="remember-user"
                                    className="h-6 w-6"
                                />
                                <label htmlFor="remember-user" className="text-sm text-grey_40 leading-[150%]">Remember Me</label>
                            </div>
                            <Link
                                href=""
                            >
                                <div className="bg-orange_50 flex justify-center px-5 py-3 rounded-md">
                                    <p className="text-sm text-white font-medium">
                                        Login
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="my-6 flex items-center">
                            <div className="flex-1 h-[1px] bg-white_90"></div>
                            <p className="text-sm text-grey_60 mx-4">
                                OR
                            </p>
                            <div className="flex-1 h-[1px] bg-white_90"></div>
                        </div>
                        <Link
                            href="#"
                        >
                            <div className="bg-white_97 border-[1px] border-white_95 flex items-center justify-center gap-3 px-6 py-3 rounded-md">
                                <FcGoogle
                                    className="text-2xl"
                                />
                                <p className="text-sm text-grey_15 font-medium">
                                    Login with Google
                                </p>
                            </div>
                        </Link>
                        <div className="flex items-center justify-center gap-2 text-sm text-grey_15 mt-6 leading-[150%]">
                            <div className="flex items-center">
                                <p>
                                    Don&apos;t have an account?&nbsp;
                                </p>
                                <Link
                                    href="#"
                                    className="font-medium underline"
                                >
                                    Sign Up
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