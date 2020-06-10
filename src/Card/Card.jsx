import React from 'react';
import './Card.css';

class Card extends React.Component{

    state = {
        nameedit: true,
        sectionedit: true,
        // name: this.props.name,
        // section: this.props.section
    }

    handleEdit = (action) => {
        this.setState(prevstate => {
            return {
                [action]: !prevstate[action]
            }
        })
    }

    render(){
        return (
            <div className="Card"> 
                <input name="name" value={this.props.name} disabled={this.state.nameedit}/>
                <input name="section" value={this.props.section} disabled={this.state.sectionedit} />
                <button className="btn btn-warning" onClick={this.props.onModal}>Update</button>
                <button className="btn btn-danger" onClick={this.props.onDelete}>Delete</button>
            </div>            
        )
    }
}

export default Card;