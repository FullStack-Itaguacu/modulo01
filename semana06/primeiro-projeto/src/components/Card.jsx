import "./card.css"

function Card({titulo, imagem, width, alt}) {

  /* 
    var props = {
      titulo: titulo,
      imagem: imagem,
      width: width
    }
  */

  return ( 
    <div>
      <h1 id="" className="titulo">{titulo}</h1>
      <img width={width} src={imagem} alt={alt} />
      <a href={imagem}>ver imagem</a>
    </div>
   );
}

export default Card;