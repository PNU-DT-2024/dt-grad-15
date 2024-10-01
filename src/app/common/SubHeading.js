import { useMediaQuery } from "react-responsive";

export default function SubHeading({ title }) {
    const isMobile = useMediaQuery({
        query: "(max-width: 767px)"
    });

    return (
        <>
            {isMobile ? null : (
                <span
                    style={{
                        fontSize: '1rem',
                        position: 'absolute',
                        left: '32px',
                        color: '#a7a7a7',
                        cursor: 'default'
                    }}
                >
                    -{title}
                </span>
            )}
        </>
    );
}
