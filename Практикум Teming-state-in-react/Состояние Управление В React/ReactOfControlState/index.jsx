import React, { Component } from "react";

import arrayDiet from "./array.json";

// or

const Conteiner = props => {
  //...
  return (
    <div
      style={{
        margin: 4,
        padding: 4,
        border: `solid ${props.color} 2px`
      }}
    >
      {props.children}
    </div>
  );
};
// or
const SearchBar = () => (
  // ...
  <Conteiner color="blue">
    <input type="text" name="search" />
    <br />
    <label>
      {" "}
      Checkbox .<input type="checkbox" />
    </label>
  </Conteiner>
);
const ProductTable = props => (
  <Conteiner color="green">
    <h2>Name Price</h2>
    {props.children}
  </Conteiner>
);
// or
class ReactOfControlState extends Component {
  // ...
  constructor(props) {
    super(props);

    this.state = {
      array: null
    };
  }
  componentDidMount() {
    this.setState({ array: arrayDiet });
  }
  render() {
    const { array } = this.state;
    return (
      <div>
        <Conteiner color="orange">
          <SearchBar />
          <ProductTable>
            <Conteiner color="aqua" children={<p>Sporting Goods</p>} />

            {array
              ? array
                  .filter(el => el.category === "Sporting Goods")
                  .map(elem => (
                    <Conteiner key={elem.name} color="red">
                      <span> {elem.name} </span>
                      <span> {elem.price}</span>
                    </Conteiner>
                  ))
              : null}

            <Conteiner color="aqua">
              <p>Electronics</p>
            </Conteiner>

            {array
              ? array.filter(el => el.category === "Electronics").map(elem => (
                  <Conteiner key={elem.name} color="red">
                    <span> {elem.name} </span>
                    <span> {elem.price}</span>
                  </Conteiner>
                ))
              : null}
          </ProductTable>
        </Conteiner>
      </div>
    );
  }
}

export default ReactOfControlState;
