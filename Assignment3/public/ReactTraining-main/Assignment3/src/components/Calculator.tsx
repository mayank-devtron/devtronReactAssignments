import { clear } from "console";
import { useState } from "react";
import Button from "./Button";
import './Calculator.css';
function Calculator(){
    const [first,setFirst] = useState<number>();
    const [second,setSecond] = useState<number>();
    const [type,setType] = useState<string>();
    const [result,setResult] = useState<number>();

    function assignNumber(num:number){
        if(!type){
            if(first)
                setFirst(Number(first*10)+num);
            else
                setFirst(num);
        }else{
            if(second)
                setSecond(Number(second*10)+num);
            else
                setSecond(num);
            
        }
        console.log(first,type,second);

    }
    function Result():string {
        if(first&&second)
        switch(type){
            case '+':return (first+second).toString()
            case '-':return (first-second).toString();
            case 'X':return (first*second).toString();
            case '÷':return (first/second).toString();
        }
        return '';
    }
    function assignType(stype:string){
        if(first&&second){
            switch(type){
                case '+': setFirst(first+second);break;
                case '-': setFirst(first-second);break;
                case 'X': setFirst(first*second);break;
                case '÷': setFirst(first/second);break;
            }
            setType(stype);
            setSecond(undefined);
            return;
        }
        if(first&&!second){
            setType(stype);
        }
        
    }
    function clear(){
        setFirst(undefined);
        setSecond(undefined);
        setType(undefined);
        setResult(undefined);
    }
    function deleteL(){
        if(second){
            setSecond(Math.floor(second/10));
            return;
        }
        if(type){
            setType(undefined);
            return;
        }
        
        if(first)
        setFirst(Math.floor(first/10));
        
    }
    
    return(
        <div className="calc" >
            <p>Calculator</p>
            <p>{first&&first}{type&&type}{type&&second }</p>
            <p>{Result()}</p>
            <div>
                <Button value={'9'} onClick={assignNumber} type={false} /><Button value={'8'} onClick={assignNumber} type={false}/><Button value={'7'} onClick={assignNumber} type={false}/><Button onClick={assignType}   value={'÷'} type={true}/>
                <Button value={'6'} onClick={assignNumber} type={false}/><Button value={'5'} onClick={assignNumber} type={false}/><Button value={'4'} onClick={assignNumber} type={false}/><Button onClick={assignType}   value={'X'} type={true}/>
                <Button value={'3'} onClick={assignNumber} type={false}/><Button value={'2'} onClick={assignNumber} type={false}/><Button value={'1'} onClick={assignNumber} type={false}/><Button onClick={assignType}   value={'-'} type={true}/>
                <Button value={'0'} onClick={assignNumber} type={false}/><Button onClick={deleteL}  value={'⌫'} type={true}/><Button onClick={clear}   value={'C'} type={true}/><Button onClick={assignType}   value={'+'} type={true}/>
            </div> 
        </div>
    )
}

export default Calculator;