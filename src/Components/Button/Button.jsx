import { Button } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ButtonComponent(props) {

    const history = useHistory();

    return (
        <Button style={{
            backgroundColor: props.type === 'Quote' ? '#0283AB' : '#F2F2F2',
            color: props.type === 'Quote' ? '#F2F2F2' : '#0283AB',
            opacity: 1,
            transition: 'opacity 0.3s ease-in-out',
            textTransform: 'none', // Prevent all caps
        }}
        onMouseEnter={(e) => e.target.style.opacity = 0.5}
        onMouseLeave={(e) => e.target.style.opacity = 1}
        onClick={props.type === 'Quote' ? () => history.push('/quote') : null}
        >
            Get Free Instant Quote
        </Button>
    )
}

export default ButtonComponent;