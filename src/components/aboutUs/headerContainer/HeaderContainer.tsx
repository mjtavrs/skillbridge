type Props = {
    title: string,
    description: string
}

export default function HeaderContainer({ title, description }: Props) {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-2xl laptop:text-3xl text-grey_20 font-medium leading-[150%]">
                {title}
            </h2>
            <p className="text-sm laptop:text-base text-grey_35 leading-[150%]">
                {description}
            </p>
        </div>
    )
}