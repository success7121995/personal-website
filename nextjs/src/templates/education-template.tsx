import { EducationTemplateProps } from "@/types/section"

const EducationTemplate = ({ content }: { content: EducationTemplateProps[] }) => {
    // Guard clause: if data is still empty, show a subtle placeholder or return null
    if (!content || content.length === 0) {
        return <div className="p-4 text-gray-500 italic">No education found.</div>;
    }

    return (
        <div className="flex flex-col w-full font-primary">
            {content.map((item, index) => (
                <div key={index} className="flex w-full group">
                    <div className="relative flex flex-col items-center w-12 sm:w-20 flex-shrink-0">
                        <div className="absolute w-[4px] bg-black top-0 h-[calc(100%-30px)]" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EducationTemplate