import data from "../layout/data"
import Card from "../layout/Card"
function About(){
return (
<>
<div className="container">
    <div className="row">
        {
            data.map((ele)=>{
                return (
                    <div className="col-lg-3 mt-5">
                        <Card title={ele.title} content={ele.content} image={ele.image}></Card>
                    </div>
                )
            })
        }
    </div>
</div>
</>
    )
}
export default About