import Filter from "./Filter.js";


const AllCategories = () => {
    return (<div>
        <h1>Выбор категории:</h1>
        {[`ITALIAN`,`SEAFOOD`,`APPETIZERS`,`SALADS`, `ALL`].map(category => <Filter category={category} /> )}
        
    </div>)
}

export default AllCategories;