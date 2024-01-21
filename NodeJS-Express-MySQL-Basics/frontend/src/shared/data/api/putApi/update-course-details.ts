import getCourseDetailStore from '../../../../store/course-store/course-store';

const courseDetails = getCourseDetailStore();

export const updateCourse = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/course/updateCourse',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CourseObject: courseDetails.courseObject.get(),
          CourseId: courseDetails.courseID.get(),
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error(error);
    return 'Failed to update course';
  }
};
