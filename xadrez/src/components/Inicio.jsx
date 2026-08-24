import cenarios from './img/cenario.png'
import { useState } from 'react'


const peças = [
  {
    nome: "Peão",
    imagem: "imagem 1",
    informações: "Move-se uma casa para frente. No primeiro movimento, pode avançar duas casas. Captura peças na diagonal."
  },
  {
    nome: "Cavalo",
    imagem: "imagem 2",
    informações: "Move-se em formato de L: duas casas em uma direção e uma casa para o lado. É a única peça que pode pular outras peças."
  },
  {
    nome: "Bispo",
    imagem: "imagem 3",
    informações: "Move-se diagonalmente quantas casas quiser, desde que o caminho esteja livre."
  },
  {
    nome: "Torre",
    imagem: "imagem 4",
    informações: "Move-se em linha reta, na horizontal ou vertical, quantas casas quiser, desde que o caminho esteja livre."
  },
  {
    nome: "Dama",
    imagem: "imagem 5",
    informações: "Move-se quantas casas quiser na horizontal, vertical ou diagonal. É a peça mais poderosa do xadrez."
  },
  {
    nome: "Rei",
    imagem: "imagem 6",
    informações: "Move-se apenas uma casa por vez em qualquer direção. O rei não pode se mover para uma casa onde possa ser capturado."
  }
];
function Inicio() {

  return (

    <div className='Inicio'>

      <div className="imagem__cenario">
        <img src={cenarios} alt="" />
      </div>
      <div className='peças'>
<img src='' alt="" />
      </div>
      <div>
        <h1>texto</h1>
      </div>



    </div>

  )
}

export default Inicio 