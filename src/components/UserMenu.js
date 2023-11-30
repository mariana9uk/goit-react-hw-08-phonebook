import { useDispatch, useSelector } from "react-redux"
import { logoutThunk } from "redux/authOperations"
import { selectAuth } from "redux/selectors"



const UserMenu=()=>{
const dispatch=useDispatch()
const handleClick=()=>{
    dispatch(logoutThunk())
}
const {user} = useSelector(selectAuth)
    return(
        <div>
  <p>{user.email}</p>
  <button onClick={handleClick}>Logout</button>
</div>
    )
}
export default UserMenu