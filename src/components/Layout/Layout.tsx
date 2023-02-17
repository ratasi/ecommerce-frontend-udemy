import Navbar from "../Navbar";
import { LayoutProps } from "./Layout.types"

const Layout = (props: LayoutProps) => {
    const { children } = props;
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout