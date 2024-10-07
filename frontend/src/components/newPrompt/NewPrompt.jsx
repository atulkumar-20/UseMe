import { useEffect, useRef } from "react";
import "./NewPrompt.css";

const NewPrompt = () => {

  const endRef=useRef(null);
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  })
  return (
    <>
  {/* Add new chat */}
  <div className="endChat"></div>
      <div className="newPrompt">
        <div className="newform">
          <label htmlFor="file">
            <img src="/attachment.png" alt="" />
          </label>
          <input id="file" type="file" multiple={false} hidden />
          <input type="text" placeholder="Ask anything..." />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPrompt;
