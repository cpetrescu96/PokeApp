import React from 'react';
import TextInput from './Inputs/TextInput';
import SelectInput from './Inputs/SelectInput';
import ButtonInput from './Inputs/ButtonInput';
import styled from 'styled-components';

const Bar = styled.div`
  display: inline-block;
  background-color: #d3d3d35e;
  height: 25px;
  width: 1px;
  padding: 5px 0;
  position: absolute;
`;

const form = props => {
  return (
    <div>
      <TextInput search={props.search} searchhandler={props.searchhandler} />
      <SelectInput select={props.select} />
      <ButtonInput classes={props.bars} clicked={props.linearList} List>
        {props.children}
      </ButtonInput>
      <Bar />
      <ButtonInput classes={props.grid} clicked={props.gridList}>
        {props.children}
      </ButtonInput>
    </div>
  );
};

export default form;
