import React from 'react';
import './Header.css';

class Header extends React.Component {
    state = { nextTask: '' };

    onInputChange = e => {
        this.setState({ nextTask: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.handleTaskAdd(this.state.nextTask);
        this.setState({ nextTask: '' });
    };

    render() {
        const { nextTask } = this.state;
        return (
            <div className="header">
                <h2 className="app-title">Atarefado</h2>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        className="entry-field"
                        type="text"
                        spellCheck="false"
                        value={nextTask}
                        onChange={this.onInputChange}
                        placeholder="Enter your next task..."
                    />
                    <button type="submit" className="add-button">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default Header;
