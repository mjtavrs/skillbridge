import Image from "next/legacy/image";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "../button/Button";
import LaptopMenu from "./LaptopMenu";

export default function NavigationMenu() {
    return (
        <div className="flex justify-between sm:mx-4 laptop:mx-20 mb-4 text-grey_15">
            <div className="flex items-center gap-12">
                <Image
                    src="/assets/svg/logo.svg"
                    alt="Skillbridge official logo"
                    height="40"
                    width="40"
                />
                <LaptopMenu />
            </div>
            <nav className="flex items-center gap-5">
                <div>
                    <Button
                        title="Sign Up"
                        link="/sign-up"
                        style="bg-transparent text-grey_15"
                    />
                    <Button
                        title="Login"
                        link="/login"
                        style="bg-orange_50 text-white"
                    />
                </div>
                <HiOutlineMenuAlt3
                    className="laptop:hidden text-4xl"
                />
            </nav>
        </div>
    );
}