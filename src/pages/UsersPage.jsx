import React from "react";
import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { motion } from "framer-motion";
import { UserCheck, UsersIcon, UserPlus, UserX } from "lucide-react";
import UsersTable from "../components/Users/UsersTable";
import UserActivityHeatmap from "../components/Users/UserActivityHeatmap";
import UserDemographicsChart from "../components/Users/UserDemographicsChart";
import UserGrowthChart from "../components/Users/UserGrowthChart";

const UsersPage = () => {
  // ✅ Add this object
  const userStats = {
    totalUsers: 15432,
    newUsersToday: 127,
    activeUsers: 8430,
    churnRate: "3.5%",
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Users"
            icon={UsersIcon}
            value={userStats.totalUsers.toLocaleString()}
            color="#6366F1"
          />
          <StatCard
            name="New Users Today"
            icon={UserPlus}
            value={userStats.newUsersToday.toLocaleString()}
            color="#10B981"
          />
          <StatCard
            name="Active Users"
            icon={UserCheck}
            value={userStats.activeUsers.toLocaleString()}
            color="#F59E0B"
          />
          <StatCard
            name="Churn Rate"
            icon={UserX}
            value={userStats.churnRate}
            color="#EF4444"
          />
        </motion.div>

        <UsersTable />
        {/* USER CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserActivityHeatmap />
          <UserDemographicsChart />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;
