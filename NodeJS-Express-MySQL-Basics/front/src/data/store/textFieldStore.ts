import {memoize} from 'lodash';

export class InputTextFieldModel {}

const getInputFieldStore = memoize(
  () => {
    const InputTextField = new InputTextFieldModel();
    return InputTextField;
  },
  () => 1,
);

export default getInputFieldStore;
