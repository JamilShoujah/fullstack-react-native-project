import getCourseDetailStore from '../../store/course-store/course-store';

const courseData = getCourseDetailStore();

export function handleCourseDetails(data: any[]) {
  const {course_name, course_description} = data[0];

  courseData.setCourseName(course_name);
  courseData.setCourseDescription(course_description);
}
