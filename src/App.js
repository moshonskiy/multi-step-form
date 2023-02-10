import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Step1 from './features/Steps/Step1';
import Step2 from './features/Steps/Step2';
import Step3 from './features/Steps/Step3';
import Result from './features/Steps/Result';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Step1 />} />
          <Route path='/step2' element={<Step2 />} />
          <Route path='/step3' element={<Step3 />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
