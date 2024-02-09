
import { AllRoutes } from './AllRoutes';
import './App.css';
import { Footer, Header } from './Components';
import { BelowHeader } from './Components/BelowHeader';
import ScrollToTopWrapper from './Components/ScrollToTopWrapper';

function App() {
  return (
    
    <div className ="app ">
    <Header/>
    <BelowHeader></BelowHeader>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
