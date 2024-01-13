import React , { useState } from "react";
import Square from "./Square";

const Boards = () =>{
    const [state,setState] = useState(Array(9).fill(null));
    const [isXTurn,setIsXTurn] = useState(true);


    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for(let logic of winnerLogic){
            const [a, b, c] = logic;
            if(state[a] === state[b] && state[b] === state[c] && state[c] !== null){
                return state[a];
            }
        }

        return false;
    }

    const checkDraw = () => {

        const drawLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ];

        for(let logic of drawLogic){
            const [a, b, c] = logic;
            if(state[a] == null || state[b] == null || state[c] == null){
                return false;
            }
        }

        return true;
    }

    const isWinner = checkWinner();
    const isDraw = checkDraw();

    const handleClick = (index) =>{
        if(state[index]!==null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setIsXTurn(!isXTurn);
        setState(copyState);
    }

    const handleReset = () => {
        setState(Array(9).fill(null));
    }

    return(
        <div className="Board-container">
        {isWinner ? (
            <div className="winner-anounce"><div className="winner-text">Player '{isWinner}' Won the game </div><div>
                    <button onClick = {handleReset}>Play Again</button>
                </div>
            </div>
        ) : (
            isDraw ? (
            <div className="winner-announce"><div className="draw-text">Game Draw!!</div> <div>
                    <button onClick = {handleReset}>Play Again</button>
                </div>
            </div>
            ) : (
                    <>
                        <h4 className = "player-text">Player '{isXTurn ? "X" : "O"}' Turn</h4>
                        <div className="board-row">
                            <Square onClick = {()=>handleClick(0)} value={state[0]}/>
                            <Square onClick = {()=>handleClick(1)} value={state[1]} />
                            <Square onClick = {()=>handleClick(2)} value={state[2]}/>
                        </div>
                        <div className="board-row">
                            <Square onClick = {()=>handleClick(3)} value={state[3]}/>
                            <Square onClick = {()=>handleClick(4)} value={state[4]}/>
                            <Square onClick = {()=>handleClick(5)} value={state[5]}/>
                        </div>
                        <div className="board-row">
                            <Square onClick = {()=>handleClick(6)} value={state[6]}/>
                            <Square onClick = {()=>handleClick(7)} value={state[7]}/>
                            <Square onClick = {()=>handleClick(8)} value={state[8]}/>
                        </div>
                    </>
                )
            )
        }
        </div>
    );
}

export default Boards;
