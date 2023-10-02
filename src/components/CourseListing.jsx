const CourseListing = ({course}) => (
    <div className="card m-1 p-2">
        <div className="card-body">
            <h5 className="card-title">{course.term} CS {course.number}</h5>
            <p className="card-text" style={{height: '5em'}}>{course.title}</p>
            <hr></hr>
            <p className="card-text">{course.meets}</p>
        </div>
    </div>
)

export default CourseListing;