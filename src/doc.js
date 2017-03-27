function define
function upper (name) {
  return name.toUpperCase()
}

const upper = function (name) {
  return name.toUpperCase()
}

const upper = (name) => {
  return name.toUpperCase()
}

const upper = (name) => name.toUpperCase()

component

stateless
const FooComponent = function (props) {
  return <h1>Hello {props.name}</h1>
}

class component
class FooComponent extends React.Component {
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}


invoking a function
upper('tom')

upper.call(null, 'tom')

upper.apply(null, ['tom'])

invoke a component

React.createElement(FooComponent, { name: 'Tom'})

<FooComponent name="Tom" />
