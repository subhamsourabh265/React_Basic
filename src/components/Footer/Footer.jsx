import myImg from '../../assets/universe.webp';
import './Footer.css';

export default function Footer() {
    console.log('Footer....');
    return (
        <footer>
            <img src={myImg} alt="universe" />
        </footer>
        
    );
}

