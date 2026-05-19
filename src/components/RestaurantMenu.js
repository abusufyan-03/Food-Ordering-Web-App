import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { useParams } from "react-router";
import { CDN_SMALL } from "../utils/constant";
import useRestaurantMenuData from "../utils/useRestaurantMenuData"
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const [showItemIndex, setShowItemIndex] = useState(null);

    const resId = useParams();
    // console.log(resId)
    // const toggleCategories = (catIndex) => {
    //     setOpenResInfo((prev) => ({
    //         ...prev,
    //         [catIndex]: !prev[catIndex]
    //     }))
    // }

    const resInfo = useRestaurantMenuData(resId);
    // console.log("resInfo", resInfo)


    return resInfo.length === 0 ? <RestaurantMenuShimmer /> : (
        <>
            <div className="menu-card">

                {/* {resInfo.map((categories, catIndex) => (
                    <div className="categoroy-section p-4 mx-auto md:w-lg lg:w-210 " key={catIndex}>
                        <div className={`category-header cursor-pointer p-4 bg-slate100 flex justify-between border rounded-lg ${openResInfo[catIndex] ? "bg-slate-200 border-b-0 rounded-b-none" : ''}`} onClick={() => toggleCategories(catIndex)}>
                            <h2 className={`item-title ${openResInfo[catIndex] ? "active" : ''} `}>{categories.title} </h2><span className="open-icon">{openResInfo[catIndex] ? "▲" : "▼"}</span>
                        </div>
                        <div className={`item-list border border-t-0 rounded-b-lg ${openResInfo[catIndex] ? "" : 'hidden'}`}>
                            {categories.itemCards?.map((item, itemIndex) => (
                                <div key={itemIndex} className={`item-card p-4 flex justify-between`}>
                                    <div className="item-info w-1/2" key={itemIndex}>
                                        <div className="name-price flex pr-3">
                                            <h3 className="item-name font-semibold mb-2">{item.card.info.name}</h3>
                                            <span className="item-price font-semibold">{`₹${item.card.info.defaultPrice / 100}`}</span>
                                        </div>
                                        <p className="item-description text-sm">{item.card.info.description}</p>
                                    </div>
                                    <div className="item-image-container w-32 h-32 relative">
                                        <img
                                            className="item-image rounded-lg object-cover w-full h-full"
                                            src={`${CDN_SMALL}/${item.card.info.imageId}`}
                                            alt={item.card.info.name}
                                        />
                                        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 font-semibold bg-white text-green-600 border-0 px-4 py-1 rounded-lg shadow-sm text-sm cursor-pointer">
                                            Add+
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                ))} */}
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