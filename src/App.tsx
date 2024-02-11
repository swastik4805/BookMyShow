
import { AllRoutes } from './AllRoutes';
import './App.css';
import { Footer, Header } from './Components';
import { BelowHeader } from './Components/BelowHeader';

function App() {
  return (
    <div>
      <Header/>
      <BelowHeader></BelowHeader>
      
        <AllRoutes/>
        <Footer/>
    </div>
     
  );
}

export default App;
