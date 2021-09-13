import { useParams } from "react-router-dom"
import { members } from "../Members"
import { Link } from "react-router-dom"


const Company = () => {
const {id} =  useParams()
const member = members.find((element) => element.id === id )
return (
<div>
  <h1>Detalhes da Empresa</h1>

  <p>
    Nome da empresa: {member && member.name}
  </p>

  <Link to="/">
    Voltar
  </Link>
</div>


)


}

export default Company 