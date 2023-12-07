import Link from "next/link";

const index = () => {
    const blogs = [
        {id:1, title: "mobile", description: "test"},
        {id:2, title: "mobile1", description: "test2"},
        {id:3, title: "mobile2", description: "test3"},
    ]
    return (
        <section>
            <div className="container">
                <div className="row">
                {blogs.length > 0 && blogs.map((item, index)=>{
                    return(
                        <div className="col-sm-3" key={index}>
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <Link href={`blog/${item.id}`} className="btn btn-primary">Go somewhere</Link>
                            </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </section>    
    ) 
}
export default index;