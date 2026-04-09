-- Mensajes escritos por el vendedor (no sistema) pertenecen al hilo vendedor–admin.
UPDATE "Message" m
SET "thread" = 'SELLER_SIDE'
FROM "Ticket" t
WHERE m."ticketId" = t.id
  AND m."senderId" = t."sellerId"
  AND m."isSystem" = false;
