import Result from "../components/Result"

export default function ApiSearch() {
    /* Pull up and display results from API */
    return (
        <>
            <div id="searchby-and-entry">
                <select name="search-types" id="search-types">
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                </select>
                <button>Search</button>
            </div>
            <div id="results" className="hidden">
                {/* foreach result: */}
                <Result />
            </div>
        </>
    )
}