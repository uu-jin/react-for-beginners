import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [coinPrice, setCoinPrice] = useState("");
  const [money, setMoney] = useState(0);
  const [result, setResult] = useState(0);
  const onChange = (evt) => setMoney(evt.target.value);
  const onChangeCoinPrice = (evt) => setCoinPrice(evt.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    setResult(coinPrice * money);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
        <form onSubmit={onSubmit}>
          <h1>The Conins!  {loading ? "" : `(${coins.length})`}</h1>
          {loading ? <strong>Loading...</strong> : (
            <select onChange={onChangeCoinPrice}>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.quotes.USD.price}>
                  {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
                </option>
              ))}
            </select>
          )}
          <div>
            <input
              value={money}
              type="numner"
              placeholder="투자할 금액을 입력하세요."
              onChange={onChange}
            />
            <button>계산하기</button>
          </div>
        </form>
        you can change <strong>${result}</strong> coins!
    </div>
  );
}

export default App;
