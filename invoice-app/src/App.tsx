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
				<div>
					<div>
						<Button>Mark as Paid</Button>
					</div>
					<div>
						<Button variant='addButton'>New Invoice</Button>
					</div>
					<div>
						<Button variant='deleteButton'>Delete</Button>
					</div>
					<div>
						<Button variant='editButtonDark'>Edit</Button>
					</div>
					<div>
						<Button variant='editButtonLight'>Edit</Button>
					</div>
					<div>
						<Button variant='saveAsDraftButtonLight'>Save as Draft</Button>
					</div>
					<div>
						<Button variant='saveAsDraftButtonDark'>Save as Draft</Button>
					</div>
					<Button variant='addNewItemButton'>+Add New Item</Button>
				</div>

				<div>
					<h1
						style={{
							outline: '1px solid red',
						}}
						className='p-2 text-center'
					>
						Hello world
					</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
