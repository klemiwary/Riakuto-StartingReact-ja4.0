import { FC } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: FC = () => {
  const name = "Patty";
  const greet = (name: string) => <p>Hello, {name || "Guest"}!</p>;

  const n = Math.floor(Math.random() * 10); // 0〜9 のランダムな整数を生成
  const threshold = 5;

  const list = ["Patty", "Rolley", "Bobby"];

  const elems = (
    <>
      <div>foo</div>
      <div>bar</div>
      <div>baz</div>
    </>
  );

  return (
    <div className="App">
      <div>{greet(name)}</div>
      <div />
      <div></div>
      <div>{""}</div>
      <div>{undefined}</div>
      <div>{null}</div>
      <div>{true}</div>
      <div>{false}</div>
      {n > threshold && (
        <p>
          {n} は {threshold} よりも大きい値です
        </p>
      )}
      {n > threshold || (
        <p>
          {n} は {threshold} 以下の値です
        </p>
      )}
      <p>
        {n} は {n % 2 === 0 ? "偶数" : "奇数"}です
      </p>
      <ul>
        {list.map((name) => (
          <li>Hello, {name}!</li>
        ))}
      </ul>
      {
        // インラインコメント
      }
      {/*
        複数行に
        渡るコメント
      */}
      {elems}
    </div>
  );
};

export default App;
