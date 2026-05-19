import ItemList from "./ItemList";
const RestaurantCategory = ({category, showItem, setShowItemIndex, categoryIndex}) => {
    // const [showItems, setShowItems] = useState(false)
   const handleToggle = () =>{
    setShowItemIndex((prev) => prev===categoryIndex? null: categoryIndex)
   }
   
    return (
        <>
        {/* category section */}
            <div className="p-4 mx-auto md:w-lg lg:w-210">
                {/* category header */}
                <div className={`text-lg font-semibold cursor-pointer p-4 bg-slate100 flex justify-between border rounded-lg `} onClick={handleToggle}>
                    <h2>{category.title} <span>({category.itemCards.length})</span></h2>
                    <span>⬇️</span>
                </div>

                {/* categories item */}
               
                    <div className={`item-list border border-t-0 rounded-b-lg `}>
                            {category.itemCards?.map((item, itemIndex) => (
                                showItem && <ItemList key={itemIndex} item={item}/>
                            ))}

                        </div>
              
            </div>
        </>
    )
}

export default RestaurantCategory;

/* 
categories-section 
   categories-header
   item-list
    item card
*/
