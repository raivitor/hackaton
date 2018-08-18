import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  margin: 2px;
  border-radius: 3px;
  padding: 0.25em 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export default class Page2 extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: false
    };
  }

  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="col-md-12">
        <h3> Bem vindo!</h3>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <Link to='/'>Page2Page2Page2Page2Page2Page2Page2</Link><br/>
            <StyledButton primary>StyledButton primary props</StyledButton><br/>
            <StyledButton>StyledButton</StyledButton><br/>
            <Button onClick={this.handleShow}>Show Alert</Button>
            {this.state.show && (
              <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
                <h4>Oh snap! You got an error!</h4>
                <p>
                  Change this and that and try again. Duis mollis, est non commodo
                  luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                  Cras mattis consectetur purus sit amet fermentum.
                </p>

                <p>
                  <Button bsStyle="danger">Take this action</Button>
                  <span> or </span>
                  <Button onClick={this.handleDismiss}>Hide Alert</Button>
                </p>
              </Alert>
            )}
          </div>
        </div>
      </div>
    );
  }
}