
import prompter from "cli-prompter";
import { writeFileSync } from "node:fs"

type PromptType = "text"
type Question = {
  type: PromptType,
  name: string,
  message: string,
  default?: string,
}
const questions: Question[] = [
  {
    type: 'text',
    name: 'toolName',
    message: "What's the name of the tool",
  }
]

prompter(questions, (err, values) => {
  if (err) {
    console.error("Got errors", err)
    return
  }


  writeFileSync("/tmp/tool-management-prompter.json", JSON.stringify(values))

  console.log("Ok, thanks! Doing stuff now")

})
