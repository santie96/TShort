import { MdOutlineDeleteSweep } from "react-icons/md";

function SearchBar({ isOpen, searchQuery, setSearchQuery, hasSearchText }) {
    return (
        <>
            <div
                className={`relative z-10 overflow-hidden bg-[#F6F4F0] transition-all duration-300 ease-in-out ${isOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
            >
                <form className="relative bg-[#F6F4F0]" action="">
                    <input
                        className="w-full py-4 px-7 pr-12 border-t-2 focus:outline-none font-text focus:ring-0 border-t-[#DDDAD5]"
                        type="text"
                        name="Serach"
                        id="GlobalSearch"
                        placeholder="Ricerca capi"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className={`absolute right-4 text-icon-size top-1/2 -translate-y-1/2 cursor-pointer text-[#211D1A] transition-opacity duration-200 ${hasSearchText ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        aria-label="Cancella ricerca"
                    >
                        <MdOutlineDeleteSweep />
                    </button>
                </form>
            </div>
        </>
    );
}

export default SearchBar