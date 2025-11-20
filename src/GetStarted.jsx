import dice from "./assets/dice.png";
import styled from "styled-components";
function GetStarted({toggle}) {
    const Button = styled.button`
        background-color: #000;
        color: #fff;

        padding: 5px 30px;
        border-radius: 5px;
        border: 1px solid #000;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
        background-color: transparent;
        color: #000;
        }
    `;      
    return (
        <main className="diceStart">
        <ul className="flex pt-12 items-center justify-center">
            <li>
            <img src={dice} />
            </li>
            <li>
            <p className="text-8xl">Dice Game</p>
            <div className="text-right pt-4">
                <Button onClick={toggle}>Play Now</Button>
            </div>
            </li>
        </ul>
        </main>
    );
}
export default GetStarted;
