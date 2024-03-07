import MainDescription from '../MainDescription/MainDescription';
import { LIST_DATA } from '../../data';
import './MainDesc.css';

export default function MainDesc() {
    return (
        <section id="main-description">
          <ul id="list-item">
            {LIST_DATA.map((data) => (
              <MainDescription key={data.title} {...data} />
            ))}
          </ul>
        </section>
    );
}