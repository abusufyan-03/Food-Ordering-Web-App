import resList from "../utils/resList";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect, useCallback, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { RES_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filterRestaurant, setFilterRestaurant] = useState([]);

    useEffect(() => {
        // console.log("useEffect get called!")
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_API);

        const json = await data.json();
        console.log(json);

        setRestaurantList(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilterRestaurant(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }

    const handleSearch = () => {
        let searchedRestaurant = restaurantList.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilterRestaurant(searchedRestaurant)
    }
    const onlineStatus = useOnlineStatus();
    // console.log("online status:", onlineStatus)

    if(onlineStatus == false) return <h1>Look like you're offline</h1>

    const {loggedInUser, setUserName} = useContext(UserContext)

    return restaurantList.length == 0 ? <Shimmer /> : (
        <main className="main p-4 md:p-6 lg:p-8">
            <section>
                <div className="search-container m-4">
                    <input
                        className="search-bar p-2 border rounded-lg mr-2"
                        id="search"
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            console.log(searchText)
                        }}
                         onKeyPress={(e)=>{
                            if(e.key === 'Enter'){
                                handleSearch();
                            }
                        }}
                        type="text"
                        placeholder="search..." />
                    <button className="search-btn btn border p-2 rounded-lg mr-2 hover:bg-black cursor-pointer hover:text-white font-semibold"
                    onClick={()=>{
                        handleSearch();
                    }}
                    >Search</button>
                    <button className="filter-btn btn border p-2 rounded-lg mt-2 cursor-pointer hover:bg-black hover:text-white font-semibold"
                        onClick={() => {
                            const filterRestaurant = restaurantList.filter((res) => res.info.avgRating > 4.5)
                            setFilterRestaurant(filterRestaurant);
                        }}

                    >Top Rated Restaurant</button>

                </div>
                <div className="restaurant-container grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
                    {filterRestaurant.map((restaurant, index) => <Link key={restaurant.info.id}   to={`restaurants/${restaurant.info.id}`}><RestaurantCards resData={restaurant} /></Link> )}
                </div>
            </section>
        </main>
    )
}

export default Body;