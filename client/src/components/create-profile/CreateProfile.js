import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaField from "../common/TextAreaField";
import InputGroup from "../common/InputGroup";
import SelectListGroup from "../common/SelectListGroup";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInput: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };
  }

  render() {
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile standout
              </p>
              <small className="d-block pb-3">* = required fields</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    errors: state.errors
  };
};

export default connect(mapStateToProps)(CreateProfile);
