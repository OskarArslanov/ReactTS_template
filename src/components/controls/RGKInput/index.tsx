import { Input } from "antd";
import { FC, useState } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { handleErrors } from "../../../utils/errors";
import styles from "./styles.module.css";

interface RGKInputProps {
  name: string;
  placeholder?: string;
  rules: RegisterOptions;
  type: "text" | "number" | "password" | "email";
  label?: string;
  required?: boolean;
}

const RGKInput: FC<RGKInputProps> = (props) => {
  const context = useFormContext();
  const [invalid, setInvalid] = useState<boolean>();

  return (
    <label className={styles.RGKInput}>
      {props.label ? (
        <span>
          {props.label}
          {props.rules.required && <span style={{ color: "red" }}>*</span>}
        </span>
      ) : null}
      <Controller
        name={props.name}
        control={context.control}
        rules={props.rules}
        render={({ field }) => {
          return (
            <Input
              {...field}
              placeholder={props.placeholder}
              className={styles[`RGKInput__${invalid ? "invalid" : "null"}`]}
              type={props.type}
              onInput={(e) => {
                // @ts-ignore
                const value = e.target.value;
                const isValid = handleErrors(
                  context,
                  value,
                  props.name,
                  props.label || props.placeholder,
                  props.rules
                );
                setInvalid(!isValid);
              }}
            />
          );
        }}
      />
    </label>
  );
};

export default RGKInput;
