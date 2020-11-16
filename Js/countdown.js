	var txtDias = document.getElementById('dias');
	var txtHoras = document.getElementById('horas');
	var txtMinutos = document.getElementById('minutos');
	var txtSegundos = document.getElementById('segundos');

//generate control function
	function countdown()
	{	
		//set end date/time
		var ahora = new Date();
		var fin = new Date(2021, 10, 1);

		//convertimos fechas a timestamp(milisegundos)
		var actual = ahora.getTime();
		var evento = fin.getTime();


		//time remaining
		var restante = evento - actual;

		//obtener segundos, minutos, horas y dias
		//Math.floor(x)redondea siempre para abajo 
		//Math.round(x)redondea para abajo de 0-4 o para arriba de 5-9
		var segundos = Math.floor(restante/1000);		
		var minutos = Math.floor(segundos/60);
		var horas = Math.floor(minutos/60);
		var dias = Math.floor(horas/24);

		horas = horas % 24;
		minutos = minutos % 60;
		segundos = segundos % 60;

		//add zeros 
		if (horas < 10 ){
			horas = '0' + horas;
		}
		if (minutos < 10){
			minutos = '0' + minutos;
		}
		if (segundos < 10){
			segundos = '0' + segundos;
		}
		//send to the front
		txtDias.innerText = dias;
		txtHoras.innerText = horas;
		txtMinutos.innerText = minutos;
		txtSegundos.innerText = segundos;
	}

	countdown();
	setInterval(countdown, (1000));