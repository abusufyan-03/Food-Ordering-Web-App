import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { useParams } from "react-router";
import useRestaurantMenuData from "../utils/useRestaurantMenuData"
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const [showItemIndex, setShowItemIndex] = useState(null);

    const resId = useParams();

    const resInfo = useRestaurantMenuData(resId);
    // console.log("resInfo", resInfo)


    return resInfo.length === 0 ? <RestaurantMenuShimmer /> : (
        <>
            <div className="menu-card">
                {resInfo.map((categories, catIndex)=>(
                    <RestaurantCategory 
                    key={catIndex} 
                    showItem={catIndex === showItemIndex}
                    categoryIndex= {catIndex}
                    setShowItemIndex={setShowItemIndex}
                    category={categories}

                    />
                ))}
            </div>
        </>
    )
}

export default RestaurantMenu;