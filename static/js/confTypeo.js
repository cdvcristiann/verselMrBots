// configuraciones del efecto type
function typed_one() {
	const typed = new Typed('.typeo', {
		strings: ['En Mr. Bots All Software, estamos comprometidos con la excelencia en soluciones empresariales y desarrollo web. Ofrecemos soluciones empresariales de vanguardia con nuestro ERP, Mr. Bots , un completo ERP que simplifica la gestión empresarial. Desde la gestión de proveedores hasta la administración financiera, Mr. Bots hace que tu empresa funcione con eficiencia y precisión. Descubre cómo podemos impulsar tu negocio y mantenerlo a la vanguardia de la competencia.'],
		typeSpeed: 20, // Velocidad en mlisegundos para poner una letra,
		startDelay: 500, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
		backSpeed: 205, // Velocidad en milisegundos para borrrar una letra,
		smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
		shuffle: false, // Alterar el orden en el que escribe las palabras.
		backDelay: 1, // Tiempo de espera despues de que termina de escribir una palabra.
		loop: true, // Repetir el array de strings
		loopCount: 1, // Cantidad de veces a repetir el array.  false = infinite
		showCursor: true, // Mostrar cursor palpitanto
		cursorChar: '|', // Caracter para el cursor
		contentType: 'html', // 'html' o 'null' para texto sin formato
	});
}

