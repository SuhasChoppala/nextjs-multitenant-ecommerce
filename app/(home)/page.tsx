import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div>
        <Button variant="elevated">i AM A button</Button>
      </div>
      <div>
        <Input placeholder="i am an input" />
      </div>
      <div>
        <Progress value={50} />
      </div>
      <div>
        <Textarea value="I am a text area" />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
