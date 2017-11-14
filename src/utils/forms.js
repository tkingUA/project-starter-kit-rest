'use strict';

/**
 * changeHandler
 * Updates a component's state when form elements are updated
 * @param  {Object} event     the form event
 * @param  {Object} component the react component to update state on
 */
export function changeHandler(event, component) {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ?
        event.target.checked :
        event.target.value;

    const errors = Object.assign({}, component.state.errors);
    delete errors[name];

    component.setState({ [name]: value, errors });
}

export function documentUploadHandler(event, component) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = upload => {

        if (file.type !== 'application/pdf') {
            let errors = { Pdf: { message: 'A file of type PDF is required.' } };
            component.setState({ DocumentName: file.name, errors });
        }
        if (file.type === 'application/pdf') {
            component.setState({
                DocumentName: file.name,
                Pdf: upload.target.result,
                errors: {}
            });
        }
    };

    reader.readAsDataURL(file);
}
