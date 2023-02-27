import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getList } from "../redux/features/listAPI";
import { useSelector, useDispatch } from "react-redux";
const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const list = useSelector((state) => state.listAPI);

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <div className="App">
      <h1>Posts list are</h1>

      {list.loading ? (
        "loading"
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          {list.value.map((post, index) => (
            <div
              key={post.id}
              style={{
                border: "1px solid grey",
                borderRadius: "10px",
                maxWidth: "200px",
                marginBottom: "16px",
                display: "flex",
                justifyContent: "space-between",
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/${post.id}`)}
            >
              <p>{index + 1}.</p>
              <p>{post.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
