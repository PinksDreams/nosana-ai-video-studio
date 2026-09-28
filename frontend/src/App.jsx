import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [balance, setBalance] = useState(null);

  const loadBalance = async () => {
    try {
      const response = await fetch("/api/balance");
      const data = await response.json();
      setBalance(data.assignedCredits ?? 0);
    } catch {
      setBalance(null);
    }
  };

  return (
    <main className="app">
      <header className="header">
        <div>
          <div className="eyebrow">DECENTRALIZED AI VIDEO</div>
          <h1>Nosana AI Video Studio</h1>
          <p>Generate AI video using decentralized GPU infrastructure.</p>
        </div>

        <div className="status">
          <span className="status-dot"></span>
          Nosana
          <span>{balance === null ? "—" : `$${balance.toFixed(2)}`}</span>
        </div>
      </header>

      <section className="studio">
        <div className="panel">
          <h2>Create a video</h2>

          <label htmlFor="prompt">Prompt</label>

          <textarea
            id="prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder="Describe the video you want to create..."
            rows="7"
          />

          <button type="button" disabled={!prompt.trim()}>
            Generate video
          </button>
        </div>

        <div className="preview">
          <div className="preview-icon">AI</div>
          <h2>Video preview</h2>
          <p>Your generated video will appear here.</p>
        </div>
      </section>

      <button type="button" className="balance-button" onClick={loadBalance}>
        Refresh balance
      </button>
    </main>
  );
}

export default App;
