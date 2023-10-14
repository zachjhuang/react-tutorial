import './CourseListing.css'
import { courseConflict } from '../utilities/conflicts';
import { Link } from 'react-router-dom';


const CourseListing = ({id, course, profile, selected, toggleSelected}) => {
    return (
        <div className='course-listing card m-1 p-2' onClick={() => (courseConflict(selected, course) ? undefined : toggleSelected(course))}>
            <div className={`card-body ${selected.includes(course) ? 'selected' : ''} ${courseConflict(selected, course) ? 'conflicting' : ''}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className='card-title'>{course.term} CS {course.number}</h5>
                    {
                        profile?.isAdmin &&
                        <Link to={`/CourseEditor/${id}`}>
                            <button className='edit-button btn'>
                                <i className="bi bi-pencil"></i>
                            </button>
                        </Link>
                    }
                </div>
                <p className='card-text' style={{ height: '5em' }}>{course.title}</p>
                <hr />
                <p className='card-text'>{course.meets}</p>
            </div>
        </div>
    )
}

export default CourseListing;