
import Board from "./List";
import {boardActions} from "../../store/board";
import {getBoard} from "../../pages/api/board";

export default async function Page(){
    const res = await getBoard()

    return(
        <div>
            <Board data={res}></Board>
        </div>

    )
}