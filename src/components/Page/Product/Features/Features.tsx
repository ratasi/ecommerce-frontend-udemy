import { Grid } from 'semantic-ui-react'
import { dataFeatures } from './Features.data'
import * as S from './Features.styles'

const Features = () => {
    return (
        <S.ContainerFeatures>
            <Grid columns={3} divided>
                <Grid.Row>
                    {dataFeatures.map(({ icon, text }) => (
                        <Grid.Column key={text}>
                            <span>{icon}</span>
                            <p>{text}</p>
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </S.ContainerFeatures>
    )
}

export default Features