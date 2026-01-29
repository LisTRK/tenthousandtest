import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { useState } from "react";

interface SearchProps {
    onSubmit: (searchValue: string) => void;
}

const SearchBar = ({onSubmit}: SearchProps) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedValue = searchValue.trim()
        if (!trimmedValue.trim()) {
            toast.error("Please enter your search query.");
            return 
        }
        onSubmit(trimmedValue);
    }

    return <header className={css.header}>
        <div className={css.container}>
            
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    className={css.input}
                    type="text"
                    name="query"
                    autoComplete="off"
                    placeholder="Search products..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    autoFocus
                />
                <button className={css.button} type="submit">
                    Search
                </button>
            </form>
        </div>
    </header>;
}

export default SearchBar;