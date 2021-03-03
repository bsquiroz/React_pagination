import React, {useState} from 'react';

const Pages = ({number, pag, handlePage}) => {
  return (
    <>
      {number === pag 
      ? <span className="decoration" onClick={() => handlePage(number)}>{number}</span> 
      : <span onClick={() => handlePage(number)}>{number}</span>}
    </>
  )
}

const Item = ({number}) => {
  return (
    <>
    <span>{number}</span>
    </>
  )
}

function App() {
  const [pag, setPag] = useState(1);
  const [item, setItem] = useState(1);

  const total = 898;
  const totalForPag = 4;
  const TotalPag = Math.ceil(total / totalForPag)
  const ArrayTotalPag = [];  
  const TotalItems = [];

  for (let i = 0; i < TotalPag; i++) {
    ArrayTotalPag.push(i+1)
  }

  for(let i =0 ; i < total; i++) {
    TotalItems.push(i+1)
  }

  const handleNext = () => {
    setPag(pag-1)
    setItem(item-totalForPag)
  }

  const handlePrevius = () => {
    setPag(pag+1)
    setItem(item+totalForPag)
  }

  let c = item-1;
  let d = c+totalForPag;

  const handlePage = (data) => {
    setPag(data);
    setItem((data*totalForPag)-(totalForPag-1));
  }

  let a = 0;
  let b = 0;

  if(pag>=6) {
     a = pag -5 ;
     b = pag + 5 ;
  }

  return (
    <div className="app">
      pagina {pag} de {TotalPag}
      <div>
        { pag>=6 ? ArrayTotalPag.slice(a,b).map((e) => (
          <Pages key={e} number={e} pag={pag} handlePage={handlePage}/>
          ))
        :
          ArrayTotalPag.slice(0,10).map((e) => (
          <Pages key={e} number={e} pag={pag} handlePage={handlePage}/>
          ))
        }
      </div>

      {pag!==1 && <button onClick={() => handleNext()}>Atras</button>}
      {pag === TotalPag ?
       null 
      : 
        <button onClick={() => handlePrevius()}>Adelante</button>
      }

      <div>
        {TotalItems.slice(c,d).map((e) => (
          <Item key={e} number={e}/>
        ))}
      </div>
    </div>
  );
}

export default App;
