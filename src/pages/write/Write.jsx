import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
            <label className="fileInput">
                <i class="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />

            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit" type="submit">
                Publish
            </button>
        </form>
    </div>
  )
}
