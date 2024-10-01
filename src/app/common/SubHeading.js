import { useMediaQuery } from "react-responsive";

export default function SubHeading({ title }) {
    const isTablet = useMediaQuery({
        query: "(max-width:1023px)"
    });

    return (
        <>
            {isTablet ? null : (
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
