
export default function GccModelExperienceSection() {
    return (
        <div className="w-full min-h-[835px] flex-col justify-center items-center bg-[url('/managed-talent-pool.png')] bg-cover bg-center bg-no-repeat px-4 my-0 py-6">
            <div className="w-full max-w-[1280px] mx-auto flex flex-col justify-start">

                {/* Header Section */}
                <div className="w-full flex flex-col items-center text-center mb-16">
                    {/* What We Offer Button */}
                    <div className="inline-flex items-center justify-center w-36 rounded-[32px] px-3 py-2 mb-10"
                        style={{
                            background: 'linear-gradient(90deg, rgba(229, 156, 255, 0.24) 0.01%, rgba(186, 156, 255, 0.24) 50.01%, rgba(156, 178, 255, 0.24) 100%)'
                        }}>
                        <span className="hyi-p font-normal text-white">What We Offer</span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="hyi-h2 mb-4">Experience the Unstoppable Power of Everything We Offer</h2>

                    {/* Description Paragraph */}
                    <p className="hyi-p md:max-w-[60%]">HYI.AI helps enterprises scale smarter through expertly managed Global Capability Centers built for talent, innovation, and growth.</p>
                </div>

                {/* middle section */}
                <div className="w-full flex flex-col items-center justify-center text-center mb-16">
                    {/* Central Content Box with Gradient Background */}
                    <div className="w-full max-w-[600px] mx-auto p-2 rounded-4xl  border border-white/10 backdrop-blur-md">
                        <div className="w-full mx-auto py-6 px-8 rounded-4xl border border-white/10 backdrop-blur-sm">
                            <h3 className="hyi-h3 mb-3 text-white">Global Capability Center Managed Talent Pool</h3>
                            <p className="hyi-p text-white">HYI.AI helps enterprises scale through smartly managed GCCs focused on talent and innovation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}