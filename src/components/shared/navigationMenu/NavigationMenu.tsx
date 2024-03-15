import Image from "next/image"
import Link from "next/link";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Button from "../button/Button";

export default function NavigationMenu() {
    return (
        <div className="flex justify-between mx-4 mb-4 text-grey_15">
            <Image
                src="assets/svg/logo.svg"
                alt="Skillbridge official logo"
                height="40"
                width="40"
            />
            <nav className="flex items-center gap-5">
                <div>
                    <Button
                        title="Sign Up"
                        link="#"
                        style="bg-transparent text-grey_15"
                    />
                    <Button
                        title="Login"
                        link="#"
                        style="bg-orange_50 text-white"
                    />
                </div>
                <HiOutlineMenuAlt3
                    className="text-4xl"
                />
            </nav>
        </div>
    );
}