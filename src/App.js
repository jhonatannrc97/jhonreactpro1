import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
//import Counter from './components/counter/counter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'MI PRIMER PROYECTO REACT'}/>
     {/*<Counter/>*/}
      
    </div>
  );
}

export default App;
