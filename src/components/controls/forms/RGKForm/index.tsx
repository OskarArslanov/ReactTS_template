import { CSSProperties, FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface RGKFormProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  onSubmit: (data: any) => void;
  onChangeValues?: (data: any) => void;
}

const RGKForm: FC<RGKFormProps> = (props) => {
  const methods = useForm();
  const [error, setError] = useState<any[]>();
  const handleChange = () => {
    const errorFields = Object.values(methods.formState.errors);
    const errorsMessages = errorFields.map((item) => item?.message);
    setError(errorsMessages);
    props.onChangeValues?.(methods.getValues());
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isValid = methods.formState.isValid;
    // eslint-disable-next-line no-underscore-dangle
    const data = methods.control._formValues;
    const status = { status: isValid, data };
    console.log(status);
    props.onSubmit(data);
    methods.handleSubmit(props.onSubmit);
  };
  return (
    <FormProvider {...methods}>
      <form
        style={props.style}
        onSubmit={handleSubmit}
        onChange={handleChange}
        className={props.className}
      >
        {props.children}
        {error?.length && (
          <p style={{ color: "red", fontSize: "12px" }}>{error[0]}</p>
        )}
      </form>
    </FormProvider>
  );
};

export default RGKForm;
