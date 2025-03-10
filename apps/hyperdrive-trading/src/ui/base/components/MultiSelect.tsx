import {
  CheckIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import Fuse from "fuse.js";
import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from "react";
import { OneOf } from "viem";

export type MultiSelectProps<T extends OptionValue> = {
  selected: T[];
  options: MultiSelectOption<T>[];
  onChange: (selected: T[]) => void;
  className?: string;
  searchEnabled?: boolean;
} & OneOf<
  | {
      // The button that will open the dropdown
      button: ReactNode;
    }
  | {
      /**
       * The value to show inside the button, representing the selected value, e.g.,
       * `"4 selected"`.
       */
      displayValue: ReactNode;
      /**
       * The value to use for the button's `title` attribute.
       */
      title?: string;
    }
>;

export function MultiSelect<T extends OptionValue>({
  button,
  displayValue,
  selected,
  options,
  onChange,
  title,
  className,
  searchEnabled,
}: MultiSelectProps<T>): ReactElement {
  const [searchString, setSearchString] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fuse = useMemo(() => {
    if (!searchEnabled) {
      return;
    }
    return new Fuse(options, {
      keys: ["searchValue", "value"],
      threshold: 0.4,
    });
  }, [options, searchEnabled]);

  const filteredOptions =
    searchEnabled && fuse && searchString
      ? fuse.search(searchString).map(({ item }) => item)
      : options;

  return (
    <div className={classNames("daisy-dropdown", className)}>
      {button || (
        <MultiSelectButton title={title}>
          {displayValue}
          <ChevronDownIcon className="hidden size-5 sm:block" />
        </MultiSelectButton>
      )}
      <div
        tabIndex={0}
        className="daisy-menu daisy-dropdown-content z-[1] mt-1 gap-2 rounded-lg border border-base-200 bg-base-100 p-2 shadow"
      >
        {searchEnabled && (
          <div className="flex gap-2">
            <div className="daisy-input daisy-input-sm flex items-center gap-2 rounded-md bg-base-200 has-[:focus]:outline-none has-[:focus]:ring-1 has-[:focus]:ring-gray-600">
              <input
                ref={inputRef}
                className="w-full shrink"
                style={{
                  width: inputRef.current?.offsetWidth,
                }}
                placeholder="Search"
                value={searchString}
                onChange={({ target }) => setSearchString(target.value)}
              />
              {searchString.length ? (
                <button
                  type="button"
                  title="Reset search"
                  onClick={() => {
                    inputRef.current?.focus();
                    setSearchString("");
                  }}
                  className="text-neutral-content transition-all hover:text-current"
                >
                  <XMarkIcon className="size-5 fill-current" />
                </button>
              ) : (
                <MagnifyingGlassIcon className="size-5 fill-neutral-content" />
              )}
            </div>
            <button
              className="group relative ml-auto flex size-8 shrink-0 items-center justify-center rounded-lg border border-gray-600"
              type="button"
              title={selected.length ? "Deselect all" : "Select all"}
              onClick={() =>
                onChange(
                  selected.length ? [] : options.map(({ value }) => value),
                )
              }
            >
              <CheckIcon
                className={classNames(
                  "size-5 fill-current opacity-0 transition-all group-hover:opacity-100",
                  {
                    "!fill-aquamarine opacity-100 group-hover:-translate-y-1 group-hover:!opacity-0":
                      selected.length,
                  },
                )}
              />
              <XMarkIcon
                className={classNames(
                  "absolute m-auto size-5 translate-y-1 opacity-0 transition-all",
                  {
                    "group-hover:translate-y-0 group-hover:opacity-100":
                      selected.length,
                  },
                )}
              />
            </button>
          </div>
        )}
        <ul className="grid max-h-[40vh] gap-2 overflow-auto">
          {searchString.length && !filteredOptions.length ? (
            <li className="flex h-8 flex-row items-center px-4">No matches</li>
          ) : (
            filteredOptions.map((option) => {
              const isSelected = selected.includes(option.value);
              return (
                <li key={option.value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(
                        isSelected
                          ? selected.filter(
                              (optionValue) => optionValue !== option.value,
                            )
                          : [...selected, option.value],
                      );
                    }}
                    className="group flex min-w-max cursor-pointer items-center justify-between gap-3 whitespace-nowrap pl-4 pr-2 text-left"
                  >
                    <span className="flex items-center gap-1.5">
                      {option.label ?? option.value}
                    </span>
                    <CheckIcon
                      className={classNames("size-5 fill-aquamarine", {
                        invisible: !isSelected,
                      })}
                    />
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export function MultiSelectButton({
  title,
  className,
  children,
}: PropsWithChildren<{
  title?: string;
  className?: string;
}>): ReactNode {
  return (
    <div
      tabIndex={0}
      role="button"
      title={title}
      className={classNames(
        "daisy-btn daisy-btn-outline daisy-btn-sm flex items-center justify-center border-gray-600 py-1",
        className,
      )}
    >
      {children}
    </div>
  );
}

export type MultiSelectOption<T extends OptionValue> = {
  value: T;
  /**
   * Used to match against the search string. By default, only the `value`
   * field is used.
   */
  searchValue?: OptionValue;
  label?: ReactNode;
};

type OptionValue = string | number;
