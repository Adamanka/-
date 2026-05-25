// Дополнительные эффекты при наведении на картинки
document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление элементов уже есть в CSS
    // Добавляем эффект лёгкого "дрожания" руны на главной иконке (опционально)
    const runeSymbol = document.querySelector('.rune-symbol i');
    if (runeSymbol) {
        setInterval(() => {
            runeSymbol.style.textShadow = '0 0 8px #d47f58';
            setTimeout(() => {
                runeSymbol.style.textShadow = 'none';
            }, 200);
        }, 3000);
    }

    // Лог в консоль для проверки загрузки
    console.log('Квента Траина Углича загружена. Эффекты активны.');
});