import logo from './logo.svg';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <p>this is our main app</p>
      <Routes route={route} currentRoute={currentRoute}/>
    </div>
  );
}

const route = {
  url:'',
  nextUrl:''
}
const currentRoute = 'address';

export default App;
