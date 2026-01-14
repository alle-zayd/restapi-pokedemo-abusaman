export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-red-600 text-white px-6 py-4 shadow-lg flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-800 flex items-center justify-center relative overflow-hidden">
            <div className="w-full h-[2px] bg-gray-800 absolute top-1/2 -translate-y-1/2"></div>
            <div className="w-2 h-2 bg-white border-2 border-gray-800 rounded-full z-10"></div>
        </div>
        <h1 className="text-xl font-black tracking-tighter uppercase italic">PokéDash</h1>
      </div>
      <div className="flex gap-6 text-sm font-bold uppercase tracking-widest">
        <a href="#" className="hover:text-yellow-400 transition-colors">Home</a>
        <a href="#" className="hover:text-yellow-400 transition-colors opacity-70">Pokedex</a>
        <a href="#" className="hover:text-yellow-400 transition-colors opacity-70">About</a>
      </div>
    </nav>
  );
}