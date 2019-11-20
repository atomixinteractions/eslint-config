/* eslint-disable import/no-extraneous-dependencies */
import React, { Component, PureComponent } from "react"
import PropTypes from "prop-types"

function testFunction(
  _firstLongArgument,
  _exactlySecondLongArgument,
  isThatThirdArgument,
) {
  return PropTypes.instanceOf(isThatThirdArgument)
}

export const Button = ({ children, onClick, demo, onKey }) => (
  <div
    role="button"
    tabIndex={0}
    onKeyPress={onKey}
    onClick={onClick}
    focusable
  >
    {children}x{demo}
  </div>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  onKey: PropTypes.func,
  demo: testFunction(undefined, "last", Number),
}

Button.defaultProps = {
  children: null,
  onClick: null,
  onKey: null,
  demo: Number(1),
}

export class Page extends Component {
  state = { count: 0 }

  increment = () => {
    this.setState((previousState) => previousState.count + 1)
  }

  render() {
    const { count, foo: _foo, ...rest } = this.state

    return (
      <div>
        <Button {...rest} onClick={this.increment}>
          Increment:
          {count}
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
export class Example extends PureComponent {
  static propTypes = {
    onUpdate: PropTypes.func,
  }

  static defaultProps = {
    onUpdate: null,
  }

  resolveUpdate = (event) => {
    const { onUpdate } = this.props

    if (onUpdate) {
      onUpdate(event.target)
    }
  }

  render() {
    return <Button onClick={this.resolveUpdate}>Update</Button>
  }
}
