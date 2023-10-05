import "./App.css";
import Designed from "./components/Designed";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Infrastructure from "./components/Infrastructure";

function App() {
  return (
    <>
      <Header />
      <main>
        <Designed />
        <Infrastructure />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
