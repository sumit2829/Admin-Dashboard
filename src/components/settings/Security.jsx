import React, { useState } from "react";
import SettingSection from "./SettingSection";
import ToggleSwitch from "./ToggleSwitch";
import { Lock } from "lucide-react";

const Security = () => {
  const [twoFactor, setTowFactor] = useState(false);
  return (
    <SettingSection icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two-Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTowFactor(!twoFactor)}
      />
      <div className="mt-4">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded
    transition duration-200
    "
        >
          change Password
        </button>
      </div>
    </SettingSection>
  );
};

export default Security;
