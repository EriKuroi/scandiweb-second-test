import { PureComponent } from 'react';
import SourceProductCard from 'SourceComponent/ProductCard/ProductCard.component'

export class ProductCard extends SourceProductCard {
 render() {
    return (
        <p>
            We have overridden the ProductCard component!
        </p>
    );
 }
}

export default ProductCard;