import { Suspense } from "react";
import Post from "../components/Post";

const HeavyPosts = () => {
  return (
    <div className="py-10 m-20">
      <h1 className="text-2xl text-center">Heavy page</h1>
      <Suspense fallback={<h1 className="text-center">Loading ...</h1>}>
        <Post />
      </Suspense>
    </div>
  );
};

export default HeavyPosts;
