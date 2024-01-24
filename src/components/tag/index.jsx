import "./style.scss"

function Tag({TagText}) {
    return (
        <ul className="tag">
        {TagText.map((tag) => (
                <li key={tag}>{tag}</li>
        ))}
        </ul>
    )
}

export default Tag