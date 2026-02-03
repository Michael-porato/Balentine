import { useState } from "react";

const NO_PHRASES = [
  "No 💔",
  "Please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me",
  "Okay you can click Yes now"
];

export default function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);

  const yesButtonSize = noClicks * 20 + 16;

  const firstImg =
    "https://media.tenor.com/DSqKeZ0PHI0AAAAM/love-you-baby.gif";
  const secondImg =
    "https://i0.wp.com/media2.giphy.com/media/11sBLVxNs7v6WA/giphy.gif";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      {!isValentine ? (
        <>
          <div className = "message" style={{
              marginBottom: "50px",
              fontSize: 7
              }}>"Click No a few times ;)"</div>
          <img src={firstImg} alt="cute bear" />
          <h1>Will you be my Valentine? 💘</h1>

          <div>
            <button
              onClick={() => setIsValentine(true)}
              style={{
                fontSize: `${yesButtonSize}px`,
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Yes
            </button>

            <button
              onClick={() => setNoClicks((prev) => prev + 1)}
              style={{
                fontSize: "16px",
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {noClicks === 0
                ? "No"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <img src={secondImg} alt="happy bears" />
          <div
            style={{
              fontSize: "48px",
              color: "pink",
              fontWeight: "bold",
            }}
          >
            Yay!!! 💖🎉
          </div>
        </>
      )}
    </div>
  );
}
