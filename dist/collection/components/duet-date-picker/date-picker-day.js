import { h } from "@stencil/core";
import { isEqual } from "./date-utils";
export const DatePickerDay = ({ focusedDay, today, day, onDaySelect, onKeyboardNavigation, focusedDayRef, inRange, dateFormatter, }) => {
  const isToday = isEqual(day, today);
  const isFocused = isEqual(day, focusedDay);
  const isDisabled = day.getMonth() !== focusedDay.getMonth();
  const isOutsideRange = !inRange;
  function handleClick(e) {
    onDaySelect(e, day);
  }
  return (h("button", { class: {
      "duet-date__day": true,
      "is-outside": isOutsideRange,
      "is-disabled": isDisabled,
      "is-today": isToday,
    }, tabIndex: isFocused ? 0 : -1, onClick: handleClick, onKeyDown: onKeyboardNavigation, disabled: isOutsideRange || isDisabled, type: "button", ref: el => {
      if (isFocused && el && focusedDayRef) {
        focusedDayRef(el);
      }
    } },
    h("span", { "aria-hidden": "true" }, day.getDate()),
    h("span", { class: "duet-date__vhidden" }, dateFormatter(day))));
};
