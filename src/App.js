import './index.css';
import React, {useState} from 'react'
function App() {

  

  return (
    <div className="App">
      <Zam/>
    </div>
  );
}

class Zam extends React.Component{
  state={
    cena:0
  }

  render(){
  const cena_zmiana=(e)=> {
    if(e.target.classList == "green btn"){
      e.target.classList = "gray btn";
      this.setState({cena:this.state.cena-parseInt(e.target.value)})
    }
    else{
      e.target.classList = "green btn";
      this.setState({cena:this.state.cena+parseInt(e.target.value)})
    }
    //console.log(e)
  }
    return(
      <div>
        CENA: {this.state.cena}

        <div className='menu'>
          <div className='section'>
            <h2>Przystawki</h2>
            <button onClick={cena_zmiana} className="btn" value='10'>
              Chicken Tika Masala
            </button>
          </div>
          <div className='section'>
            <h2>Przystawki</h2>
            <button onClick={cena_zmiana} className="btn" value='10'>
              Chicken Tika Masala
            </button>
          </div>
        </div>
      </div>
    )
  }
}



export default App;
