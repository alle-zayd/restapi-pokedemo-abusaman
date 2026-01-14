import { ChevronRight } from "lucide-react";

export default function PokemonCard({ pokemon, isSelected, onClick }) {
  const typeColor = {
    fire: "bg-orange-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    psychic: "bg-pink-500",
    ice: "bg-cyan-300",
    dragon: "bg-indigo-600",
    dark: "bg-gray-800",
    fairy: "bg-pink-300",
    normal: "bg-gray-400",
    fighting: "bg-red-700",
    flying: "bg-sky-400",
    poison: "bg-purple-500",
    ground: "bg-amber-600",
    rock: "bg-stone-500",
    bug: "bg-lime-500",
    ghost: "bg-violet-800",
    steel: "bg-slate-400"
  };

  const mainType = pokemon.types[0].type.name;

  return (
    <div 
      onClick={onClick}
      className={`relative group cursor-pointer transition-all duration-300 transform hover:-translate-y-2 rounded-2xl p-4 overflow-hidden shadow-md hover:shadow-2xl ${
        isSelected ? 'ring-4 ring-red-500 ring-offset-2' : 'bg-white border border-gray-100'
      }`}
    >
      <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 rounded-full opacity-10 transition-transform group-hover:scale-150 ${typeColor[mainType] || 'bg-gray-400'}`}></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-gray-400">#{String(pokemon.id).padStart(3, '0')}</span>
          <div className="flex gap-1">
            {pokemon.types.map(t => (
              <span key={t.type.name} className={`px-2 py-0.5 rounded-full text-[10px] font-bold text-white uppercase ${typeColor[t.type.name] || 'bg-gray-400'}`}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="h-32 flex items-center justify-center mb-4">
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
            alt={pokemon.name}
            className="h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
          />
        </div>

        <h3 className="text-lg font-black capitalize text-gray-800 tracking-tight group-hover:text-red-600 transition-colors">
          {pokemon.name}
        </h3>
        
        <div className="mt-4 flex items-center text-xs font-bold text-gray-400 group-hover:text-gray-600">
          VIEW DETAILS <ChevronRight className="w-3 h-3 ml-1" />
        </div>
      </div>
    </div>
  );
}