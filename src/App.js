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
  const cena_zmiana=(e)=> {// Zmiana koloru i ceny
    if(e.target.classList == "green btn"){
      e.target.classList = "yellow btn";
    }
    else if(e.target.classList == "yellow btn"){
      e.target.classList = "red btn";
    }
    else if(e.target.classList == "red btn"){
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
            <button onClick={cena_zmiana} className="btn" value='6'>
            PAPADUM 
            </button>
            <button onClick={cena_zmiana} className="btn" value='12'>
            VEGETABLE SAMOSA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            CHICKEN SAMOSA
            </button>
            <button onClick={cena_zmiana} className="btn" value='20'>
            CHICKEN TIKKA 
            </button>
            <button onClick={cena_zmiana} className="btn" value='12'>
            CUTLET 
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Soup</h2>
            <button onClick={cena_zmiana} className="btn" value='14'>
            VEGETABLE SOUP 
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            DAL SOUP
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MUSHROOM PALAK SOUP
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            CHICKEN SOUP
            </button>
          </div>
          <div className='section'>
            <h2>TANDOORI SPECIALITIES</h2>
            <button onClick={cena_zmiana} className="btn" value='30'>
            TANDOORI CHICKEN 
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            MALAI CHICKEN TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            HARYALI CHICKEN TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            ACHARI CHICKEN TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn" value='35'>
            PRAWNS TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn" value='35'>
            FISH TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            PANEER TIKKA 
            </button>
            <button onClick={cena_zmiana} className="btn" value='40'>
            TANDOORI FLAME SPECIAL
            </button>
          </div>
          <div className='section'>
            <h2>DANIA WEGETARIAŃSKIE</h2>
            <button onClick={cena_zmiana} className="btn" value='27'>
            MIX VEGETABLE CURRY
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            MADRAS VEGETABLE
            </button>
            <button onClick={cena_zmiana} className="btn" value='28'>
            KADHAI VEGETABLE 
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            DAL 
            </button>
            <button onClick={cena_zmiana} className="btn" value='27'>
            DAL PALAK 
            </button>
            <button onClick={cena_zmiana} className="btn" value='27'>
            DAL MAKHANI 
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            PALAK  
            </button>
            <button onClick={cena_zmiana} className="btn" value='27'>
            SAG ALOO
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            JEERA ALOO 
            </button>
            <button onClick={cena_zmiana} className="btn" value='27'>
            ALOO GOBI 
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            BAINGAN BHARTA
            </button>
            <button onClick={cena_zmiana} className="btn" value='28'>
            CHANA MASALA
            </button>
            <button onClick={cena_zmiana} className="btn" value='27'>
            NAVRATAN KORMA 
            </button>
            <button onClick={cena_zmiana} className="btn" value='40'>
            KAJU MASALA 
            </button>
            <button onClick={cena_zmiana} className="btn" value='38'>
            TANDOORI FLAME VEGETARIAN 
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h2>Pokora</h2>
            <button onClick={cena_zmiana} className="btn" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn" value='25'>
            FISH PAKORA
            </button>
          </div>
        </div>
      </div>
    )
  }
}



export default App;
