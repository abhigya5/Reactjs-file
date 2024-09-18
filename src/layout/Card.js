function Card({image,title,content}) {
    console.log("image")
   return (

        <div className="card mt-5 ">
            <img src={image}/>
            <div className="card-body">
                <h3>{title?? "dummy title"}</h3>
                <p>{content?? "dummy para"}</p>
            </div>
        </div>
    )
}
export default Card