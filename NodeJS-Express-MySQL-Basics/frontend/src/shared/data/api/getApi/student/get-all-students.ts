import getStudentDataStore from '../../../../../store/student-store/student-data-store';

export const fetchAllStudents = async () => {
  const studentData = getStudentDataStore();
  try {
    const response = await fetch(
      'http://localhost:3000/api/student/getStudents',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      const text = await response.text();
      console.error('Non-JSON response received:', text);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    studentData.setAllStudents(data);
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
