import { descriptions } from "../../data";
import { getRandomInt } from "../../data";
import headerImg from '../../assets/green_header.jpg';
import './Header.css';

export default function Header() {
  console.log('Header....');
  const description = descriptions[getRandomInt(2)];

  const headerStyles={ backgroundImage: `url(${headerImg})` };

  return (
    <>
      <header className="header-main" style={headerStyles}>
        <h2>Welcome to {description}</h2>
      </header>
    </>
  );
}
