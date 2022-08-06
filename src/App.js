// import logo from './logo.svg';
import './App.css';
import MainContainer from './components/MainContainer';
import Container2 from './components/Container2';
import HourlyAndWeeklyView from './components/HourlyAndWeeklyView';

function App() {
  return (
    <div className="App">
      <MainContainer />
      <Container2 />
      <HourlyAndWeeklyView />
    </div>
  );
}

export default App;
