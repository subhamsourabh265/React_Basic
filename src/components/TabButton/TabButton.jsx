import './TabButton.css'; 
export default function TabButton({children, onSelect, isSelected}) {
    console.log('TabButton');
    return <li><button className={ isSelected ? 'active' : 'inactive'} onClick={onSelect}>{children}</button></li>;  //Children Props contains the content between the component tags
}