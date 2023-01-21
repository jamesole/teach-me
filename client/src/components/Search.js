import React, { useState } from "react";
import "../App.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  function changed(e) {
    setSearch(e.target.value);
  }

  async function ask(e) {
    setLoading(true);
    e.preventDefault();

    const obj = {
      search,
    };

    setAnswer("");
    setLoading(true);

    setSearch("");

    await axios
      .post("http://localhost:8000/ask", obj)
      .then((response) => {
        setAnswer(response.data.response);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="search">
      <form onSubmit={ask}>
        <input
          type="text"
          value={search}
          onChange={changed}
          placeholder="What are atoms?"
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
      {answer && answer !== "" ? (
        <div className="answer">
          <p>{answer}</p>
        </div>
      ) : loading ? (
        <div class="loader"></div>
      ) : null}
    </div>
  );
}
