import Link from "next/link";

type Props = {
    title: string,
    link: string,
    style: string
}

export default function Button({ title, link, style }: Props) {
    return (
        <Link
            href={link}
            className={`${style} text-sm px-5 py-3 rounded-md`}
        >
            {title}
        </Link>
    );
}