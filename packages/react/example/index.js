import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'


function testFunction(
  firstLongArgument,
  exactlySecondLongArgument,
  isThatThirdArgument,
) {
  return PropTypes.instanceOf(isThatThirdArgument)
}

const Button = ({ children, onClick, demo }) => (
  <div role="button" onClick={onClick} focusable>
    {children} x {demo}
  </div>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  demo: testFunction(undefined, 'last', Number),
}

Button.defaultProps = {
  children: null,
  onClick: null,
  demo: Number(1),
}

class Page extends Component {
  state = { count: 0 }

  increment = () => {
    this.setState((prevState) => prevState.count + 1)
  }

  render() {
    return (
      <div>
        <Button onClick={this.increment}>
          Increment: {this.state.count}
          <div>
            <div>
              <div>
                <Button />
              </div>
            </div>
          </div>
        </Button>
      </div>
    )
  }
}

// eslint-disable-next-line react/no-multi-comp
class Example extends PureComponent {
  static propTypes = {
    onUpdate: PropTypes.func,
  }

  static defaultProps = {
    onUpdate: null,
  }

  resolveUpdate = (event) => {
    if (this.props.onUpdate) {
      this.props.onUpdate(event.target)
    }
  }

  render() {
    return (
      <Button onClick={this.resolveUpdate}>Update</Button>
    )
  }
}

module.exports = {
  Button,
  Page,
  Example,
}
