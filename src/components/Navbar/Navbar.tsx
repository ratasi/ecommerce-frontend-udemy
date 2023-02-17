import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import MenuMobile from '../MenuMobile';
import * as S from './Navbar.styles';

const dataNavbar = [
    {
        id: 1,
        label: "Home",
        link: "/"
    },
    {
        id: 2,
        label: "Categories",
        link: "/categories"
    },
    {
        id: 3,
        label: "Contacto",
        link: "/contacto"
    },
    {
        id: 4,
        label: "Carrito",
        link: "/carrito"
    },
]

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('');
    const [showMenuBurguerMobile, setShowMenuBurguerMobile] = useState(false);
    const router = useRouter();

    const onClickItemMenu = (slug: string) => {
        setActiveMenu(slug);
        router.push(slug)
    }

    return (
        <S.ContainerNavbar>
            <Container>
                <Menu secondary>
                    <S.ContainerLogo href="/">
                        <Image src="/assets/png/logo-shop.png" alt="Logo TarreDev" width="50" height="50" priority />
                        <span>TarreDev</span>
                    </S.ContainerLogo>
                    <S.ContainerMenuDesktop position="right">
                        {dataNavbar.map((data) => (
                            <Menu.Item name={data.label} key={data.id} onClick={() => onClickItemMenu(data.link)} active={activeMenu === data.label} />
                        ))}
                    </S.ContainerMenuDesktop>

                    <S.ContainerBurguerMenu position='right' onClick={() => setShowMenuBurguerMobile(!showMenuBurguerMobile)}>
                        <Icon name="sidebar" />
                    </S.ContainerBurguerMenu>
                </Menu>
                {showMenuBurguerMobile && (
                    <MenuMobile categories={dataNavbar} />
                )}
            </Container>
        </S.ContainerNavbar>
    )
}

export default Navbar