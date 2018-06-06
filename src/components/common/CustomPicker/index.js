import React from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { string, array, object } from 'prop-types';
import Picker from 'react-native-picker';

import styles from './styles';

class CustomPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: ''
    };
    this.showPicker = this.showPicker.bind(this);
  }

  showPicker() {
    Picker.show();
    Keyboard.dismiss();
  }

  render() {
    const { input: { onChange }, pickerLabel, pickerItems } = this.props;
    const uppercaseLabel = pickerLabel.toUpperCase();

    Picker.init({
      pickerData: pickerItems,
      onPickerConfirm: (data) => {
        onChange(data[0]);
        this.setState({ pickerValue: data[0] });
      },
      pickerTitleText: `Select ${pickerLabel}`,
      pickerConfirmBtnText: 'Confirm',
      pickerCancelBtnText: 'Cancel'
    });

    return (
      <View>
        <Text style={styles.label}>{uppercaseLabel}</Text>
        <TextInput
          style={styles.inputBox}
          onFocus={this.showPicker}
          value={this.state.pickerValue}
        />
      </View>
    );
  }
}

CustomPicker.propTypes = {
  pickerLabel: string.isRequired,
  pickerItems: array.isRequired,
  input: object
};

export default CustomPicker;
