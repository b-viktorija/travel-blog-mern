import { useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { Navigate } from "react-router-dom";

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

function CreatePage() {
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [content, setContent] = useState("")
  const [files, setFiles] = useState("")
  const [redirect, setRedirect] = useState(false)

  async function createNewPost(e) {
    const data = new FormData()
    data.set("title", title)
    data.set("summary", summary)
    data.set("content", content)
    data.set("file", files[0])
    e.preventDefault()
    console.log(files)
    // sending the data to the api endpoint;
    const response = await fetch("http://localhost:4000/post", {
      method: "POST",
      body: data,
      credentials: 'include'
    }); 
    if (response.ok) {
      setRedirect(true)
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />
  }
  return (
    <form className="create" onSubmit={createNewPost}>
      <h3 className="text-center mb-4 text-secondary">
        Inspire others by sharing your unique experiences—create your post now
        and be part of our vibrant community!
      </h3>
      <div>
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
        <input
          type="file"
          // value={files}
          onChange={(ev) => setFiles(ev.target.files)}
        />
      </div>
      <div>
        <ReactQuill
          className="quill"
          value={content}
          // on change, here we only get the new value, not target.value;
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

export default CreatePage
