import { Fragment, useContext } from "react";
import DashboardUser from "./user";
import { loginStateContext } from '~/provider/LoginProvider'
import DashboardPartner from "./partner";
import DashboardAdmin from "./admin";

const DashboardPage = () =>{
    const { loginState, toggleLoginState } = useContext(loginStateContext);

    return(
        <Fragment>
            {loginState === 0 && <DashboardUser/>}
            {loginState === -1 && <DashboardPartner/>}
            {loginState === 2 && <DashboardAdmin/>}
        </Fragment>
    )
}

export default DashboardPage;