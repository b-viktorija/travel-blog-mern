import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

//modules for quill
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
}

function CreatePost() {
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [content, setContent] = useState("")

  return (
    <form className="create">
      <h3 className="text-center mb-4 text-secondary">
        Inspire others by sharing your unique experiences—create your post now
        and be part of our vibrant community!
      </h3>
      <div>
        {" "}
        <input
          type="title"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="summary"
          placeholder="Summary"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />
        <input type="file" />
      </div>
      <div>
        <ReactQuill
          className="quill"
          value={content}
          // on change just gives us the new value, not target; 
          onChange={(newValue) => setContent(newValue)}
          modules={modules}
        />
      </div>
      <div>
        {/*bugg: button goes above react-quill on smaller viewports*/}
        <button type="submit" className="btn btn-dark btn-lg mt-5" size="lg">
          Create Post
        </button>
      </div>
    </form>
  )
}

export default CreatePost
