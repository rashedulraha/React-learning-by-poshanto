import style from "./app.module.css";
import ButtonsContainer from "./component/ButtonsContainer";
import Display from "./component/Display";

const App = () => {
  return (
    <div className={style.calculatorBorder}>
      <Display />
      <ButtonsContainer />
    </div>
  );
};

export default App;
