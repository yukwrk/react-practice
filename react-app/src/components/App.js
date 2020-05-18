import React, {useEffect, useReducer} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'
import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'

const App_Key = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(App_Key)
  // const [state, dispatch] = useReducer(reducer, [])
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => { 
    // stateの文字列化をする
    localStorage.setItem(App_Key ,JSON.stringify(state)
    )
  },[state])

  return(
    <AppContext.Provider value={{state , dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App;