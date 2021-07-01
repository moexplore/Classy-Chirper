import React from "react";
import { v4 as uuid4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      msg: "",
      chirps: [],
    };
  }
  newChirp() {
    this.setState({
      chirps: [
        ...this.state.chirps,
        {
          name: this.state.userName,
          message: this.state.msg,
        },
      ],
    });
    this.setState({ userName: "" });
    this.setState({ msg: "" });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        chirps: [
          {
            name: "Yo-Yo",
            message: "What's up?",
          },
        ],
      });
    }, 1000);
    setTimeout(() => {
      this.setState({
        chirps: [
          {
            name: "Yo-Yo",
            message: "What's up?",
          },
          {
            name: "Yo-Yo-Ma",
            message: "Ola World?",
          },
        ],
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        chirps: [
          {
            name: "Yo-Yo",
            message: "What's up?",
          },
          {
            name: "Yo-Yo-Ma",
            message: "Ola World?",
          },

          { name: "Yo-Yo-Man", message: "Shalom World?" },
        ],
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="">UserName</label>
            <input
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
            ></input>
          </div>
          <div>
            <label htmlFor="">Chirp Message</label>
            <input
              value={this.state.msg}
              onChange={(e) => this.setState({ msg: e.target.value })}
            ></input>
          </div>
          <button
            type="button"
            className="bg-primary"
            onClick={(e) => this.newChirp(e)}
          >
            Chirp Away!
          </button>
        </form>

        <div>
          <h1
            style={{ display: "flex", justifyContent: "center", color: "blue" }}
          >
            Chirps
          </h1>
        </div>

        <div className="container">
          {this.state.chirps.map((chirp) => {
            return (
              <div key={uuid4()} className="card mb-3">
                <h3 key={uuid4()} className="card-header">
                  {chirp.name}
                </h3>
                <p key={uuid4()} className="card-body">
                  {chirp.message}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
