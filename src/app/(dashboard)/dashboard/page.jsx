import ChatTextArea from "@/components/Dashborad/ChatTextArea";

export default function page() {
  return (
    <div className="w-10/12 mx-auto h-full table">
      <div className="table-cell align-middle text-center">
        <h1>Emothrive Your AI Therapist</h1>
        <h3>I'm Emothrive, your AI Guide to Better Mental Health.</h3>
        <p>What do you want to talk about?</p>

        <ChatTextArea />

      </div>
      
    </div>
  )
}
