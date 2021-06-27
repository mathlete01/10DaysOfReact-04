import React from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function showAlert(text){
  if(text === "open sesame")
  return(
    alert("You may pass")
  )
}

function App() {

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input type="text" placeholder="Super duper secret" onChange = {e => showAlert(e.target.value)}/>

      <p>
        Hint: It's <strong>open sesame</strong>
      </p>

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
