import getStudentDetailStore from '../../../../../store/student-store/student-store';

const studentData = getStudentDetailStore();

export const fetchStudentsByLastName = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/student/getStudentsByLastName',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          StudentLastName: studentData.lastName.get(),
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      console.error('Non-JSON response received:', text);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
