import { useRef, useEffect } from 'react';

// components
import Form from './components/forms';
import { FormTextRef } from './components/forms/Text';

function App() {
	const customRef = useRef<FormTextRef | null>(null);

	const options = [
		{
			value: '30',
			label: 'Net 30 Days',
		},
		{ value: '14', label: 'Net 14 Days' },
		{ value: '7', label: 'Net 7 Days' },
		{ value: '1', label: 'Net 1 Day' },
	];

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
						<Form.Select
							ref={customRef}
							label='Payment Terms'
							options={options}
						/>
					</div>

					{/* <button onClick={() => {
						console.log(customRef.current?.value)
					}}>Click me</button> */}
				</div>
			</div>
		</div>
	);
}

export default App;
