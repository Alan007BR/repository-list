import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/alan007br/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, [])

    return (
        <section className="repository-list m-1 text-gray-900 flex flex-col h-screen">
            <h1 className="text-4xl font-bold m-auto text-gray-700">Repository List</h1>
            <ul className="m-auto bg-white text-gray-600 p-10 rounded-lg shadow-sm">
                {
                    Object.entries(repositories).map(([key, repository]) => (
                        <RepositoryItem key={key} repository={repository} />
                    ))
                    // repositories.map(repository => {
                    //     return <RepositoryItem key={repository.name} repository={repository} />
                    // })

                }
            </ul>
        </section>
    );
}   