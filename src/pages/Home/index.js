
import {Link} from "react-router-dom"

const Home = ({arrayMembers}) => {

    return (
        <>
            {arrayMembers.map((element,index)=> (
                <div key = {index}>
                       <Link to ={element.type === "pj" ?  `/company/${element.id}` : `/customer/${element.id}`}>{element.name}</Link>
                </div>
            ))}
        </>

    )
}

export default Home