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
						{name: 'John C.', salary: 800, increase: false, like: true, id: 1},
						{name: 'Alex M.', salary: 3000, increase: true, like: false, id: 2},
						{name: 'Carl W.', salary: 5000, increase: false, like: false, id: 3},
						],
					   term: '',
					   btn: 0
					};
		this.maxId = 4
	}

	onDelete = (id) => {
		this.setState(({data}) => ({
			data: data.filter(item => item.id !== id)
		}));
	}

	onAdd = (name, salary) => {
		this.setState(({data}) => ({
			data: [...data, {name, salary, increase: false, like: false, id: this.maxId++}]
		}));
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => {
				if(item.id === id) {
					return {...item, [prop]: !item[prop]}
				}
				return item;
			})		
		}))
	}

	searchEmp = (items, term) => {
		if(term.length === 0) {
			return items
		} else {
			return items.filter(item => {
				return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
			})
		}
	}

	filterEmp = (items, btn) => {
		if(+btn === 1) {
			return items.filter(item => item.like);
		} else if (+btn === 2) {
			return items.filter(item => item.salary > 1000);
		} else {
			return items
		}
	}

	onSearchUpdate = (term) => {
		this.setState({term});
	}

	onFilterUpdate = (btn) => {
		this.setState({btn});
	}

	render() {
		const {data, term, btn} = this.state;
		const employees = data.length;
		const increase = data.filter(item => item.increase).length;
		const visibleData = this.filterEmp(this.searchEmp(data, term), btn);
		return (
			<div className="app">
				<AppInfo employees={employees}
						 increase={increase}/>

				<div className="search-panel">
					<SearchPanel onSearchUpdate={this.onSearchUpdate}/>
					<AppFilter onFilterUpdate={this.onFilterUpdate}
							   filter={btn} />
				</div>

				<EmployersList data={visibleData} 
							   onDelete={this.onDelete}
							   onToggleProp={this.onToggleProp} />
				<EmployersAddForm onAdd={this.onAdd} />
			</div>
		);
	}
}

export default App;