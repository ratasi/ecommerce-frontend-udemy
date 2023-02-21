import { useGetCategoriesApi } from '@/api/categories';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import MenuMobile from '../MenuMobile';
import * as S from './Navbar.styles';
import { Navbar, NavbarProps } from './Navbar.types';


const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState('');
    const [showMenuBurguerMobile, setShowMenuBurguerMobile] = useState(false);
    const router = useRouter();
    const { result }: NavbarProps = useGetCategoriesApi()
    if (result === null) return null;
    const dataCategories = result.data;

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
                        {dataCategories.map((data: Navbar) => (
                            <Menu.Item key={data.id} name={data.attributes.name} onClick={() => onClickItemMenu(data.attributes.slug)} active={activeMenu === data.attributes.name} />
                        ))}
                    </S.ContainerMenuDesktop>

                    <S.ContainerBurguerMenu position='right' onClick={() => setShowMenuBurguerMobile(!showMenuBurguerMobile)}>
                        <Icon name="sidebar" />
                    </S.ContainerBurguerMenu>
                </Menu>
                {showMenuBurguerMobile && (
                    <MenuMobile categories={dataCategories} />
                )}
            </Container>
        </S.ContainerNavbar>
    )
}

export default Navbar