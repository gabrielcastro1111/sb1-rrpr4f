import { Progress } from "@/components/ui/progress";

interface Goal {
  id: number;
  title: string;
  progress: number;
}

export function GoalTracker({ goal }: { goal: Goal }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{goal.title}</span>
        <span className="text-gray-500">{goal.progress}%</span>
      </div>
      <Progress value={goal.progress} />
    </div>
  );
}