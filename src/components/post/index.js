import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Post = ({ title, id, modifyData, description, url, writer_avatar_url, post_image_url, votes }) => {
    return (
        <li className="post-element">
            <Image className="post-img" src={post_image_url} alt="Post" />
            <div className="post-buttons">
                <Button onClick={() => modifyData(id, true)}>Up</Button>
                <p>{votes}</p>
                <Button onClick={() => modifyData(id, false)}>Down</Button>
            </div>
            <div className="post-info">
                <a href={url} className="post-title">{title}</a>
                <p className="post-description">{description}</p>
                <p>Escrito por: <Image className="writer-img" roundedCircle src={writer_avatar_url} alt="Author" /></p>
            </div>
        </li>
    )
}

export default Post;