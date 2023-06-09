import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

function PostGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post}></PostItem>
      ))}
    </ul>
  );
}

export default PostGrid;
