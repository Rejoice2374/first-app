import React, { useEffect } from "react";

const FetchData = () => {
  const [nameSearch, setNameSearch] = React.useState([]);
  const [data, setData] = React.useState([]);

  const handleChange = (e) => {
    setNameSearch(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [data]);

  return (
    <div>
      <h2>Search Users data from an API</h2>
      <input
        type="text"
        placeholder="search name here..."
        onChange={handleChange}
      />
      <div>
        {data
          .filter((d) => {
            if (nameSearch === "") {
              return d;
            } else if (d.name.toLowerCase().includes(nameSearch)) {
              return d;
            }
          })
          .map((d) => (
            <div>
              <h3 key={d.id}>{d.name}</h3>
              <p>{d.email}</p>
              <p>{d.phone}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FetchData;
