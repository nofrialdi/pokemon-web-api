import React, { createContext, useEffect, useReducer, useState } from "react";

const GlobalContext = createContext({});

//actions
const LOADING = "LOADING";
const GET_POKEMON = "GET_POKEMON";
const GET_ALL_POKEMON = "GET_ALL_POKEMON";
const GET_SEARCH = "GET_SEARCH";
const GET_POKEMON_DATABASE = "GET_POKEMON_DATABASE";
const NEXT = "NEXT";

//reducers
const reducer = (state: any, action: any) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_ALL_POKEMON:
			return {
				...state,
				allPokemon: action.payload,
				loading: false,
			};
	}
	return state;
};

export const GlobalProvider = ({ children }: any) => {
	//base Url
	const baseUrl = "https://pokeapi.co/api/v2/";
	const initialState = {
		allPokemon: [],
		pokemon: {},
		pokemonDataBase: [],
		searchResult: [],
		next: "",
		loading: false,
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	const [allPokemonData, setAllPokemonData] = useState([[]]);

	const allPokemon = async () => {
		dispatch({ type: "LOADING" });

		const res = await fetch(`${baseUrl}pokemon?limit=20`);
		const data = await res.json();
		// console.log(data);
		dispatch({ type: GET_ALL_POKEMON, payload: data.results });

		//fetch caracter data
		const allPokemonData = [];
		for (const pokemon of data.results) {
			// console.log(pokemon);
			const pokemonRes = await fetch(pokemon.url);
			// console.log(pokemonRes);
			const pokemonData = await pokemonRes.json();
			// console.log(pokemonData);
			allPokemonData.push(pokemonData);
		}

		setAllPokemonData(allPokemonData);
	};

	useEffect(() => {
		allPokemon();
	}, []);

	return (
		<GlobalContext.Provider value={{ ...state, allPokemonData }}>{children}</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	return React.useContext(GlobalContext);
};
