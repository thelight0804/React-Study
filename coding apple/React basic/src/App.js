import './App.css';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import dayjs from "dayjs";

function App() {
  let setTime = () => {
    let dj = dayjs();
    return dj.format("YY-MM-DD (HH:mm)");
  };

  let [nextMovie, setNextMovie] = useState(['Ant-Man and the Wasp', 'Guardians of the Galaxy', 'The Marvels']);
  let [movieSub, setMovieSub] = useState(['Quantumania', 'Volume 3', ' ']);
  let [movieIndex, setMovieIndex] = useState(0);
  let [star, setStar] = useState([0, 0, 0]);
  let [date, setDate] = useState([setTime(), setTime(), setTime()]);
  let [modal, setModal] = useState(false);
  let [exp, setExp] = useState('');



  return (
    <div className="App">
      <div className="red-nav">
        <h2>Marvel</h2>
      </div>
      <div className="info">
        <Info nextMovie={nextMovie}/>
      </div>
      {nextMovie.map(function(a, i){
          return (
            <div className="list">
              <h4 onClick={ () => {
                setMovieIndex(i)
                modal ? setModal(false) : setModal(true)
              }}>{nextMovie[i]} </h4>
              <p>{movieSub[i]}
              <span onClick={ (e)=>{
                e.stopPropagation();
                let copy = [...star];
                copy[i] += 1;
                setStar(copy)} }>⭐</span> {star[i]} </p>

              <p> {date[i]} </p>

              <button onClick={()=>{
                //Delete Movie title
                let copy = [...nextMovie];
                copy.splice(i,1);
                setNextMovie(copy);

                //Delete Movie Sub
                copy = [...movieSub];
                copy.splice(i, 1);
                setMovieSub(copy);

                //Delete Star
                copy = [...star];
                copy.splice(i, 1);
                setStar(copy);

                //Delete Date
                copy = [...date];
                copy.splice(i, 1);
                setDate(copy);
              }}>Delete</button>
          </div>
          )
        })
      }
      
      { modal ? <Modal nextMovie={nextMovie} movieIndex = {movieIndex} color={'#dbaaaa'} setNextMovie={setNextMovie}/> : null }
      <input value = {exp} onChange={(e)=>{
        setExp(e.target.value);
      }}></input>
      <button disabled={!exp} onClick={()=>{
        //add movieTitle
        let copy = [...nextMovie];
        copy.unshift(exp);
        setNextMovie(copy);

        //add star
        copy = [...star];
        copy.unshift(0);
        setStar(copy);

        //add date
        copy = [...date];
        copy.unshift(setTime());
        setDate(copy);
        
      }}>Enter</button>
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

class Info extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      developer : 'thelight0804',
      date : '2022/11/02'
    }
  }
  render(){
    return(
      <div>
        <h4>{this.props.nextMovie[0]}</h4>
        <p>{this.state.developer} {this.state.date}</p>
        <button onClick={()=>{
          this.setState({developer : '박상현'})
        }}>Name</button>
      </div>
    )
  }
}

export default App;
