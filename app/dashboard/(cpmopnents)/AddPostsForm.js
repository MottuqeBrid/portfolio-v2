export default function AddPostsForm() {
  return (
    <div>
      <h1>Add New Post</h1>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" required></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
