import axios from "axios";
import React, { useEffect, useState } from "react";
import GithubCard from "./GithubCard";

const getUserData = (state) => {
  const config = {
    url: `https://api.github.com/search/users?q=${state}`,
    method: "get"
  };
  return axios(config);
};
const Github = () => {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  // useEffect(() => {
  //   fetchData();
  // });

  async function fetchData() {
    setIsLoading(false);
    try {
      const data = await getUserData(state);
      setData(data.data.items);

      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  // if (isLoading) {
  //     return(
  //       <div>
  //         <div>...Loading</div>
  //         {setIsLoading(false)}
  //       </div>
  //     )
  // }
  return (
    <div>
      <div>
        <input type="text" value={state} onChange={(e) => handleChange(e)} />
        <button onClick={fetchData}>Search</button>
      </div>
      <div>
        {isLoading === false ? (
          <h2>...Loading</h2>
        ) : (
          <div>
            {data.map((item) => {
              return (
                <GithubCard
                  key={item.id}
                  username={item.login}
                  imageUrl={item.avatar_url}
                  profileUrl={item.html_url}
                />
              );
            })}
          </div>
        )}

        {/* wihout loading */}

        {/* <div>
            {data.map((item) => {
              return (
                <GithubCard
                  key={item.id}
                  username={item.login}
                  imageUrl={item.avatar_url}
                  profileUrl={item.html_url}
                />
              );
            })}
          </div> */}
      </div>
    </div>
  );
};

export default Github;
