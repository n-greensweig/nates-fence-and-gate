import ButtonComponent from "../../Components/Button/Button";

function LandingPage() {
    return (
        <div
            className='instant-quote-hero'
            style={{
                position: 'relative',
                height: '100vh',
                backgroundSize: 'cover'
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: "url('images/cedar/craftsman/craftsman-1.jpeg')",
                    backgroundSize: 'cover',
                    opacity: .3,
                    zIndex: -1,
                }}
            />
            <div
                className='content'
                style={{
                    position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                }}
            >
                <ButtonComponent type="Quote" />
            </div>

        </div >
    )
}

export default LandingPage;