import Navbar from '@/components/shared/Navbar';
import Footer from "@/components/shared/Footer";
import { montserrat } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
          <Navbar></Navbar>
          <main>{children}</main>
          <Footer></Footer>
        </div>
    );
};

export default AuthLayout;