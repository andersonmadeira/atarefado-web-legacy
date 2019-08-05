import React from 'react';
import './Header.css';

class Header extends React.Component {
    state = { nextTask: '' };

    onInputChange = e => {
        this.setState({ nextTask: e.target.value });
    };

    render() {
        const { handleTaskAdd } = this.props;
        const { nextTask } = this.state;
        return (
            <div className="header">
                <h2 className="app-title">Task List</h2>
                <input
                    className="entry-field"
                    type="text"
                    spellCheck="false"
                    value={nextTask}
                    onChange={this.onInputChange}
                    placeholder="Enter your next task..."
                />
                <span
                    onClick={() => handleTaskAdd(nextTask)}
                    className="add-button"
                >
                    Add
                </span>
            </div>
        );
    }
}

export default Header;
