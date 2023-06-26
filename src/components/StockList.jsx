import SearchFilter from './SearchFilter';
import ProductTable from './ProductTable';

export default function StockList({ list }) {
    return (
        <div className="stockList">
            <SearchFilter />
            <ProductTable list={list}/>
        </div>
    );
}