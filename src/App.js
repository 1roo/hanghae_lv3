import './App.css';
import { StyleSheetManager } from 'styled-components';
import InputSection from './components/section/Input';
import ButtonSection from './components/section/Button';
import ModalSection from './components/section/Modal';
import SelectSection from './components/section/Select';

function App() {
  return (
    <div>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'background' && prop !== 'bordered'}>
        <ButtonSection />
        <InputSection />
        <ModalSection />
        <SelectSection />
      </StyleSheetManager>
    </div>
  );
}

export default App;
