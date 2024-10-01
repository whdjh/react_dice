import { useState } from 'react';
import Button from './Button.js';
import Dice from './Dice.js';

function random(n) {
	return Math.ceil(Math.random() * n);
}

function App() {
	const [num, setNum] = useState(1);
	const [sum, setSum] = useState(0);
	const [gameHistory, setGameHistory] = useState([]);
	
	const handleRollClick = () => {
		const nextNum = random(6);
		setNum(nextNum);
		setSum(sum + nextNum);
		setGameHistory([...gameHistory, nextNum]);
	};
	// 1로 초기화
	const handleClearClick = () => {
		setNum(1);
	};

	return (
		<div>
			<div>
				<Button onClick={handleRollClick}>던지기</Button>
				<Button onClick={handleClearClick}>처음부터</Button>
			</div>
			<div>
				<h2>나</h2>
				<Dice color="blue" num={num} />
				<h2>총점</h2>
				<p>{sum}</p>
				<h2>기록</h2>
				{gameHistory.join(', ')}
			</div>
		</div>
	);
}


export default App;