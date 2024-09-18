import React from "react";
import Cardcls from "../../layout/Cardcls";
class Contact extends React.Component{
    render(){
        return (
            <>
            {/* <h1>Class Component</h1>
            <p>Lorem{18+9}</p> */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Cardcls title="Title1" content="Contrary to popular belief, Lorem Ipsum is not simply random text." image="images/img1.jpg"  />
                    </div>
                    <div className="col-lg-3">
                        <Cardcls title="Title2" content="Contrary to popular belief, Lorem Ipsum is not simply random text." image="images/img2.jpg"/>
                    </div>
                    <div className="col-lg-3">
                        <Cardcls title="Title3" content="Contrary to popular belief, Lorem Ipsum is not simply random text." image="images/img3.jpg"/>
                    </div>
                    <div className="col-lg-3">
                        <Cardcls title="Title3" content="Contrary to popular belief, Lorem Ipsum is not simply random text." image="images/img4.jpg"/>
                    </div>
                </div>
            </div>

            
            
            </>
        )
    }
}
export default Contact