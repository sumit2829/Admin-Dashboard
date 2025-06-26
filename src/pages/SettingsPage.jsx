"use client";

import React from "react";
import Header from "../components/common/Header";
import Profile from "../components/settings/Profile";
import Notification from "../components/settings/Notification";
import Security from "../components/settings/Security";
import ConnectedAccount from "../components/settings/ConnectedAccount";
import DangerZone from "../components/settings/DangerZone";

const SettingsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Settings" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <Profile />
        <Notification />
        <Security />
        <ConnectedAccount />
        <DangerZone />
      </main>
    </div>
  );
};

export default SettingsPage;
