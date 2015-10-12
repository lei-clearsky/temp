var React = require('react');
var Formsy = require('formsy-react');

var MyTextInput = React.createClass({
    mixins: [Formsy.Mixin],
    changeValue: function (event) {
        if(this.getErrorMessage() != null){
            this.setValue(event.currentTarget.value);
        }
        else{
            if (this.isValidValue(event.target.value)) {
                this.setValue(event.target.value);
            }
            else{
                this.setState({
                    _value: event.currentTarget.value,
                    _isPristine: false
                });
            }
        }
    },
    blurValue: function (event) {
        this.setValue(event.currentTarget.value);
    },
    keyDown: function (event){
        if(event.keyCode=='13'){
            this.setValue(event.currentTarget.value);
        }
    },
    render: function () {
        var className = this.showRequired() ? 'form-group' : this.showError() ? 'form-group has-error' : "form-group";
        var errorMessage = this.getErrorMessage();
        var isFieldInvalid = !this.isValid() && !this.isPristine();
        console.log('isValid? ', this.props.label + ': ' + this.isValid());
        console.log('isPristine? ', this.props.label + ': ' + this.isPristine());
        console.log('errorMessage ', this.props.label + ': ' + errorMessage);
        console.log('isFieldInvalid ', this.props.label + ': ' + isFieldInvalid);
        console.log('--------------------------');
        return (
            <div className={className}>
                <label >{this.props.label}</label>
                <div>
                    <input type="text" onBlur={this.blurValue} onKeyDown={this.keyDown} onChange={this.changeValue}
                           value={this.getValue()} placeholder={this.props.placeholder} />
                    
                    <span className='validation-error'>{errorMessage}</span>
                </div>
            </div>);
    }
});
module.exports = MyTextInput;
// {isFieldInvalid && <span >{this.props.validationError}</span>}
// <span >{errorMessage}</span>
