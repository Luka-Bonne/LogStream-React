export function Card(props) {
    return (
        <div>
            <h1>{props.authorName}</h1>
            <div className="card">
                <h2>{props.title}</h2>
                <p>{props.body}</p>
            </div>
        </div>
    );
};
