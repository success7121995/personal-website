import Image from "next/image"

const dummyContent = [
    {
        title: "About Me",
        content: "Hello, I'm a software engineer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills."
    }
]

const AboutMeTemplate = () => {
    return (
        <div className="font-primary text-md flex flex-col-reverse sm:flex-row items-center justify-between">

            {/* Content */}
            <p>
                Hello, I'm a software engineer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills.
            </p>

            {/* Image */}
            <Image src="/images/github-profile.jpg" alt="About Me" width={100} height={100} />
        </div>
    )
}

export default AboutMeTemplate