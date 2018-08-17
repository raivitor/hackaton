import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

const Page1 = (props) => (
  <div className="col-md-12">
    {console.info(props)}
    <h3> Bem vindo!</h3>
    <div className="row">
      <div className="col-md-4 col-md-offset-4">
        <Link to='/user/'>CLIQUE PARA IR PARA PÁGINA 2</Link>
      </div>
    </div>
  </div>
)

export default Page1;