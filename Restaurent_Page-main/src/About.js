import homepage from "./HomePage"
import Menu from "./Menu"

let squid = '/home/astle/Projects/Restaurent-Page/dist/Images/About/squid.png';
let squidmessage = "<i>Hello I am Squinter the squid manager. Its tough to manage but I am fine.</i>";
let crab = "/home/astle/Projects/Restaurent-Page/dist/Images/About/crab.png";
let crabmessage = "<i>Hello! I am Creff the crab chef! I make the best dishes ever!</i>";
let fish = "/home/astle/Projects/Restaurent-Page/dist/Images/About/fish.png";
let fishmessage = "<i>I am fishter the fish waiter. These guys pay me less.</i>";
let flipped = false;


const homeButton = () => {
    const button = document.createElement('div');
    button.id = 'theoptions';
    button.innerHTML = 'Home';
    button.addEventListener('click',function(){
        document.body.innerHTML = "";
        homepage ();
    })
    return button;
}
const menuButton = () => {
    const button = document.createElement('div');
    button.id = 'theoptions';
    button.innerHTML = 'Menu';
    button.addEventListener('click',function(){
        document.body.innerHTML = "";
        Menu ();
    })
    return button;
}
const contactButton = () => {
    const button = document.createElement('div');
    button.id = 'theoptions';
    button.innerHTML = 'Contact';
    return button;
}
const MainOptions = () => {
    const list = document.createElement('div');
    list.id = 'listcontainer';
    list.appendChild(homeButton());
    list.appendChild(contactButton());
    list.appendChild(menuButton());
    return list;
}
const MainArrow = () => {
    const arrow = document.createElement('div');
    arrow.id = 'mainarrow';
    return arrow;
}
const paras = (message) => {
    const description = document.createElement('div');
    description.innerHTML = message;
    description.id = 'description';
    return description;
}
const images = (link) => {
    const image = new Image ();
    image.style.backgroundColor = 'lightblue';
    image.src = link;
    image.id = 'imageID';
    return image;
}
const characterBox = (image,para,margintop) => {
    const box = document.createElement('div');
    box.id = 'characterbox';
    box.style.marginTop = margintop;
    box.appendChild(image);
    box.appendChild(para);
    return box;
}
const mainboxFront = () => {
    const front = document.createElement('div');
    front.id = 'card-front';
    front.appendChild(characterBox(images(fish),paras(fishmessage),"20vh"));
    front.appendChild(characterBox(images(crab),paras(crabmessage),"70vh"));
    front.appendChild(characterBox(images(squid),paras(squidmessage),"120vh"));
    return front;
}
const mainboxBack = () => {
    const back = document.createElement('dvi');
    const username = document.createElement('input');
    const email = document.createElement('input');
    const comments = document.createElement('input');
    const title1 = document.createElement('h2');
    const title2 = document.createElement('h2');
    const title3 = document.createElement('h2');
    const ourEmail = document.createElement('h6');
    const info = document.createElement('h6');
    title1.innerHTML = 'Username:';
    title2.innerHTML = 'Email:';
    title3.innerHTML = 'Comments:';
    info.innerHTML = 'Contact Us : 9284659201'
    ourEmail.innerHTML = 'xyz@gmail.com';
    title1.id = 'headerNames';title2.id = 'headerNames';title3.id = 'headerNames';
    ourEmail.id = 'email';
    info.id = 'contactInfo';
    back.id = 'card-back';
    username.classList.add('username');
    email.classList.add('email');
    comments.classList.add('comments');
    back.appendChild(title1);
    back.appendChild(username);
    back.appendChild(title2);
    back.appendChild(email);
    back.appendChild(title3);
    back.appendChild(comments);
    back.appendChild(ourEmail);
    back.appendChild(info);
    return back;

}
const mainboxInner = () => {
    const inner = document.createElement('div');
    inner.id = 'card-inner';
    inner.appendChild(mainboxFront());
    inner.appendChild(mainboxBack());
    return inner;
}
const mainBox = () => {
    const transbox = document.createElement('div');
    transbox.id = 'mainbox';
    transbox.innerHTML = '<stronger>Hello!</stronger><br>Meet our staff and <i>Contact</i> us for more info!'
    transbox.classList.add('backdropFilter');
    transbox.appendChild(mainboxInner());
    transbox.appendChild(Button());
    return transbox;
}
const Button = () => {
    const button = document.createElement('button');
    button.id = 'button';
    button.innerHTML = 'Contact Us';
    button.addEventListener('click',function() {
        if (!flipped) {
            document.getElementById('card-inner').style.transform = 'rotateY(180deg)';
            document.getElementById('card-front').style.zIndex = '0';
            document.getElementById('card-back').style.zIndex = '1';
            button.innerHTML = 'About Us';
            flipped = true;
        }
        else {
            document.getElementById('card-inner').style.transform = 'rotateY(0deg)';
            document.getElementById('card-front').style.zIndex = '1';
            document.getElementById('card-back').style.zIndex = '0';
            button.innerHTML = 'Contact Us';
            flipped = false;
        }
    })
    return button;
}
const About = () => {
    document.body.style.background = 'url(./Images/backgroundOcean.jpg)';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw 250vh';
    document.body.appendChild(mainBox());
    document.body.appendChild(MainArrow());
    document.body.appendChild(MainOptions());
}

export default About;