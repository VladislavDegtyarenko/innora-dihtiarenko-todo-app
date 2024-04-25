// Core
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";

// Types
import { FilterOption } from "@/types/types";

// UI
import { filterChanged, getCurrentFilter } from "@/features/todos-slice";

// Styles
import styles from "@/scss/TodoFilter.module.scss";

const TodoFilter = () => {
  const currentFilter = useAppSelector(getCurrentFilter);
  const dispatch = useAppDispatch();

  const handleChangeFilter = (value: string) => {
    // We could pass value indeed,
    // but TS says 'string is not assignable to FilterOption'.
    // So we need a way to convert a string type to FilterOption
    const filterOption = Object.values(FilterOption).find(
      (option) => option === value,
    ) as FilterOption;

    if (filterOption) {
      dispatch(filterChanged(filterOption));
    }
  };

  return (
    <div className={styles.tabs}>
      {Object.entries(FilterOption).map(([optionString, optionValue]) => {
        return (
          <button
            role="tab"
            value={optionValue}
            key={optionValue}
            className={`${styles.tab} ${optionValue === currentFilter ? styles.active : ""}`}
            onClick={() => handleChangeFilter(optionValue)}
          >
            {optionString}
          </button>
        );
      })}
    </div>
  );

  // return (
  //   <Tabs
  //     defaultValue={currentFilter}
  //     className="ml-auto mr-auto w-80 max-w-full"
  //     onValueChange={handleChangeFilter}
  //   >
  //     <TabsList className="w-full">
  //       {Object.entries(FilterOption).map(([optionString, optionValue]) => {
  //         return (
  //           <TabsTrigger
  //             value={optionValue}
  //             key={optionValue}
  //             className="w-full"
  //           >
  //             {optionString}
  //           </TabsTrigger>
  //         );
  //       })}
  //     </TabsList>
  //   </Tabs>
  // );
};

export default TodoFilter;
