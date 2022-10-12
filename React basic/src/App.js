import './App.css';
import { useState } from 'react';

function App() {

  let [nextMovie, setNextMovie] = useState(['Ant-Man and the Wasp', 'Guardians of the Galaxy', 'The Marvels']);
  let [movieSub, setMovieSub] = useState(['Quantumania', 'Volume 3', '']);
  let [star, setStar] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="red-nav">
        <h2>Marvel</h2>
      </div>{
        nextMovie.map(function(a, i){
          return (
            <div className="list">
              <h4 onClick={ () => {
                modal ? setModal(false) : setModal(true)
              }}>{nextMovie[i]} </h4>
              <p>{movieSub[i]}
              <span onClick={ ()=>{
                let copy = [...star];
                copy[i] += 1;
                setStar(copy)} }>⭐</span> {star[i]} </p>
              { modal ? <Modal/> : null }
          </div>
          )
        })
      }
    </div> //"App" End
  ); //App End
}

function Modal(){
  return(
      <div className="modal">
        <h4>Title</h4>
        <p>Date</p>
        <p>exp</p>
      </div>
  )
}

export default App;
