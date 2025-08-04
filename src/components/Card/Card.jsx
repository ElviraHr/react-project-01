import { user } from "../../homeworks/Homework02/data";
import "./styles.css"

//props - это объект, с помощью которого мы передаем данные из родительского компонента в дочерний
function Card({avatarURL = "", firstName = "Name", lastName = "Last Name", job = "-", hobby = "-"}){
   
   return <div className = "card_component">

        <div className="card">
        <h3 className="card_title">User card: {`${firstName} ${lastName}`}</h3>
        <img className="avatar" src={avatarURL} alt="Users avatar" />
        <p className="card-info">Job: {job}</p>
        <p className="card-info">Hobbys: {hobby}</p>
    
      </div>
    </div>
}

export default Card;