import ChatPrompt from "@/app/components/form/ChatPrompt";
import Alert from "@/app/components/data-display/Alert";

export default function Home() {
  return <div className="">
    <p className={"bg-primary"}>Hello</p>
    <p className={"bg-secondary"}>Hello</p>
    <p className={"bg-foreground"}>Hello</p>
    <p className={"bg-foreground-muted"}>Hello</p>
    <p className={"bg-accent"}>Hello</p>
    <p className={"bg-warning"}>Hello</p>
    <p className={"bg-warning-muted"}>Hello</p>
    <p className={"bg-danger"}>Hello</p>
    <p className={"bg-danger-muted"}>Hello</p>
    <div className={"w-[500px]"}>
      <ChatPrompt />
    </div>
    <div>
      <Alert label={"This is so xd"} type={"warning"}/>
      <Alert label={"This is so xd"} type={"warning"}/>

    </div>
  </div>;
}
