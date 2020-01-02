import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
    state = {
        pseudo: '',
        goTochat: false

    }

    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goTochat: true })
    }
    render() {
        if (this.state.goTochat) {
            return <Redirect push to={`pseudo/${this.state.pseudo}`}> </Redirect>
        }

        return (
            <div className='connexionBox'>
                <form className="connexion" onSubmit={this.handleSubmit}>
                    <input
                    value={this.state.pseudo}
                    onChange={this.handleChange} 
                    placeholder='Pseudo'
                    type='text'
                    required/>
                    <button type='submit'>GO</button>
                </form>
            </div>
        );
    }
}

export default Connexion;