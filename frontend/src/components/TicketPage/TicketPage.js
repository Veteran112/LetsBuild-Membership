import React from "react";
import "./TicketPage.css";
export default function TicketPage({ history }) {
  return (   
    <div className="container">
      <div>
        <nav className="mb-4 navbar navbar-expand-lg navbar-dark bg-unique hm-gradient">
        <div
        style={{
          textalign: "center",
          position: "absolute",
          top: "1%",
          left: "35%",
          transform: "translate-50%, -9%",

          zindex: "1000",
        }}
      >
        <span
          style={{
            color: "white",
            fontFamily: "Piedra, cursive",
            letterSpacing: "10px",
            marginbottom: "20px",

            borderradius: "5px",
            position: "relative",
            animation: "text 3s 1",
          }}
        >
          
            <h2 style={{ fontSize: "60px" }}> LetsBuild</h2>
          
        </span>
      </div>
          <button
            className="navbar-toggler" 
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-3"  
            aria-controls="navbarSupportedContent-3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-3"
          >
            <ul className="navbar-nav ml-auto nav-flex-icons ic">
              <li className="nav-item">
                <a href="/#" className="nav-link waves-effect waves-light">
                  Book Again
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link waves-effect waves-light">
                  Sign-Out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="tpMain">
        <article className="ticket">
          <header className="ticket__wrapper">
            <div className="ticket__header">
              <h2
                style={{
                  marginleft: 100,
                }}
              >
                1 🎟 LetsBuild
              </h2>
            </div>
          </header>
          <div className="ticket__divider">
            <div className="ticket__notch"></div>
            <div className="ticket__notch ticket__notch--right"></div>
          </div>
          <div className="ticket__body">
            <section className="ticket__section">
              <p>
                Your Basic License plan is started <span> </span>
              </p>
            </section>
            <section className="ticket__section">
              <h3>Payment Method</h3>
            </section>
            <section className="ticket__section">
              <h3>Credit Card</h3>
            </section>
          </div>

          <footer className="ticket__footer">
            <p>Transaction-ID</p>
          </footer>
        </article>
      </div>
    </div>
  );
}
