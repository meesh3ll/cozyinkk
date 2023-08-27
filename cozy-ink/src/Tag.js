const Tag = ({ tag, handleTagChannel }) => {
    return (
        <div className = "tag">
            <button className = "tag-channel" onClick={handleTagChannel} value={tag}>{tag}</button>
        </div>
    );
};

export {Tag}