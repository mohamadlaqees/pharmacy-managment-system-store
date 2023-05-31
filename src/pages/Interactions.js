import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

function Interactions() {
  const [query, setQuery] = useState("");
  const [description, setDescription] = useState("");
  const [Loading, setLoading] = useState(false);
  const [match, setMatch] = useState(true);
  const [drugs, setDrugs] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const addDrug = async (e) => {
    if (!drugs.includes(e) && drugs.length < 2) {
      if (drugs.length === 0) {
        setDrugs([e]);
      } else {
        setDrugs([...drugs, e]);
        document.getElementById("card-body").style.display = "none";
        document.getElementById("description-card").style.display = "block";
        //TODO: fetch the interaction
        try {
          const response = await fetch(`http://localhost:3000/description`);
          const data = await response.json();
          setDescription(data);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  const deleteDrug = (drugdel) => {
    const updatedDrugs = drugs.filter((drug) => drug !== drugdel);
    setDrugs(updatedDrugs);
    document.getElementById("card-body").style.display = "block";
    setDescription("");
  };

  useEffect(() => {
    if (suggestions.length > 0) {
      setLoading(false);
      setMatch(true);
    }
  }, [suggestions]);

  const handleSearch = async (event) => {
    const query = event.target.value;
    if (query !== "") {
      setLoading(true);
      setMatch(true);
    }
    setQuery(query);
    if (query !== "") {
      try {
        const response = await fetch(
          `http://localhost:3000/drugs?name_like=${query}`
        );
        const data = await response.json();
        if (data.length === 0) {
          setMatch(false);
          setLoading(false);
        }
        setSuggestions(data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="page">
      <Container className="w-75 text-center">
        <h3>Enter two drugs to get the description of their interaction</h3>
        <Card className="border-white mb-3 p-0">
          <Card.Header className="text-white rounded-bottom p-0 text-center ">
            <Form.Control
              onChange={handleSearch}
              placeholder="Search"
              id="search-bar"
              style={{
                boxShadow: "none",
                border: "1px solid #1390e3",
              }}
            />
          </Card.Header>
          <Card.Body
            style={{
              maxHeight: "150px",
              border:'1px solid #52b0ed'
            }}
            id="card-body"
            className={`overflow-auto p-0 rounded ${suggestions.length===0&&'d-none'} ` }
          >
            {!match ? (
              "Could not find any match"
            ) : Loading ? (
              "loading..."
            ) : (
              <ol className="list-group m-0 p-0">
                {suggestions.map((suggestion) => (
                  <li
                    onClick={() => addDrug(suggestion.name)}
                    key={suggestion.name}
                    className="list-group-item hover:border-2 cursor-pointer hover:border-SReg hover:shadow-lg d-flex justify-content-between  mb-1 "
                  >
                    {suggestion.name}
                  </li>
                ))}
              </ol>
            )}
          </Card.Body>
        </Card>
        <ol className=" d-flex  justify-content-between p-1">
          {drugs.map((drug) => {
            return (
              <li className="bg-secondry rounded mr-2 p-2 fw-bold">
                {drug}
                <i
                  className=" ml-2 fa fa-times-circle fs-0  link-primary "
                  onClick={() => deleteDrug(drug)}
                ></i>
              </li>
            );
          })}
        </ol>
        <Card
          id="description-card"
          className={`border-danger text-center ${
            description === "" ? "p-0 d-none" : "p-3"
          }`}
        >
          <Card.Body className={`${description === "" ? "p-0" : "p-3"}`}>
            {description}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Interactions;
