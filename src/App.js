// import logo from './logo.svg';
import './App.css';
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import HourlyAndWeeklyView from './components/HourlyAndWeeklyView';

function App() {
  return (
    <div className="App">
      <Container1 />
      <Container2 />
      <HourlyAndWeeklyView />
    </div>
  );
}

export default App;
