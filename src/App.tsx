import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages';

import './scss/styles.scss';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
