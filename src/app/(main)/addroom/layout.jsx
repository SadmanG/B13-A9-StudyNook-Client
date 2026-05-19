import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const AddRoomLayout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
            <main className="bg-sky-300">{children}</main>
            <Footer></Footer>
        </>
    );
};

export default AddRoomLayout;