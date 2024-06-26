import { useThemeContext } from "@/contexts/ThemeContext.client";
import MoonIcon from "@/svg/MoonIcon";
import SunIcon from "@/svg/SunIcon";

export default function ThemeSwitcher() {
  const { isBrightTheme, toggleTheme } = useThemeContext();

  return (
    <div
      className={`${isBrightTheme ? "border-[#ebebeb]" : "border-[#2e2e2e]"} fixed bottom-5 right-4 flex w-fit gap-1.5 rounded-full border border-solid p-1.5`}
    >
      <button
        aria-label="밝은 테마로 전환"
        className={`${isBrightTheme ? "bg-[#e6e6e6]" : "bg-gray-900"} rounded-full`}
        onClick={toggleTheme}
      >
        <SunIcon color={`${isBrightTheme ? "#414141" : "#555"}`} />
      </button>
      <button
        aria-label="어두운 테마로 전환"
        className={`${isBrightTheme ? "" : "bg-[#292929]"} rounded-full`}
        onClick={toggleTheme}
      >
        <MoonIcon color={`${isBrightTheme ? "#414141" : "#cbcbcb"}`} />
      </button>
    </div>
  );
}
