import { useField } from 'formik';
import './InputField.css';

export interface InputType {
    name: string,
    type: string,
    placeholder?: string,
    value?: string
    hint?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function InputField(props: InputType){
    const [field, meta] = useField(props);
    return (
        <>
            <input {...field} {...props} />
            {(meta.touched && meta.error) ? <p className='wrong-input'>{meta.error}</p> : <p className='right-input'>{props.hint}</p>}
        </>
    );
}

export default InputField;