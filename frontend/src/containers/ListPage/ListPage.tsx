import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import PokemonList from '../Content/PokemonList';
import { gql } from 'apollo-boost';

const Content = styled.main`
  width: 100%;
  min-height: 700px;
  background-color: white;
  border: 1px solid #d3d3d35e;
  box-shadow: 1px 1px 5px #d3d3d35e;
`;

const REFRESH_POKEMONS = gql`
  query($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      edges {
        isFavorite
      }
    }
  }
`;

const GET_POKEMONS = gql`
  query($query: PokemonsQueryInput!) {
    pokemons(query: $query) {
      edges {
        name
        types
        image
        isFavorite
      }
    }
  }
`;

export class ListPage extends Component<any, any> {
  state = {
    pokemons: [],
    offset: 0,
    pending: false,
    limit: 9,
    menu: {
      allTab: true,
      favoriteTab: false,
      searchFieldValue: undefined,
      selectFieldValue: undefined,
      lineListing: undefined,
      gridListing: undefined
    }
  } as any;

  componentDidMount() {
    this.fetchPokemons();
  }

  onChangeSearchHandler = ev => {
    let prevState = { ...this.state };

    // let newState = {
    //   offset: 0,
    //   pokemons: [],
    //   menu: {
    //     ...this.state.menu,
    //     searchFieldValue: value
    //   }
    // };

    let tempMenu = { ...this.state.menu };
    let value = ev.target.value;
    tempMenu.searchFieldValue = value;

    // let newState = {
    //   offset: 0,
    //   pokemons: [],
    //   menu: {
    //     ...this.state.menu,
    //     searchFieldValue: value
    //   }
    let newState = {
      offset: 0,
      pokemons: [],
      menu: tempMenu
    };

    this.setState({ ...newState }, () => {
      // console.log('newState --', newState);
      this.fetchPokemons();
    });
  };

  onChangeSelectHandler = ev => {
    let prevState = { ...this.state };
    let tempMenu = { ...this.state.menu };

    tempMenu.selectFieldValue =
      ev.target.value === ''
        ? ev.target.value
        : ev.target.value.charAt(0).toUpperCase() + ev.target.value.slice(1);
    console.log(tempMenu.selectFieldValue);
    this.setState(
      {
        menu: tempMenu,
        pokemons: [],
        offset: 0
      },
      () => {
        console.log('newState --');
        this.fetchPokemons();
      }
    );
  };

  fetchPokemons = async () => {
    console.log('state2 ', this.state);
    const { client } = this.props;
    this.setState({
      pending: true
    });

    const { data, error, ...rest } = await client.query({
      query: GET_POKEMONS,
      variables: {
        query: {
          limit: this.state.limit,
          offset: this.state.offset,
          search: this.state.menu.searchFieldValue,
          filter: {
            type: this.state.menu.selectFieldValue,
            isFavorite: this.state.menu.isFavorite
          }
        }
      }
    });
    //console.log('data ', data, 'r ', rest);
    if (error) console.log('error: ', error);
    if (data) {
      const prevPokemons = this.state.pokemons;

      this.setState({
        pokemons: [...prevPokemons, ...data.pokemons.edges],
        offset: this.state.offset + 9,
        pending: false
      });
    }
  };

  refreshPokemons = async () => {
    console.log('Unrefreshed state:', this.state);
    const { client1 } = this.props;
    this.setState({
      pending: true
    });

    const prevPokemons = this.state.pokemons;

    this.setState({
      // data1.edges.
      pokemons: [...prevPokemons],
      offset: this.state.offset,
      pending: false
    });
  };

  onClickFavBtnHandler = ev => {
    let prevState = { ...this.state };
    let tempMenu = { ...this.state.menu };

    tempMenu.selectFieldValue =
      ev.target.value === ''
        ? ev.target.value
        : ev.target.value.charAt(0).toUpperCase() + ev.target.value.slice(1);
    console.log(tempMenu.selectFieldValue);
    this.setState({ ...prevState });
  };

  render() {
    return (
      <React.Fragment>
        <Menu
          search={this.state.menu.searchFieldValue}
          searchhandler={this.onChangeSearchHandler}
          select={this.onChangeSelectHandler}
        />
        <Content>
          <PokemonList
            pokemons={this.state.pokemons}
            refresh={this.refreshPokemons}
          />
        </Content>

        <button disabled={this.state.pending} onClick={this.fetchPokemons}>
          load more
        </button>
      </React.Fragment>
    );
  }
}

export default ListPage;
