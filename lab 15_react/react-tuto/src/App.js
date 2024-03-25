import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const banner = "Lab 15 | React Intro"

const tasksList = [
  {id: 1, content: "Grade project 2"},
  {id: 2, content: "Grade assignment 2"},
  {id: 3, content: "Grade Projects Boyz Section"},
  {id: 4, content: "Grade Projects Girls Section"} 
];

function App() {
  return (
    <div className="App">
      <Header banner={banner} />
      <Main tasks={tasksList} />
      <Footer />
    </div>
  );
}

export default App;
