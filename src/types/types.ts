export enum FilterOption {
  All = "all",
  Current = "current",
  Completed = "completed",
}

export type TodoItem = {
  id: string;
  name: string;
  completed: boolean;
};

export enum ThemeOption {
  Light = "light",
  Dark = "dark",
  System = "system",
}
