import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ButtonComponent(props) {

    const history = useHistory();

    const type = props.type; // type of button
    const path = type === 'Quote' ? '/quote' : type === 'Types' ? '/fence-types' : null; // path to redirect to
    const text = type === 'Quote' ? 'Get Free Instant Quote' : type === 'Types' ? 'View Fence Types' : null; // text to display on button

    return (
        <Button
            style={{
                backgroundColor: props.type === 'Quote' ? '#0283AB' : '#F2F2F2',
                color: props.type === 'Quote' ? '#F2F2F2' : '#102942',
                opacity: 1,
                transition: 'opacity 0.3s ease-in-out',
                textTransform: 'none', // Prevent all caps
            }}
            onMouseEnter={(e) => {
                e.target.style.color = props.type === 'Quote' ? '#F2F2F2' : '#102942';
                e.target.style.border = props.type === 'Quote' ? null : '2px solid #102942';
                e.target.style.opacity = 0.7; // Set opacity to 70%
            }}
            onMouseLeave={(e) => {
                e.target.style.color = props.type === 'Quote' ? '#F2F2F2' : '#102942';
                e.target.style.border = null;
                e.target.style.opacity = 1; // Reset opacity to 100%
            }}
            onClick={props.type ? () => history.push(path) : null}
        >
            {text}
        </Button>
    )
}

export default ButtonComponent;