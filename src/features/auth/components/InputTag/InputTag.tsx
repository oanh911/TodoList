import { InputType } from '../../types/auth.types';
import { useField } from 'formik';
import './InputTag.css';

function InputTag(props: InputType){
    const [field, meta] = useField(props);
    return (
        <>
            <input {...field} {...props} />
            {(meta.touched && meta.error) ? <p className='wrong-input'>{meta.error}</p> : <p className='right-input'>{props.hint}</p>}
        </>
    );
}

export default InputTag;