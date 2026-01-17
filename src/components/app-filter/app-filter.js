import './app-filter.css'

const AppFilter = (props) => {

	const buttonsData = [
		{label: 'Все сотрудники'},
		{label: 'На повышение'},
		{label: 'З/П больше 1000$'}
	];

	const buttons = buttonsData.map(({label}, i) => {
		const active = props.filter === i;
		const clazz = active ? 'btn-light' : 'btn-outline-light';
		return (			
			<button className={`btn ${clazz}`}
					type='button'
					onClick={() => props.onFilterUpdate(i)}
					key={i}
					>
						{label}
			</button>)
	})

	return (
		<div className="btn-group">
			{buttons}
		</div>
	);
}

export default AppFilter;