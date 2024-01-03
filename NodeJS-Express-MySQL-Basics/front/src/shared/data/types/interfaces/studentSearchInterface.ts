export interface IStudentSearch {
  placeholder: string;
  value: string;
  onValueChange: (text: string) => void;
  onPress: () => void;
}
