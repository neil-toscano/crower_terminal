enum TicketStatus {
    AVAILABLE = "AVAILABLE",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
}

export const TicketStatusES: Record<TicketStatus, string> = {
    [TicketStatus.AVAILABLE]: "DISPONIBLE",
    [TicketStatus.IN_PROGRESS]: "EN PROGRESO",
    [TicketStatus.COMPLETED]: "FINALIZADO",
};