const CourseListing = ({course}) => (
    <div>
        {course.term} CS {course.number}: {course.title}
    </div>
)

export default CourseListing;