import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../actions/userAction';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '10px 20px 10px 20px',
        margin: '10px',
    },
    button: {
        margin: '10px',
    },

}));



const SignUpForm = (props) => {

    //const { payload } = props;
    //const dispatch = useDispatch();
    const allUser = useSelector(state => state.list);
    const classes = useStyles();
    //console.log(allUser);

    const validateSchema = yup.object({
        fullname: yup
            .string('Enter your full name')
            .required('Full name is required')
            .max(50, 'The max length of full name is 50 characters'),
        age: yup
            .number('Enter your age')
            .required('Age is required')
            .typeError('Please enter digital numbers')
            .lessThan(150, 'the max number of age is 150')
            .moreThan(17, 'The min number of age is 18'),
        email: yup
            .string('Enter your email')
            .required('Email is required')
            .max(50, 'The max length of email is 50 characters')
            .email('Enter a valid email'),
    });

    const formik = useFormik({
        initialValues: {
            fullname: '',
            age: '',
            email: '',
        },
        validationSchema: validateSchema,
        onSubmit: values => {
            props.addUser(values);
            //dispatch(addUser(values));
            //alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="fullname"
                        name="fullname"
                        label="Full name"
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        helperText={formik.touched.fullname && formik.errors.fullname}
                    />
                    <TextField
                        fullWidth
                        id="age"
                        name="age"
                        label="Age"
                        value={formik.values.age}
                        onChange={formik.handleChange}
                        error={formik.touched.age && Boolean(formik.errors.age)}
                        helperText={formik.touched.age && formik.errors.age}
                    />

                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />

                    <Button
                        className={classes.button}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>

                </form>

            </div>
            <div>
                {allUser.map((user, key) => (
                    <Paper className={classes.paper} key={key} elevation={3} >
                        <p>Full name: {user.fullname}</p>
                        <p>Age: {user.age}</p>
                        <p>Email: {user.email}</p>
                    </Paper>
                ))}
            </div>

        </Container>

    );

};

const mapStateToProps = (state) => {
    return {
        payload: state.payload,
    }
}

//export default SignUpForm;

export default connect(mapStateToProps, {addUser})(SignUpForm);