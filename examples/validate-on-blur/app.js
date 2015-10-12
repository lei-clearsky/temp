var MyTextInput = require('./../components/InputExample');
var MySelect = require('./../components/Select');
var React = require('react');
var ReactDOM = require('react-dom');
var Formsy = require('formsy-react');

var MyFrom = React.createClass({
    getInitialState: function () {
      return {canSubmit: false}
    },
    handleClick: function (form, formReset, invalidateForm) {

    },
    enableButton: function () {
      this.setState({
          canSubmit: true
      });
    },
    disableButton: function () {
      this.setState({
          canSubmit: false
      });
    },
    render: function () {
      return ( 
        <Formsy.Form 
          onSubmit={this.handleClick} 
          onValid={this.enableButton}  
          onInvalid={this.disableButton} >
          <div >
              <MyTextInput 
                name="userName" 
                placeholder="username"
                label="Username"
                validations="isNumeric"
                // validations="minLength:5,maxLength:15"
                // validationError={{minLength: "Error not between 5 and 15"}}
                validationError="This field should be numeric"
                required />
              <MyTextInput name="email" placeholder="Email"
                label="Email"
                required 
                validations="isEmail"
                validationError="Not an valid Email"
                required />
              <MyTextInput name="test1" placeholder="Test1"
                label="Test1"
                required 
                validations="isNumeric"
                validationError="This field should be numeric"
                required />
              <MyTextInput name="test2" placeholder="Test2"
                label="Test2"
                required 
                validations="isNumeric"
                validationError="This field should be numeric"
                required />
              <MyTextInput name="test3" placeholder="Test3"
                label="Test3"
                required 
                validations="isNumeric"
                validationError="This field should be numeric"
                required />
              <MySelect name="hair" title="false" 
                required
                options={[
                  { value: "black", title: "Black" },
                  { value: "brown", title: "Brown" },
                  { value: "blonde", title: "Blonde" },
                  { value: "red", title: "Red" }
                ]}
              />
          </div>
          <div className="panel-footer text-right">
              <input type="submit" 
                
                value="Send" />
          </div>
        </Formsy.Form>
      );
    }
});
// disabled={!this.state.canSubmit}
ReactDOM.render(<MyFrom/>, document.querySelector('#exampleInput'));
