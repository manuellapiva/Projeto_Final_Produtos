import style from "./equipe.module.css";
import i1 from "../src/IMG/manu.PNG";
import i2 from "../src/IMG/ayla.PNG";
import i3 from "../src/IMG/mavi2.PNG";
import i4 from "../src/IMG/gabi.PNG";
import i5 from "../src/IMG/gustavo.PNG";

function Equipe() {
  return (
    <div className={style.equipe}>
      <div className={style.card}>
        <img src={i1} alt="Manuella da Silva Piva" />
        <h3>Manuella da Silva Piva</h3>
      </div>

      <div className={style.card}>
        <img src={i2} alt="Ayla Cristina da Silva Vilela" />
        <h3>Ayla Cristina da Silva Vilela</h3>
      </div>

      <div className={style.card}>
        <img src={i3} alt="Maria Vitória Guedes Ferreira" />
        <h3>Maria Vitória Guedes Ferreira</h3>
      </div>

      <div className={style.card}>
        <img src={i4} alt="Gabriella Camacho Stavarengo" />
        <h3>Gabriella Camacho Stavarengo</h3>
      </div>

      <div className={style.card}>
        <img src={i5} alt="Gustavo Millamonte" />
        <h3>Gustavo Millamonte</h3>
      </div>
    </div>
  );
}

export default Equipe;