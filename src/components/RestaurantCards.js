// import "../style.css"
import { CDN_URL } from "../utils/constant.js"
const RestaurantCards = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    const { deliveryTime } = resData?.info.sla
    return (
        <div className="res-card bg-slate-50 rounded-lg shadow-lg border h-78 flex flex-col">
            <div className="res-media">
                <img className="res-img w-full h-40 object-cover rounded-t-lg" src={CDN_URL + cloudinaryImageId} />
                {/* <div className="dumyImg"></div> */}
            </div>
            <div className="res-info px-4 text-sm pb-4 flex flex-col flex-1">
                <p className="res-name text-lg font-semibold mt-2 overflow-hidden text-ellipsis whitespace-nowrap">{name}</p>
                <p className="res-cuisine mb-3 overflow-hidden text-ellipsis whitespace-nowrap">{cuisines.join(', ')}</p>
                <div className="mt-auto flex items-center gap-2">
                    <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded-md">
                        ⭐ {avgRating}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCards;