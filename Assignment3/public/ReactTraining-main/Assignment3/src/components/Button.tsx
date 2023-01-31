import './Button.css'
interface ValueProps {
   value:string,
   type:boolean,
   onClick:Function
}
function Button(props:ValueProps){
    return(
        <div className='button' >
            <p onClick={()=>{
                if(!props.type)props.onClick(Number(props.value))
                else props.onClick(props.value)
                }} style={{backgroundColor:props.type?'#E1D4E9':'',color:props.type?'#8E28DC':'',fontWeight:props.type?'bold':''}} >{props.value}</p>
        </div>
    )
}

export default Button;