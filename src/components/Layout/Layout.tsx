import Footer from "../Footer";
import Navbar from "../Navbar";
import { LayoutProps } from "./Layout.types"

const Layout = (props: LayoutProps) => {
    const { children } = props;
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout