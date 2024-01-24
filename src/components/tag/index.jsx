import "./style.scss"

function Tag({TagText}) {
    return (
        <ul className="tag">
        {TagText.map((tag) => (
                <li>{tag}</li>
        ))}
        </ul>
    )
}

export default Tag