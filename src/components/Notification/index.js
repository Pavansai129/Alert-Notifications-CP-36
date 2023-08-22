import {GrFormClose} from 'react-icons/gr'
// Write your code here
const Notification = props => {
  const {children} = props
  return (
    <div>
      <div>{children}</div>
      <GrFormClose />
    </div>
  )
}

export default Notification
