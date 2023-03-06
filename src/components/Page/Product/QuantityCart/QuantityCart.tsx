import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import * as S from './QuantityCart.styles'
import { QuantityCartProps } from './QuantityCart.types';

const QuantityCart = (props: QuantityCartProps) => {
    const router = useRouter();
    const { product } = props;
    const { attributes } = product;
    const [openModal, setOpenModal] = useState(false);

    const addCart = () => {
        setOpenModal(true)
    }

    return (
        <>
            <S.ContainerQuantityCart>
                <S.ContainerAddCart>
                    <Button size="huge" onClick={addCart}>Añadir al carrito</Button>
                </S.ContainerAddCart>
            </S.ContainerQuantityCart>
            <Modal open={openModal} onClose={() => setOpenModal(false)} size="tiny">
                <Modal.Header>Producto añadido correctamente a su carrito</Modal.Header>
                <Modal.Content>
                    El producto: <Header>{attributes.name}</Header> se ha añadido al carrito
                </Modal.Content>
                <S.ModalActionsContainer>
                    <Button onClick={() => setOpenModal(false)}>Seguir comprando</Button>
                    <S.ButtonCheckout primary onClick={() => router.push("/checkout")}>
                        Finalizar compra{" "}
                        <Icon name="shopping cart" />
                    </S.ButtonCheckout>
                </S.ModalActionsContainer>
            </Modal>
        </>
    )
}

export default QuantityCart