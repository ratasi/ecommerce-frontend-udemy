import { Divider } from 'semantic-ui-react'
import * as S from './ShowAllProductsButton.styles'

const ShowAllProductsButton = () => {
    return (
        <S.ContainerProductsButton>
            <Divider />
            <S.LinkProduct href="/products">Ver todos los productos</S.LinkProduct>
            <Divider />
        </S.ContainerProductsButton>
    )
}

export default ShowAllProductsButton