import { Container as ContainerPage } from 'semantic-ui-react'
import { ContainerProps } from './Container.types'


export default function Container({ children }: ContainerProps) {
    return (
        <ContainerPage>{children}</ContainerPage>
    )
}