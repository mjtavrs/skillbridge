import Image, { StaticImageData } from "next/legacy/image";

type Props = {
    cover: StaticImageData
}

export default function Video({ cover }: Props) {
    return (
        <div className="mx-4">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                    src={cover}
                    alt="Video cover"
                    width={16}
                    height={9}
                    layout="responsive"
                    objectFit="cover"
                    className="brightness-75 rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/assets/svg/play.svg"
                        alt=""
                        height="54"
                        width="54"
                        className="opacity-75"
                    />
                </div>
            </div>
        </div>
    );
}