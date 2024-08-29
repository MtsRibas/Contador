import React from "react";

export class Contador extends React.Component {
  state = {
    contarValor: 0,
  };

  onClickSoma = () => {
    const valorAtual = this.state.contarValor;
    const proximoValor = valorAtual + 1;
    this.setState({ contarValor: proximoValor });
  };
  onClickSubtrair = () => {
    this.setState({ contarValor: this.state.contarValor - 1 });
  };

  render() {
    return (
      <>
        <h3>Contador</h3>
        <p>{this.state.contarValor}</p>
        <button onClick={this.onClickSubtrair}>-</button>
        <button onClick={this.onClickSoma}>+</button>
      </>
    );
  }
}
