import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mb-5">
        <h1 className="text-center">People</h1>
      </div>
      <div className="row " style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <div className="col p-5 text-center">
          <img
            src="media/images/anshraj.jpg"
            alt=""
            style={{ width: "40%", borderRadius: "100%" }}
          ></img>
          <h4 className=" pt-4 p-2">Ansh Raj</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col p-5 fs-6">
          <p>
            Ansh bootstrapped and founded Stock Lender in 2026 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            {" "}
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="/b" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/b" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
