import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Hello } from './components/layout';
import { Home } from './pages';

import './scss/styles.scss';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/hello" component={Hello} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
