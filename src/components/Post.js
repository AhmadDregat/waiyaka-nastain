
import style from "../styles/Post.module.css";
const dayjs = require('dayjs');
export default function Post(props) {

  return <div className={style.postContainer}>
      <div className={style.postTitle}><h3>{props.post.title}</h3></div>
         
        <div className={style.postImageContainer}>
            <img className={style.postImage} src={props.post.media[0]}/>
            <div className={style.postDescription}><p>
            {props.post.description}</p></div> 
        </div>
      <div className={style.postDate}>{dayjs(props.post.date).format('DD/MM/YYYY')}</div>
  </div>;
}
