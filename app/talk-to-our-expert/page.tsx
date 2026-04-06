import Footer from "@/components/section/general/footer";
import Header from "@/components/section/general/header";
import Calendly from "@/components/shared/calendly";
import CustomWrapper from "@/components/shared/customWrapper";

export default function Home() {

    return (
        <section className="w-full h-full flex flex-col items-center">
            <Header />
            <CustomWrapper>
                <div className=" w-full h-full flex items-center justify-center">
                    <Calendly />
                </div>
            </CustomWrapper>

            <Footer />
        </section>
    )
}