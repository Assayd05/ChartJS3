import "./App.css"
import StockComparison from "./Charts/StockComparison"
import Exchange from "./Charts/Exchange"
import StockIndicators from "./Charts/StockIndicators"

function App() {
  return (
    <div className="App">
      <h1>Peso vs Dollar</h1>
      <Exchange />
      <h1>Bolsa de Valores</h1>
      <StockIndicators />
      <h1>Bolsa de valores Mexicana y Estadounidense</h1>
      <StockComparison />
    </div>
  )
}

export default App