import './App.css';
import AccountSummary from './components/AccountSummary';
import AddNewTransaction from './components/AddNewTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionHistory from './components/TransactionHistory';

function App() {
	return (
		<div>
			<Header />
			<div className="container">
				<Balance />
				<AccountSummary />
				<TransactionHistory />
				<AddNewTransaction />
			</div>
			
		</div>
		
	);
}

export default App;
