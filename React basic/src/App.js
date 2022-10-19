import './App.css';
import { useState } from 'react';

function App() {

  let [nextMovie, setNextMovie] = useState(['Ant-Man and the Wasp', 'Guardians of the Galaxy', 'The Marvels']);
  let [movieSub, setMovieSub] = useState(['Quantumania', 'Volume 3', '']);
  let [movieIndex, setMovieIndex] = useState(0);
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
                setMovieIndex(i)
                modal ? setModal(false) : setModal(true)
              }}>{nextMovie[i]} </h4>
              <p>{movieSub[i]}
              <span onClick={ ()=>{
                let copy = [...star];
                copy[i] += 1;
                setStar(copy)} }>⭐</span> {star[i]} </p>
          </div>
          )
        })
      }
      { modal ? <Modal nextMovie={nextMovie} movieIndex = {movieIndex} color={'#dbaaaa'} setNextMovie={setNextMovie}/> : null }
    </div> //"App" End
  ); //App End
}

function Modal(props){
  return(
      <div className="modal" style={{background : props.color}}>
        <h4>{props.nextMovie[props.movieIndex]}</h4>
        <p>Date</p>
        <p>exp</p>
        <button>Edit</button>
      </div>
  )
}

export default App;
