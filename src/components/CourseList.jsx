import CourseListing from './CourseListing.jsx';
import './CourseList.css'

const CourseList = ({courses}) => (
    <div className='course-list' > 
        {Object.entries(courses).map(([number, course]) => <CourseListing key={number} course={course}/>)}
    </div>
);

export default CourseList;

