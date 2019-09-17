import React, { Component } from 'react';
import './App.css';
import Key from './components/Key'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      exp : ""
    }

    this.onKeyPressed = this.onKeyPressed.bind(this)
  }

  onKeyPressed(value){
    switch(value){
      case 'AC':
        this.setState({
          exp : ""
        })
        break;
      
      case 'BSP':
        this.setState({
          exp : this.state.exp.slice(0,-1)
        })
        break;

      case '=':
        this.setState({
          exp : eval(this.state.exp)
        })
        break;
      
        default:
          this.setState({
            exp : this.state.exp + value
          })
    }
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td colSpan={4}>
                <input type="text"
                  value={this.state.exp}
                  disabled />
              </td>
            </tr>
            <tr>
              <Key keyValue={'AC'} onKeyPressed={this.onKeyPressed} spacing={2} />
              <Key keyValue={'BSP'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'/'} onKeyPressed={this.onKeyPressed} spacing={1} />
            </tr>
            <tr>
              <Key keyValue={'7'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'8'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'9'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'*'} onKeyPressed={this.onKeyPressed} spacing={1} />
            </tr>
            <tr>
              <Key keyValue={'4'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'5'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'6'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'-'} onKeyPressed={this.onKeyPressed} spacing={1} />
            </tr>
            <tr>
              <Key keyValue={'1'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'2'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'3'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'+'} onKeyPressed={this.onKeyPressed} spacing={1} />
            </tr>
            <tr>
              <Key keyValue={'0'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'.'} onKeyPressed={this.onKeyPressed} spacing={1} />
              <Key keyValue={'='} onKeyPressed={this.onKeyPressed} spacing={2} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
