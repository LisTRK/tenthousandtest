import { ProductType } from "../../types/types"
import css from "./ProductItem.module.css"

interface ProductItemProps{
    product: ProductType
}

const ProductItem = ({product}: ProductItemProps)=> {
    return <div className={css.conteiner}>
            <img className={css.img}
                src={product.thumbnail} 
                alt={product.title} 
            />
            <h3 className={css.title}>{product.title}</h3>
            
             </div>
};
export default ProductItem;