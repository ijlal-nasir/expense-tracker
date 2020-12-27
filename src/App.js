import './App.css';
import AccountSummary from './components/AccountSummary';
import AddNewTransaction from './components/AddNewTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionHistory from './components/TransactionHistory';
import { TransactionProvider } from './contexts/TransactionContext';

function App() {
	return (
		<TransactionProvider>
			<Header />
			<div className="container">
				<Balance />
				<AccountSummary />
				<TransactionHistory />
				<AddNewTransaction />
			</div>
			
		</TransactionProvider>
		
	);
}

export default App;
