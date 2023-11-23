const UserMenu=({currentUser})=>{
    return(
        <div>
  <p>{currentUser.email}</p>
  <button>Logout</button>
</div>
    )
}
export default UserMenu