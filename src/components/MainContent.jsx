import "../styles/MainContent.css";

const MainContent = () => {
    return (
        <main className="main-content">
            <section id="about" className="section">

                <h2>О себе</h2>
                <img src="code.jpeg" alt="code"/>
                <p>
                    Привет! Меня зовут Клим, я начинающий разработчик, увлекаюсь веб-разработкой и программированием. На момент написания сайта мне 15 лет, учусь
                    в МБОУ ГЮЛ N86 города Ижевска.
                </p>
            </section>

            <section id="skills" className="section">
                <h2>Навыки</h2>
                <p className="skillstext"><img src="js.webp" className="language"  alt="JavaScript"/>  Frontend deveplopment (framework - React+Vite)</p> 
                <p className="skillstext"><img src="python.png" className="language" alt="Python"/>ML engineering, AI development</p>
                <p className="skillstext"><img src="C++.png" className="language"  alt="C++"/>Competitive programming</p>
            </section>

            <section id="projects" className="section">
                <h2>Успехи</h2>
                <p className="subt">Пройденные очные курсы:</p>
                <p>
                    <a href="https://education.tbank.ru/academy/algorithms/" target="_blank" rel="noopener noreferrer">
                        Алгоритмы и структуры данных
                    </a>
                </p>
                <p>
                    <a href="https://sochisirius.ru/obuchenie/distant/smena1758/8141" target="_blank" rel="noopener noreferrer">
                        Образовательная Программа «Сириус.ИИ»
                    </a>
                </p>
                <p>
                    <a
                        href="https://kalashnikovgroup.ru/media/akademiya-kalashnikov/akademiya-kalashnikov-iznutri"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Программа дополнительного образования по Нейро. Искусственный интеллект
                    </a>
                </p>
                <p>
                    <a href="https://vk.com/itcube.izhevsk" target="_blank" rel="noopener noreferrer">
                        Курс анализа данных от IT-cube
                    </a>
                </p>
                <p className="subt">Участие в олимпиадах:</p>
                <p>
                    <a href="https://www.izh.ru/i/info/27903.html" target="_blank" rel="noopener noreferrer">
                        Дважды призёр муниципального этапа ВСОШ по информатике
                    </a>
                </p>
                <p>
                    <a href="http://www.arhimedes.org/" target="_blank" rel="noopener noreferrer">
                        Призёр Турнира Архимеда
                    </a>
                </p>
            </section>

            <section id="contacts" className="section">
                <h2>Доп. информация</h2>
                <p><a href="https://t.me/klimovskee">Telegram channel</a></p>
                <p><a href="https://www.twitch.tv/kl1movski">Twitch</a></p>
                <p>Email : klimakarov@gmail.com</p>
            </section>
        </main>
    );
};

export default MainContent;
