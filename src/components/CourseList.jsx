import CourseListing from './CourseListing.jsx';

const CourseList = ({courses}) => (
    <div> 
        {Object.entries(courses).map(([number, course]) => <CourseListing key={number} course={course}/>)}
    </div>
);

export default CourseList;

