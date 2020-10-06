import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { filter,setFilter } = this.props;
    return (
      <div>
        <span>show:</span>
        <button disabled={filter === "all"} onClick={()=>setFilter('all')}>all</button>
        <button disabled={filter === "done"} onClick={()=>setFilter('done')}>done</button>
        <button disabled={filter === "active"} onClick={()=>setFilter('active')}>active</button>
      </div>
    );
  }
}

export default Footer;
