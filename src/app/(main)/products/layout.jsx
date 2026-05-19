import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const ProductsLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <main className="bg-[#F3E308]">{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default ProductsLayout;