// Component Imports (Section Imports)
import Header from "@/components/section/general/header";
import Footer from "@/components/section/general/footer";
import PrivacyPolicy from "@/components/documents/privacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <div className="w-full double-gradient-tobottom">
        <Header />
        <section className="w-full flex justify-center px-4 pb-6 md:px-6 md:pb-6 lg:items-center lg:pb-8">
          <div className="w-full max-w-[1280px]">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8 lg:gap-12">
              <div className="w-full flex flex-col items-center text-center gap-5 md:w-4/5">
                <h1 className="hyi-h1">Privacy Policy</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className="w-full flex justify-center  px-4 py-6 md:p-6 md:py-8">
        <div className="w-full max-w-[1280px] flex flex-col items-center">
          <PrivacyPolicy />
        </div>
      </main>
      <Footer />
    </section>
  );
}
