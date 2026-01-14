"use client";

import React, { useState, useEffect } from "react";
import { Search as SearchIcon, Info } from "lucide-react";
import Navbar from "./Navbar";
import PokemonCard from "./PokemonCard";
import StatsDetails from "./StatsDetails";

export default function ClientWrapper({ initialData }) {
  const [pokemonData, setPokemonData] = useState(initialData || []);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (initialData && initialData.length > 0) {
      setPokemonData(initialData);
    }
  }, [initialData]);

  const filtered = (pokemonData || []).filter(p => 
    p && p.name && p.name.toLowerCase().includes(search.toLowerCase())
  );
  
  const selectedPokemon = (pokemonData || []).find(p => p.id === selectedId);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="relative group">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
            <input 
              type="text"
              placeholder="Search your Pokémon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border-none shadow-sm rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all text-lg font-medium"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.length > 0 ? (
              filtered.map(p => (
                <PokemonCard 
                  key={p.id} 
                  pokemon={p} 
                  isSelected={selectedId === p.id}
                  onClick={() => setSelectedId(p.id)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-white rounded-3xl shadow-sm italic text-gray-400">
                {pokemonData.length === 0 ? "Loading Pokémon data..." : "No Pokémon found matching your search."} 
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
          {selectedPokemon ? (
            <StatsDetails selectedPokemon={selectedPokemon} />
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-white/50 border-2 border-dashed border-gray-200 rounded-3xl min-h-[600px]">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Info className="w-8 h-8 text-gray-300" />
              </div>
              <p className="text-gray-400 font-medium tracking-tight">Select a Pokémon from the list to view detailed battle statistics and data.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}