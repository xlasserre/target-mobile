import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import ProfileForm from '../../components/ProfileForm';
import styles from './styles';
import { logout, editProfile } from '../../actions/userActions';

class ProfileScreen extends React.Component {
  constructor() {
    super();

    this.editUserProfile = this.editUserProfile.bind(this);
  }

  editUserProfile(user) {
    console.log('user: ', user);
    // console.log added to prevent not used var error, will be updated when I do the edit profile functionality
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.topScreen}>
          <ImageBackground style={styles.backgroundImg} source={require('../../assets/images/circlesGroup.png')}>
            <Image style={styles.innerImage} source={require('../../assets/images/profile.png')} />
          </ImageBackground>
        </View>
        <View style={styles.bottomScreen}>
          <ProfileForm editProfile={this.editUserProfile} />
          <View>
            <TouchableOpacity style={styles.logOutButton}>
              <Text style={styles.logOutTxt} onPress={this.props.userLogout}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
  userLogout: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(logout()),
  editProfile: user => dispatch(editProfile(user))
});

export default connect(null, mapDispatchToProps)(ProfileScreen);
