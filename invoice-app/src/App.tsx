import { useRef } from 'react';
import Button from './components/Button';

function App() {
	return (
		<div className='app'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<div className='d-flex flex-column gap-1 m-4 debug'>
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
					<h1 className='text--title uppercase'>I am the danger</h1>
					<h1 className='text--h1'>Hello world</h1>
					<h2 className='text--h2'>I know</h2>
					<h3 className='text--h3'>This is very cool</h3>
					<h4 className='text--h4'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
						repellendus doloremque adipisci nostrum sequi?
					</h4>
				</div>
			</div>
		</div>
	);
}

export default App;
