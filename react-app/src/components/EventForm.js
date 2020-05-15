import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CREATE_EVENT ,DELETE_ALL_EVENTS} from '../actions'

const EventForm = ({state, dispatch}) => {
//   const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const addEvent = (e) => {
    // 画面の再レンダリング防止
    e.preventDefault()
    //dispach
    dispatch({
        type: CREATE_EVENT,
        title,
        body
      })
      setTitle('')
      setBody('')
  }
  const uncreatable = title === '' || body === ''

  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm('本当に全てのイベントを削除してもよろしいですか？')
    if(result) dispatch({type: DELETE_ALL_EVENTS})
  }
    return (
        <>
        <h4>イベント作成フォーム</h4>
        <form>
        <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
            <label htmlFor="formEventBody">ボディ</label>
            <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={uncreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
        </form>
        </>
    )
}


export default EventForm