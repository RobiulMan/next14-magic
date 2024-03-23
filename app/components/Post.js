const fetchposts = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve();
      reject();
    }, 2000);
  });
  return ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. In obcaecati
        libero enim similique adipisci perspiciatis laboriosam est dolor magni,
    officia ipsa, tempore, facilis recusandae aliquam culpa et unde tempora
  porro!`;
};

const Post = async () => {
  const posts = await fetchposts();
  return (
    <>
      <p className="mt-10">{posts}</p>
    </>
  );
};

export default Post;
