export class StatusVars {
    public static generalStatus: Object = {
        0: 'Pasif',
        1: 'Aktif',
        3: 'İptal',
        5: 'Silinmiş',
    };
    public static warehouseIntake: Object = {
        0: 'Pasif',
        1: 'Stoklara Girmiş',
        2: 'Miktar Kontrol Red',
        3: 'Kalite Kontrol Red',
        5: 'Silinmiş',
        6: 'Miktar Kontrolde',
        7: 'Kalite Kontrol Onayında'
    };
    public static invoiceStatus: Object = {
        0: 'Faturalaşmamış',
        1: 'Faturalaşmış',
        2: 'Kısmi Faturalaşmış'
    };
}
