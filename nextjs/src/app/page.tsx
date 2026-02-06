import Overlay from "@/components/overlay"
import Footer from "@/components/footer"
import TopNav from "@/components/topnav"

const Home = () => {
    return (
        // flex flex-col to ensure footer is always at the bottom
        // bg-white to fix background turning black
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
                        <p className="text-center text-4xl font-semibold font-primary">Testing Content</p>
                        <p className="mt-10 text-center font-primary">
                            現在 Overlay 有了實際高度，Footer 會乖乖待在下面。
                        </p>
                        {/* 這裡的內容越多，Overlay 就會自動長得越長 */}
                        <div className="h-[500px]"></div> 
                    </div>
                </section>
            </div>

            {/* Footer */}
			<Footer />
            
        </main>
    );
}

export default Home