import Overlay from "@/components/overlay"
import Footer from "@/components/footer"
import TopNav from "@/components/topnav"
import Section from "@/components/section"
import { SectionProps, TemplateProps } from "@/types/section"
import AboutMeTemplate from "@/templates/about-me-template"
import WorkExperienceTemplate from "@/templates/work-experience-template"

const dummyContent: SectionProps[] = [
    {
        title: "About Me",
        template: AboutMeTemplate,
        content: {
            description: "Hello, I'm a software engineer with a passion for building web applications. I'm a quick learner and I'm always looking to improve my skills.",
            imageUrl: "/Users/tseshingfung/Downloads/1644246020455.jpg"
        },
        contentAlign: "left"
    },
    {
        title: "Work Experience",
        template: WorkExperienceTemplate,
        content: [
            {
                companyName: "Company Name",
                position: "Position",
                startDate: new Date(),
                endDate: new Date(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            },
            {
                companyName: "Company Name",
                position: "Position",
                startDate: new Date(),
                endDate: new Date(),
                description: "Description"
            },
            {
                companyName: "Company Name",
                position: "Position",
                startDate: new Date(),
                endDate: new Date(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
        ],
        contentAlign: "left"
    }
]

const Home = () => {
    return (
        // flex flex-col to ensure footer is always at the bottom
        <main className="flex flex-col w-full">

            {/* TopNav */}
            <TopNav />

            {/* Grid to stack content and overlay */}
            <div className="relative flex-grow grid grid-cols-1 items-start">
                
                {/* Overlay */}
                <div className="col-start-1 row-start-1">
                    <Overlay
                        className="mt-30 w-[90%] md:max-w-[600px] lg:max-w-[800px] mx-auto lg:mt-50"
                        color="#FFDD58"
                        height={200}
                        minStackCount={5}
                        overlap={65}
                    />
                </div>

				{/* Content */}
                <section className="col-start-1 row-start-1 z-10 pt-45 px-4 pointer-events-none lg:pt-63"> 
                    <div className="max-w-2xl mx-auto pointer-events-auto">
                        
                    {dummyContent.map((item, index) => {
                        // Get the Template Component
                        const Template: React.FC<{ content: TemplateProps }> = item.template;

                        return (
                            <Section
                                key={index}
                                index={index}
                                title={item.title}
                                contentAlign={item.contentAlign as 'left' | 'center' | 'right'}
                            >
                                {/* Pass the content to the selected template */}
                                {Template && (
                                    <Template content={item.content} />
                                )}
                            </Section>
                        );
                    })}


                    </div>
                </section>
            </div>

            {/* Footer */}
			<Footer />
            
        </main>
    );
}

export default Home