import Image from "next/image";

import { FaEnvelope, FaPhone, FaLocationDot, FaFacebook, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-white mt-12 px-5 pt-12 pb-6">
            <div>
                <Image
                    src="/assets/svg/logo.svg"
                    alt="Skillbridge official logo"
                    height="40"
                    width="40"
                />
            </div>
            <div className="flex flex-col gap-3 mt-8">
                <div className="flex items-center gap-2">
                    <FaEnvelope
                        className="text-2xl text-grey_15"
                    />
                    <p className="text-[15px] text-grey_15 leading-[150%]">
                        hello@skillbridge.com
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <FaPhone
                        className="text-2xl text-grey_15"
                    />
                    <p className="text-[15px] text-grey_15 leading-[150%]">
                        +91 91813 23 2309
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <FaLocationDot
                        className="text-2xl text-grey_15"
                    />
                    <p className="text-[15px] text-grey_15 leading-[150%]">
                        Somewhere in the World
                    </p>
                </div>
            </div>
            <div>
                <div className="flex gap-8 my-6">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg text-grey_15 font-semibold leading-[150%]">
                            Home
                        </h3>
                        <ul className="text-sm text-grey_35 leading-[150%]">
                            <li>Benefits</li>
                            <li>Our Courses</li>
                            <li>Our Testimonials</li>
                            <li>Our FAQ</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg text-grey_15 font-semibold leading-[150%]">
                            About Us
                        </h3>
                        <ul className="text-sm text-grey_35 leading-[150%]">
                            <li>Company</li>
                            <li>Achievements</li>
                            <li>Our Goals</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-5">
                    <h3 className="text-lg text-grey_15 font-semibold leading-[150%]">
                        Social Profiles
                    </h3>
                    <div className="flex gap-4 mt-3">
                        <div className="bg-white_97 border-[1px] border-white_95 p-3 rounded-md">
                            <FaFacebook
                                className="text-xl text-grey_15"
                            />
                        </div>
                        <div className="bg-white_97 border-[1px] border-white_95 p-3 rounded-md">
                            <FaXTwitter
                                className="text-xl text-grey_15"
                            />
                        </div>
                        <div className="bg-white_97 border-[1px] border-white_95 p-3 rounded-md">
                            <FaLinkedin
                                className="text-xl text-grey_15"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-[1px] border-white_95">
                <p className="text-sm text-grey_40 text-center pt-5 leading-[150%]">
                    © 2023 Skillbridge. All rights reserved.
                </p>
            </div>
        </div>
    );
}