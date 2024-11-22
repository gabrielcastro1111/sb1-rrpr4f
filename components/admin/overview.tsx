"use client";

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 2400, users: 400 },
  { month: "Feb", revenue: 1398, users: 300 },
  { month: "Mar", revenue: 9800, users: 600 },
  { month: "Apr", revenue: 3908, users: 450 },
  { month: "May", revenue: 4800, users: 500 },
  { month: "Jun", revenue: 3800, users: 480 },
];

export function Overview() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-600/10" />
          <XAxis
            dataKey="month"
            stroke="currentColor"
            className="text-xs"
          />
          <YAxis
            stroke="currentColor"
            className="text-xs"
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Revenue
                        </span>
                        <span className="font-bold text-muted-foreground">
                          ${payload[0].value}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Users
                        </span>
                        <span className="font-bold text-muted-foreground">
                          {payload[1].value}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="users"
            stroke="hsl(var(--secondary))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}