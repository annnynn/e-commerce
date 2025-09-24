const SortProducts = ({sortingProducts, handleSortChange}) => {
    return (
        <div>
                <select value={sortingProducts} onChange={handleSortChange}>
                    <option value="default">Sorting by</option>
                    <option value="-created_at">New products first</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                </select>
            </div>
    )
}

export default SortProducts;