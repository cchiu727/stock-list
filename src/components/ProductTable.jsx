import ProductRow from './ProductRow';

function SearchFilter() {
    return (
        <div className="search-filter">
            <input type="text" id="search" name="search" placeholder="Search..."/><br/>
            <input type="checkbox" id="showStockOnly" name="showStockOnly"/>
            <label for="showStockonly">Only show products in stocks</label>
        </div>
    );
}

function ProductCategory({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>

    return (
        <tr>
            <td>
                {name}
            </td>
            <td>
                {product.price}
            </td>
        </tr>
    );
}

export default function ProductTable({ list }) {
    const uniqueCategories = Array.from(new Set(list.map(product => 
        product.category
    )));
    
    const newList = uniqueCategories.forEach(category => {
        const productsInCategory = list.filter(product => product.category === category);

        productsInCategory.forEach(product => {
            <ProductRow product={product} />
        });
    })

    const products = list.map(product => 
        <ProductRow product={product} />
    );

    return (
        <table className="productTable">
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {products}
        </table>
    );
}