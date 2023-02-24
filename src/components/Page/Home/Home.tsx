import Banner from './Banner'
import BestSellers from './BestSellers'
import FirstBlock from './FirstBlock'
import Newsletter from './Newsletter'
import ShowAllProductsButton from './ShowAllProductsButton'

const HomePage = () => {
    return (
        <>
            <FirstBlock />
            <BestSellers />
            <ShowAllProductsButton />
            <Banner />
            <Newsletter />
        </>
    )
}

export default HomePage