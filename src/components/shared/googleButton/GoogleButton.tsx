import { FcGoogle } from "react-icons/fc";

type Props = {
    buttonTitle: string
}

export default function GoogleButton({ buttonTitle }: Props) {
    return (
        <div className="bg-white_97 border-[1px] border-white_95 flex items-center justify-center gap-3 px-6 py-3 rounded-md">
            <FcGoogle
                className="text-2xl"
            />
            <p className="text-sm text-grey_15 font-medium">
                {buttonTitle}
            </p>
        </div>
    );
}