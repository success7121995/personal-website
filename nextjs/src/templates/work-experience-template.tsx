import { WorkExperienceTemplateProps } from "@/types/section"
import { DateToString, DateFormat } from "@/util/util"

const WorkExperienceTemplate = ({ content }: { content: WorkExperienceTemplateProps[] }) => {
    // Guard clause: if data is still empty, show a subtle placeholder or return null
    if (!content || content.length === 0) {
        return <div className="p-4 text-gray-500 italic">No work experience found.</div>;
    }
    
    return (
        <div className="flex flex-col w-full font-primary">
            {content.map((item, index) => (
                <div key={index} className="flex w-full group">
                    
                    {/* The Road Map Container */}
                    <div className="relative flex flex-col items-center w-12 sm:w-20 flex-shrink-0">
                        {/* Vertical Line */}
                        <div className={`absolute w-[4px] bg-black top-0 ${index === content.length - 1 ? "h-[calc(100%-30px)]" : "bottom-0"}`} />
                        
                        {/* The Circle Point - Positioned to align with the bubble arrow */}
                        <div className="relative mt-10 z-10 w-5 h-5 bg-white border-[4px] border-black rounded-full" />
                    </div>

                    {/* The Speech Bubble Content */}
                    <div className="relative mb-12 ml-2 flex-grow">
                        {/* The Triangle Arrow pointing to the line */}
                        <div className="absolute top-[42px] -left-[12px] w-0 h-0 border-t-[10px] border-t-transparent border-r-[12px] border-r-black border-b-[10px] border-b-transparent" />

                        {/* Main Card Container */}
                        <div className="bg-white border-[3px] border-black rounded-xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            
                            {/* Header Section */}
                            <div className="mb-4">
                                <h3 className="text-2xl font-black text-black leading-tight uppercase">
                                    {item.position}
                                </h3>
                                <p className="text-lg text-gray-800 font-bold">
                                    {item.companyName}
                                </p>
                                <p className="text-sm text-gray-500 mt-1 font-semibold">
                                    {DateToString(item.startDate, DateFormat.MMM_YYYY)} — {item.endDate ? DateToString(item.endDate, DateFormat.MMM_YYYY) : 'Present'}
                                </p>
                            </div>

                            {/* Description Section */}
                            <div className="text-black text-md leading-relaxed whitespace-pre-line font-medium">
                                {item.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WorkExperienceTemplate