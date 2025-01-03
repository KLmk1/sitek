import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"; // Подключаем глобальные стили
import MainContent from "./components/MainContent";

function App() {
    return (
        <div className="container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
