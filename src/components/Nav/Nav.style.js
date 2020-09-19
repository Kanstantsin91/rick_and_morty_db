import {createUseStyles} from 'react-jss';

const styles = createUseStyles({

    Nav: {
        '& a': {
            marginRight: '10px',
            textDecoration: 'none',
            color: 'black',
            fontStyle: 'italic'

        },
        '& a:last-child': {
            marginRight: '0'
        }
    }

});


export default styles;