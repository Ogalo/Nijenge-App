import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Entrepreneur() {
  const navigate = useNavigate();
  const [business, setBusiness] = useState("");
  const [returns, setReturns] = useState("");
  const [offers, setOffers] = useState("");

  const [plan, setPlan] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://nijenge-backend-app.herokuapp.com/entrepreneurs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        business: business,
        returns: returns,
        offers: offers,
        plan: plan,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/nijenge-app");
        console.log(data);
      });
  }

  return (
    <div>
      <section className="entrePage" id="entrePage">
        <form
          action=""
          className="entrepreneur"
          id="entreProp"
          onSubmit={handleSubmit}
        >
          <span className="closeBtn2">
            <Link to="/nijenge-app">
              <i className="fas fa-times"></i>
            </Link>
          </span>
          <div className="proposal">
            <h1>Entrepreneur Proposal</h1>
            <hr />

            <label htmlFor="text">
              <b>business name</b>
            </label>
            <input
              type="text"
              placeholder="Enter business name"
              name="business"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              id="busina"
              required
            />

            <label htmlFor="probState">
              <b>Problem Statement</b>
            </label>
            <input
              type="text"
              placeholder="Enter problem statement"
              name="business"
              value={plan}
              id="busina2"
              onChange={(e) => setPlan(e.target.value)}

              required
            />

            <label htmlFor="solSummary">
              <b> Solution Summary</b>
            </label>
            <input
              type="text"
              placeholder="Enter solution"
              name="business"
              id="busina3"
              required
            />

            <label htmlFor="targetMarket">
              <b>Market</b>
            </label>
            <input
              type="text"
              placeholder="What is your target market ?"
              name="business"
              id="busina4"
              required
            />

            <label htmlFor="competitors">
              <b>Competitors</b>
            </label>
            <input
              type="text"
              placeholder="Who are your competitors ?"
              name="business"
              id="busina5"
              required
            />

            <label htmlFor="whyUs">
              <b> Why Us</b>
            </label>
            <input
              type="text"
              placeholder="Why should I choose you ?"
              name="business"
              id="busina6"
              required
            />

            <label htmlFor="Forecast">
              <b>Returns and Expectations</b>
            </label>
            <input
              type="text"
              placeholder="financial targets in dollars "
              name="business"
              value={returns}
              id="forcast"
              required
              onChange={(e) => setReturns(e.target.value)}
            />

            <label htmlFor="Shares">
              <b> Offering</b>
            </label>
            <input
              type="text"
              placeholder="Offering"
              value={offers}
              name="Shares"
              id="shares"
              required
              onChange={(e) => setOffers(e.target.value)}
            />
            <label htmlFor="businessPlan">
              <b>Business Plan</b>
            </label>
            <hr />
            <p>Please Upload your business Plan here</p>
            <hr />
            <input
              type="file"
              placeholder="plan"
              name="Shares"
              id="shares"
              required
            />
          </div>

          <button type="submit" onClick={() => {}}>
            Submit Form
          </button>
        </form>
      </section>
    </div>
  );
}

export default Entrepreneur;
