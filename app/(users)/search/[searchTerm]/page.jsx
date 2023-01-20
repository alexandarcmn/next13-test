import React from "react";

const search = async (searchTerm) => {
    const response = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );
    // throw new Error("Something went wrong");
    const json = await response.json();
    return json;
}

export default async function SearchResults({ params: { searchTerm } }) {
  const searchResults = await search(searchTerm);

  return <div>
    <p className="text-gray-500 text-sm">You Searched for: {searchTerm}</p>
    <ol className="space-y-5 p-5">
        {
            searchResults.organic_results.map((result, index) => (
                <li key={result.position} className="list-decimal">
                    <p className="font-bold">{result.title}</p>
                    <p>{result.snippet}</p>
                </li>
            ))
        }
    </ol>
  </div>;
}
