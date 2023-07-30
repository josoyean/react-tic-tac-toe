import React, {useState } from 'react'
import Square from './Square'


const Board = ({squares ,onClick})=>{

const renderSquare =(i)=>{
        return <Square value={squares[i]} onClick={()=>
            {onClick(i)}
        }></Square>
    }

      return (
         <div className='board-wrap'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      )
}

export default Board
//this.renderSquare(3) i에 3을 넣게 되면 value={3} 이되면 Square 컴포넌트에 {this.props.value}는 값을 받아오는 역할되어 알맞는 값이 화면에 표시가 된다.
//props은 값을 받아오는 함수 - 한번 지정한 값은 변경하기가 어려움

//state - 어떠한것을 기억하기 위해 사용 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체입니다. state가 변경되고 컴포넌트는 리랜더링 됩니다. state는 컴포넌트 안에서 관리합니다
