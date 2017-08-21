import React from 'react'

const ComponentBox = (props) => (
  <div style={{backgroundColor: "#acacac", color: props.color ? props.color : "white"}}>
    Array value {props.value}
  </div>
)


export default ComponentBox;
