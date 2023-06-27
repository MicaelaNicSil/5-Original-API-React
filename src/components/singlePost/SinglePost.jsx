
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" className="singlePostImg"/>
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsun dfolor sit amet
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-edit"></i>
          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author: <b>Safak</b>
        </span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p className="singlePostDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor officiis magni enim. Dignissimos explicabo nam, 
        reprehenderit alias maiores commodi, 
        nulla esse aut sequi ipsa nemo 
        expedita ut facilis et non!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor officiis magni enim. Dignissimos explicabo nam, 
        reprehenderit alias maiores commodi, 
        nulla esse aut sequi ipsa nemo 
        expedita ut facilis et non!
      </p>
    
      
    </div>
  )
}
