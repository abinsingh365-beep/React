export default function TailNavbar() {
    return (
        <nav className="bg-red-700 text-green-400 p-3 flex justify-between">
            <h1 className="font-extrabold">sonuu</h1>       
             <div className="text-black flex gap-5">
                <a href="">home</a>
                <a href="">about</a>
                <div>
                    <label>Search </label>
                    <input type="text" name="search" placeholder="searchhh" className="border-1 border-black" />
                </div>
            </div>
        </nav>

    );
}