import Menu from "./Menu";
import About from "./About"

const MenuButton = () => {
    const menu = document.createElement('div');
    menu.id = 'menuoptions1';
    menu.innerHTML = 'Menu';
    menu.addEventListener('click',function(){
        document.body.innerHTML = '';
        Menu ();
    })
    return menu;
}
const Home = () => {
    const home = document.createElement('div');
    home.id = 'menuoptions1';
    home.innerHTML = 'Home';
    return home;
}
const Contact = () => {
    const contact = document.createElement('div');
    contact.id = 'menuoptions1';
    contact.innerHTML = 'Contact';
    contact.addEventListener('click',function(){
        document.body.innerHTML = "";
        About ();
    })
    return contact;
}
const List = () => {
    const list = document.createElement('div');
    list.id = 'list1';
    list.appendChild(MenuButton());
    list.appendChild(Home());
    list.appendChild(Contact());
    return list;
}
const Arrow = () => {
    const arrow = document.createElement('div');
    arrow.id = 'arrow1';
    return arrow;
}
const Transparent = () => {
    const transparent = document.createElement('div');
    transparent.innerHTML = "Sea Food";
    transparent.classList.add('seaFood');
    return transparent;
}
const Subtext = () => {
    const subtext = document.createElement('div');
    subtext.innerHTML = "Delicious SeaFood Like No Where Else!";
    subtext.id = 'subText';
    return subtext;
}
const sideDescription = () => {
    const blackBox = document.createElement('div');
    blackBox.id = 'BlackBox';
    blackBox.appendChild(Transparent());
    blackBox.appendChild(Subtext());
    return blackBox;
}
const homepage = () => {
    document.body.appendChild(sideDescription());
    document.body.appendChild(Arrow());
    document.body.appendChild(List());
}

export default homepage;