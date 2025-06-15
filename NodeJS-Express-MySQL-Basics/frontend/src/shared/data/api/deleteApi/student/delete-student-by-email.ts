import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';

const joinedDetails = getJoinedDetailStore();

export const deleteStudentByEmail = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/student/deleteStudentByEmailAddress',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          EmailAddress: joinedDetails.studentEmail.get(),
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const responseText = await response.text();

    if (responseText === 'Student successfully deleted') {
      return responseText;
    } else {
      throw new Error('Unexpected response from the server');
    }
  } catch (error) {
    console.error(error);
    return 'Failed to delete student';
  }
};
