import React from 'react';
import './App.css';
import Box from './Component/Box'
import {Arr} from './Data/DataArray';

function App() {
  const [dataArrayState,setDataArrayState]=React.useState(Arr);
  function toggele(id){
    setDataArrayState(prevArr=>{
      return prevArr.map(sqr=>{
        return sqr.id===id?{...sqr,on:!sqr.on}:sqr
      })
    })

  }
  const dataArray=dataArrayState.map(squre=>{
    return(
      <Box 
        key={squre.id} 
        id={squre.id} 
        on={squre.on}
        mouseClick={()=>toggele(squre.id)}
      />
    )
  })
  return (
    <div>
      {dataArray}
    </div>
  )
}

export default App;
