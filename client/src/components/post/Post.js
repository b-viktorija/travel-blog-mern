import './post.css'

function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src="https://cdn.statically.io/img/haleyblackall.com/wp-content/uploads/2022/01/Love-Valley-Cappadocia-Turkey-2021-1-21.jpg?quality=80&f=auto" />
      </div>
      <div className="content">
        <h2>
          Cappadocia Travel Guide: Where to Stay + What to Do for First Timers
        </h2>
        <p className="info">
          <a className="author">Viktorija Bosilkovska</a>{" "}
          <time>2023-10-28 14:41</time>
        </p>
        <p className="summary">
          From breathtaking sunrise hot air balloon rides over the otherworldly
          landscape, to unique cave hotels in Cappadocia, to picturesque valleys
          with unusual rock formations, Cappadocia has so much to discover.
        </p>
      </div>
    </div>
  )
}

export default Post;
