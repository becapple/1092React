import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyClass from './pages/MyClass';
import People from './pages/people';
import Math from './pages/math';
import { StoreProvider } from "./store";

function App() {
  return (
    <StoreProvider >
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lesson/:lessonId" component={MyClass} />
          <Route path="/people" component={People} />
          <Route path="/math" component={Math} />
        </Switch>
      </BrowserRouter>
    </StoreProvider>


  );

}

export default App;
