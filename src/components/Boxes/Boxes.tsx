
import { BoxDataType } from '../../hooks/useGameStateReducer'
import Box from '../Box/Box'

interface BoxesProps{
    boxData: BoxDataType[]
}
const Boxes = (props:BoxesProps) => {
  return (
    <div className="board">
    {props.boxData.map((item, index) => (
      <Box value={item.value} class={item.class} key={index} />
    ))}
  </div>
  )
}

export default Boxes