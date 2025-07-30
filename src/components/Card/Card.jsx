import "./styles.css"

function Card(){
   
   return <div className = "card_component">

        <div className="card">
        <h3 className="card_title">User card: {user.type}</h3>
        <img className="avatar" src={user.avatarURL} alt="Users avatar" />
        <p className="card-info">First and last name: {user.fullName}</p>
        <p className="card-info">type of activity: {user.activity}</p>
        <p className="card-info">Hobby: {animal.hobbys}</p>
       
      </div>
    </div>
}

export default Card;