type Props = {
    title: string
}

export default function Tag({ title }: Props) {
    return (
        <div className="bg-white border-[1px] border-white_95 text-sm py-2 px-4 rounded-md inline-block">
            <div>
                <p className="text-grey_30">{title}</p>
            </div>
        </div>
    );
}