import CustomWrapper from "@/components/shared/customWrapper";

// Data object for the growth table
const growthTableData = [
    {
        criteria: "Ownership",
        deliveryCenter: "Generally operated and owned by the organization",
        sharedServices: "Centralized ownership and management",
        centerOfExcellence: "Centralized ownership and management"
    },
    {
        criteria: "Infrastructure",
        deliveryCenter: "Cost-effective captive locations",
        sharedServices: "Centralized captive facilities",
        centerOfExcellence: "Advanced infrastructure with multi-location captive centers"
    },
    {
        criteria: "Talent Pool",
        deliveryCenter: "Budget-friendly workforce",
        sharedServices: "Uniform skill sets",
        centerOfExcellence: "Specialized expertise in specific domains"
    },
    {
        criteria: "Management",
        deliveryCenter: "Directed by the client",
        sharedServices: "Joint or shared management",
        centerOfExcellence: "Led by HYI.AI with collaborative input from clients"
    },
    {
        criteria: "GCC Implementation",
        deliveryCenter: "Quick to deploy, lower initial investment",
        sharedServices: "Streamlined and standardized procedures",
        centerOfExcellence: "Focus on innovation and knowledge sharing"
    },
    {
        criteria: "Duration",
        deliveryCenter: "Suitable for short durations (6 -12 months)",
        sharedServices: "Fits medium-term projects (2 -3 years)",
        centerOfExcellence: "Designed for long-term engagement (4+ years)"
    },
    {
        criteria: "Flexibility",
        deliveryCenter: "Limited expansion within captive centers",
        sharedServices: "Moderate scalability",
        centerOfExcellence: "Highly scalable model within captive centers"
    }
];

export default function GrowthTable() {
    return (
        <CustomWrapper gapBetween="gap-5" padding="px-4 my-0 py-6">
            <div className="w-full mx-auto relative">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="hyi-h2  mb-4">
                        How Can HYI.AI GCC Support Your Growth?
                    </h2>
                    <p className="hyi-p mx-auto leading-relaxed">
                        Accelerate innovation with expert global teams tailored to your needs. Streamline operations and scale effortlessly through our GCC model.
                    </p>
                </div>

                {/* Table Section */}
                <div className="overflow-hidden md:overflow-visible w-full relative">
                    {/* First gradient - purple */}
                    <div className="pointer-events-none absolute top-[80%] left-[40%] md:top-[50%] md:left-[75%] transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <div className="w-[100vw] h-[1200px] md:w-[1200px] md:h-[750px] rounded-full bg-[radial-gradient(circle,_rgba(184,0,227,0.4)_0%,_transparent_70%)] blur-3xl" />
                    </div>

                    {/* Second gradient - indigo */}
                    <div className=" pointer-events-none absolute top-[20%] left-[40%] md:top-[50%] md:left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <div className="w-[100vw] h-[1500px] md:w-[1200px] md:h-[700px] rounded-full bg-[radial-gradient(circle,_rgba(112,0,255,0.4)_0%,_transparent_70%)] blur-3xl" />
                    </div>

                    <div className="border border-[#FFFFFF33] rounded-2xl w-full overflow-hidden relative z-10">
                        <div className="overflow-x-auto">
                            <table className="w-full min-w-full table-fixed">
                                <thead>
                                    <tr>
                                        <th className="px-4 md:px-6 py-4 text-left text-white font-semibold text-sm md:text-lg whitespace-normal break-words border-b border-r border-[#FFFFFF33] w-1/4">
                                            Criteria
                                        </th>
                                        <th className="px-4 md:px-6 py-4 text-left text-white font-semibold text-sm md:text-lg whitespace-normal break-words border-b border-r border-[#FFFFFF33] w-1/4">
                                            Delivery Center Model
                                        </th>
                                        <th className="px-4 md:px-6 py-4 text-left text-white font-semibold text-sm md:text-lg whitespace-normal break-words border-b border-r border-[#FFFFFF33] w-1/4">
                                            Shared Services Model
                                        </th>
                                        <th className="px-4 md:px-6 py-4 text-left text-white font-semibold text-sm md:text-lg whitespace-normal break-words border-b border-r border-[#FFFFFF33] w-1/4">
                                            Center of Excellence (COE) Model
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {growthTableData.map((row, index) => (
                                        <tr key={index} className="border-b border-[#FFFFFF33]">
                                            <td className="px-4 md:px-6 py-4 text-white font-medium whitespace-normal break-words border-r border-[#FFFFFF33] w-1/4">
                                                <span className="text-sm md:text-base break-words">{row.criteria}</span>
                                            </td>
                                            <td className="px-4 md:px-6 py-4 whitespace-normal break-words border-r border-[#FFFFFF33] w-1/4">
                                                <p className="hyi-p text-sm md:text-base whitespace-normal break-words">{row.deliveryCenter}</p>
                                            </td>
                                            <td className="px-4 md:px-6 py-4 whitespace-normal break-words border-r border-[#FFFFFF33] w-1/4">
                                                <p className="hyi-p text-sm md:text-base whitespace-normal break-words">{row.sharedServices}</p>
                                            </td>
                                            <td className="px-4 md:px-6 py-4 whitespace-normal break-words w-1/4">
                                                <p className="hyi-p text-sm md:text-base whitespace-normal break-words">{row.centerOfExcellence}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </CustomWrapper>

    );
}