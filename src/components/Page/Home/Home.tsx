import Banner from './Banner'
import BestSellers from './BestSellers'
import FirstBlock from './FirstBlock'
import ShowAllProductsButton from './ShowAllProductsButton'

const HomePage = () => {
    return (
        <>
            <FirstBlock />
            <BestSellers />
            <ShowAllProductsButton />
            <Banner />
        </>
    )
}

export default HomePage