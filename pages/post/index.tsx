import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Post.module.css";
import { Pagination,PaginationItem } from "@mui/material";
import Meta from '../../component/Meta'

type PostProps = {
  users: any;
};

const Posts: React.FC<PostProps> = ({ users }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;

  const displayedData = users.slice(startIndex, endIndex);
  const handlePageChange = (event: any, page: any) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.body}>
      <Meta title="Posts"/>
      <div className={styles.postHeader} >Posts</div>
      <ul>
        {displayedData.map((item: any) => (
          <li key={item.id}>
            <div className={styles.posts}>
              <div
                onClick={() => router.push(`/post/${item.id}`)}
                className={styles.postItem}>
                <b>{item.id}</b> - {item.title}{" "}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
      className={styles.paging}
        count={Math.ceil(users.length / 5)}
        page={currentPage}
        onChange={handlePageChange}
        renderItem={(item) => (<PaginationItem
          component="div"
          {...item}
          className={styles.pagingItem}
          // Sayıları temsil eden öğelerin stilini burada özelleştirin
          // Örneğin, özel bir sınıf veya stil özellikleri ekleyebilirsiniz
        />)}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default Posts;
