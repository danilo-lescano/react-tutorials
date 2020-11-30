import React from 'react'
import './App.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  state = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    xTurn: true
  }

  handleClick = (line,column)=>{
    let board = this.state.board;
    let xTurn = this.state.xTurn;
    if(board[line][column] == null) {
      board[line][column] = xTurn ? 'X' : 'O';
      xTurn = !xTurn;
      this.setState({xTurn: xTurn, board: board})
    }
  }
  
  renderSquare(line, column) {
    return <Square key={"square_"+line+"_"+column} value={this.state.board[line][column]} onClick={()=>this.handleClick(line,column)}/>;
  }

  render() {
    const status = 'Next player: ' + (this.state.xTurn ? 'X' : 'O');

    return (
      <div>
        <div className="status">{status}</div>
        {(()=>{
            let aux = [];
            for(let l = 0; l < 3; l++) {
              aux[aux.length] = <div key={l+"_row"} className="board-row">
                {(()=>{
                  let aux2 = [];
                  for(let c = 0; c < 3; c++)
                    aux2[aux2.length] = this.renderSquare(l, c)
                  return aux2;
                })()}
              </div>
            }
            return aux;
        })()}
      </div>
    );
  }
}
//https://reactjs.org/docs/hooks-overview.html
//https://reactjs.org/docs/hooks-intro.html
//https://reactjs.org/tutorial/tutorial.html#completing-the-game

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <div><Game/></div>
  );
}

export default App;
