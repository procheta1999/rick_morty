import React, {Suspense} from 'react';
import {Switch,Route} from 'react-router-dom';
import {LoadingOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css';
const HomePage=React.lazy(()=>import('./pages/index'));
function App() {
  return (
    <div>
      <Switch>
        <Suspense fallback={<div style={{marginTop:'300px', marginLeft:'700px'}}><img src="https://img.icons8.com/plasticine/200/000000/rick-sanchez.png"/></div>}>
        <Route exact path="/" component={HomePage}/>
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
