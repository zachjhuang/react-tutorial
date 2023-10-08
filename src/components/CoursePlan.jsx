const CoursePlan = ({selected}) => (
    <div className="course-plan">
        <h2>Course Plan</h2>
        <div>
            {
            selected.length === 0
            ? <div>No courses selected. Click on a course to select it.</div>
            : selected.map(course => (
                <div key={course}>
                    {course.term} CS {course.number} - {course.title} - {course.meets}
                </div>
                ))
            }
        </div>
    </div>
);

export default CoursePlan;