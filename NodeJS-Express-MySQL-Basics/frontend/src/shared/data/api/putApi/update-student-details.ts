import getStudentDataStore from '../../../../store/student-store/student-data-store';
import getStudentDetailStore from '../../../../store/student-store/student-store';

const studentDetails = getStudentDataStore();
const studentIdStore = getStudentDetailStore();

export const updateStudent = async () => {
  try {
    console.log(studentDetails.studentId.get());
    console.log(studentDetails.userObject.get());
    const response = await fetch(
      'http://localhost:3000/api/student/updateStudent',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          StudentObject: studentDetails.userObject.get(),
          StudentID: studentIdStore.studentId.get(),
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
    return 'Failed to update student';
  }
};
