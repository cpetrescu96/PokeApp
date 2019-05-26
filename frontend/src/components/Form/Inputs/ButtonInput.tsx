import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border: 0px solid transparent;
  color: MediumAquaMarine;
  background-color: transparent;
  width: 25px;
  height: 25px;
`;

const buttonInput = props => {
  return (
    <Btn
      onClick={props.List ? props.lineList : props.gridList}
      style={{ border: '0px solid transparent' }}
      className={props.List ? 'fas fa-bars' : 'fas fa-grip-horizontal'}
    >
      <i className={props.classes} style={{ color: 'MediumAquaMarine' }} />
    </Btn>
  );
};

export default buttonInput;
