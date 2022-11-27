import { Fragment, useState, useContext } from 'react';
import './index.css'
import SignUp from './SignUp';
import Event from './Event';
import Experience from './Experience';
import Footer from './Footer';
import Target from './Target';
import {loginStateContext} from '~/provider/LoginProvider'
import Intro from './Intro';
import Donors from './Donors';

function Home() {
    const {loginState} = useContext(loginStateContext);

    const [isSignUp, setSignUp] = useState(false);
    const HandleSignUp = () => {
        setSignUp(!isSignUp)
    }

    // {loginState===false && <SignUp isSignUp={isSignUp} HandleSignUp={HandleSignUp} />}
    //         {
    //             isSignUp === false && loginState===false  &&
    //             <div className='home-wrapper'>
    //                 <p className='home-page-text'>Welcome to Smthland</p>
    //                 <div onClick={HandleSignUp} className='sign-up'>Get Start</div>
    //             </div>
    //         }
    return (
        <Fragment>
            
            <Intro/>
            <Target/>
            <Event/>
            <Experience/>
            <Donors/>
        </Fragment>
    );
}

export default Home;