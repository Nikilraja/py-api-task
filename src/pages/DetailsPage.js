import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetails } from "../redux/features/listAPIDetails";
const DetailsPage = () => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.listAPIDetails);
  const { id } = useParams();

  useEffect(() => {
    if (details.value.id === Number(id)) {
      return console.log("already fetched");
    }
    const args = {
      id: id,
    };
    dispatch(getDetails(args));
  }, []);
  return (
    <div className="App">
      <h1>Posts Details page</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
        }}
      >
        {details.value && (
          <div
            style={{
              border: "1px solid grey",
              borderRadius: "10px",
              maxWidth: "200px",
              marginBottom: "16px",
              display: "flex",
              justifyContent: "space-between",
              padding: "8px",
            }}
          >
            <p>{details.value.id}</p>
            <p>title : {details.value.title}</p>
            <p>body : {details.value.body}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
