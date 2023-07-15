import React from "react";
import styles from "../../styles/Post.module.css";
import Meta from "../../component/Meta";

type PostItemProps = {
  userData: any;
  commentData: any;
};

const PostItem: React.FC<PostItemProps> = ({ userData, commentData }) => {
  return (
    <div>
      <Meta title={`Post ${userData.id}`} />
      <div className={styles.divFirst}>
        <div className={styles.postDetail}>
          <div className={styles.postIdButton}>{userData.id}</div>
          <br />
          <b>Post Title:</b> {userData.title} <br />
          <br />
          <b>Post Body :</b> {userData.body}
        </div>

        <div>
          <h2 className={styles.commentHeader}>Comments</h2>
          <div>
            {commentData.map((item: any) => (
              <div className={styles.comments}>
                <b className={styles.name}>{item.name}</b>
                <br />
                {item.email}
                <br />
                {item.body}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export const getStaticProps = async (context) => {
  //console.log(context); // query kısmına bakılıp oradan gelen bilgi alınır.
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const resCom = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${context.params.id}`
  );
  const userData = await res.json();
  const commentData = await resCom.json();
  return {
    props: {
      userData,
      commentData,
    },
  };
};

export const getStaticPaths = async () => {
  //console.log(context); // query kısmına bakılıp oradan gelen bilgi alınır.
  //const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const posts = await res.json();
  const ids = posts.map((item) => item.id); // itemlerın sadece id' lerini aldık.
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  const resCom = await fetch(`http://localhost:3000/api/comment/`);
  const comments = await resCom.json();
  const idsCom = comments.map((item) => item.postId); // itemlerın sadece id' lerini aldık.
  const pathsCom = idsCom.map((id) => ({ params: { postId: id.toString() } }));
  return {
    paths,
    fallback: false, // eger bulamazsa 404 iişlemini sağlamak için
  };
};

export default PostItem;
