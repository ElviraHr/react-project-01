import Button from '../../components/Button/Button.jsx';
import getPlanteaterStatus, {hello, animal} from './data.js';
import "./styles.css";


function Lesson_02() {
  return (
    <div>
      {/*  <p>{hello}</p>*/}
      <div className="animal_card">
        <h3 className="card_title">Animal card: {animal.type}</h3>
        <img className="avatar" src={animal.avatarURL} alt="Animal image" />
        <p className="card-info">Name: {animal.fullName}</p>
        <p className="card-info">Age: {animal.age}</p>
        <p className="card-info">Color: {animal.color}</p>
        <p className="card-info">
          Is planteater? {animal.isPlanteater ? "Yes" : "No"}
        </p>{" "}
        <Button />
      </div>
      <div className="button_container">
        {" "}
        <Button />
      </div>
    </div>
  );
}

export default Lesson_02;