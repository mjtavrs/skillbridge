import CurriculumClass from "./curriculumClass/CurriculumClass";

type Props = {
    moduleNumber: string,
    moduleTitle: string,
    moduleClasses: Array<any>
}

export default function CurriculumCard({ moduleNumber, moduleTitle, moduleClasses }: Props) {
    return (
        <div className="flex flex-col gap-8 bg-white p-8 rounded-xl">
            <div className="flex flex-col gap-8">
                <h3 className="text-5xl text-grey_15 text-end font-bold leading-6">
                    {moduleNumber}
                </h3>
                <h4 className="text-lg text-grey_20 font-semibold leading-[150%]">
                    {moduleTitle}
                </h4>
            </div>
            <div className="flex flex-col gap-4">
                <CurriculumClass
                    classes={moduleClasses}
                />
            </div>
        </div>
    );
}