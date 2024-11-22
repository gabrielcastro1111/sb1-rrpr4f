import { Card } from "@/components/ui/card";
import { Overview } from "@/components/admin/overview";
import { RecentActivity } from "@/components/admin/recent-activity";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-sm font-medium">Total Users</h3>
          <p className="text-2xl font-bold">1,234</p>
          <p className="text-xs text-gray-500">+12% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Total Revenue</h3>
          <p className="text-2xl font-bold">$12,345</p>
          <p className="text-xs text-gray-500">+8% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Active Subscriptions</h3>
          <p className="text-2xl font-bold">890</p>
          <p className="text-xs text-gray-500">+15% from last month</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Affiliate Sales</h3>
          <p className="text-2xl font-bold">$2,345</p>
          <p className="text-xs text-gray-500">+20% from last month</p>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <div className="p-6">
            <h3 className="text-lg font-medium">Overview</h3>
          </div>
          <Overview />
        </Card>
        <Card className="col-span-3">
          <div className="p-6">
            <h3 className="text-lg font-medium">Recent Activity</h3>
          </div>
          <RecentActivity />
        </Card>
      </div>
    </div>
  );
}