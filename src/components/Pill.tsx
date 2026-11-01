type PillProps = { label: string; color: string };

// Selo com fundo a 12% da cor e texto na cor cheia (como _selo no projetoagil)
function Pill({ label, color }: PillProps) {
    return (
        <span className="pill" style={{ color, backgroundColor: `${color}1F` }}>
            {label}
        </span>
    );
}

export default Pill;
