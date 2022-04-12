import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Página Inicial</h1>
        <nav>
          <ul>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/usuario">Usuario</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};