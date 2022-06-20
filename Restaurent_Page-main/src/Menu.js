import homepage from "./HomePage";
import About from "./About";

var sidesVisible = false;
var lunchVisible = false;
var sandVisible = false;
var dinnerVisible = false;

const homeButton = () => {
    const button = document.createElement('div');
    button.id = 'theoptions';
    button.innerHTML = 'Home';
    button.addEventListener('click',function(){
        document.body.innerHTML = '';
        homepage ();
    })
    return button;
}
const menuButton = () => {
    const button = document.createElement('div');
    button.id = 'theoptions';
    button.innerHTML = 'Menu';
    return button;
}
const contactButton = () => {
    const button = document.createElement('div');
    button.id = 'theoptions';
    button.innerHTML = 'Contact';
    button.addEventListener('click',function(){
        document.body.innerHTML = "";
        About ();
    })
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
const glass = (name,price,imageSource) => {
    const box = document.createElement('div');
    const img = document.createElement('img');
    img.src = imageSource;
    img.id = "imageSize";
    box.id = 'options';
    box.classList.add('backdropFilter');
    box.innerHTML = name + "<br>" + price + "<br>";
    box.appendChild(img);
    return box;
}
const MenuArrows = (topValue) => {
    const arrow = document.createElement('div');
    arrow.style.top = topValue;
    arrow.id = 'menuArrows';
    return arrow;
}
const header = () => {
    const header = document.createElement('div');
    header.innerHTML = "Menu";
    header.id = 'menuHeader';
    return header;
}
const sideContainer = () => {
    let names = [
        "HushPuppies",
        "French Fries",
        "French Corn",
        "Soft Shell Crab",
        "Crab Cake",
        "Shrimp",
        "Devilled Crab",
        "Colshaw"
    ];
    let prices = [
        "$3.19",
        "$2.99",
        "$2.49",
        "$7.99",
        "$6.99",
        "$8.99",
        "$6",
        "$1.79"
    ];
    let images = [
        "/home/astle/Projects/Restaurent-Page/dist/Images/Sides/HushPuppies.png",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Sides/FrenchFries.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Sides/FriedCorn.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Sides/ShellCrab.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Sides/CrabCake.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Sides/shrimp.webp",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Sides/DeviledCrab.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Sides/coleshaw.jpg"
    ]
    const Box = document.createElement('div');
    Box.id = 'sidescontainer';
    for (let i=0;i < 8; i++) {
        Box.appendChild(glass(names[i],prices[i],images[i]))
    }
    return Box;
}
const SidesMenu = () => {
    const sidesMenu = document.createElement('div');
    sidesMenu.innerHTML = 'Sides';
    sidesMenu.id = 'sides';
    sidesMenu.appendChild(MenuArrows("26.5vh"));
    sidesMenu.appendChild(sideContainer());
    sidesMenu.addEventListener('click',function () {
        if (sidesVisible) {
            document.getElementById('sidescontainer').style.display = 'none';
            sidesVisible = false;
        }
        else {
            document.getElementById('sandcontainer').style.display = 'none';
            document.getElementById('dinnercontainer').style.display = 'none';
            document.getElementById('sidescontainer').style.display = 'grid';
            document.getElementById('lunchcontainer').style.display = 'none';
            lunchVisible = false;
            dinnerVisible = false;
            sidesVisible = true;
            sandVisible = true;
        }
    })
    return sidesMenu;
}
const lunchContainer = () => {
    let names = [
        "Shrimp Basket",
        "Fish Basket",
        "Oyster Basket",
        "Clamp Strip Basket",
        "Catfish Basket",
        "Blue Crab Basket"
    ];
    let prices = [
        "$10.99",
        "$9.99",
        "$11.99",
        "$9.99",
        "$9.99",
        "$9.99"
    ];
    let images = [
        "/home/astle/Projects/Restaurent-Page/dist/Images/Lunch/shrimpB.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Lunch/FishB.webp",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Lunch/OysterB.webp",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Lunch/ClamStripB.avif",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Lunch/CatfishB.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Lunch/BlueCrabB.webp"
    ];
    const Box = document.createElement('div');
    Box.id = 'lunchcontainer';
    for (let i=0;i < 6; i++) {
        Box.appendChild(glass(names[i],prices[i],images[i]))
    }
    return Box;
}
const lunchMenu = () => {
    const lunchmenu = document.createElement('div');
    lunchmenu.innerHTML = 'Lunch';
    lunchmenu.id = 'sides';
    lunchmenu.appendChild(MenuArrows("46vh"));
    lunchmenu.appendChild(lunchContainer());
    lunchmenu.addEventListener('click',function () {
        if (lunchVisible) {
            document.getElementById('lunchcontainer').style.display = 'none';
            lunchVisible = false;
        }
        else {
            document.getElementById('sandcontainer').style.display = 'none';
            document.getElementById('dinnercontainer').style.display = 'none';
            document.getElementById('sidescontainer').style.display = 'none';
            document.getElementById('lunchcontainer').style.display = 'grid';
            lunchVisible = true;
            dinnerVisible = false;
            sidesVisible = false;
            sandVisible = false;
        }
    })
    return lunchmenu;
}
const sandContainer = () => {
    let names = [
        "Shrimp",
        "Fish",
        "Oyster",
        "Soft Shell Crab",
        "Crab Cake",
    ];
    let prices = [
        "$8.99",
        "$8.99",
        "$9.99",
        "$9.99",
        "$9.99"
    ];
    let images = [
        "/home/astle/Projects/Restaurent-Page/dist/Images/SandWich/shrimpS.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/SandWich/FishS.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/SandWich/OysterS.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/SandWich/sscS.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/SandWich/crabcakeS.jpg"
    ];
    const Box = document.createElement('div');
    Box.id = 'sandcontainer';
    for (let i=0;i < 5; i++) {
        Box.appendChild(glass(names[i],prices[i],images[i]))
    }
    return Box;
}
const sandMenu = () => {
    const sandmenu = document.createElement('div');
    sandmenu.innerHTML = 'SandWiches';
    sandmenu.id = 'sandsides';
    sandmenu.appendChild(MenuArrows("66.5vh"));
    sandmenu.appendChild(sandContainer());
    sandmenu.addEventListener('click',function () {
        if (sandVisible) {
            document.getElementById('sandcontainer').style.display = 'none';
            sandVisible = false;
        }
        else {
            document.getElementById('sandcontainer').style.display = 'grid';
            document.getElementById('dinnercontainer').style.display = 'none';
            document.getElementById('sidescontainer').style.display = 'none';
            document.getElementById('lunchcontainer').style.display = 'none';
            lunchVisible = false;
            dinnerVisible = false;
            sidesVisible = false;
            sandVisible = true;
        }
    })
    return sandmenu;
}
const dinnerContainer = () => {
    let names = [
        "Shrimp Platter",
        "Flounder Platter",
        "Oyster Platter",
        "Crab Cake Platter",
        "Clam Strips",
        "Fried Blue Crab",
        "Spot Platter",
        "Combo Platter (Any)"
    ];
    let prices = [
        "$15.99",
        "$16.99",
        "$17.99",
        "$15.99",
        "$13.99",
        "$12.99",
        "$12.99",
        "$16.99"
    ];
    let images = [
        "/home/astle/Projects/Restaurent-Page/dist/Images/Dinner/shrimpP.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Dinner/flounderP.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Dinner/oysterP.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Dinner/ccP.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Dinner/clamstripsP.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Dinner/fbcP.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Dinner/spotP.jpg",
        "/home/astle/Projects/Restaurent-Page/dist/Images/Dinner/comboP.jpg"
    ];
    const Box = document.createElement('div');
    Box.id = 'dinnercontainer';
    for (let i=0;i < 8; i++) {
        Box.appendChild(glass(names[i],prices[i],images[i]))
    }
    return Box;
}
const dinnerMenu = () => {
    const dinnermenu = document.createElement('div');
    dinnermenu.innerHTML = 'Dinner';
    dinnermenu.id = 'sides';
    dinnermenu.appendChild(MenuArrows("86.5vh"));
    dinnermenu.appendChild(dinnerContainer());
    dinnermenu.addEventListener('click',function () {
        if (dinnerVisible) {
            document.getElementById('dinnercontainer').style.display = 'none';
            dinnerVisible = false;
        }
        else {
            document.getElementById('sandcontainer').style.display = 'none';
            document.getElementById('dinnercontainer').style.display = 'grid';
            document.getElementById('sidescontainer').style.display = 'none';
            document.getElementById('lunchcontainer').style.display = 'none';
            lunchVisible = false;
            dinnerVisible = true;
            sidesVisible = false;
            sandVisible = false;
        }
    })
    return dinnermenu;
}
const BackgroundImage = () => {
    const image = document.createElement('div');
    image.style.background = "url('/home/astle/Projects/Restaurent-Page/dist/Images/menuimage.jpg')";
    image.style.backgroundRepeat = 'no-repeat';
    image.style.backgroundSize = '100% 100%';
    image.style.height = '100vh';
    image.style.width = '70vw';
    return image;
}
const YellowBox = () => {
    const yellowBox = document.createElement('div');
    yellowBox.id = 'YellowBox';
    yellowBox.appendChild(header());
    yellowBox.appendChild(SidesMenu());
    yellowBox.appendChild(lunchMenu());
    yellowBox.appendChild(sandMenu());
    yellowBox.appendChild(dinnerMenu());
    return yellowBox;
}
const Menu = () => {
    document.body.appendChild(YellowBox());
    document.body.appendChild(BackgroundImage());
    document.body.appendChild(MainArrow());
    document.body.appendChild(MainOptions());
}

export default Menu;