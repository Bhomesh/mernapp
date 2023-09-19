import React, { useState } from "react";
import cn from "classnames"; // Assuming you have 'classnames' installed locally
import ReactDOM from "react-dom";
import "./css/Signup.css";

export default function Signup() {
  const [switched, setSwitched] = useState(false);

  return (
    <div className="local-container">
      <div className={cn("test", { "s--switched": switched })}>
        <div className="inner">
          <div className="forms">
            <div className="form">
              <div className="form-content">
                <FakeForm
                  heading="Welcome back"
                  fields={["email", "password"]}
                  submitLabel="Sign in"
                />
              </div>
            </div>
            <div className="form">
              <div className="form-content">
                <FakeForm
                  heading="Time to feel like home"
                  fields={["name", "email", "password"]}
                  submitLabel="Sign up"
                />
              </div>
            </div>
          </div>
          <div className="switcher">
            <div className="switcher-inner">
              <div className="switcher-content">
                <div className="switcher-text">
                  <div>
                    <h3>New here?</h3>
                    <p>
                      Sign up and discover a great number of new opportunities!
                    </p>
                  </div>
                  <div>
                    <h3>One of us?</h3>
                    <p>
                      If you already have an account, just sign in. We've missed
                      you!
                    </p>
                  </div>
                </div>
                <button
                  className="switcher-btn"
                  onClick={() => setSwitched(!switched)}
                >
                  <span className="animated-border" />
                  <span className="switcher-btn-inner">
                    <span>Sign Up</span>
                    <span>Sign In</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FakeFormProps {
  heading: string;
  fields: string[];
  submitLabel: string;
}

function FakeForm({ heading, fields, submitLabel }: FakeFormProps) {
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="form__heading">{heading}</div>
      {fields.map((field) => (
        <label className="form__field" key={field}>
          <span className="form__field-label">{field}</span>
          <input className="form__field-input" type={field} />
        </label>
      ))}
      <button type="submit" className="form__submit">
        {submitLabel}
      </button>
    </form>
  );
}
