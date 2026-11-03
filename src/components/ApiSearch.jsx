import Result from "../components/Result"

export default function ApiSearch() {
    /* Pull up and display results from API */


    return (
        <>
            <div>
                <form id="api-search-form">
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="author" placeholder="Author" />
                    <button type="submit">Search</button>
                </form>
            </div>
            <div id="results" className="hidden">
                {/* foreach result: */}
                <Result />
            </div>
        </>
    )
}