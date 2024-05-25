const BAButton = (props:any)=>{
    return ( <button onClick={props.onClick} className={props.className}>{props.btnValue} </button>)
}

export default BAButton;