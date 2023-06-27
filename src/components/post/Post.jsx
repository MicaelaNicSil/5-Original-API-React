import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="PostImg" alt="" src="https://images.pexels.com/photos/322316/pexels-photo-322316.jpeg?auto=compress&cs=tinysrgb&w=400&h=750&dpr=1"></img>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat"></span>
                <span className="postCat"></span>
            </div>
            <span className="postTitle">
                hello i have mental problems and I feel HoRrIble
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          kdfgkmdfgkfg jfgf gjkdsf ggereg eg ewg ewgeg eg ewg eg eg g ewg we gr
          egiermgioweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeogggggggggggggggg
          gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
        </p>
    </div>
    
  )
}
