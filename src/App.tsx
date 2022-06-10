import './App.css';
import { mainSectionProps } from './constants/mainSection';
import { firstAidKit, foodKit, hygieneKit, shelterKit } from './constants/kits';
import MainSection from './components-app/MainSection';
import Kits from './components-app/Kits';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainSection {...mainSectionProps} />
        <Kits {...foodKit} />
        <Kits {...shelterKit} />
        <Kits {...firstAidKit} />
        <Kits {...hygieneKit} />
      </header>
    </div>
  );
}

export default App;
