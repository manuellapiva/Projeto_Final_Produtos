import style from "./Equipe.module.css";
import i1 from "../src/assets/IMG/manu.PNG";
import i2 from "../src/assets/IMG/ayla.PNG";
import i3 from "../src/assets/IMG/mavi2.PNG";
import i4 from "../src/assets/IMG/gabi.PNG";
import i5 from "../src/assets/IMG/gustavo.PNG";
import Card from '../src/components/Cards/Card'

const equipe = [
  {id: 1, nome: 'Manuella da Silva Piva', img: i1},
  {id: 2, nome: 'Ayla Cristina da Silva Vilela', img: i2},
  {id: 3, nome: 'Maria Vitória Guedes Ferreira', img: i3},
  {id: 4, nome: 'Gabriella Camacho Stavarengo', img: i4},
  {id: 5, nome: 'Gustavo Millamonte', img: i5}
]

function Equipe() {
  return (
    <div className="container">
      <h1 className={style.title}>Nossa Equipe</h1>
    <div className={style.equipe}>
      {equipe.map((equipe) => (
        <Card
          key={equipe.id}
          id={equipe.id}
          nome={equipe.nome}
          img={equipe.img}
        />
      ))}
    </div>
    </div>
  );
}

export default Equipe;
