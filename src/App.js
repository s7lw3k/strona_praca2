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
        <h1>CENA: {this.state.cena}</h1>
        <ul id="st">
          <a href='#1'><li>Przystawki</li></a>
          <a href='#2'><li>pokora</li></a>
          <a href='#3'><li>soup</li></a>
          <a href='#4'><li>TANDOORI SPECIALITIES</li></a>
          <a href='#5'><li>VEGETARIAN</li></a>
          <a href='#6'><li>PANEER</li></a>
          <a href='#7'><li>CHICKEN</li></a>
          <a href='#8'><li>MASHROMS</li></a>
          <a href='#9'><li>FISH</li></a>
          <a href='#10'><li>BIRIANI</li></a>
          <a href='#11'><li>BREAD</li></a>
          <a href='#12'><li>SEA FOOD</li></a>
          <a href='#13'><li>DESERTS</li></a>
          <a href='#14'><li>LUMB</li></a>
          <a href='#15'><li>RYŻ</li></a>
          <a href='#16'><li>SALATES</li></a>
          <a href='#17'><li>RAITA</li></a>
          <a href='#18'><li>DRINKS</li></a>
        </ul>
        <div className='menu'>
          <div className='section'>
            <h3 id='1'>Przystawki</h3>
            <button onClick={cena_zmiana} className="btn gray" value='6'>
              PAPADUM 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='12'>
              VEGETABLE SAMOSA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
              CHICKEN SAMOSA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='20'>
              CHICKEN TIKKA 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='12'>
              CUTLET 
            </button>
          </div>
          <div className='section'>
            <h3 id='2'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='3'>Soup</h3>
            <button onClick={cena_zmiana} className="btn gray" value='14'>
            VEGETABLE SOUP 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            DAL SOUP
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MUSHROOM PALAK SOUP
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            CHICKEN SOUP
            </button>
          </div>
          <div className='section'>
            <h3 id='4'>TANDOORI SPECIALITIES</h3>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            TANDOORI CHICKEN 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            MALAI CHICKEN TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            HARYALI CHICKEN TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            ACHARI CHICKEN TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='35'>
            PRAWNS TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='35'>
            FISH TIKKA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            PANEER TIKKA 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='40'>
            TANDOORI FLAME SPECIAL
            </button>
          </div>
          <div className='section'>
            <h3 id='5'>DANIA WEGETARIAŃSKIE</h3>
            <button onClick={cena_zmiana} className="btn gray" value='27'>
            MIX VEGETABLE CURRY
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            MADRAS VEGETABLE
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='28'>
            KADHAI VEGETABLE 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            DAL 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='27'>
            DAL PALAK 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='27'>
            DAL MAKHANI 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            PALAK  
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='27'>
            SAG ALOO
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            JEERA ALOO 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='27'>
            ALOO GOBI 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            BAINGAN BHARTA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='28'>
            CHANA MASALA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='27'>
            NAVRATAN KORMA 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='40'>
            KAJU MASALA 
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='38'>
            TANDOORI FLAME VEGETARIAN 
            </button>
          </div>
          <div className='section'>
            <h3 id='6'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='7'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='8'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='9'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='10'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='11'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='12'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='13'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='14'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='15'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='16'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='17'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
          <div className='section'>
            <h3 id='18'>Pokora</h3>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            ONION BHAJI PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='15'>
            MIX VEGETABLE PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            PANEER PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='18'>
            CHICKEN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='30'>
            PRAWN PAKORA
            </button>
            <button onClick={cena_zmiana} className="btn gray" value='25'>
            FISH PAKORA
            </button>
          </div>
        </div>
      </div>
    )
  }
}



export default App;
