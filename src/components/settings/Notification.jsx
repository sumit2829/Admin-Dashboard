import React, { useState } from "react";
import SettingSection from "./SettingSection";
import { Bell } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notification = () => {
  const [notifications, setNotification] = useState({
    push: true,
    email: false,
    sms: true,
  });
  return (
    <SettingSection icon={Bell} title={"Notification"}>
      <ToggleSwitch
        label={"Push Notification"}
        isOn={notifications.push}
        onToggle={() =>
          setNotification({ ...notifications, push: !notifications.push })
        }
      />
      <ToggleSwitch
        label={"Email Notification"}
        isOn={notifications.email}
        onToggle={() =>
          setNotification({ ...notifications, email: !notifications.email })
        }
      />
      <ToggleSwitch
        label={"SMS Notification"}
        isOn={notifications.sms}
        onToggle={() =>
          setNotification({ ...notifications, sms: !notifications.sms })
        }
      />
    </SettingSection>
  );
};

export default Notification;
