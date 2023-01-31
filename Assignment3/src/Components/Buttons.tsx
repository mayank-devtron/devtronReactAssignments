import React, { useState } from'react';
import "./Buttons.css"
const ButtonsCompo=()=>{
    let[value1,setValue1]=useState<number>();
    let[operator,setOperator]=useState<string>();
    let[value2,setValue2]=useState<number>();
    let[finalValue,setFinalValue]=useState<number>();
    const inputV1=(k:number)=>{
        if(value1===undefined){
            finalValue=undefined;
            setFinalValue(finalValue);
            value1=k;
            setValue1(value1);
            console.log(value1);
            // console.log(value2);
            // console.log(operator);
        }else if(value1 !==undefined && operator===undefined){
            value1=value1*10+k;
            setValue1(value1);
            console.log(value1);
        }else if(value2===undefined && operator!==undefined){
            value2=k;
            setValue2(value2);
            console.log(value2);
        }else if(value2!==undefined){
            value2=value2*10+k;
            setValue2(value2);
            console.log(value2);
        }
    }
    const inputOperator=(k:string)=>{
        if(operator!==undefined){
            console.error("Two Operators Found");
        }
        else{
            operator=k;
            setOperator(operator);
            console.log(operator);
        }
    }
    const operation=()=>{
        if(value1!==undefined && operator===undefined && value2===undefined){
            finalValue=value1;
            setFinalValue(finalValue);
            cancel();
        }
        else if(value1!==undefined && operator!==undefined && value2!==undefined){
            
            switch(operator){
                case "+":
                    finalValue=value1+value2;
                    setFinalValue(finalValue);
                    console.log(value1+value2);
                    break;
                case "-":
                    finalValue=value1-value2;
                    setFinalValue(finalValue);
                    console.log(value1-value2);
                    break;
                case "*":
                    finalValue=value1*value2;
                    setFinalValue(finalValue);
                    console.log(value1*value2);
                    break;   
                case "/":
                    finalValue=value1/value2;
                    setFinalValue(finalValue);
                    console.log(value1/value2);
                    break;
            }
            value1=finalValue;
            setValue1(value1);
            setOperator(undefined);
            setValue2(undefined);
        //    cancel();
        }else{
            console.error("Wrong Operation");
        }
    }
    const cancel=()=>{
            // finalValue=undefined;
            // setFinalValue(finalValue);
            value1=undefined;
            value2=undefined;
            operator=undefined;
            setValue1(value1);
            setValue2(value2);
            setOperator(operator);
    }
    const clear=()=>{
        if(value2!==undefined){
            value2=Math.floor(value2/10);
            setValue2(value2);
        }
        else if(operator!==undefined){
            operator=undefined;
            setOperator(operator);
        }else if(value1!==undefined){
            value1=Math.floor(value1/10);
            setValue1(value1);
        }else{
            cancel();
        }
    }
    return (
        <center className='button'>
           = {value1}{operator}{value2}
        <div><button onClick={()=>inputV1(1)}>1</button><button onClick={()=>inputV1(2)}>2</button><button onClick={()=>inputV1(3)}>3</button><button onClick={()=>inputOperator("+")}>+</button></div>
        <div><button onClick={()=>inputV1(4)}>4</button><button onClick={()=>inputV1(5)}>5</button><button onClick={()=>inputV1(6)}>6</button><button onClick={()=>inputOperator("-")}>-</button></div>
        <div><button onClick={()=>inputV1(7)}>7</button><button onClick={()=>inputV1(8)}>8</button><button onClick={()=>inputV1(9)}>9</button><button onClick={()=>inputOperator("*")}>*</button></div>
        <div><button onClick={()=>inputV1(10)}>.</button><button onClick={()=>inputV1(0)}>0</button><button onClick={operation}>=</button><button onClick={()=>inputOperator("/")}>/</button></div>
        <div><button onClick={clear}>Clear</button><button onClick={cancel}>Cancel</button></div>
        </center>
    );
}
export default ButtonsCompo;