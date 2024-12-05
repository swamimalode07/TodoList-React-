import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,red:0,green:0,yellow:0});
    let  bluemove=()=>{
        moves.blue+=1;
        setMoves({...moves});//Spread operator used
    }
    let  redmove=()=>{
        moves.red+=1;
        setMoves({...moves});//Spread operator used
    }
    let  greenmove=()=>{
        moves.green+=1;
        setMoves({...moves});//Spread operator used
    }
    let  yellowmove=()=>{
        moves.yellow+=1;
        setMoves({...moves});//Spread operator used
    }
    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue moves count: {moves.blue} </p>
                <button onClick={bluemove} style={{backgroundColor:"blue" ,color:"black"}}>+1</button>
                <p>Red moves count: {moves.red} </p>
                <button onClick={redmove} style={{backgroundColor:"red",color:"black"}}>+1</button>
                <p>Green moves count: {moves.green}</p>
                <button onClick={greenmove} style={{backgroundColor:"green",color:"black"}}>+1</button>
                <p>Yellow moves count: {moves.yellow} </p>
                <button onClick={yellowmove} style={{backgroundColor:"yellow",color:"black"}}>+1</button>
            </div>
        </div>
    )
}