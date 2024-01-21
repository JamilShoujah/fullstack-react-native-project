export interface ITextInput {
  placeholder: string;
  value: string;
  onValueChange: (text: string) => void;
}
