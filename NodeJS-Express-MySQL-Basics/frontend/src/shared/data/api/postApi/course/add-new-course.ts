import getCourseDetailStore from '../../../../../store/course-store/course-store';

const courseData = getCourseDetailStore();

export const addNewCourse = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/course/addCourse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CourseObject: {
          courseName: courseData.courseName.get(),
          courseDescription: courseData.courseDescription.get(),
        },
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      throw new Error(
        `Request failed with status ${response.status}: ${responseText}`,
      );
    }

    console.log(responseText);

    return responseText;
  } catch (error) {
    console.error(error);
    return 'Failed to save data';
  }
};
