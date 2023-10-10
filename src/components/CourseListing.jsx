import './CourseListing.css'
import { courseConflict } from '../utilities/conflicts';

const CourseListing = ({course, selected, toggleSelected}) => (
    <div className='course-listing card m-1 p-2' onClick={() => (courseConflict(selected, course) ? undefined : toggleSelected(course))}>
        <div className={`card-body ${selected.includes(course) ? 'selected' : ''} ${courseConflict(selected, course) ? 'conflicting' : ''}`}>
            <h5 className='card-title'>{course.term} CS {course.number}</h5>
            <p className='card-text' style={{height: '5em'}}>{course.title}</p>
            <hr></hr>
            <p className='card-text'>{course.meets}</p>
        </div>
    </div>
)

export default CourseListing;