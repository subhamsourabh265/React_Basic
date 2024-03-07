import './TabButton.css'; 
export default function TabButton({children, isSelected, ...props}) {
    console.log('TabButton');
    return <li><button className={ isSelected ? 'active' : 'inactive'} {...props}>{children}</button></li>;  //Children Props contains the content between the component tags
}