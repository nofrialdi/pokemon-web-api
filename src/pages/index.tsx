import { useGlobalContext } from "@/context/global";

export default function Home() {
	const { allPokemonData }: any = useGlobalContext();
	console.log(allPokemonData);
	return (
		<main>
			<div>
				{allPokemonData ? (
					allPokemonData.map((pokemon: any) => {
						return (
							<div key={pokemon.id}>
								<div>
									<img src={pokemon.sprites.other.home.front_shiny} alt={pokemon.name} />
								</div>
								<div>
									<h3>{pokemon.name}</h3>
									<p>More Detail &nbsp; &rarr;</p>
								</div>
							</div>
						);
					})
				) : (
					<h1>Loading...</h1>
				)}
			</div>
		</main>
	);
}
