import React from "react";

export default function App() {
  return (
    <main className="app">
      <aside className="sidebar">
        <h2>✦ AutoReg AI</h2>
        <p>Dashboard</p>
        <p>My Profile</p>
        <p>AI Assistant</p>
        <p>Scan Form</p>
        <p>Registration History</p>
        <p>Privacy & Security</p>
      </aside>

      <section className="content">
        <span className="tag">AI REGISTRATION ASSISTANT</span>
        <h1>Enter once. <span>Register smarter.</span></h1>
        <p>Scan forms, map your information, and review every field before autofill.</p>

        <div className="card">
          <h2>AI Form Scanner</h2>
          <p>Upload a registration form to begin.</p>
          <input type="file" accept=".pdf,.png,.jpg,.jpeg" />
          <button onClick={() => alert("Connect the AI scanning backend to enable scanning.")}> 
            Scan Form
          </button>
        </div>

        <div className="grid">
          <div className="card"><h3>Intelligent Mapping</h3><p>Match form fields to your profile.</p></div>
          <div className="card"><h3>Multilingual AI</h3><p>Designed for English and Tamil.</p></div>
          <div className="card"><h3>Smart Validation</h3><p>Review missing or invalid fields.</p></div>
          <div className="card"><h3>Privacy Controls</h3><p>Approve information before filling.</p></div>
        </div>
      </section>
    </main>
  );
}
