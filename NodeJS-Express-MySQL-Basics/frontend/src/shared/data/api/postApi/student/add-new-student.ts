import getStudentDetailStore from '../../../../../store/student-store/student-store';

const studentData = getStudentDetailStore();

export const addNewStudent = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/student/addStudents',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          StudentObject: {
            studentFirstName: studentData.firstName.get(),
            studentLastName: studentData.lastName.get(),
            studentEmail: studentData.emailAddress.get(),
            studentDateOfBirth: studentData.birthDate.get(),
            studentAddress: studentData.address.get(),
            studentPhone: studentData.phoneNumber.get(),
          },
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
