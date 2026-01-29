import { ProductType } from "../../types/types";
import ProductItem from "../ProductItem/ProductItem";
import css from "./ProductsList.module.css"

interface ProductsListProps {
    products: ProductType[],
}
const ProductsList = ({products}: ProductsListProps)=>{
    return <ul className={css.list}>
        {
            products.map(product => 
                <li key={product.id} className={css.listItem}>
                    <ProductItem product= {product}/>
                </li>
            )
        }
    </ul>
}

export default ProductsList;