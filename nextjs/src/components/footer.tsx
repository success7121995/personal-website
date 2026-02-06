"use client"

import Link from "next/link"
import GithubSVG from "@/components/svg/github-svg"
import LinkedinSVG from "@/components/svg/linkedin-svg"

const Footer = () => {
    return (
        <footer className="w-full py-10 my-10 flex flex-col justify-center items-center gap-3">

            <div className="flex items-center gap-4">
                {/* Github */}
                <Link href="https://github.com/success7121995" target="_blank">
                    <GithubSVG className="w-9 h-9" />
                </Link>

                {/* Linkedin */}
                <Link href="https://www.linkedin.com/in/shing-fung-tse-844730294/" target="_blank">
                    <LinkedinSVG className="w-9 h-9" />
                </Link>
            </div>


            {/* Copyright */}
            <p className="text-sm text-black font-secondary font-bold">
                &copy; {new Date().getFullYear()} Stanford Tse. All rights reserved.
            </p>

            {/* Privacy Policy */}
            <Link href="/" className="text-sm text-black font-primary font-semibold">Privacy Policy</Link>

        </footer>
    )
}

export default Footer