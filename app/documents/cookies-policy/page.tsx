// Component Imports (Section Imports)
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";

export default function CookiesPolicyPage() {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="w-full double-gradient-tobottom">
        <Header />
        <section className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
          <div className="w-full max-w-[1280px]">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
              <div className="w-full flex flex-col items-center text-center gap-5 md:w-4/5">
                <h1 className="hyi-h1">Cookies Policy</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className="w-full flex justify-center  px-4 py-6 md:p-6 md:py-8">
        <div className="w-full max-w-[1280px] flex flex-col items-center">
          <div className="w-full flex flex-col gap-6 md:w-11/12 lg:w-4/5">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-brand-700 md:text-xl lg:text-2xl">
                Hire Yoo Infotech Private Limited
              </p>
              <p className="text-base text-dark_mode-200 lg:text-lg">
                <span className="font-semibold">Effective Date:</span> 5/27/2025
                (Applicable from the date of user registration or account
                creation)
              </p>
              <p className="text-base text-dark_mode-200 lg:text-lg">
                <span className="font-semibold">Last Updated:</span> 5/27/2025
              </p>
            </div>
            {/** */}
            <div className="flex flex-col gap-1.5">
              <p className="document-p">
                At{" "}
                <span className="font-semibold">
                  Hire Yoo Infotech Private Limited
                </span>{" "}
                (&quot;Hire Yoo&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) also known as HYI.AI (Virtual Assistance), we
                believe in being transparent about how we collect and use data.
                This Cookies Policy explains how we use cookies and similar
                technologies when you visit or use our website and mobile
                application (together referred to as the &quot;Platform&quot;).
              </p>
              <p className="document-p">
                {
                  "When you continue to browse or use our Platform, you’re agreeing to our use of cookies as described below. But don’t worry - you always have control over your cookie preferences."
                }
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">1. What Exactly Are Cookies?</h2>
              <p className="document-p">
                Cookies are tiny text files that get saved on your device (like
                your phone or computer) when you visit a website or use an app.
                They help websites remember who you are, what you like, and how
                you use the site - all so we can make your experience smoother,
                more personal, and more secure.
              </p>
              <p className="document-p">
                Think of cookies like a digital memory: they help the Platform
                &quot;remember&quot; your preferences, keep you logged in, show
                you relevant content, and even help us spot bugs or improve
                performance.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">2. The Types of Cookies We Use</h2>
              <p className="document-p">
                We use different kinds of cookies depending on what they&apos;re
                meant to do:
              </p>
              <h3 className="document-h3 pt-1">
                a. Strictly Necessary Cookies (can&apos;t be turned off)
              </h3>
              <p className="document-p">
                These cookies are essential for the Platform to work properly.
                They let you log in, navigate the site, access secure areas, and
                perform basic functions like submitting forms. Without these,
                the Platform simply won&apos;t function as it should.
              </p>
              <h3 className="document-h3 pt-1">
                b. Performance & Analytics Cookies
              </h3>
              <p className="document-p">
                These help us understand how you interact with the Platform -
                like which pages you visit most or where you&apos;re facing
                issues. This info is collected anonymously and helps us improve
                how everything runs.
              </p>
              <h3 className="document-h3 pt-1">c. Functional Cookies</h3>
              <p className="document-p">
                These cookies remember your preferences (like your language,
                location, or display settings), so you don&apos;t have to set
                them again each time you visit.
              </p>
              <h3 className="document-h3 pt-1">
                d. Advertising & Targeting Cookies
              </h3>
              <p className="document-p">
                These cookies help us (and our trusted partners) show you
                content and ads that are more relevant to you. They also help us
                measure how effective our campaigns are. We don&apos;t sell your
                data, but these cookies may track your activity across other
                sites.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">
                3. What About Third-Party Cookies?
              </h2>
              <p className="document-p">
                Some cookies on our Platform aren&apos;t set by us - they come
                from services we use, like analytics tools (e.g., Google
                Analytics) or ad networks. These third-party cookies may track
                your activity on other websites as well. We don&apos;t control
                them, but we choose partners carefully and expect them to
                respect your privacy.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">
                4. Managing Your Cookie Preferences
              </h2>
              <p className="document-p">
                We want you to feel in control. When you visit our Platform,
                you&apos;ll see a cookie banner that lets you:
              </p>
              <ul className="document-ul">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies,</li>
                <li>Or choose which ones you&apos;re okay with.</li>
              </ul>
              <p className="document-p">
                You can also change your settings anytime by:
              </p>
              <ul className="document-ul">
                <li>
                  Clicking “Cookie Settings” in our website/app footer (if
                  available), or
                </li>
                <li>
                  Adjusting the settings in your browser to block or delete
                  cookies.
                </li>
              </ul>
              <p className="document-p">
                Just a heads up: if you disable some cookies, parts of the
                Platform might not work the way they&apos;re supposed to.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">5. How Long Do Cookies Stay?</h2>
              <p className="document-p">
                Some cookies last only for your current session (until you close
                the browser), while others stay on your device for a longer
                period so we can recognize you the next time you visit. The
                duration depends on the cookie&apos;s purpose and the settings
                used.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">6. Changes to This Policy</h2>
              <p className="document-p">
                We may update this Cookies Policy from time to time - especially
                if laws change or we adopt new technologies. When that happens,
                we&apos;ll revise the “Last Updated” date and notify you if the
                changes are significant. However, it is your responsibility to
                review these Terms periodically for updates.
              </p>
              <p className="document-p">
                Your continued access to or use of the Platform following the
                posting of changes constitutes your acceptance of the revised
                Terms.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <h2 className="document-h2">Contact Us</h2>
              <p className="document-p">
                We get that cookies can feel a bit technical. If you&apos;re
                unsure about anything or want to know more, just reach out.
                We&apos;re happy to help.
              </p>
              <p className="document-p">
                Email us at:{" "}
                <a
                  href="mailto:support@hyi.ai"
                  className="text-brand-600 hover:underline"
                >
                  support@hyi.ai
                </a>
              </p>
              <p className="document-p">
                Visit us at:{" "}
                <a
                  href="https://hyi.ai/"
                  className="text-brand-600 hover:underline"
                >
                  https://hyi.ai/
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
}
