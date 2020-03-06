import React, { Component } from "react";

class PeopleDisplay extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      img: "",
      favColor: "",
      favFood: "",
      isCool: true,
      toggle: false
    };
}
        handleToggle = () => {
            this.setState({
                toggle: !this.state.toggle
            })
        }
        handleChange = (e) => {
            this.setState({
                [e.target.placeholder]: e.target.value
            })
        }
  render() {
      let {name, img, favColor, favFood} = this.state
    //   console.log(this.state)
    return (
      <div>
        {!this.state.toggle ? (
          <div>
            <img onClick={this.handleToggle} src={this.props.data.img} alt="" />
            <h1>{this.props.data.name}</h1>
            <h3>{this.props.data.favColor}</h3>
            <h3>{this.props.data.favFood}</h3>
          </div>
        ) : (
            <div>
                <button onClick={this.handleToggle}>Cancel</button>
                <input onChange={e=> this.handleChange(e)} placeholder='name' type="text" value={this.state.name}/>
                <input onChange={e=> this.handleChange(e)} placeholder='img' type="text" value={this.state.img}/>
                <input onChange={e=> this.handleChange(e)} placeholder='favColor' type="text" value={this.state.favColor}/>
                <input onChange={e=> this.handleChange(e)} placeholder='favFood' type="text" value={this.state.favFood}/>
                <button onClick={() => {
                    this.props.update(this.props.data.id,{name, img, favColor, favFood})
                    this.handleToggle()
                }}>Update</button>
                <button onClick={()=> {
                    this.props.delete(this.props.data.id)
                    this.handleToggle()
                }}>Delete</button>
            </div>
        )}
      </div>
    );
  }
}

export default PeopleDisplay;
