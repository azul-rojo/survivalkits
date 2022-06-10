import './App.css';
import { mainSectionProps } from './constants/mainSection';
import { firstAidKit, foodKit, hygieneKit, shelterKit } from './constants/kits';
import MainSection from './components-app/MainSection';
import Kits from './components-app/Kits';
import { contentSectionTitle, sectionsIds, sectionList } from './constants/contentSections';
import LinkListSection from './components-app/LinkListSection';

function App() {
  return (
    <div className="App">
      <MainSection {...mainSectionProps} />
      <LinkListSection id={''} links={sectionList} title={contentSectionTitle} />
      <Kits carouselProps={foodKit} id={sectionsIds.foodKit} />
      <Kits carouselProps={shelterKit} id={sectionsIds.shelterKit}/>
      <Kits carouselProps={firstAidKit} id={sectionsIds.firstAidKit}/>
      <Kits carouselProps={hygieneKit} id={sectionsIds.hygieneKit}/>
    </div>
  );
}

export default App;
