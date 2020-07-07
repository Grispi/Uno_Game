import classnames from "classnames";
import useTranslation from "next-translate/useTranslation";
import React, { Fragment } from "react";

export default function Select({
  disabled = false,
  hint = "",
  id,
  label,
  onChange,
  options,
  value,
}) {
  const { t } = useTranslation();

  return (
    <Fragment>
      <label htmlFor={id} className="flex flex-col ">
        {label && <span className="mb-1">{label}</span>}
        <div className="inline-block relative">
          <select
            id={id}
            aria-label={id}
            className={classnames([
              "appearance-none  text-gray-700 bg-transparent rounded w-full text-sm sm:text-base",
              "px-2 md:px-2 my-1 ml-0 mr-2 md:m-2",
              "focus:border-gray-600 focus:outline-none focus:shadow-outline hover:border-gray-500",
              "duration-150 ease-in-out transition",
              "disabled:opacity-50",
            ])}
            value={value}
            onChange={(event) => onChange && onChange(event.target.value)}
            disabled={disabled}
            onBlur={() => void 0}
          >
            {!value && (
              <option value={""}>{t("common:select-empty-option")}</option>
            )}
            {options.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-0 py-3 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </label>
      {hint && (
        <p className="italic mt-1 text-gray-800 text-xs md:text-sm">{hint}</p>
      )}
    </Fragment>
  );
}
