import getCourseDataStore from '../../store/course-store/course-data-store';

const courseData = getCourseDataStore();

export function handleCourseDetails(data: any[]) {
  const {course_name, course_description} = data[0];

  courseData.setCourseName(course_name);
  courseData.setCourseDescription(course_description);
}
