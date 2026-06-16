import React from 'react';
import PhraseGenerator from './components/PhraseGenerator';

function App() {
  return (
    <div className="App">
      <div className='flex flex-col font-serif gap-4 bg-gradient-to-r from-teal-500 to-sky-500 h-screen p-10 text-neutral-800'>
        <p className='text-red-600 text-3xl text-center font-bold'>
          JH Productions
        </p>
        
        <div className='bg-white rounded-xl p-4 shadow-lg'>
          <h1 className='text-lg'>Frases de Extrema Sabedoria</h1>
          <hr className='h-px my-3'/>
          <PhraseGenerator/>
        </div>
      </div>
    </div>  
  );
}

export default App;
