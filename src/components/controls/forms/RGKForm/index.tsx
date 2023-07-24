import { CSSProperties, FC, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface RGKFormProps {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  onSubmit: (data: any) => void;
  onChangeValues?: (data: any) => void;
  error?: string;
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

  useEffect(() => {
    setError([props.error]);
  }, [props.error]);

  return (
    <FormProvider {...methods}>
      <form
        style={props.style}
        onSubmit={methods.handleSubmit(props.onSubmit)}
        onChange={handleChange}
        className={props.className}
      >
        {props.children}
        {!!error?.length && (
          <p style={{ color: 'red', fontSize: '12px' }}>{error[0]}</p>
        )}
      </form>
    </FormProvider>
  );
};

export default RGKForm;
