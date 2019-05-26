import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    border-radius: 3px;
    display: inline-block;
    margin-right: 5px;
    padding: 5px;
    width: 208px;
    background-color: #d3d3d35e;
    border: 1px solid transparent;
  }
`;

const selectInput = props => {
  return (
    <Select onChange={props.select}>
      <option value=''>Type - All</option>
      <option value='fire'>Fire</option>
      <option value='water'>Water</option>
      <option value='electric'>Electric</option>
      <option value='fighting'>Fighting</option>
    </Select>
  );
};

export default selectInput;
