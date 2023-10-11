import { useDbUpdate } from '../utilities/firebase';
import { useFormData } from '../utilities/useFormData';
import { useParams, useNavigate } from 'react-router-dom';

const isValidTime = (startHour, startMinute, endHour, endMinute) =>
  startHour >= 0 && startHour <= 23 &&
  endHour >= 0 && endHour <= 23 &&
  startMinute >= 0 && startMinute <= 59 &&
  endMinute >= 0 && endMinute <= 59 &&
  parseInt(startHour + startMinute) <= parseInt(endHour + endMinute);

const validateCourseData = (key, val) => {
    switch (key) {
        case 'title':
            return /(^\w\w)/.test(val) ? '' : 'must be least two characters';
        case 'meets':
            if (val == '') {
                return ''
            }
            const match = val.match(/^(?:M)?(?:Tu)?(?:W)?(?:Th)?(?:F)? (\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})?/)
            if (match) {
                const [fullMatch, startHour, startMinute, endHour, endMinute] = match
                return isValidTime(startHour, startMinute, endHour, endMinute) ? '' : 'Please enter valid times, 0:00-23:59'
            }
            return 'Please enter valid schedule format, e.g. "MTuWThF 0:00-23:59"'
        default: 
            return '';
    }
};

const InputField = ({name, text, state, change}) => (
    <div className="mb-3">
        <label htmlFor={name} className="form-label">{text}</label>
        <input className="form-control" id={name} name={name} defaultValue={state.values?.[name]} onChange={change} />
        <div className="invalid-feedback">{state.errors?.[name]}</div>
    </div>
);

const ButtonBar = ({message, disabled}) => {
    const navigate = useNavigate();
    return (
        <div className="d-flex">
            <button type="button" className="btn btn-outline-dark me-2" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="btn btn-primary me-auto" disabled={true}>Submit</button>
            <span className="p-2">{message}</span>
        </div>
    );
};

const CourseEditor = ({courses}) => {
    const { id } = useParams();
    const course = courses[id]
    const [update, result] = useDbUpdate(`/courses/${course.title}`);
    const [state, change] = useFormData(validateCourseData, course);
    const submit = (evt) => {
        evt.preventDefault();
        if (!state.errors) {
        update(state.values);
        }
    };
    return (
        <div>
            <h1>Edit Course</h1>
            <form onSubmit={submit} noValidate className={state.errors ? 'was-validated' : null}>
                <InputField name="title" text="Course Title" state={state} change={change} />
                <InputField name="meets" text="Meeting Times" state={state} change={change} />
                <ButtonBar message={result?.message} />
            </form>
        </div>
    )
};

export default CourseEditor;