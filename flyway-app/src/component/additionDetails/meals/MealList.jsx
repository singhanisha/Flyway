import Meals from "../database/Meal"
import MealCard from "./MealCard"

const MealList = ()=>{

    const mealCardList = Meals.map(meal=><MealCard meal={meal}/>) 

    return (
        <div>
            {mealCardList}
        </div>
    )
}
export default MealList;