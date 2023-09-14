import Image from "next/image";
import { Inter } from "next/font/google";
import { useGlobalContext } from "@/context/global";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const allPokemonData = useGlobalContext();
	console.log(allPokemonData);
	return <main></main>;
}
