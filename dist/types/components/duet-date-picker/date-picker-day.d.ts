import { FunctionalComponent } from "../../stencil-public-runtime";
import { DuetDateFormatter } from "./date-adapter";
export declare type DatePickerDayProps = {
  focusedDay: Date;
  today: Date;
  day: Date;
  inRange: boolean;
  onDaySelect: (event: MouseEvent, day: Date) => void;
  dateFormatter: DuetDateFormatter;
  onKeyboardNavigation: (event: KeyboardEvent) => void;
  focusedDayRef?: (element: HTMLButtonElement) => void;
};
export declare const DatePickerDay: FunctionalComponent<DatePickerDayProps>;
