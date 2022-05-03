import {useParams} from "react-router-dom"
import productsData from "../seeds/productsData"
import useDocumentTitle from '../helpers/useDocumentTitle';

function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)
    useDocumentTitle(thisProduct.name)
    return (
        <div>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.description}</p>
        </div>
    )
}

export default ProductDetail