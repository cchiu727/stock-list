import ProductRow from './ProductRow';
import ProductCategory from './ProductCategory'

export default function ProductTable({ list }) {
    const products = list.map(product => 
        <ProductRow product={product} />
    );

    return (
        <table className="productTable">
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <ProductCategory category={"test"}/>
            {products}
        </table>
    );
}