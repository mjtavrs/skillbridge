type Props = {
    label: string,
    type: string,
    name: string,
    id: string,
    placeholder: string
}

export default function Input({ label, type, name, id, placeholder }: Props) {
    return (
        <div className="flex flex-col gap-3">
            <label
                htmlFor={name}
                className="text-sm text-grey_15 font-medium leading-[150%]"
            >
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                className="bg-white_99 border-[1px] border-white_95 text-sm text-grey_40 p-5 rounded-lg"
                placeholder={placeholder}
            />
        </div>
    );
}