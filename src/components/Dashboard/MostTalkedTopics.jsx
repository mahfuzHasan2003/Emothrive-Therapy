import { mostTalkedTopics } from "@/constants";
import Link from "next/link";

export default function MostTalkedTopics() {
  return (
    <div className="mt-5">
      <p className="textarea-md">Most Talked About Topics:</p>

      <ul className="flex justify-center gap-3 mt-2 flex-wrap">
         {
            mostTalkedTopics.map(topic => (
               <Link href="" key={topic.id}><li className="text-md border border-primary px-2 py-1 rounded-md text-primary">{topic.topic}</li></Link>
            ))
         }
      </ul>
    </div>
  )
}
