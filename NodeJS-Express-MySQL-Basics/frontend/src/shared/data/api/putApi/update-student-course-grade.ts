import getJoinedDetailStore from '../../../../store/joined-store/joined-store';

const joinedData = getJoinedDetailStore();

export const updateStudentCourseGrade = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/data/updateStudentGrade',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          StudentID: joinedData.gradeStudentId.get(),
          CourseID: joinedData.gradeCourseId.get(),
          Grade: joinedData.grade.get(),
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
