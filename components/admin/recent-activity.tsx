import { ScrollArea } from "@/components/ui/scroll-area";

const activities = [
  {
    id: 1,
    type: "user_registered",
    user: "John Doe",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "order_placed",
    user: "Jane Smith",
    amount: 99.99,
    time: "4 hours ago",
  },
  {
    id: 3,
    type: "subscription_renewed",
    user: "Mike Johnson",
    plan: "Pro",
    time: "6 hours ago",
  },
];

export function RecentActivity() {
  return (
    <ScrollArea className="h-[300px]">
      <div className="space-y-4 p-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between space-x-4 rounded-md border p-4"
          >
            <div>
              {activity.type === "user_registered" && (
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> registered
                </p>
              )}
              {activity.type === "order_placed" && (
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> placed an
                  order for ${activity.amount}
                </p>
              )}
              {activity.type === "subscription_renewed" && (
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span> renewed their{" "}
                  {activity.plan} subscription
                </p>
              )}
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}