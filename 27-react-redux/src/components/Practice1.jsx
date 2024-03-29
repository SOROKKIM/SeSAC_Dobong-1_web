import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "../store/module/bankReducer";

export default function Bank() {
  const [money, setMoney] = useState(0);
  const balance = useSelector((state) => state.bank); //Number형
  const dispatch = useDispatch();
  return (
    <div>
      <h1>코딩온 은행</h1>
      <h3>잔액 : {balance}</h3>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(Number(e.target.value))}
        step={100}
      />
      <button onClick={() => dispatch(deposit(money))}>입금</button>
      <button onClick={() => dispatch(withdraw(money))}>출금</button>
    </div>
  );
}
