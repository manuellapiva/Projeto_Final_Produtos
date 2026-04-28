import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.container}>
      <div className={style.descricao}>
        <li className={style.objtop}>Tecnologias Utilizadas</li>

        <li className={style.obj}>⚛️ React</li>
        <li className={style.obj}>⚡ Vite</li>
        <li className={style.obj}>🧠 JavaScript</li>
        <li className={style.obj}>🔀 React Router</li>
        <li className={style.obj}>🌐 Fetch</li>
        <li className={style.obj}>🎨 CSS (livre)</li>
      </div>
      <div className={style.descricao}><h3 className={style.objtop}>Quem somos ?</h3><p>Este sistema foi desenvolvido para gerenciar produtos de forma simples e eficiente. A aplicação permite cadastrar, visualizar, editar e excluir produtos, integrando um front-end moderno com um backend funcional. <br /><br /> O projeto utiliza  React, Vite e JavaScript, garantindo uma interface rápida, dinâmica e organizada. A comunicação com a API é feita através de requisições HTTP, proporcionando uma experiência completa de CRUD em tempo real. <br /><br />Além disso, o sistema foi estruturado seguindo boas práticas de desenvolvimento, com organização de código e separação entre frontend e backend.</p></div>
    </div>
  );
}

export default Home;
