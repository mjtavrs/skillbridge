import Link from "next/link";
import menuLinks from "@/data/menuLinks";

export default function LaptopMenu() {
    return (
        <div className="sm:hidden laptop:block">
            <ul className="flex">
                {
                    menuLinks.map((item, index) => (
                        <li
                            key={index}
                            className="text-sm py-3 px-5 rounded-md"
                        >
                            <Link
                                href={item.link}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}