import SpeechBubble from "./speech-bubble";

interface SectionProps {
    className?: string
    speechBubbleClassName?: string
    children?: React.ReactNode
    title?: string
    index: number
    contentAlign?: 'left' | 'center' | 'right'
}

const Section = ({
    className,
    speechBubbleClassName,
    children,
    title,
    index,
    contentAlign = 'left',
}: SectionProps) => {
    /*********** Speech Bubble Configuration ***********/
    // Determine if the bubble should be reversed
    const isReversed = index % 2 === 1;

    // Determine the alignment of the bubble in the container
    const wrapperAlignment = isReversed ? "justify-end" : "justify-start";
    
    // Determine the offset of the bubble
    const offsetClasses = isReversed
        ? "mr-[-20px] sm:mr-[-30px] md:mr-[-20px] lg:mr-[-100px]"
        : "ml-[-20px] sm:ml-[-30px] md:ml-[-20px] lg:ml-[-100px]";

    // Determine the alignment of the content in the container
    const alignClasses = {
        left: 'items-start text-left',
        center: 'items-center text-center',
        right: 'items-end text-right'
    }

    return (
        <section className={`relative w-full flex flex-col items-center ${className}`}>
            {/* Bubble Container */}
            <div className={`w-full flex ${wrapperAlignment} z-20 mb-[-20px]`}> 
                <div className={`${offsetClasses}`}>
                    <SpeechBubble
                        text={title}
                        className={`${speechBubbleClassName} font-primary text-3xl font-bold`}
                        isReversed={isReversed}
                    />
                </div>
            </div>
            
            {/* 2. Content Container */}
            <div className={`w-full h-full min-h-[300px] flex flex-col px-5 py-10 sm:px-20 md:px-25 lg:px-5 ${alignClasses[contentAlign]}`}>
                {children}
            </div>
        </section>
    )
}

export default Section