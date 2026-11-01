// Paleta do projetoagil (utils/cores_status.dart + app_theme.dart)
export const colors = {
    primary: "#3454D1",
    danger: "#D64550",
    warning: "#E0A458",
    info: "#7C83FD",
    success: "#2CA58D",
    neutral: "#9AA5B1",
};

// Tipos de projeto
export const typeColors: Record<string, string> = {
    "Website": colors.primary,
    "Sistema de Gestão": colors.warning,
    "Segurança": colors.danger,
};

// Status de projeto
export const statusColors: Record<string, string> = {
    "Em andamento": colors.success,
    "Pausado": colors.warning,
    "Planejamento": colors.info,
    "Não iniciado": colors.neutral,
};
