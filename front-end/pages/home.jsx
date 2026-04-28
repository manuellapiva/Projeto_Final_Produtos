import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <ul className={style.descricao}>
        <li className={style.objtop}>Tecnologias Utilizadas</li>

        <li className={style.obj}>⚛️ React</li>
        <li className={style.obj}>⚡ Vite</li>
        <li className={style.obj}>🧠 JavaScript</li>
        <li className={style.obj}>🔀 React Router</li>
        <li className={style.obj}>🌐 Fetch</li>
        <li className={style.obj}>🎨 CSS (livre)</li>
      </ul>
    </div>
  );
}

export default Home;
