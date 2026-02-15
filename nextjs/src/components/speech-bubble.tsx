import SpeechBubbleSvg from "./svg/speech-bubble-svg";

interface SpeechBubbleProps {
    text?: string
    className?: string
    isReversed?: boolean
}

const SpeechBubble = ({
    text = "Text here",
    className,
    isReversed = false,
}: SpeechBubbleProps) => {
    return (
        <div className={`relative inline-flex items-center justify-center p-12 ${className}`}> 
            {/* Wrap text */}
            <h1 className="relative z-10 whitespace-nowrap top-[-5px]">
                {text}
            </h1>
            
            {/* SVG fill container and stretch */}
            <div className={`absolute inset-0 z-0 ${isReversed ? 'scale-x-[-1]' : ""}`}>
                <SpeechBubbleSvg className="w-full h-full" />
            </div>
        </div>
    )
}

export default SpeechBubble