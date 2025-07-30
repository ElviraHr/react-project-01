import { user } from "../../homeworks/Homework02/data";
import "./styles.css"


function Card(){
   
   return <div className = "card_component">

        <div className="card">
        <h3 className="card_title">User card: {user.fullName}</h3>
        <img className="avatar" src={user.avatarURL} alt="Users avatar" />
      {/* // <p className="card-info">First and last name: {user.fullName}</p> */}
        <p className="card-info">Job: {user.activity}</p>
        <p className="card-info">Hobbys: {user.hobbys}</p>
    
      </div>
    </div>
}

export default Card;