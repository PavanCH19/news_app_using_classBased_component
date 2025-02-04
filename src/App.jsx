import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav_bar";
import LoadingBar from "react-top-loading-bar";

import "./App.css";
import New_container from "./components/new_container";
import Footer from "./components/footer";

class App extends Component {

  state = {
    itemCount: 6,
    progress: 2,
    progColor: "#f11946"
  }

  setProgress = (progress, progColor) => {
    this.setState({
      progress: progress,
      progColor: progColor
    })
  }

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color={this.state.progColor}
            height={4}
            progress={this.state.progress}
          />
          <Nav />
          <Routes>
            <Route exact path="/" element={<New_container progress={this.setProgress} cdl={this.state.itemCount} category="general" />} />
            <Route exact path="/business" element={<New_container progress={this.setProgress} cdl={this.state.itemCount} category="business" />} />
            <Route exact path="/entertainment" element={<New_container progress={this.setProgress} cdl={this.state.itemCount} category="entertainment" />} />
            <Route exact path="/general" element={<New_container progress={this.setProgress} cdl={this.state.itemCount} category="general" />} />
            <Route exact path="/health" element={<New_container progress={this.setProgress} cdl={this.state.itemCount} category="health" />} />
            <Route exact path="/science" element={<New_container progress={this.setProgress} cdl={this.state.itemCount} category="science" />} />
            <Route exact path="/sports" element={<New_container progress={this.setProgress} cdl={this.state.itemCount} category="sports" />} />
            <Route exact path="/technology" element={<New_container progress={this.setProgress} cdl={this.state.itemCount} category="technology" />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;