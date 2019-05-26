import React, { Component } from 'react';
import Pokemon from '../../components/Content/Pokemon';
import styled from 'styled-components';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: space-between;
`;

export class PokemonList extends Component<any> {
  constructor(props) {
    super(props);
  }
  render() {
    const { pokemons, refresh } = this.props;

    return (
      <ListWrapper>
        {pokemons &&
          pokemons.map(pokemon => (
            <Pokemon
              refresh={refresh}
              name={pokemon.name}
              types={pokemon.types}
              isFavorite={pokemon.isFavorite}
              image={pokemon.image}
              id={pokemon.id}
            />
          ))}
      </ListWrapper>
    );
  }
}

export default PokemonList;
