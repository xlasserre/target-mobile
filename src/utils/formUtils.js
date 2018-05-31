import { SubmissionError } from 'redux-form/immutable';

class formUtils {
  static throwGeneralSubmissionError = (error = 'There is an error in the form') => {
    throw new SubmissionError({
      _error: error,
    });
  }
}

export default formUtils;
