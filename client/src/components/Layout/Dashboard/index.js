import { Fragment } from "react"
import Header from "./Header"
const Dashboard = ({children}) =>{
    return(
        <Fragment>
            <Header/>
            {children}
        </Fragment>
    )
}

export default Dashboard