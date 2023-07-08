import { Provider } from "react-redux";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-soft-gray flex flex-col items-center pt-6 py-10 gap-8">
        <Header />
        <div className="w-3/5 flex flex-col items-center justify-center gap-2">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </Provider>
  );
}

export default App;
