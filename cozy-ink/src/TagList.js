import {Tag} from './Tag'
import {MdDelete} from 'react-icons/md'
import {MdHome} from 'react-icons/md'

const TagList = ({ tagList, handleTagChannel }) => {
    return (
        <div>
            <button className = "tag-channel" onClick={handleTagChannel} value=""><MdHome size = "1.6em"/></button>
            {Array.from(tagList).map((tag) => (
                <Tag tag={tag} handleTagChannel={handleTagChannel}/>
            ))}
            <button onClick={handleTagChannel} value="deleted" className = "tag-channel"><MdDelete size = "1.6em"/></button>
        </div>
    );
};

export {TagList}