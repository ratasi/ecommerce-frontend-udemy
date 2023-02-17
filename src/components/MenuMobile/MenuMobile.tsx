import Link from 'next/link';
import { Menu } from 'semantic-ui-react';
import * as S from './MenuMobile.styles'
import { MenuMobileProps } from './MenuMobile.types'

const MenuMobile = (props: MenuMobileProps) => {
    const { categories } = props;

    return (
        <S.ContainerMobileItems>
            {categories.map((category) => (
                <Link href={category.link} key={category.id}>
                    <Menu.Item name={category.label} />
                </Link>
            ))}
        </S.ContainerMobileItems>
    )
}

export default MenuMobile