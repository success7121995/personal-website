"use client"

import { useEffect, useState } from "react"
import OverlaySVG from "@/components/svg/overlay-svg"

interface OverlayProps {
    className?: string
    color?: string
    height?: number
    minStackCount?: number
    overlap?: number
}

const Overlay = ({
    className,
    color,
    height = 200,
    minStackCount = 5,
    overlap = 40,
}: OverlayProps) => {
    // Calculate the vertical step between each SVG based on the height and overlap
    const step = height - overlap

    const [count, setCount] = useState(minStackCount) // State to track the number of SVGs needed

    // Effect to calculate how many SVGs are needed based on the page height and update on resize
    useEffect(() => {

        /**
         * Calculate the number of SVGs needed to cover the entire page height, ensuring that we always have at least `minStackCount` SVGs. We also set up a ResizeObserver to update this count whenever the page height changes, and a window resize event listener to handle changes in viewport size.
         */
        const updateCount = () => {
            const pageHeight = document.documentElement.scrollHeight - 500
            const needed = Math.ceil((pageHeight - height) / step) + 1
            const nextCount = Math.max(minStackCount, needed)
            setCount(nextCount)
        }

        updateCount()

        // Set up a ResizeObserver to watch for changes in the document's height and update the count accordingly
        const ro = new ResizeObserver(updateCount)
        ro.observe(document.documentElement)

        // Set up a window resize event listener to update the count when the viewport size changes
        window.addEventListener("resize", updateCount)
        return () => {
            ro.disconnect()
            window.removeEventListener("resize", updateCount)
        }
    }, [minStackCount, step])

    const minHeight = (count - 1) * step + height

    return (
    <div
        className={`relative pointer-events-none ${className}`}
        style={{ minHeight: `${minHeight}px` }}
    >
        {Array.from({ length: count }).map((_, index) => (
            <div
            key={index}
            style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: '100%',
                display: "flex",
                justifyContent: "center",
                top: `${index * step}px`
            }}
            >
                <OverlaySVG width="100%" height={height} color={color} />
            </div>
        ))}
    </div>
    )
}

export default Overlay