import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const tasks = ["task1", "task2", "task3"];
  return (
    <div className="App">
      <Header bannerMessage="Lab 13 Homepage"/>
      <Main tasks={tasks}/>
      <Footer />
    </div>
  );
}

export default App;
