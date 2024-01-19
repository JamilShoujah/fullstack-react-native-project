import getCourseDetailStore from '../../../../../store/course-store/course-store';

const courseData = getCourseDetailStore();

export const fetchAllCourses = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/course/getCourses',
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
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
};
