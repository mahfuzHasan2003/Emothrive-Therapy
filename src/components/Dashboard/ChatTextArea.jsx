
'use client';

import { useEffect, useRef, useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";



export default function ChatTextArea() {
   const textareaRef = useRef(null);
   const [userMessage, setUserMessage] = useState("");
   useEffect(() => {
      const textArea = textareaRef.current;
      if (!textArea) return;
      textArea.style.height = 'auto';
      textArea.style.overflowY = 'hidden';
      if(textArea.scrollHeight <= 160) {
         textArea.style.height = `${textArea.scrollHeight}px`;
      } else {
         textArea.style.height = '160px';
         textArea.style.overflowY = 'auto';
      }
   }, [userMessage]);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
       <textarea
       ref={textareaRef}
          className="bg-white/20 w-full mt-5 outline-none rounded-md resize-none px-4 py-2 relative focus:ring-1 focus:ring-primary"
          placeholder="Start typing here..."
          value={userMessage}
          onChange={e => setUserMessage(e.target.value)} />

        <div className="flex items-center gap-3 absolute right-3 bottom-3">
         <CiMicrophoneOn size="1.5rem" className={`cursor-pointer ${userMessage && 'hidden'}`} />
         <FaArrowUp className="cursor-pointer bg-white/20 p-2 text-4xl rounded-md" />
        </div>
    </div>
  )
}
