
export default function Matplotlib({title}: any) {
    return (
        <svg className="p-0" xmlns="http://www.w3.org/2000/svg" 
        width="25" height="25"  viewBox="0 0 180 180" 
        stroke="black">
            <title>{title}</title>
                <g stroke-width="2" fill="#848485">
                    <circle cx="90" cy="90" r="88" stroke="black" fill="#848485" />
                    <circle cx="90" cy="90" r="66" stroke="black" fill="#848485" />
                    <circle cx="90" cy="90" r="44" stroke="black" fill="#848485" />
                    <circle cx="90" cy="90" r="22" stroke="black" fill="#848485" />
                    <path d="m90,2v176m62-26-124-124m124,0-124,124m150-62H2" stroke="black" />
                </g>
                <g opacity=".8">
                    <path fill="#000000" d="m90,90h18a18,18 0 0,0 0-5z"/>
                    <path fill="#000000" d="m90,90 34-43a55,55 0 0,0-15-8z"/>
                    <path fill="#000000" d="m90,90-16-72a74,74 0 0,0-31,15z"/>
                    <path fill="#000000" d="m90,90-58-28a65,65 0 0,0-5,39z"/>
                    <path fill="#000000" d="m90,90-33,16a37,37 0 0,0 2,5z"/>
                    <path fill="#000000" d="m90,90-10,45a46,46 0 0,0 18,0z"/>
                    <path fill="#000000" d="m90,90 46,58a74,74 0 0,0 12-12z"/>
                </g>
            </svg>
    );
}