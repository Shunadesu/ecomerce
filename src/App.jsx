// import AuthPage from "./components/public/AuthPage";
import Ecomerce from "./components/Ecomerce";
import { CurrencyProvider } from "./hooks/useCurrency";


function App() {
  return (
    <div className="font-jost min-h-screen flex flex-col items-center">
      <CurrencyProvider>
        <Ecomerce />
      </CurrencyProvider>
    </div>
  );
}

export default App;