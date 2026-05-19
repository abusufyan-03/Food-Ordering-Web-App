import { useEffect, useState } from "react";
import { RES_MENU_API } from "./constant";
const useRestaurantMenuData = (resId) =>{
    const [resInfo, setResInfo] = useState([]);
    // calling API


    useEffect(()=>{
        fetchData();
        // console.log("useEffect from useRes")
    },[])

    const fetchData = async() =>{

        try {
            const data = await fetch(RES_MENU_API + resId.id);
            // console.log('Status', data.status);
            // console.log('Headers:', data.headers);
            const json = await data.json();
            // console.log('Json Response', json)

            if (!json) {
                console.error('Empty Response recieved')
                return;
            }
            // console.log(json)
            let resInfo = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.flatMap((cat)=>cat.card.card.categories || []);
            // console.log(resInfo)
            setResInfo(resInfo)

            
        } catch (error) {
            console.error("Error", error)
        }
    }
    return resInfo;
}
export default useRestaurantMenuData;