export const PaymentQR = () => (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-4">
        <div className="flex justify-center mb-4">
            <h3 className="inline-block text-[11px] uppercase tracking-wider font-bold text-[#5C00B2] bg-zinc-200 px-3 py-1 rounded-full shadow-sm">
                Pago seguro - QR YAPE
            </h3>
        </div>
        <div className="rounded-2xl border-none p-4">
            <div className="aspect-square rounded-xl border border-dashed border-zinc-600 bg-zinc-950 text-center text-xs text-zinc-500">
                <img
                    src="https://res.cloudinary.com/dvult5ws1/image/upload/v1775701107/qrcode_localhost_dgyc89.png"
                    alt="QR YAPE"
                    className="h-full w-full object-contain rounded-xl"
                />
            </div>
        </div>
        <p className="mt-3 text-md text-zinc-400 mb-6">
            *Paga el monto acordado con tu comprador y usa el chat para coordinar con el admin.
        </p>
    </div>
);