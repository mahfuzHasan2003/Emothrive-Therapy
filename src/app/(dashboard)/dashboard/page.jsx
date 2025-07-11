import ChatTextArea from "@/components/Dashboard/ChatTextArea";
import MostTalkedTopics from "@/components/Dashboard/MostTalkedTopics";

export default function page() {
  return (
    <div className="w-10/12 mx-auto h-full table">
      <div className="table-cell align-middle text-center">
        <h1 className="font-kalam text-5xl font-black text-primary">Emothrive Your AI Therapist</h1>
        <h3 className="text-2xl">I'm Emothrive, your AI Guide to Better Mental Health.</h3>
        <p className="text-lg mt-3">What do you want to talk about?</p>

        <ChatTextArea />

        <MostTalkedTopics />

      </div>
      
    </div>
  )
}
