import { useRef } from 'react';

// components
import Form from './components/forms';
import { FormTextRef } from './components/forms/Text';
import Button from './components/Button';

function App() {
	const customRef = useRef<FormTextRef | null>(null);

	return (
		<div className='app'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<div className='d-flex align-items-center flex-column pt-5'>
					<div className='mt-5'>
						<Form.Date ref={customRef} />
					</div>

					<div className='mt-2'>
						<Button onClick={() => console.log(customRef.current?.value)}>
							Get Value
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
