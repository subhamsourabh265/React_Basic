import './MainDescription.css';

export default function MainDescription(props) {
  return (
    <li class="list-item">
      <img class="list-image" src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
