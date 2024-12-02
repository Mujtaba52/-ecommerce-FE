import { getProducts } from "@/lib/apis/apiCalls/productApi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchProducts(debouncedSearchTerm);
        }
    }, [debouncedSearchTerm]);

    const fetchProducts = async (name: string) => {
        try {
            const response = await getProducts(1, 10, undefined, name);
            setSearchResults(response.products || []);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleViewProductClick = (productId: string) => {
        setSearchResults((prevResults) => prevResults.filter((item:any) => item.id !== productId));

        setSearchTerm("");

        navigate(`/products/${productId}`);
    };

    return (
        <div className="flex items-center bg-transparent bg-[#e1e1e1] pl-5 pr-3 py-2 w-72 rounded border-2 relative">
            <input
                type="text"
                placeholder="Search items..."
                className="bg-transparent w-full focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
                src="/assets/images/svg/landingPage/searchBarIcon.svg"
                className="w-6 h-6 cursor-pointer"
                alt="Search"
            />
            {/* Render search results only if there are results and the searchTerm is not empty */}
            {searchTerm && searchResults.length > 0 && (
                <div className="absolute top-full left-0 bg-white w-full border mt-1 rounded shadow-md z-10">
                    <ul>
                        {searchResults.map((item: any) => (
                            <li
                                key={item.id}
                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleViewProductClick(item.id)}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
