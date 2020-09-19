import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    Nav: {
        '& a:not(:last-child)': {
            marginRight: '10px',
        },

        '& a:link': {
            textDecoration: 'none',
            color: 'orange',
            fontSize: '25px',
            fontStyle: 'italic'
        },

        '& a:visited':{
            color: 'orange'
        },

        '& a:hover':{
            color: 'black'
        }
    

    },
});

export default styles;