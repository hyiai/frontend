import CustomWrapper from "@/components/shared/customWrapper";

export default function Service() {
  return (
    <CustomWrapper padding="px-6 my-0 py-10 pt-15 md:py-1">
      <div className="w-full mx-auto z-10">
        {/* Introductory Para   graph */}
        <p className="hyi-p mb-6 md:mb-10 ">
          Building a Global Capability Center (GCC) from scratch is time-consuming, effortful, and costly. From office establishment and IT installation to talent acquisition and management of day-to-day operations-it&apos;s an uphill task. That&apos;s where HYI&apos;s GCC as a Service (GCCaaS) steps in. We do it all so that you can get to work right away with an offshore high-performing team. With GCCaaS, HYI gives you an operational-ready functional center with infrastructure, experienced personnel, management, and support. No extra time for installation or struggling with complex logistics. Your team can start delivering results from day one.
        </p>

        {/* First Main Heading */}
        <h2 className="hyi-h1 mb-6">
          What You Get with HYI&apos;s GCCaaS
        </h2>
        {/* Sub-sections */}
        <div className="space-y-16">
          {/* Speed to Launch */}
          <div className="mb-6">
            <h3 className="hyi-h3 mb-4">Speed to Launch</h3>
            <p className="hyi-p">
              Our pre-set templates and pre-established delivery sites mean your operations can be up and running in weeks, not months. You don&apos;t need to sit back and wait for office deployment, recruitment, or system integration-everything gets the fast-track treatment with us.
            </p>
          </div>

          {/* Pre-Built Infrastructure */}
          <div className="mb-6">
            <h3 className="hyi-h3 mb-4">Pre-Built Infrastructure</h3>
            <p className="hyi-p">
              With intelligent office spaces to contain IT environments, we&apos;ve pre-integrated what you need to get started and run straight away. It includes high-speed networking, data security solutions, and cloud-optimized platforms.
            </p>
          </div>

          {/* Fully Managed Operations */}
          <div className="mb-6">
            <h3 className="hyi-h3 mb-4">Fully Managed Operations</h3>
            <p className="hyi-p">
              We take care of recruitment, HR, payroll, compliance, IT support, and more-you don&apos;t need to worry about day-to-day operations. You maintain visibility and control without operation overhead.
            </p>
          </div>

          {/* Cultural Alignment */}
          <div className="mb-6">
            <h3 className="hyi-h3 mb-4">Cultural Alignment</h3>
            <p className="hyi-p">
              Your offshore team will work in peace with your company&apos;s values, processes, and communication practices. We believe in creating long-term cultural ties so that your people feel like an actual extension of your company.
            </p>
          </div>

          {/* Scalable Model */}
          <div className="mb-6">
            <h3 className="hyi-h3 mb-4">Scalable Model</h3>
            <p className="hyi-p">
              Need to scale fast or shift fast? No problem. Our model allows you to scale your team up or down to address changing business demands, with no long-term commitments and setup delay.
            </p>
          </div>
        </div>

        {/* Second Main Heading */}
        <h2 className="hyi-h1 mb-6">
          What You Get with HYI&apos;s GCCaaS
        </h2>

        {/* Bulleted List */}
        <ul className="hyi-p list-disc list-inside mb-6">
          <li>Startups to scale up and down fast without the hassle of building internal teams from the ground up</li>
          <li>Enterprises in need of offshore delivery models as a stepping stone to full-fledged operations</li>
          <li>Businesses interested in cutting operating costs off without sacrificing high-quality delivery.</li>
          <li>Founders interested in offshoring a plug-and-play team without infrastructure, compliance, and hiring issues.</li>
        </ul>

        {/* Concluding Paragraph */}
        <p className="hyi-p">
          With HYI, you don&apos;t merely buy an offshore office-you buy a trusted partner that serves to make you wiser and quicker. Allow us to manage the administration and setup so you can concentrate on innovation, customers, and business success.
        </p>
      </div>
    </CustomWrapper>
  )
}
