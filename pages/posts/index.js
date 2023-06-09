import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";

function AllPostPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;
