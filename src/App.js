import React from 'react';
import './App.css';
import PeopleDisplay from './components/PeopleDisplay'
import axios from 'axios'

class App extends React.Component {
  state = {
    people: []
  }
  componentDidMount(){
    // console.log('fired')
    this.getPeople()
  }
  getPeople = () => {
    axios.get(`/api/people`).then(res => {
      // console.log(res)
      this.setState({people: res.data})
  })
}
  updatePerson = (id, body) => {
    axios.put(`/api/people/${id}`, body).then(res => {
      this.setState({
        people: res.data
      })
    })
  }
  deletePerson = (id) => {
    axios.delete(`/api/people/${id}`).then(res => {
      this.setState({
        people:res.data
      })
    })
  }
    
    render(){
      const newPeople = this.state.people.map((el, i)=> {
        return <PeopleDisplay data={el} key={i} delete={this.deletePerson} update={this.updatePerson}/>
      })
    return (
      <div className="App">
        {newPeople}
    </div>
  );
}
}

export default App;
