
'use client';

import { useState } from "react";

export default function ChatTextArea() {
   const [userMessage, setUserMessage] = useState("");
  return (
    <div>
       <textarea
          className="bg-white/20 w-full max-w-3xl mt-5 outline-none rounded-md resize-none px-4 py-2 h-auto"
          placeholder="Start typing here..."
          value={userMessage}
          onChange={e => setUserMessage(e.target.value)}
        />
    </div>
  )
}
