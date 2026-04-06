import CustomWrapper from "@/components/shared/customWrapper";

export default function Model() {
    return (
        <CustomWrapper padding="px-6 my-0 py-10 pt-15 md:pt-10 md:py-1">
            <div className="w-full mx-auto z-10">
                {/* Introductory Paragraph */}
                <p className="hyi-p mb-10">
                    For businesses who want their own Global Capability Center (GCC) but dont&apos;t want to take on risk and upfront complexity, HYI provides a Build-Operate-Transfer (BOT) solution, a tested and strategic method of offshore operations with long-term ownership on the table. BOT is a good fit for businesses that want complete ownership of their world talent in the long term but want expert assistance to initiate and scale on a trouble-free basis.
                </p>

                {/* First Main Heading */}
                <h2 className="hyi-h1 mb-6">
                    How the BOT Model Works
                </h2>

                {/* Sub-sections */}
                <div className="space-y-16">
                    {/* Build Phase */}
                    <div className="mb-6">
                        <h3 className="hyi-h3 mb-4">Build</h3>
                        <ul className="hyi-p list-disc list-outside pl-5 mb-6">
                            <li>HYI determines the best possible location concerning your business goals and growth strategy.</li>
                            <li>We oversee all setup processes, such as office space, IT infrastructure, recruitment, regulatory clearance, and employee induction.</li>
                            <li>You enjoy a fully operational GCC without facing the initial complexity.</li>

                        </ul>
                    </div>
                    {/* Operate Phase */}
                    <div className="mb-6">
                        <h3 className="hyi-h3 mb-4">Operate</h3>
                        <ul className="hyi-p list-disc list-outside pl-5 mb-6">
                            <li>HYI operates the center on a day-to-day basis in your brand and strategic manner.</li>
                            <li>We guarantee you quality governance, performance monitoring, team building, and cultural alignment with your business culture.</li>

                        </ul>
                    </div>

                    {/* Transfer Phase */}
                    <div className="mb-6">
                        <h3 className="hyi-h3 mb-4">Transfer</h3>
                        <ul className="hyi-p list-disc list-outside pl-5 mb-6">
                            <li>After the center has been set up and aligned with your objectives, we begin the mapped transfer.</li>
                            <li>We successfully deliver all assets, processes, teams, and documents.</li>
                            <li>You own and enjoy a mature, high-performing GCC in its entirety, poised for further growth.</li>

                        </ul>
                    </div>
                </div>

                {/* Second Main Heading */}
                <h2 className="hyi-h1 mb-6">
                    Why Use the BOT Model?
                </h2>

                {/* Benefits Section */}
                <div className="space-y-16">
                    {/* Build Phase */}
                    <div className="mb-6">
                        <h3 className="hyi-h3 mb-4">Less Upfront Investment</h3>
                        <p className="hyi-p">
                            Do not make the significant upfront cost of establishment of foreign operations in one go.
                        </p>
                    </div>

                    {/* Low Risk */}
                    <div className="mb-6">
                        <h3 className="hyi-h3 mb-4">Low Risk</h3>
                        <p className="hyi-p">
                            The model allows clients to pilot and incubate their operations with guidance from HYI professionals before taking full ownership.
                        </p>
                    </div>

                    {/* Access to Successful Models */}
                    <div className="mb-6">
                        <h3 className="hyi-h3 mb-4">Access to Successful Models</h3>
                        <p className="hyi-p">
                            Leverage our models, tools, and lessons learned from a sequence of successful GCCs.
                        </p>
                    </div>

                    {/* Seamless Transition to Ownership */}
                    <div className="mb-6">
                        <h3 className="hyi-h3 mb-4">Seamless Transition to Ownership</h3>
                        <p className="hyi-p mb-1.5">
                            We enable the transition from managed to own operations in as smooth and trouble-free as possible.
                        </p>
                        <p className="hyi-p mb-4">
                            The BOT model is most appropriate for firms with off-shore growth in emerging markets, firms with long-term off-shore global expansion strategy, or firms which want a safe and strategic off-shore entry delivery vehicle. You get the best of both worlds: optimal setup and operation today, and ownership and control later.
                        </p>
                        <p className="hyi-p">
                            At HYI, we dont&apos;t merely enable you to create a GCC, we enable you to create one that lasts. Your global capability center in our BOT model isn&apos;t just future-proof, but 100% yours the moment you&apos;re ready to take it back.
                        </p>
                    </div>
                </div>
            </div>
        </CustomWrapper>
    )
}