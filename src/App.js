
import './Assets/Scss/main.css';
import NewItem from './Components/NewItem/NewItem';
import NewItemGroup from './Components/NewItemGroup/NewItemGroup';
import Customer from './Components/Customer/Customer';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="pmse__wrapper">
     <NewItemGroup />
     <Customer />
     <Dashboard />
     <NewItem />
    </div>
  );
}

export default App;
