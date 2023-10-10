const termConflict = (selectedCourses, course) => {
    return selectedCourses.filter(selectedCourse => selectedCourse.term == course.term);
}

const dayConflict = (selectedCourses, course) => {
    return selectedCourses.filter(selectedCourse => ['M','Tu','W','Th','F'].some(day => selectedCourse.meets.search(day) != -1 && course.meets.search(day) != -1));
}

const timeConflict = (selectedCourses, course) => {
    return selectedCourses.filter(selectedCourse => startTime(course) < endTime(selectedCourse) && endTime(course) > startTime(selectedCourse));
}

const startTime = (course) => {
    return course.meets.match(/([A-Za-z]+) (\d{1,2}:\d{2})-(\d{1,2}:\d{2})/)[2];
}

const endTime = (course) => {
    return course.meets.match(/([A-Za-z]+) (\d{1,2}:\d{2})-(\d{1,2}:\d{2})/)[3];
}

export const courseConflict = (selectedCourses, course) => {
    var conflictingCourses = selectedCourses.filter(selectedCourse => selectedCourse != course)
    conflictingCourses = termConflict(conflictingCourses, course);
    conflictingCourses = dayConflict(conflictingCourses, course);
    conflictingCourses = timeConflict(conflictingCourses, course);
    return conflictingCourses.length >= 1;
}