import React, { useState } from "react";

import NavBar from "./components/NavBar";
import logo from "./assets/chatgpt-logo.png";
import logo2 from "./assets/chatgpt.png";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [userMsg, setUserMsg] = useState([]);
  const [botMsg, setBotMsg] = useState([]);

  const API =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA0by0_ZYrbXNwXQMnRhmYkYGgGRYZhxUo";
  

    const getBotMsg = async () => {
      try {
        const response = await axios({
          url: API,
          method: "POST",
          data: {
            contents: [{ parts: [{ text: input }] }]
          },
        });
    
        console.log("API Response:", response.data); 
        const newReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (newReply) {
          setBotMsg((prevBotMsg) => [...prevBotMsg, newReply]);
        } else {
          console.error("No valid response received from API");
        }
      } catch (error) {
        console.error("Error getting response from API:", error);
      }
    };
    
  

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="main-container  max-w-screen mt-[8rem] lg:mt-[10rem] h-[100vh]">
       
       
       
        
        {userMsg.length === 0 && (
          
          <h1 className="lg:text-5xl text-3xl md:3xl text-center font-bold mt-[2rem] text-white">
          What Can I Help With?
        </h1>
        )}
       

        {userMsg.length === 0 && (
         <div className=" flex gap-5 justify-center items-center mt-10 flex-wrap max-w-full">
         <button className="md:p-[0.5rem] md:text-[17px]"  onClick={() => {
           
           setInput('Create an Image of a bird flying on the sky......')

         }}>
           <i className="ri-image-fill text-green-600"></i>Create image
         </button>
         <button>
           <i className="ri-lightbulb-flash-line text-yellow-500"></i>Make a
           plan
         </button>
         <button>
           <i className="ri-booklet-fill text-orange-400"></i>Summarise text
         </button>
         <button>
           <i className="ri-gift-line text-sky-500"></i>Surprise me
         </button>
       </div>
          
        )}

        <div className="chats w-full  mt-5 items-center lg:mt-10 flex-col  gap-10 px-10 h-[100vh] ">
          

          <div className="user-msg flex justify-end flex-col ga-2 mb-5 w-full">
            {userMsg.map((msg) => {
              return (
                <p className=" text-white w-fit self-end lg:max-w-[1100px] text-right mt-5 px-5 py-5 rounded-3xl bg-[rgb(47,47,47)] text-[17px] lg:text-2xl">
                  {msg}
                </p>
              );
            })}
          </div>

          {botMsg.map((bMsg) => {

return (
  <div className="bot-msg flex justify-start items-center gap-3">
    <img
      src={logo2}
      alt="ChatGPT Logo"
      className=" w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] rounded-full lg:py-2 self-start outline mt-7"
    />

    <p className=" text-white  max-w-[1100px] text-[17px] lg:text-2xl leading-10 mt-5 ">
      {bMsg}
    </p>
  </div>
);
})}
        </div>
        {/* The chat container overs here! */}
      </div>

      

      <br /><br /><br />
      
      <div className="flex justify-center items-center">
      <div className="input-box w-[98vw] lg:w-[1200px] bg-[rgb(47,47,47)] px-2 py-3 rounded-3xl mx-auto fixed bottom-0  lg:bottom-0 flex justify-center items-center text-white font-semibold mt-auto ">
          <input
            type="text"
            className="w-[90%] px-2 lg:px-5 lg:py-3 bg-transparent lg:text-3xl outline-none"
            placeholder="Message ChatGPT"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <i
            className="ri-arrow-up-line text-3xl  w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full bg-slate-300 text-black flex justify-center items-center cursor-pointer"
            onClick={() => {
              setUserMsg([...userMsg, input], setInput(""), getBotMsg()
              );
            }}
          ></i>
        </div>

      </div>
      
   
    </>
  );
}

export default App;
