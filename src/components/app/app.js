import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { data: [
						{name: 'John C.', salary: 800, increase: true, id: 1},
						{name: 'Alex M.', salary: 3000, increase: true, id: 2},
						{name: 'Carl W.', salary: 5000, increase: false, id: 3},
						] };
		this.maxId = 4
	}

	onDelete = (id) => {
		this.setState(({data}) => ({
			data: data.filter(item => item.id !== id)
		}));
	}

	onAdd = (name, salary) => {
		this.setState(({data}) => ({
			data: [...data, {name, salary, increase: false, id: this.maxId++}]
		}));
	}

	render() {
		const {data} = this.state;
		return (
			<div className="app">
				<AppInfo />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployersList data={data} onDelete={this.onDelete} />
				<EmployersAddForm onAdd={this.onAdd} />
			</div>
		);
	}
}

export default App;