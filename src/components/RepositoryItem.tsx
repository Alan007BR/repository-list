interface propsPropriety {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryItem(props: any) {
    return (
        <li className="m-6">
            <div className="flex flex-row justify-between">
                <strong className="text-2xl font-bold pr-20">{props.repository.name}</strong>
                <p className="text-gray-300 text-sm mt-1 hover:text-gray-500 transition-all">{props.repository.language}</p>
            </div>
            <p className="text-lg text-gray-500 my-1 pb-2">{props.repository.description}</p>

            <a href={props.repository.html_url} className="text-gray-500 hover:text-slate-300 transition-all font-light">
                access here
            </a>

            <p className=" text-gray-300 text-sm mt-1 ">{props.repository.full_name}</p>

            <div className="py-4">
                <div className="w-full border-t border-gray-300"></div>
            </div>

        </li>
    )
} 