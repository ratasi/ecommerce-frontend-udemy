import Link from 'next/link';
import { Icon, Menu } from 'semantic-ui-react';
import * as S from './MenuMobile.styles'
import { MenuMobileProps } from './MenuMobile.types'

const MenuMobile = (props: MenuMobileProps) => {
    const { categories } = props

    return (
        <S.ContainerMobileItems>
            {categories.map((category) => (
                <Link href={category.attributes.slug} key={category.id}>
                    <Menu.Item name={category.attributes.name} />
                </Link>
            ))}
            <Menu.Item href="/checkout">
                Carrito <Icon name="shopping cart" />
            </Menu.Item>
        </S.ContainerMobileItems>
    )
}

export default MenuMobile