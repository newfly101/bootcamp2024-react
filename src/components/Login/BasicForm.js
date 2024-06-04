import classes from './JoinInput.module.css';

const BasicForm = (props) => {
    return (
        <form>
            <div className={classes.controlGroup}>
                <div className={classes.formControl}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' />
                </div>
            </div>
            <div className={classes.formControl}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' />
            </div>
            <div className={classes.formActions}>
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;