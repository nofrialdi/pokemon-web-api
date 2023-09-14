import { useGlobalContext } from "@/context/global";

export default function Home() {
	const { allPokemonData }: any = useGlobalContext();
	console.log(allPokemonData);
	return (
		<main>
			<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5">
				{allPokemonData ? (
					allPokemonData.map((pokemon: any) => {
						return (
							<div className="rounded overflow-hidden shadow-lg" key={pokemon.id}>
								<div className="w-full">
									<img src={pokemon.sprites.other.home.front_shiny} alt={pokemon.name} />
								</div>
								<div>
									<h3 className="font-bold text-xl mb-2">{pokemon.name}</h3>
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
