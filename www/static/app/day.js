import React from "react";
import { render } from "react-dom";
import {ContentDiv, DayLinkDiv} from "./day_component";
import "whatwg-fetch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setDay = this.setDay.bind(this);
    this.onDayLinkClick = this.onDayLinkClick.bind(this);
    this.state = {day_before: null, day_after: null};
  }

  setDay(day) {
    let form  = new FormData();
    form.append("day", day);
    let that = this;
    fetch("/api/day", {method: "POST",
                       credentials: "same-origin",
    		       body: form})
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let err = data["err"];
      if (!err) {
        let nstate = {day_before: data["day_before"],
                      day_after: data["day_after"]};
        if (data["data"]) {
          nstate["data"] = data["data"];
        }
        if (nstate["data"] == null) {
          let now = new Date(document.title);
          let t = new Date();
          let today = new Date(t.getFullYear(), t.getMonth(), t.getDate());
          if (now >= today && nstate["day_before"] != null) {
            that.setDay(nstate["day_before"]);
            return;
          }
        }
        else {
          document.title = day;
          window.history.pushState(day, day, "/d/" + day);
          that.setState(nstate);
        }
      }
    })
    .catch(function(err) {
      console.log("error in fetch json data");
    });
  }

  componentWillMount(){
    this.setDay(document.title);
  }

  onDayLinkClick(day) {
    if (day) {
      this.setDay(day);
    }
  }

  render() {
      return (
        <div>
          <ContentDiv data={this.state.data} />
          <DayLinkDiv day_after={this.state.day_after} day_before={this.state.day_before} onDayLinkClick={this.onDayLinkClick} />
        </div>
      )
    }
};

render(<App />, document.getElementById("content"));
