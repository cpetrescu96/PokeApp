import React from 'react';
import styled from 'styled-components';
import { Heart as EmptyHeart } from 'styled-icons/boxicons-regular/Heart';
import { Heart as WholeHeart } from 'styled-icons/boxicons-solid/Heart';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { render } from 'react-dom';

const Nope = styled(EmptyHeart)`
  color: red;
  position: relative;
  top: -14px;
  left: 170px;
  height: 25px;
`;

const Love = styled(WholeHeart)`
  color: red;
  position: relative;
  top: -14px;
  left: 170px;
  height: 25px;
`;

const Like = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  height: 15px;
`;

const Wrapper = styled.div`
  display: inline-block;
  height: 260px;
  width: 213px;
  margin-bottom: 10px;
  border: 1px solid #cecece;
`;

const Details = styled.div`
  background-color: #d3d3d35e;
  height: 60px;
`;

const ImgContainer = styled.div`
  background-color: white;
  height: 200px;
  width: 100%;
`;

const Name = styled.p`
  width: 150px;
  padding: 10px 0 0 10px;
  margin: 0;
  font-size: 15px;
  font-weight: bold;
`;

const Type = styled.span`
  margin: 0 0 0 10px;
  font-size: 15px;
`;

const HeartContainer = styled.div`
  height: 0;
`;

const imgStyle = {
  width: '80%',
  height: '80%',
  marginLeft: '10%',
  marginTop: '10%'
};

const FAVORITE_POKEMON = gql`
  mutation($mutation: ID!) {
    favoritePokemon(id: $mutation) {
      id
      isFavorite
    }
  }
`;

const IS_FAVORITE_POKEMONS = gql`
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

const pokemon = props => {
  return (
    <Mutation
      mutation={FAVORITE_POKEMON}
      update={(cache, { data: { favoritePokemon } }) => {
        let isFav = Object.values(cache)[6].data['Pokemon:002'].isFavorite;
        console.log('isFav ----->>>>> ' + isFav);
      }}
    >
      {(favoritePokemon, { data }) => (
        <Wrapper>
          <ImgContainer>
            <img src={props.image} alt='pokemonImage' style={imgStyle} />
          </ImgContainer>
          <Details>
            <Name>{props.name}</Name>
            <HeartContainer>
              <Like
                onClick={async data => {
                  await favoritePokemon({
                    variables: {
                      mutation: `002`
                    }
                  })
                    .then(() => {
                      console.log('new state is --->>> ' + data);
                      props.refresh();
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }}
              >
                {console.log(data)}
                {props.isFavorite ? <Love /> : <Nope />}
              </Like>
            </HeartContainer>
            {props.types.map((t, el) => {
              return (
                <Type key={el}>
                  {t}
                  {el === props.types.length - 1 ? '' : ','}
                </Type>
              );
            })}
          </Details>
        </Wrapper>
      )}
    </Mutation>
  );
};
export default pokemon;
