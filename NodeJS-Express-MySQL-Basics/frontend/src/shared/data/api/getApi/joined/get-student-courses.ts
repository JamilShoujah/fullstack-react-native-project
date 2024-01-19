import getJoinedDetailStore from '../../../../../store/joined-store/joined-store';

const studentData = getJoinedDetailStore();

export const fetchCoursesByStudent = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/data/getCoursesByStudent',
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
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
