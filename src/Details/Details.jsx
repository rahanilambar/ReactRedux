import React, { Component } from 'react';
import './Details.css';
import Card from '../Card/Card';
import * as detailsaction from '../store/actions';
import { connect } from 'react-redux';

class Details extends Component{
    
    state = {
      name: '',
      section: '',
      role: '',
      password: ''
    }

      componentDidMount(){
        this.props.handleList();
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name] : event.target.value
        })
      }
    
      handleInsert = (event) => {
        event.preventDefault();
        this.props.handleInsert({...this.state})
      }
    
      handleModal = () => {
        this.setState(prevState => {
          return {
            modal: !prevState.modal
          }
        })
      }

    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.handleInsert}>
                <label>Name
                    <input name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>Section
                    <input name="section" value={this.state.section} onChange={this.handleChange} />
                </label>
                <label>Role
                    <input name="role" value={this.state.role} onChange={this.handleChange} />
                </label>
                <label>Password
                    <input name="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <button type="submit" className="btn btn-success">Insert</button>
                </form>
                {this.props.user.map( u => 
                <Card key={u.id} name={u.name} section={u.section} onDelete={() => this.props.handleDelete(u.id)} onModal={this.handleModal}></Card>
                )}
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
  return {
      user: state.details.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleList: () => dispatch(detailsaction.fetchdetails()),
    handleDelete: id => dispatch(detailsaction.deletedetails(id)),
    handleInsert: payload => dispatch(detailsaction.insertdetails(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);