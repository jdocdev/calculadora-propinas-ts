export function formatCurrency(quantity: number): string {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(quantity);
}