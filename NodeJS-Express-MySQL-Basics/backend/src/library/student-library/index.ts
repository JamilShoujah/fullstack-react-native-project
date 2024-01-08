import studentModel from "../../models/studentModel";

class studentLibrary {
  async getStudentByID(id: number) {
    const student = await studentModel.findById(id);
  }
}

export default studentLibrary;
