import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const DetailsLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default DetailsLayout;