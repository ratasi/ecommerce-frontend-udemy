import { ChangeEvent, useState } from 'react'
import { Form, Header } from 'semantic-ui-react'
import * as S from './Newsletter.styles'

const Newsletter = () => {
    const [email, setEmail] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const onSubmit = () => {
        // SEND EMAIL
        console.log("Submit form")
    }

    return (
        <S.ContainerNewsletter>
            <Header size='huge'> ¿Quieres estar al día? </Header>
            <p>Suscríbete a nuestra newsletter para estar al tanto de todo el contenido que subamos</p>
            <div>
                <Form onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Input
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                        />
                        <Form.Button content="Enviar" primary />
                    </Form.Group>
                </Form>
            </div>
        </S.ContainerNewsletter>
    )
}

export default Newsletter