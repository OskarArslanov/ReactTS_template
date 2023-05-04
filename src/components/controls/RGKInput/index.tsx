import { Input } from "antd";
import { FC, useMemo, useState } from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import styles from "./styles.module.css";
import { handleErrors } from "../../../utils/errors";

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
  const [valid, setValid] = useState<boolean>();

  const inputValidClass = useMemo(() => {
    if (valid === undefined) return "RGKInput__notChanged";
    return `RGKInput__${valid ? "valid" : "invalid"}`;
  }, [valid]);
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
        render={({ field }) => (
          <Input
            {...field}
            placeholder={props.placeholder}
            className={styles[inputValidClass]}
            type={props.type}
            onChange={(e) => {
              const value = e.target.value;
              const isValid = handleErrors(
                context,
                value,
                props.name,
                props.label || props.placeholder,
                props.rules
              );
              setValid(isValid);
            }}
          />
        )}
      />
    </label>
  );
};

export default RGKInput;
