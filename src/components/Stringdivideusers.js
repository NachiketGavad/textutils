import { React, useEffect, useState } from "react";
import User from "./User";

export default function Stringdivideusers(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://localhost:7166/api/StringDivideUser";
        // Fetch data from the specified URL
        let data = await fetch(url);
        // Parse the fetched JSON data
        let parsedData = await data.json();
        // Log the parsed data to the console
        console.log(parsedData);
        // Update the component's state with the fetched articles
        // setArticles(parsedData.articles);
        setUsers(parsedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <div
      className={`bg-${props.mode} text-${
        props.mode === "dark" ? "light" : "dark"
      }`}
    >
      <h2 className="text-center mb-5">StringDivideUsers</h2>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {users.map((element) => {
          return <div className='col-md-3 mx-2 my-2' key={element.id}>
            {/* console.log(element); */}
            <User id={element.id} name={element.name} email={element.email}  mode={props.mode}/>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
