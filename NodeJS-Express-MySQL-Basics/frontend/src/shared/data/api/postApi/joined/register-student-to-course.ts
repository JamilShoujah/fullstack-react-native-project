import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';

const joinedData = getJoinedDetailStore();

export const registerStudentToCourse = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/data/registerStudentToCourse',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          StudentID: joinedData.studentId.get(),
          CourseID: joinedData.courseId.get(),
        }),
      },
    );

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
