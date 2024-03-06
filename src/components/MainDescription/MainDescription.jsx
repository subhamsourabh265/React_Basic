import './MainDescription.css';

export default function MainDescription(props) {
  console.log('MainDescription...');
  return (
    <li className="list-item">
      <img className="list-image" src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
