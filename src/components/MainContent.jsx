import "../styles/MainContent.css";

const MainContent = () => {
    return (
        <main className="main-content">
            <section id="about" className="section">
                <h2>О себе</h2>
                <p>Привет! Я начинающий разработчик, увлекаюсь веб-разработкой и программированием.</p>
            </section>
            <section id="skills" className="section">
                <h2>Навыки</h2>
                <ul>
                    <li>JavaScript (React+Vite)</li>
                    <li>Python (Ml enginering, ai developer)</li>
                    <li>C++ (Competitive programming)</li>
                </ul>
            </section>
            <section id="projects" className="section">
                <h2>Проекты</h2>
                <p>Скоро здесь появятся мои работы!</p>
            </section>
            <section id="contacts" className="section">
                <h2>Контакты</h2>
                <p>Email: klimakarov@gmail.com</p>
                <p>Telegram: @klimovskeei   </p>
            </section>
        </main>
    );
};

export default MainContent;
