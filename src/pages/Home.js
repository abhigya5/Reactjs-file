import Card from "../layout/Card";
function Home(){
    return (
<>
<div className="container">
    <div className="row">
        <div className="col-lg-3 mt-5" >
            <Card title="title" content="para1" images="images/img1.jpg"></Card>
        </div>
        {/* <div className="col-lg-3 mt-5" >
            <Card title="title1" content="para2" images="images/img2.jpg"></Card>
        </div>
        <div className="col-lg-3 mt-5" >
            <Card  content="para2" images="images/img3.jpg"></Card>
        </div>
        <div className="col-lg-3 mt-5" >
            <Card title="title4" content="para3" images="images/img4.jpg"></Card>
        </div> */}
    </div>
</div>
</>
)
}
export default Home