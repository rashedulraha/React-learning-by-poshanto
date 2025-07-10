import style from "./app.module.css";

const App = () => {
  return (
    <div className={style.calculatorBorder}>
      <input className={style.calculator} id="calculator" type="text" />
      <div id="buttons">
        <button>C</button>
        <button>C</button>
        <button>C</button>
      </div>
    </div>
  );
};

export default App;
