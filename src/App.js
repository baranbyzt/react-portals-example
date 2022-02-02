
import './App.css';
import Portal from './Portal'


function App() {

  let portal_root = document.getElementById('portal-root');

  let close_portal = () => {
    portal_root.style.visibility="hidden";
}

let open_portal = () => {
  portal_root.style.visibility="visible";
}

  return (
    <div className="App">
     
<Portal/>

     <h1>this is home section</h1>
<p onClick={open_portal}  >open portal</p>
<p onClick={close_portal} >close portal</p>


    </div>
  );
}

export default App;
