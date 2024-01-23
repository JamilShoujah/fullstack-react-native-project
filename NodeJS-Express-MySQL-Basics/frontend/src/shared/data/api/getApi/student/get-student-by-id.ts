import getStudentDetailStore from '../../../../../store/student-store/student-store';
import {handleStudentDetails} from '../../../../utils/handle-student-details';

const studentData = getStudentDetailStore();

export const fetchStudentById = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/student/getStudentById',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          StudentID: studentData.studentId.get(),
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      console.error('Non-JSON response received:', text);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    handleStudentDetails(data);
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
