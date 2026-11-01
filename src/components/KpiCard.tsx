import Icon, { type IconName } from "./Icon";

type KpiCardProps = {
    title: string;
    value: string;
    icon: IconName;
    color: string;
    footer?: string;
};

function KpiCard({ title, value, icon, color, footer }: KpiCardProps) {
    return (
        <div className="card">
            <div className="kpi-head">
                <span className="kpi-title">{title}</span>
                <span className="kpi-chip" style={{ color, backgroundColor: `${color}1F` }}>
                    <Icon name={icon} size={18} />
                </span>
            </div>
            <div className="kpi-value">{value}</div>
            {footer && <div className="kpi-foot">{footer}</div>}
        </div>
    );
}

export default KpiCard;
