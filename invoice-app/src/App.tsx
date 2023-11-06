import { useRef } from 'react';
import Button from './components/Button';

function App() {
	return (
		<div className='app'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					padding: '100px',
				}}
			>
				<Button>Mark as Paid</Button>
				<Button>Mark as Paid</Button>
				<Button>Mark as Paid</Button>
			</div>
		</div>
	);
}

export default App;
