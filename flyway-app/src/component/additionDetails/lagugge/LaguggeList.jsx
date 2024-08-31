import Lagugge from "../database/Lagugge";
import LaguggeCard from "./LaguggeCard";

const LaguggeList = ()=>{

    const laguggeCardList = Lagugge.map(lagugge=><LaguggeCard lagugge={lagugge}/>) 

    return (
        <div>
            {laguggeCardList}
        </div>
    )
}
export default LaguggeList;