import { LayoutProps } from "./Layout.types"


const Layout = (props: LayoutProps) => {
    const { children } = props;
    return (
        <div>
            <h2>Hola desde layout</h2>
            {children}
        </div>
    )
}

export default Layout