import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../gqloperations/queries";

export default function Home() {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }
  if (data.quotes.length == 0) {
    return <h2>No Quotes available</h2>;
  }
  return (
    <div className="container">
      {data.quotes.map((quote) => {
        return (
          <blockquote>
            <h6>{quote.name}</h6>
            <p className="right-align">~{quote.by.firstName}</p>
          </blockquote>
        );
      })}
    </div>
  );
}
