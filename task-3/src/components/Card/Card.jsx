import './Card.css'

export function Card(props) {
    return (
        <div className="card">
            <h2>{props.authorName}</h2>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    );
};
