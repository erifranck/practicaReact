import React, {Component} from 'react'

class Slider extends Component {
  constructor() {
    super()
    this.state = {
      slidePosition: 0
    }
    this.pushSlideleft = this.pushSlideleft.bind(this)
    this.pushSlideRight = this.pushSlideRight.bind(this)
  }
  pushSlideRight() {
    const plus = this.state.slidePosition + 1;
    this.setState({slidePosition: plus > this.props.images.length - 1 ? 0 : plus })
  }
  pushSlideleft() {
    const minus = this.state.slidePosition - 1;
    this.setState({slidePosition: minus < 0 ? this.props.images.length - 1 : minus })
  }
  render() {
    return (
      <div style={{position: "relative", display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <i
          onClick={this.pushSlideleft}
          style={{fontSize: "18px"}}
          className="fa fa-arrow-left"
        />
        {
          this.props.images.map(
            (img, index) => (
              <img
                src={img}
                style={{display: index !== this.state.slidePosition && "none"}}
                key={index}/>
            )
          )
        }
        <i
          style={{fontSize: "18px"}}
          onClick={this.pushSlideRight}
          className="fa fa-arrow-right"
        />
      </div>
    )
  }

}
export default Slider;
