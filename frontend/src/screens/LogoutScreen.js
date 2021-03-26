import { useContext } from 'react'
import AppContext from '../AppContext'
const LogoutScreen = () => {
    const [globalState, setGlobalState] = useContext(AppContext);

    console.log(globalState.loggedIn)
    const logout = () => {
        localStorage.removeItem('jwt')
        localStorage.removeItem('avatar')
        setGlobalState(
            {
                ...globalState,
                loggedIn: false
            }
        )
    }


    return (
        <div className="jumbotron jumbotron-fluid" style={{ 'margin-top': '150px', 'margin-bottom': '150px' }}>
            <div className="container">
                <h2 style={{ 'color': 'black' }}>Are You Sure You Want To Logout</h2>
                <button onClick={logout} className="btn btn-danger my-3">logout anyways</button>
            </div>
        </div>
    )

}
export default LogoutScreen