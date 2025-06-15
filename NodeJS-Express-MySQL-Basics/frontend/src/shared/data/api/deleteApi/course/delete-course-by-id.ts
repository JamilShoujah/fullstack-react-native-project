import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';

const joinedDetails = getJoinedDetailStore();

export const deleteCourseById = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/course/deleteCourseById',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CourseID: joinedDetails.courseId.get(),
        }),
      },
    );
  } catch (error) {
    console.error(error);
    return 'Failed to delete course';
  }
};
