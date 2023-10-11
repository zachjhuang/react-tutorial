import './CourseListing.css'
import { courseConflict } from '../utilities/conflicts';
import { Link, useNavigate } from 'react-router-dom';


const CourseListing = ({id, course, selected, toggleSelected}) => {
    const navigate = useNavigate();
    return (
        <div className='course-listing card m-1 p-2'>
            <div className={`card-body ${selected.includes(course) ? 'selected' : ''} ${courseConflict(selected, course) ? 'conflicting' : ''}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className='card-title'>{course.term} CS {course.number}</h5>
                    <Link to={`/CourseEditor/${id}`}>
                        <button className='edit-button btn'>
                            <i className="bi bi-pencil"></i>
                        </button>
                    </Link>
                </div>
                <p className='card-text' style={{ height: '5em' }}>{course.title}</p>
                <hr />
                <p className='card-text'>{course.meets}</p>
            </div>
        </div>
    )
}

export default CourseListing;