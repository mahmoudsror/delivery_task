
import React,{Component} from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './Providers/dataProvider';
import {TasksList,TaskEdit } from './Pages/Tasks';
import {showOnMap} from './Pages/showOnMap';
class App extends Component {
  render() {
    return (
    <Admin 
      dataProvider={dataProvider}
    >
    <Resource name="list" list={TasksList} edit={TaskEdit} show={showOnMap}/>
        
    </Admin>
    );
  }
}

export default App;
