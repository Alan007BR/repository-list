interface propsPropriety {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryItem(props: any) {
    return (
        <li className="my-6">
            <strong className="text-3xl font-bold">{props.repository.name}</strong>
            <p className="text-lg text-gray-500 my-1">{props.repository.description}</p>

            <a href={props.repository.html_url} className="text-gray-400 hover:text-slate-300 transition-all font-light">
                access here
            </a>


            <div className="py-4">
                <div className="w-full border-t border-gray-300"></div>
            </div>

        </li>
    )
} 