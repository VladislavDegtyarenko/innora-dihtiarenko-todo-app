// Core
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { getTheme, themeChanged } from "@/features/theme-slice";

// Types
import { ThemeOption } from "@/types/types";

// UI
import { Sun, Moon, Check, ChevronDown, ChevronUp } from "lucide-react";

// Styles
import styles from "@/scss/ThemeSelect.module.scss";

const LightIcon = <Sun size={20} />;
const DarkIcon = <Moon size={20} />;

const themeIcons = {
  light: LightIcon,
  dark: DarkIcon,
  system: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? DarkIcon
    : LightIcon,
};

const ThemeSelect = () => {
  const theme = useAppSelector(getTheme);
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState(false);

  const handleThemeChange = (selectedTheme: ThemeOption) => {
    // We could pass value indeed,
    // but TS says 'string is not assignable to ThemeOption'.
    // So we need a way to convert a string type to ThemeOption
    const themeOption = Object.values(ThemeOption).find(
      (option) => option === selectedTheme,
    ) as ThemeOption;

    if (themeOption) {
      dispatch(themeChanged(selectedTheme));
    }
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    if (theme === "system") {
      darkModePreference.matches
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");

      const handleSystemThemeChange = (event: MediaQueryListEvent) => {
        event.matches
          ? document.body.classList.add("dark")
          : document.body.classList.remove("dark");
      };

      darkModePreference.addEventListener("change", handleSystemThemeChange);

      return () => {
        darkModePreference.removeEventListener(
          "change",
          handleSystemThemeChange,
        );
      };
    }

    if (theme === "dark") {
      document.body.classList.add("dark");
    }

    if (theme === "light") {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={styles.select}
      onClick={() => {
        setIsOpened((prevIsOpened) => !prevIsOpened);
      }}
    >
      <span className={styles.chevron}>
        {isOpened ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </span>
      <div className={styles.selected}>{themeIcons[theme]}</div>
      {isOpened ? (
        <div className={styles.optionsList}>
          {Object.entries(ThemeOption).map(([themeString, themeOption]) => {
            return (
              <button
                key={themeOption}
                onClick={() => {
                  handleThemeChange(themeOption);
                }}
              >
                <span>
                  {theme === themeOption ? <Check size={16} /> : null}
                </span>
                {themeString}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ThemeSelect;
