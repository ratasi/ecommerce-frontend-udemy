import { useRouter } from "next/router"
import { Button, Grid, Image } from "semantic-ui-react"

const Custom404 = () => {
    const router = useRouter()

    const goHome = () => {
        router.push("/")
    }

    return (
        <div style={{ padding: 40 }}>
            <Grid verticalAlign="middle" centered>
                <Image src="/assets/png/error-404.png" alt="Error 404" size="large" />
            </Grid>
            <Grid centered>
                <Button size="large" color="olive" circular onClick={goHome}>Volver a la home</Button>
            </Grid>
        </div>
    )
}

export default Custom404