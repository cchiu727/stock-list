export default function SearchFilter() {
    return (
        <div className="search-filter">
            <input type="text" id="search" name="search" placeholder="Search..."/><br/>
            <input type="checkbox" id="showStockOnly" name="showStockOnly"/>
            <label for="showStockonly">Only show products in stocks</label>
        </div>
    );
}