

interface BoxProps{
  value: string;
  class: string;
}
const Box = (props:BoxProps) => {
  
  
  return (
    <div className={`box ${props.class}`} >{props.value.toUpperCase()}</div>
  )
}

export default Box