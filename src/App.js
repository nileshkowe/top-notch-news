import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const api = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);
  const onLoaderFinished = (Progress)=>{
    setprogress(Progress);
  }
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Switch>
            <Route exact path="/"><News api={api} key="general" country='us' pagesize={5} category="general" onLoaderFinished={onLoaderFinished}/></Route>
            <Route exact path="/business"><News api={api} key="business" country='us' pagesize={5} category="business" onLoaderFinished={onLoaderFinished}/></Route>
            <Route exact path="/entertainment"><News api={api} key="entertainment" country='us' pagesize={5} category="entertainment" onLoaderFinished={onLoaderFinished}/></Route>
            <Route exact path="/health"><News api={api} key="health" country='us' pagesize={5} category="health" onLoaderFinished={onLoaderFinished}/></Route>
            <Route exact path="/science"><News api={api} key="science" country='us' pagesize={5} category="science" onLoaderFinished={onLoaderFinished}/></Route>
            <Route exact path="/sports"><News api={api} key="sports" country='us' pagesize={5} category="sports" onLoaderFinished={onLoaderFinished}/></Route>
            <Route exact path="/technology"><News api={api} key="technology" country='us' pagesize={5} category="technology" onLoaderFinished={onLoaderFinished}/></Route>
          </Switch>
        </Router>
      </div>
    )
}
export default App;