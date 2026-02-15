export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-black text-white flex items-center justify-between px-4">
            <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-gray-400">Home</a></li>
                <li><a href="/about" className="hover:text-gray-400">About</a></li>
                <li><a href="/projects" className="hover:text-gray-400">Projects</a></li>
                {/* <li><a href="/contact" className="hover:text-gray-400">Contact</a></li> */}
            </ul>
            <div className="text-lg font-bold">Sandipan</div>
            <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">lets Talk</button>

        </nav>
    );
}