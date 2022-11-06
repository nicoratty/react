import logo from './logo.svg';
import './App.css';
import Counter from './components/customCounter';
import Reducer from './components/reducer';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import ErrorPage from './ErrorPage';
import Error from './components/Error';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />}>
        
        </Route>
        <Route path="/UseCounter" element={
          <ErrorBoundary>
            <Counter />
          </ErrorBoundary>
          }>
          
        </Route>
        <Route path='/Reducer' element={<Reducer />}>

        </Route>
        <Route path="*" element={<ErrorPage />}>
          
        </Route>
      </Routes>
        </div>
  );
}

export default App;
