import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Rut = styled.button`
  display: inline-block;
  text-align: center;
  width: 50%;
  height: 25px;
  background-color: transparent;
  padding: auto;
  color: MediumAquaMarine;
  border: 1px solid MediumAquaMarine;

  &:active {
    background-color: MediumAquaMarine;
    color: white;
  }
`;

const Field = styled.div`
  margin: 10px 5px;
`;

const routes = props => {
  return (
    <Field>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <Rut>All</Rut>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/favorites/'>
        <Rut>Favorites</Rut>
      </Link>
    </Field>
  );
};

export default routes;
