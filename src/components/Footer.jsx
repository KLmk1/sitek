import "../styles/Footer.css"; // Подключаем стили для футера

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Все права защищены.</p>
            <p>
                <a href="https://t.me/klimovskeei" target="_blank" rel="noopener noreferrer" className="footer-link">
                    Telegram
                </a>{" "}
                |{" "}
                <a href="https://github.com/Klmk1" target="_blank" rel="noopener noreferrer" className="footer-link">
                    Github
                </a>
            </p>
        </footer>
    );
};

export default Footer;
