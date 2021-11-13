
import "../styles/post.css"
export default function Post(props) {

  return <div className="post-container">
      <div className="post-title">{props.post.title}</div>
     
      <div> 
          <div className="post-image-container">
          <img className="post-image" src={props.post.media[0]}/>
          </div>
          
       <div className="post-description">{props.post.description}</div> 
       
       </div>
      <div className="post-date">{props.post.date}</div>
  </div>;
}
