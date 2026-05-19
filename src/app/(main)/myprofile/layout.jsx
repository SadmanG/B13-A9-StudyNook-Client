import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const MyProfileLayout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            <main className="bg-[#F3E308]">{children}</main>
            <Footer></Footer>
        </>
    );
};

export default MyProfileLayout;