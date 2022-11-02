import React from "react";
import FilterItem from "./FilterItem";

function FiltersList() {
    const data = ["ecoscore", "nutriscore", "vegan", "halal", "local"];

    return (
        <div className="filters">
            {data.map((item) => (
                <FilterItem name={item} />
            ))}
        </div>
    );
}

export default FiltersList;
