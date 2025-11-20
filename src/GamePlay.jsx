import { useState } from "react";
import styled, { useTheme } from "styled-components";

function GamePlay() {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const [Error,SetError] = useState();

  const [Score , SetScore] = useState(0);

  const [SelectValue, SetSelectValue] = useState();

  const [CurrentDice, SetCurrentDice] = useState(1);

  const [Rule,SetRule]= useState(false);

  const rollDice = () => {
    if (!SelectValue){

      SetError("please select the number");

      return;
    } 

   
    const randomNumber = generateRandomNumber(1, 7);
    SetCurrentDice((prev) => randomNumber);

     if ( SelectValue === randomNumber){
    SetScore((prev)=> prev + randomNumber);
  }
  else{
    SetScore((prev)=> prev - 2);
  }

  
  SetSelectValue(undefined);
  };

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const SelectHandler= (value) =>{
    SetSelectValue(value)

    SetError("");
  }

  const Box = styled.div`
    cursor: pointer;
    border: 1px solid #000;
    margin: 0 10px 0 10px;
    font-size: 20px;
    padding: 0 10px 0 10px;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};

    /* &:hover{
        background:#000;
        color:#fff;
       } */
  `;

  const ImageBox = styled.div`
    text-align: -webkit-center;
    cursor: pointer;
  `;

  const ResetScore = () =>{
     SetScore(0);
  }

  return (
    <div>
      <div className="flex py-10 px-40 justify-between items-center">
        <div>
          <p className="text-center">
            <span className="text-4xl font-bold">{Score}</span>
            <br />
            Total Score
          </p>
        </div>

        <div className="flex">
          <p>{Error}</p>
          {arrayNumber.map((value, i) => (
            <Box
              isSelected={value === SelectValue}
              onClick={() => SelectHandler(value)}
            >
              {value}
            </Box>
          ))}
        </div>
      </div>

      <ImageBox className="mt-10">
        <img src={`../public/dice_${CurrentDice}.png`} onClick={rollDice} />
        <p>Click on Dice to roll</p>
        <br />
        <button className="py-1 px-5 rounded-lg border bg-white text-black cursor-pointer" onClick={ResetScore}>
          Reset Score
        </button>
        <br />
        <button className="mt-2 py-1 px-5 rounded-lg border bg-black text-white cursor-pointer" onClick={() => SetRule((prev)=> !prev)}>
          {Rule ? "Hide": "Show"} Rules
        </button>

        {Rule && <p>this is a rulebox</p>}
      </ImageBox>
    </div>
  );
}

export default GamePlay;
