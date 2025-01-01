import "../styles/Header.css";

const scrollWithOffset = (id) => {
    const element = document.querySelector(id);
    const offset = document.querySelector("header").offsetHeight; // Высота заголовка
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: elementPosition - offset, // Учитываем высоту заголовка
        behavior: "smooth", // Плавная прокрутка
    });
};

const Header = () => {
    return (
        <header className="header">
            <img src="logotext.png" alt="logo"  className="logotext" />
            <nav className="navigation">
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollWithOffset("#about"); }}>О себе</a>
                <a href="#skills" onClick={(e) => { e.preventDefault(); scrollWithOffset("#skills"); }}>Навыки</a>
                <a href="#projects" onClick={(e) => { e.preventDefault(); scrollWithOffset("#projects"); }}>Успехи</a>
                <a href="#contacts" onClick={(e) => { e.preventDefault(); scrollWithOffset("#contacts"); }}>Контакты</a>
            </nav>
        </header>
    );
};

export default Header;
