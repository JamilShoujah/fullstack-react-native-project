import getStudentDetailStore from '../../store/student-store/student-store';
import {splitDateString} from './split-date-string';

const studentData = getStudentDetailStore();

export function handleStudentDetails(data: any[]) {
  const {
    address,
    date_of_birth,
    email,
    phone,
    student_first_name,
    student_last_name,
  } = data[0];

  studentData.setFirstName(student_first_name);
  studentData.setLastName(student_last_name);
  studentData.setEmailAddress(email);
  studentData.setAddress(address);
  studentData.setPhoneNumber(phone);

  const date = splitDateString(date_of_birth);
  const day = parseInt(date[2]);
  const month = parseInt(date[1]);
  const year = parseInt(date[0]);

  studentData.setBirthDay(day.toString());
  studentData.setBirthMonth(month.toString());
  studentData.setBirthYear(year.toString());
}
