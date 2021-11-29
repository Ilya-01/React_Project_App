import React, { Component } from 'react';

class App extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            newItem: "",
            list: []
        };
    }

    updateInput(key, value) {
        // Update react state
        this.setState({ [key]: value });
    }

    addItem() {
        // Create item with unique id
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        // Copy of current list of items
        const list = [...this.state.list];

        // Add new item to list
        list.push(newItem);

        // Update state with new list and reset newItem input
        this.setState({
            list,
            newItem: ""
        });
    }

    deleteItem(id) {
        // Copy current list of items
        const list = [...this.state.list];

        // Filter out item being deleted
        const updatedList = list.filter(item => item.id !== id);

        this.setState({list: updatedList});
    }
    render() {
        return (
            <div className="App">

                <h1 className="app-title">To - Do</h1>

                <div className="container">
                    <div style={{padding: 30, textAlign: "left", maxWidth: 500, margin: "auto"}}>
                        ↓ Add an item ↓<br/>
                        <input type="text" placeholder="✨ Type here ✨" value={this.state.newItem} onChange={e => this.updateInput("newItem", e.target.value)} />
                        <button onClick={() => this.addItem()}>➕</button>
                        <br/>
                        <ul>
                            {this.state.list.map(item => {
                                return(
                                    <li key={item.id}>
                                        {item.value}
                                        <button
                                        onClick={() => this.deleteItem(item.id)}>✘</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
