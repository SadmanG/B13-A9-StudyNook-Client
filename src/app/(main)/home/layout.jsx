import Banner from '@/components/shared/Banner';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import SummerCareSection from '@/components/shared/SummerCareSection';

const HomeLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <main className="bg-[#F3E308]">{children}</main>
            <SummerCareSection></SummerCareSection>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;