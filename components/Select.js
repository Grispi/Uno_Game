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
      <label htmlFor={id} className="flex flex-col">
        {label && <span className="mb-1">{label}</span>}
        <div className="relative">
          <select
            id={id}
            aria-label={id}
            className={classnames([
              "appearance-none  text-gray-700 bg-white  pr-3 rounded w-full  px-4 m-2",
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
          <div
            className="absolute right-0 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: "50%",
            }}
          >
            <p className="text-gray-500 text-3xl">▾</p>
          </div>
        </div>
      </label>
      {hint && (
        <p className="italic mt-1 text-gray-800 text-xs md:text-sm">{hint}</p>
      )}
    </Fragment>
  );
}
