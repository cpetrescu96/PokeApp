import React, { Component } from 'react';
import styled from 'styled-components';
import Routes from '../../components/Routes/Routes';
import Form from '../../components/Form/Form';

const Field = styled.div`
  margin: 10px 5px;
`;

const Wrapper = styled.div`
  border: 1px solid #d3d3d35e;
  box-shadow: 1px 1px 5px #d3d3d35e;
`;

export class Menu extends Component<any> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Routes />
        <Field>
          <Form
            gridList
            lineList
            search={this.props.search}
            searchhandler={this.props.searchhandler}
            select={this.props.select}
          />
        </Field>
      </Wrapper>
    );
  }
}

export default Menu;
