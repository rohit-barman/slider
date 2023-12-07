import axios from "axios";
import { useRouter } from "next/router";

const blogPage = ({blogData}) => {
    const router = useRouter();
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">gafg</div>
                <div className="col-md-6">
                    <h3>test</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
        </div>
    )
}

export default blogPage;


export async function getServerSideProps(context) {
    const {blog_id} = context.query;
    // Return the data as props to the component
    let config = {
        method: 'get',
        url: 'https://api.medusa-commerce.com/store/products',
        headers: { 
           'User-Agent': 'Apidog/1.0.0 (https://apidog.com)'
        }
    }

    axios(config)
    .then((response)=>{
        console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
        console.log(error);
    });
    
    const blogData = {name:"rohit"}
    return {
        props: {blogData},
    };
}