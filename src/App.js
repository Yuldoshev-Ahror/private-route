import { Switch } from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';

import PrivateRoute from "./PrivateRoute";

// import pages
import Main from "./pages/main";

 
function App() {
  return (
      <Switch>
        <PrivateRoute path="/" component={Main} />
      </Switch>
  )
}

export default App;