import Screen1 from "./Components/Screen1";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Screen2 from "./Components/Screen2";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={ <Screen1/>} />
          <Route path="screen2/:word" element={<Screen2 />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
