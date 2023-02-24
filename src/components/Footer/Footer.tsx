import Image from 'next/image'
import Link from 'next/link'
import { Header } from 'semantic-ui-react'
import Container from '../Container'
import { dataFooter } from './Footer.data'
import * as S from './Footer.styles'

const Footer = () => {
    return (
        <S.ContainerFooter>
            <Container>
                <S.ContentBlocks>
                    <S.BlockFooter>
                        <S.ContainerLogo>
                            <Image src="/assets/png/logo-shop.png" alt="Logo shop" width="50" height="50" />
                            <Header>TarreDev</Header>
                        </S.ContainerLogo>
                        <p>Crea tu página web desde cero</p>
                        <p>All rights reserved.</p>
                    </S.BlockFooter>

                    {dataFooter.map(({ title, items }) => (
                        <S.BlockFooter key={title}>
                            <S.Title>{title}</S.Title>
                            {items.map(({ name, slug }) => (
                                <Link href={slug} key={name}>{name}</Link>
                            ))}
                        </S.BlockFooter>
                    ))}
                </S.ContentBlocks>
            </Container>
        </S.ContainerFooter>
    )
}

export default Footer