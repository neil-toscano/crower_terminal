enum TicketStatus {
    AVAILABLE = "AVAILABLE",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
}

export const TicketStatusES: Record<TicketStatus, string> = {
    [TicketStatus.AVAILABLE]: "Disponible",
    [TicketStatus.IN_PROGRESS]: "En progreso",
    [TicketStatus.COMPLETED]: "Completado",
};