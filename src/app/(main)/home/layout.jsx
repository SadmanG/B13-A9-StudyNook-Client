import Banner from '@/components/shared/Banner';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import PlatformFeaturesSection from '@/components/shared/PlatformFeaturesSection';

const HomeLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <main>{children}</main>
            <PlatformFeaturesSection></PlatformFeaturesSection>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;