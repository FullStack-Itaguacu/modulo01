import { useContext } from "react";
import { ContadorContext } from "../context/ContadorContext";

function Item(props) {
    const {dados} = useContext(ContadorContext)
    return ( 
        <div>
            <h1>O valor do contador é {dados.count}</h1>
        </div>
     );
}

export default Item;