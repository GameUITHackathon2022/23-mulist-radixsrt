import { Fragment, useContext, useEffect, useState } from 'react'
import paper from '~/pages/icons/paper.png'
import Clothes from '~/pages/icons/Clothes.png'
import Plastic from '~/pages/icons/Plastic.png'
import tree from '~/pages/icons/tree.png'
import Green from '~/pages/icons/Green.png'
import styles from './index.css'
import { loginStateContext } from '~/provider/LoginProvider'
function Temp() {
    return (<Fragment></Fragment>)
}

function Contributor() {
    const { loginState, toggleLoginState } = useContext(loginStateContext);
    const [top8, setTop8] = useState([]);
    const [inforPoint, setInforPoint] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/api/user/top-point').then(res => res.json())
            .then(data => {
                setTop8(data.data)
                console.log(data)
            })
        fetch('http://localhost:3001/api/contributor/point').then(res => res.json())
            .then(data => {
                if (data.success)
                    setInforPoint(data.data)
                console.log(loginState,data)
            })
    }, [])
    return (<Fragment>
        <div className="contr-container">
            <div className="top">
                <div className="top-left">
                    <div className="text-first">
                        <span style={{ color: "#1E8FF8", fontSize: "40px" }}>Bạn</span> và nhiều người khác đã góp phần xây dựng Trái Đất thêm <span style={{ color: "#4FC653", fontSize: "40px" }} >xanh</span>.
                    </div>

                    {
                        inforPoint && (<div className="text-second" >
                            <div className="wraper">

                                <div className="item">
                                    <img style={{ "width": "40px" }} src={paper} />
                                    {inforPoint.paper}kg
                                </div>
                                <div className="item">
                                    <img style={{ "width": "40px" }} src={Clothes} />
                                    {inforPoint.Clothes}kg
                                </div>
                                <div className="item">
                                    <img style={{ "width": "40px" }} src={Plastic} />
                                    {inforPoint.Plastic}kg
                                </div>
                            </div>

                        </div>
                        )
                    }

                    {inforPoint && (<div className="text-third">Tương đương với việc trồng  {Math.floor(inforPoint.value / 2.5)} <img style={{ position: 'relative', width: '30px', top: '8px' }} src={tree} /></div>)}
                </div>
                <div className="top-right">
                    <img style={{ "width": "389px" }} src={Green} />
                </div>
            </div>

            <div className="header">
                Những đóng góp của mọi người
            </div>
            <div className="infor">
                {
                    top8.map(e => (
                        <div className="infor-item">
                            <div className="infor-item-left">{e.userId.name}</div>
                            <div className="infor-item-right">{e.value / 2.5}<img style={{ position: 'relative', width: '30px', top: '8px' }} src={tree} /></div>
                        </div>
                    )

                    )
                }

            </div>
        </div>
    </Fragment >)
}
export default Contributor