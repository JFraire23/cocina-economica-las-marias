//Array Principal

const platillos = [
	//DESAYUNOS

	{
		id: "desayuno ranchero A",
		titulo: "Desayuno Ranchero A", /*este titulo se va a ver en el dom*/
		titulo1: "huevos rancheros",
		titulo2: "huevos estrellados",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "chicharron prensado",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos estrellados acompañado de chicharrón prensado, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno ranchero B",
		titulo: "Desayuno Ranchero B", /*este titulo se va a ver en el dom*/
		titulo1: "huevos rancheros",
		titulo2: "huevos estrellados",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "picadillo rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos estrellados acompañado de picadillo rojo, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},
	
	{
		id: "desayuno ranchero C",
		titulo: "Desayuno Ranchero C", /*este titulo se va a ver en el dom*/
		titulo1: "huevos rancheros",
		titulo2: "huevos estrellados",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "picadillo verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos estrellados acompañado de picadillo verde, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno ranchero D",
		titulo: "Desayuno Ranchero D", /*este titulo se va a ver en el dom*/
		titulo1: "huevos rancheros",
		titulo2: "huevos estrellados",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "deshebrada",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos estrellados acompañado de deshebrada, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno ranchero E",
		titulo: "Desayuno Ranchero E", /*este titulo se va a ver en el dom*/
		titulo1: "huevos rancheros",
		titulo2: "huevos estrellados",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "rajas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos estrellados acompañado de rajas con queso, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno mexicano A",
		titulo: "Desayuno mexicano A", /*este titulo se va a ver en el dom*/
		titulo1: "huevos a la mexicana",
		titulo2: "huevo a la mexicana",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "chicharrón prensado",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-mexicano-b.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chile, tomate y cebolla acompañado de chicharrón prensado, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno mexicano B",
		titulo: "Desayuno mexicano B", /*este titulo se va a ver en el dom*/
		titulo1: "huevos a la mexicana",
		titulo2: "huevo a la mexicana",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "picadillo rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-mexicano-b.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chile, tomate y cebolla acompañado de picadillo rojo, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno mexicano C",
		titulo: "Desayuno mexicano C", /*este titulo se va a ver en el dom*/
		titulo1: "huevos a la mexicana",
		titulo2: "huevo a la mexicana",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "picadillo verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-mexicano-b.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chile, tomate y cebolla acompañado de picadillo verde, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno mexicano D",
		titulo: "Desayuno mexicano D", /*este titulo se va a ver en el dom*/
		titulo1: "huevos a la mexicana",
		titulo2: "huevo a la mexicana",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "deshebrada",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-mexicano-b.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chile, tomate y cebolla acompañado de deshebrada, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno mexicano E",
		titulo: "Desayuno mexicano E", /*este titulo se va a ver en el dom*/
		titulo1: "huevos a la mexicana",
		titulo2: "huevo a la mexicana",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "rajas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-mexicano-b.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chile, tomate y cebolla acompañado de rajas con queso, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno chorizo A",
		titulo: "Desayuno Chorizo A", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con chorizo",
		titulo2: "huevo con chorizo",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "chicharron prensado",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-chorizo-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chorizo acompañado de chicharrón prensado, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno chorizo B",
		titulo: "Desayuno chorizo B", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con chorizo",
		titulo2: "huevo con chorizo",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "picadillo rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-chorizo-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chorizo acompañado de picadillo rojo, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno chorizo C",
		titulo: "Desayuno chorizo C", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con chorizo",
		titulo2: "huevo con chorizo",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "picadillo verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-chorizo-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chorizo acompañado de picadillo verde, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno chorizo D",
		titulo: "Desayuno chorizo D", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con chorizo",
		titulo2: "huevo con chorizo",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "deshebrada",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-chorizo-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chorizo acompañado de deshebrada, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno chorizo E",
		titulo: "Desayuno Chorizo E", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con chorizo",
		titulo2: "huevo con chorizo",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "rajas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-chorizo-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con chorizo acompañado de rajas con queso, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno salchicha A",
		titulo: "Desayuno salchicha A", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con salchicha",
		titulo2: "huevo con salchicha",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "chicharron prensado",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-salchicha-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con salchicha acompañado de chicharrón prensado, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno salchicha B",
		titulo: "Desayuno salchicha B", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con salchicha",
		titulo2: "huevo con salchicha",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "picadillo rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-salchicha-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con salchicha acompañado de picadillo rojo, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno salchicha C",
		titulo: "Desayuno salchicha C", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con salchicha",
		titulo2: "huevo con salchicha",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "picadillo verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-salchicha-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con salchicha acompañado de picadillo verde, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno salchicha D",
		titulo: "Desayuno salchicha D", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con salchicha",
		titulo2: "huevo con salchicha",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "deshebrada",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-salchicha-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con salchicha acompañado de deshebrada, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	{
		id: "desayuno salchicha E",
		titulo: "Desayuno salchicha E", /*este titulo se va a ver en el dom*/
		titulo1: "huevos con salchicha",
		titulo2: "huevo con salchicha",
		titulo3: "desayuno",
		titulo4: "desayunos",
		titulo5: "rajas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-salchicha-a.jpeg", /*ruta de la imagen*/
		contenido: "2 Huevos revueltos con salchicha acompañado de rajas con queso, frijoles refritos con queso y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "DESAYUNOS",
			id: "desayunos"	
		},
		precio: 70
	},

	//PLATILLOS
	{
		id: "Caldo de res 1L blanco",
		titulo: "Caldo de res 1l Arroz B", /*este titulo se va a ver en el dom*/
		titulo1: "caldo",
		titulo2: "res",
		titulo3: "caldo res",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/caldo-de-res.jpeg", /*ruta de la imagen*/
		contenido: "1 litro de Caldo de res con verduras acompañados de arroz blanco y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 120
	},

	{
		id: "Caldo de res 1/2l blanco",
		titulo: "Caldo de res 1/2l Arroz B", /*este titulo se va a ver en el dom*/
		titulo1: "caldo",
		titulo2: "res",
		titulo3: "caldo res",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/caldo-de-res.jpeg", /*ruta de la imagen*/
		contenido: "1/2 litro de Caldo de res con verduras acompañados de arroz blanco y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 60
	},

	{
		id: "Caldo de res 1L rojo",
		titulo: "Caldo de res 1l Arroz R", /*este titulo se va a ver en el dom*/
		titulo1: "caldo",
		titulo2: "res",
		titulo3: "caldo res",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/caldo-de-res.jpeg", /*ruta de la imagen*/
		contenido: "1 litro de Caldo de res con verduras acompañados de arroz rojo y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 120
	},

	{
		id: "Caldo de res 1/2l rojo",
		titulo: "Caldo de res 1/2l Arroz R", /*este titulo se va a ver en el dom*/
		titulo1: "caldo",
		titulo2: "res",
		titulo3: "caldo res",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/caldo-de-res.jpeg", /*ruta de la imagen*/
		contenido: "1/2 litro de Caldo de res con verduras acompañados de arroz rojo y tortillas de maíz",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 60
	},

	{
		id: "Albondigas 1l Arroz B",
		titulo: "Albóndigas 1l Arroz B", /*este titulo se va a ver en el dom*/
		titulo1: "albondigas",
		titulo2: "alvondigas",
		titulo3: "albondijas",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/albondigas.jpeg", /*ruta de la imagen*/
		contenido: "1l de Albóndigas acompañadas de arroz blanco y tortillas", 
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 160
	},

	{
		id: "Albondigas 1/2l Arroz B",
		titulo: "Albóndigas 1/2l Arroz B", /*este titulo se va a ver en el dom*/
		titulo1: "albondigas",
		titulo2: "alvondigas",
		titulo3: "albondijas",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/albondigas.jpeg", /*ruta de la imagen*/
		contenido: "1/2l de Albóndigas acompañadas de arroz blanco y tortillas", 
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 80
	},

	{
		id: "Albondigas 1l Arroz R",
		titulo: "Albóndigas 1l Arroz R", /*este titulo se va a ver en el dom*/
		titulo1: "albondigas",
		titulo2: "alvondigas",
		titulo3: "albondijas",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/albondigas.jpeg", /*ruta de la imagen*/
		contenido: "1l de Albóndigas acompañadas de arroz rojo y tortillas", 
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 160
	},

	{
		id: "Albondigas 1/2l Arroz R",
		titulo: "Albóndigas 1/2l Arroz R", /*este titulo se va a ver en el dom*/
		titulo1: "albondigas",
		titulo2: "alvondigas",
		titulo3: "albondijas",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/albondigas.jpeg", /*ruta de la imagen*/
		contenido: "1/2l de Albóndigas acompañadas de arroz rojo y tortillas", 
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 80
	},

	{
		id: "chiles rellenos A",
		titulo: "Chiles Rellenos A", /*este titulo se va a ver en el dom*/
		titulo1: "chiles rellenos",
		titulo2: "chile relleno",
		titulo3: "arroz blanco",
		titulo4: "chiles",
		titulo5: "rellenos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chiles-rellenos.jpeg", /*ruta de la imagen*/
		contenido: "2 chiles rellenos de queso acompañados de arroz blanco y tortillas",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 80
	},

	{
		id: "chiles rellenos B",
		titulo: "Chiles Rellenos B", /*este titulo se va a ver en el dom*/
		titulo1: "chiles rellenos",
		titulo2: "chile relleno",
		titulo3: "arroz rojo",
		titulo4: "chiles",
		titulo5: "rellenos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chiles-rellenos-todos.jpeg", /*ruta de la imagen*/
		contenido: "2 chiles rellenos de queso acompañados de arroz rojo y tortillas",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 80
	},

	{
		id: "chiles rellenos C",
		titulo: "Chiles Rellenos C", /*este titulo se va a ver en el dom*/
		titulo1: "chiles rellenos",
		titulo2: "chile relleno",
		titulo3: "spaghetti rojo",
		titulo4: "chiles",
		titulo5: "rellenos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chiles-rellenos-todos.jpeg", /*ruta de la imagen*/
		contenido: "2 chiles rellenos de queso acompañados de Spaghetti rojo y tortillas",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 80
	},	

	{
		id: "chiles rellenos D",
		titulo: "Chiles Rellenos D", /*este titulo se va a ver en el dom*/
		titulo1: "chiles rellenos",
		titulo2: "chile relleno",
		titulo3: "spaghetti blanco",
		titulo4: "chiles",
		titulo5: "rellenos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chiles-rellenos-todos.jpeg", /*ruta de la imagen*/
		contenido: "2 chiles rellenos de queso acompañados de Spaghetti blanco y tortillas",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 80
	},

	{
		id: "chiles rellenos E",
		titulo: "Chiles Rellenos E", /*este titulo se va a ver en el dom*/
		titulo1: "chiles rellenos",
		titulo2: "chile relleno",
		titulo3: "spaghetti verde",
		titulo4: "chiles",
		titulo5: "rellenos",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chiles-rellenos-todos.jpeg", /*ruta de la imagen*/
		contenido: "2 chiles rellenos de queso acompañados de Spaghetti verde y tortillas",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 80
	},

	{
		id: "enchiladas verdes A",
		titulo: "Enchiladas Verdes A", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "verdes",
		titulo3: "enchiladas verdes",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-verdes.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas verdes rellenas de pollo acompañadas de Spaghetti verde",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 70
	},

	{
		id: "enchiladas verdes B",
		titulo: "Enchiladas Verdes B", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "verdes",
		titulo3: "enchiladas verdes",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-verdes.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas verdes rellenas de pollo acompañadas de Spaghetti blanco",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 70
	},

	{
		id: "enchiladas verdes C",
		titulo: "Enchiladas Verdes C", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "verdes",
		titulo3: "enchiladas verdes",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-verdes.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas verdes rellenas de pollo acompañadas de Spaghetti rojo",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 70
	},

	{
		id: "enchiladas verdes D",
		titulo: "Enchiladas Verdes D", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "verdes",
		titulo3: "enchiladas verdes",
		titulo4: "arroz blanco",
		titulo5: "arroz",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-verdes.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas verdes rellenas de pollo acompañadas de Arroz blanco",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 70
	},

	{
		id: "enchiladas verdes E",
		titulo: "Enchiladas Verdes E", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "verdes",
		titulo3: "enchiladas verdes",
		titulo4: "arroz rojo",
		titulo5: "arroz",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-verdes.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas verdes rellenas de pollo acompañadas de Arroz rojo",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 70
	},

	{
		id: "enchiladas verdes F",
		titulo: "Enchiladas Verdes F", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "verdes",
		titulo3: "enchiladas verdes",
		titulo4: "rajas con queso",
		titulo5: "rajas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-verdes.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas verdes rellenas de pollo acompañadas de rajas con queso",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 70
	},

	{
		id: "enchiladas rojas A",
		titulo: "Enchiladas Rojas A", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "rojas",
		titulo3: "enchiladas rojas",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-rojas.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas rojas rellenas de queso acompañadas de Spaghetti verde",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 60
	},

	{
		id: "enchiladas rojas B",
		titulo: "Enchiladas Rojas B", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "rojas",
		titulo3: "enchiladas rojas",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-rojas.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas rojas rellenas de queso acompañadas de Spaghetti blanco",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 60
	},

	{
		id: "enchiladas rojas C",
		titulo: "Enchiladas Rojas C", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "rojas",
		titulo3: "enchiladas rojas",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-rojas.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas rojas rellenas de queso acompañadas de Spaghetti rojo",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 60
	},

	{
		id: "enchiladas rojas D",
		titulo: "Enchiladas Rojas D", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "rojas",
		titulo3: "enchiladas rojas",
		titulo4: "arroz blanco",
		titulo5: "arroz",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-rojas.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas rojas rellenas de queso acompañadas de Arroz blanco",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 60
	},

	{
		id: "enchiladas rojas E",
		titulo: "Enchiladas Rojas E", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "rojas",
		titulo3: "enchiladas rojas",
		titulo4: "arroz rojo",
		titulo5: "arroz",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-rojas.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas rojas rellenas de queso acompañadas de Arroz rojo",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 60
	},

	{
		id: "enchiladas rojas F",
		titulo: "Enchiladas Rojas F", /*este titulo se va a ver en el dom*/
		titulo1: "enchiladas",
		titulo2: "rojas",
		titulo3: "enchiladas rojas",
		titulo4: "rajas",
		titulo5: "rajas con queso",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-rojas.jpeg", /*ruta de la imagen*/
		contenido: "4 enchiladas rojas rellenas de queso acompañadas de rajas con queso",
		cocina: "las marias",
		categoria: {
			nombre: "PLATILLOS",
			id: "platillos"	
		},
		precio: 60
	},
	//BEBIDAS

	{
		id: "cafe A",
		titulo: "Café", /*este titulo se va a ver en el dom*/
		titulo1: "Café",
		titulo2: "cafe",
		titulo3: "",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/cafe.jpeg", /*ruta de la imagen*/
		contenido: "",
		cocina: "las marias",
		categoria: {
			nombre: "BEBIDAS",
			id: "bebidas"	
		},
		precio: 15
	},

	{
		id: "té de manzanilla",
		titulo: "Té de Manzanilla", /*este titulo se va a ver en el dom*/
		titulo1: "te",
		titulo2: "Té",
		titulo3: "Manzanilla",
		titulo4: "mansanilla",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/te-manzanilla.jpeg", /*ruta de la imagen*/
		contenido: "",
		cocina: "las marias",
		categoria: {
			nombre: "BEBIDAS",
			id: "bebidas"	
		},
		precio: 15
	},

	{
		id: "pepsi 400ml",
		titulo: "Pepsi 400ml", /*este titulo se va a ver en el dom*/
		titulo1: "pepsi",
		titulo2: "coca",
		titulo3: "pesi",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/pepsi-400ml.jpeg", /*ruta de la imagen*/
		contenido: "pepsi de 400ml",
		cocina: "las marias",
		categoria: {
			nombre: "BEBIDAS",
			id: "bebidas"	
		},
		precio: 15
	},

	{
		id: "manzanita 400ml",
		titulo: "Manzanita 400ml", /*este titulo se va a ver en el dom*/
		titulo1: "manzana",
		titulo2: "manzanita",
		titulo3: "pesi",
		titulo4: "mansana",
		titulo5: "mansanita",
		imagen: "./imagenes/desayunos/imagenes-tamaño/manzanita-400ml.jpeg", /*ruta de la imagen*/
		contenido: "manzanita de 400ml",
		cocina: "las marias",
		categoria: {
			nombre: "BEBIDAS",
			id: "bebidas"	
		},
		precio: 15
	},

	{
		id: "seven up 400ml",
		titulo: "Seven Up 400ml", /*este titulo se va a ver en el dom*/
		titulo1: "seven",
		titulo2: "up",
		titulo3: "sevenup",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/sevenup-400ml.jpeg", /*ruta de la imagen*/
		contenido: "Seven Up de 400ml",
		cocina: "las marias",
		categoria: {
			nombre: "BEBIDAS",
			id: "bebidas"	
		},
		precio: 15
	},
	//GUISOS

	{
		id: "guiso rojo",
		titulo: "Picadillo Rojo 1/2l", /*este titulo se va a ver en el dom*/
		titulo1: "guiso",
		titulo2: "picadillo",
		titulo3: "rojo",
		titulo4: "picadillo rojo",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-b.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de picadillo rojo",
		cocina: "las marias",
		categoria: {
			nombre: "GUISOS",
			id: "guisos"	
		},
		precio: 120
	},

	{
		id: "guiso prensado",
		titulo: "Chicharrón Prensado 1/2l", /*este titulo se va a ver en el dom*/
		titulo1: "chicharron",
		titulo2: "prensado",
		titulo3: "chicharron prensado",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-mexicano-a.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de chicharrón prensado",
		cocina: "las marias",
		categoria: {
			nombre: "GUISOS",
			id: "guisos"	
		},
		precio: 120
	},

	{
		id: "guiso deshebrada",
		titulo: "Deshebrada 1/2l", /*este titulo se va a ver en el dom*/
		titulo1: "guiso",
		titulo2: "deshebrada",
		titulo3: "desebrada",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-d.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de deshebrada",
		cocina: "las marias",
		categoria: {
			nombre: "GUISOS",
			id: "guisos"	
		},
		precio: 120
	},

	
	{
		id: "guiso picadillo verde",
		titulo: "Picadillo Verde 1/2l", /*este titulo se va a ver en el dom*/
		titulo1: "guiso",
		titulo2: " verde",
		titulo3: "picadillo",
		titulo4: "picadillo verde",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/desayuno-ranchero-c.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de Picadillo Verde",
		cocina: "las marias",
		categoria: {
			nombre: "GUISOS",
			id: "guisos"	
		},
		precio: 120
	},	

	//COMPLEMENTOS
	{
		id: "arroz blanco 1/2",
		titulo: "Arroz Blanco", /*este titulo se va a ver en el dom*/
		titulo1: "complemento",
		titulo2: "arroz",
		titulo3: "arros",
		titulo4: "arroz blanco",
		titulo5: "arros blanco",
		imagen: "./imagenes/desayunos/imagenes-tamaño/arroz-blanco.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de arroz blanco",
		cocina: "las marias",
		categoria: {
			nombre: "COMPLEMENTOS",
			id: "complementos"	
		},
		precio: 30
	},

	{
		id: "arroz rojo 1/2",
		titulo: "Arroz Rojo", /*este titulo se va a ver en el dom*/
		titulo1: "complemento",
		titulo2: "arroz",
		titulo3: "arros",
		titulo4: "arroz rojo",
		titulo5: "arros rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/arroz-rojo.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de arroz rojo",
		cocina: "las marias",
		categoria: {
			nombre: "COMPLEMENTOS",
			id: "complementos"	
		},
		precio: 30
	},	

	{
		id: "spaghetti rojo 1/2",
		titulo: "Spaghetti Rojo", /*este titulo se va a ver en el dom*/
		titulo1: "complemento",
		titulo2: "espagety",
		titulo3: "espagetti",
		titulo4: "espagueti",
		titulo5: "rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/spaghetti-rojo.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de Spaghetti rojo",
		cocina: "las marias",
		categoria: {
			nombre: "COMPLEMENTOS",
			id: "complementos"	
		},
		precio: 30
	},

	{
		id: "spaghetti verde 1/2",
		titulo: "Spaghetti Verde", /*este titulo se va a ver en el dom*/
		titulo1: "complemento",
		titulo2: "espagety",
		titulo3: "espagetti",
		titulo4: "espagueti",
		titulo5: "verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/spaghetti-verde.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de Spaghetti Verde",
		cocina: "las marias",
		categoria: {
			nombre: "COMPLEMENTOS",
			id: "complementos"	
		},
		precio: 35
	},

	{
		id: "spaghetti blanco 1/2",
		titulo: "Spaghetti Blanco", /*este titulo se va a ver en el dom*/
		titulo1: "complemento",
		titulo2: "espagety",
		titulo3: "espagetti",
		titulo4: "espagueti",
		titulo5: "blanco",
		imagen: "./imagenes/desayunos/imagenes-tamaño/spaghetti-blanco.jpeg", /*ruta de la imagen*/
		contenido: "1/2 Litro de Spaghetti blanco",
		cocina: "las marias",
		categoria: {
			nombre: "COMPLEMENTOS",
			id: "complementos"	
		},
		precio: 45
	},
	//GORDITAS

	{
		id: "gordita picadillo rojo",
		titulo: "Gordita de Picadillo Rojo", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "rojo",
		titulo4: "picadillo",
		titulo5: "picadillo rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gordita-picadillo-rojo.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz rellena de picadillo rojo",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 15
	},

	{
		id: "gordita picadillo verde",
		titulo: "Gordita de Picadillo Verde", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "verde",
		titulo4: "picadillo",
		titulo5: "picadillo verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gordita-picadillo-verde.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz rellena de picadillo verde",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 15
	},

	{
		id: "gordita chicharron prensado",
		titulo: "gordita Chi. Prensado", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "chicharron",
		titulo4: "prensado",
		titulo5: "chicharron prensado",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gordita-chicharron-prensado.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz rellena de chicharrón prensado",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 15
	},

	{
		id: "gordita deshebrada",
		titulo: "Gordita de Deshebrada", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "deshebrada",
		titulo4: "desebrada",
		titulo5: "gordita deshebrada",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gordita-deshebrada.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz rellena de carne Deshebrada",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 15
	},

	{
		id: "gordita rajas-queso",
		titulo: "Gordita de Rajas con Queso", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "rajas",
		titulo4: "queso",
		titulo5: "gordita rajas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gordita-rajas-queso.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz rellena de rajas con queso",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 15
	},

	//GORDITAS DORADAS
	

	{
		id: "gordita dorada picadillo rojo",
		titulo: "Dorada Picadillo Rojo", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "rojo",
		titulo4: "picadillo",
		titulo5: "picadillo rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gorditas-doradas.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz dorada rellena de picadillo rojo acompañada de lechuga, tomate, crema, limón y salsa verde",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 17
	},

	{
		id: "gordita dorada picadillo verde",
		titulo: "Dorada de Picadillo Verde", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "verde",
		titulo4: "picadillo",
		titulo5: "picadillo verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gorditas-doradas-2.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz dorada rellena de picadillo verde acompañada de lechuga, tomate, crema, limón y salsa verde",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 17
	},

	{
		id: "gordita dorada chicharron prensado",
		titulo: "Dorada Chi. Prensado", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "chicharron",
		titulo4: "prensado",
		titulo5: "chicharron prensado",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gorditas-doradas.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz dorada rellena de chicharrón prensado acompañada de lechuga, tomate, crema, limón y salsa verde",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 17
	},

	{
		id: "gordita dorada deshebrada",
		titulo: "Dorada de Deshebrada", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "deshebrada",
		titulo4: "desebrada",
		titulo5: "gordita deshebrada",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gorditas-doradas-2.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz dorada rellena de carne Deshebrada acompañada de lechuga, tomate, crema, limón y salsa verde",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 17
	},

	{
		id: "gordita dorada rajas-queso",
		titulo: "Dorada de Rajas con Queso", /*este titulo se va a ver en el dom*/
		titulo1: "gordita",
		titulo2: "gorditas",
		titulo3: "rajas",
		titulo4: "queso",
		titulo5: "gordita rajas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/gorditas-doradas.jpeg", /*ruta de la imagen*/
		contenido: "Gordita de maíz dorada rellena de rajas con queso acompañada de lechuga, tomate, crema, limón y salsa verde",
		cocina: "las marias",
		categoria: {
			nombre: "GORDITAS",
			id: "gorditas"	
		},
		precio: 17
	},	
	//BURRITOS

	{
		id: "burrito picadillo rojo",
		titulo: "Burrito de Picadillo Rojo", /*este titulo se va a ver en el dom*/
		titulo1: "burrito",
		titulo2: "burritos",
		titulo3: "rojo",
		titulo4: "picadillo",
		titulo5: "picadillo rojo",
		imagen: "./imagenes/desayunos/imagenes-tamaño/burrito.jpeg", /*ruta de la imagen*/
		contenido: "Burrito de picadillo rojo",
		cocina: "las marias",
		categoria: {
			nombre: "BURRITOS",
			id: "burritos"	
		},
		precio: 15
	},

	{
		id: "burrito picadillo verde",
		titulo: "Burrito de Picadillo Verde", /*este titulo se va a ver en el dom*/
		titulo1: "burrito",
		titulo2: "burritos",
		titulo3: "verde",
		titulo4: "picadillo",
		titulo5: "picadillo verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/burrito.jpeg", /*ruta de la imagen*/
		contenido: "Burrito de picadillo verde",
		cocina: "las marias",
		categoria: {
			nombre: "BURRITOS",
			id: "burritos"	
		},
		precio: 15
	},

	{
		id: "burrito chicharron prensado",
		titulo: "Chicharrón Prensado", /*este titulo se va a ver en el dom*/
		titulo1: "burrito",
		titulo2: "burritos",
		titulo3: "chicharron",
		titulo4: "prensado",
		titulo5: "chicharron prensado",
		imagen: "./imagenes/desayunos/imagenes-tamaño/burrito.jpeg", /*ruta de la imagen*/
		contenido: "Burrito de chicharrón prensado",
		cocina: "las marias",
		categoria: {
			nombre: "BURRITOS",
			id: "burritos"	
		},
		precio: 15
	},

	{
		id: "burrito de deshebrada",
		titulo: "Burrito de Deshebrada", /*este titulo se va a ver en el dom*/
		titulo1: "burrito",
		titulo2: "burritos",
		titulo3: "deshebrada",
		titulo4: "desebrada",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/burrito.jpeg", /*ruta de la imagen*/
		contenido: "Burrito de carne deshebrada",
		cocina: "las marias",
		categoria: {
			nombre: "BURRITOS",
			id: "burritos"	
		},
		precio: 15
	},

	{
		id: "burrito de rajas con queso",
		titulo: "Burrito de Rajas con queso", /*este titulo se va a ver en el dom*/
		titulo1: "burrito",
		titulo2: "burritos",
		titulo3: "rajas",
		titulo4: "queso",
		titulo5: "rajas con queso",
		imagen: "./imagenes/desayunos/imagenes-tamaño/burrito.jpeg", /*ruta de la imagen*/
		contenido: "Burrito de Rajas con Queso",
		cocina: "las marias",
		categoria: {
			nombre: "BURRITOS",
			id: "burritos"	
		},
		precio: 15
	},

	//EXTRAS

	{
		id: "1 chile relleno de queso",
		titulo: "1 Chile relleno", /*este titulo se va a ver en el dom*/
		titulo1: "chile",
		titulo2: "relleno",
		titulo3: "queso",
		titulo4: "",
		titulo5: "",
		imagen: "./imagenes/desayunos/imagenes-tamaño/chile-relleno.jpeg", /*ruta de la imagen*/
		contenido: "1 chile relleno de queso",
		cocina: "las marias",
		categoria: {
			nombre: "EXTRAS",
			id: "extras"	
		},
		precio: 30
	},

	{
		id: "1 enchilada roja",
		titulo: "1 Enchilada roja", /*este titulo se va a ver en el dom*/
		titulo1: "enchilada",
		titulo2: "roja",
		titulo3: "enchiladas",
		titulo4: "enchilada roja",
		titulo5: "enchiladas rojas",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchilada-roja.jpeg", /*ruta de la imagen*/
		contenido: "1 enchilada roja",
		cocina: "las marias",
		categoria: {
			nombre: "EXTRAS",
			id: "extras"	
		},
		precio: 13
	},

	{
		id: "1 enchilada verde",
		titulo: "1 Enchilada verde", /*este titulo se va a ver en el dom*/
		titulo1: "enchilada",
		titulo2: "verde",
		titulo3: "enchiladas",
		titulo4: "enchilada verde",
		titulo5: "enchiladas verde",
		imagen: "./imagenes/desayunos/imagenes-tamaño/enchiladas-verdes.jpeg", /*ruta de la imagen*/
		contenido: "1 enchilada verde",
		cocina: "las marias",
		categoria: {
			nombre: "EXTRAS",
			id: "extras"	
		},
		precio: 15
	},

];

const contenedorImagenes = document.querySelector("#contenedor-imagenes");//imagenes=platillos
const botonesCategorias = document.querySelectorAll(".boton-clases");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".boton-agregar");
const numerito = document.querySelector("#numerito");
//let barraBusqueda = document.querySelector("#buscador");

function cargarPlatillos(platillosElegidos) {

	contenedorImagenes.innerHTML = "";

	platillosElegidos.forEach(platillo => {
		const div = document.createElement("div");
		div.classList.add("platillo");
		div.innerHTML = `


			<div class="platillo">
				<div class="platillo-detalles">
					<div class="imagen">
						<img src="${platillo.imagen}">
					</div>
					<p class="platillo-titulo">${platillo.titulo}</p>
					<div class="descripcion">
						
						<p>${platillo.contenido}</p>
						
					</div>
					
					<div class="precio">
						
						<button class="boton-precio">$${platillo.precio}</button>
					</div>

					<div class="agregar-carrito">
						<button class="boton-agregar" id="${platillo.id}">Agregar Al Carrito</button>
					</div>
					
				</div>
				
			</div>
				
		`;
		contenedorImagenes.append(div);



	})

	actualizarBotonesAgregar();

} 

/*function buscarArticulos() {
	buscador.addEventListener("input", e => {
		const inputText = e.target.value.toLowerCase().trim();
		console.log(inputText);
		
		const mostrarFiltrado = platillos.filter(platillo => 
			platillo.titulo.toLowerCase().startsWith(inputText)||
			platillo.cocina.toLowerCase().startsWith(inputText)||
			platillo.contenido.toLowerCase().startsWith(inputText)||
			platillo.titulo1.toLowerCase().startsWith(inputText)||
			platillo.titulo2.toLowerCase().startsWith(inputText)||
			platillo.titulo3.toLowerCase().startsWith(inputText)||
			platillo.titulo4.toLowerCase().startsWith(inputText)||
			platillo.titulo5.toLowerCase().startsWith(inputText)||
			platillo.precio.toString().startsWith(inputText)
			)
			;

		
		cargarPlatillos(mostrarFiltrado)
	})

}
*/
cargarPlatillos(platillos);
//buscarArticulos();

botonesCategorias.forEach(boton => {
	boton.addEventListener("click", (e) => {

		botonesCategorias.forEach(boton => {
			boton.classList.remove("active")
		})
		e.currentTarget.classList.add("active");

		if (e.currentTarget.id !=  "todos") {
			const platilloCategoria = platillos.find(platillo => platillo.categoria.id === e.currentTarget.id);

			tituloPrincipal.innerText = platilloCategoria.categoria.nombre;
			const platillosBoton = platillos.filter(platillo => platillo.categoria.id === e.currentTarget.id);


		cargarPlatillos(platillosBoton);
		} else {
			tituloPrincipal.innerText = "Todos los platillos";
			cargarPlatillos(platillos);
		}
	})
});

function actualizarBotonesAgregar(){
	botonesAgregar = document.querySelectorAll(".boton-agregar");

	botonesAgregar.forEach(boton => {
		boton.addEventListener("click", agregarAlCarrito);
	});
}

let platillosEnCarritoLasMarias;
const platillosEnCarritoLasMariasLS = JSON.parse(localStorage.getItem("platillos-las-marias"));
if (platillosEnCarritoLasMariasLS) {
	platillosEnCarritoLasMarias = platillosEnCarritoLasMariasLS;
	actualizarNumerito();
}
else{
	platillosEnCarritoLasMarias = [];
}
 

function agregarAlCarrito(e) {
	Toastify({
  		text: "platillo agregado al carrito",
  		duration: 2000,
  		close: true,
  		gravity: "top", // `top` or `bottom`
  		position: "right", // `left`, `center` or `right`
  		stopOnFocus: true, // Prevents dismissing of toast on hover
  		style: {
    		background: "linear-gradient(to right, #FF4C00, yellow)",
    		borderRadius: "2rem",
    		fontSize: '1rem',
  		},
  		onClick: function(){} // Callback after click
		}).showToast();

	const idBoton = e.currentTarget.id;
	const platilloAgregado = platillos.find(platillo => platillo.id === idBoton);

	if (platillosEnCarritoLasMarias.some(platillo => platillo.id === idBoton)) {
		const index = platillosEnCarritoLasMarias.findIndex(platillo => platillo.id === idBoton);
		platillosEnCarritoLasMarias[index].cantidad++;

	}
	else{
		platilloAgregado.cantidad = 1;
		platillosEnCarritoLasMarias.push(platilloAgregado);	
	}

	actualizarNumerito();

		localStorage.setItem("platillos-las-marias", JSON.stringify(platillosEnCarritoLasMarias));

}

function actualizarNumerito(){
	let nuevoNumerito = platillosEnCarritoLasMarias.reduce((acc, platillo)=> acc + platillo.cantidad, 0);
	numerito.innerText = nuevoNumerito;
}

window.onload = actualizarPagina();

        function actualizarPagina() {
            let actualizar = false;
            momentoActual = new Date();
            hora = momentoActual.getHours();
            minuto = momentoActual.getMinutes();
            segundo = momentoActual.getSeconds();

            str_segundo = new String (segundo);
            if (str_segundo.length == 1) {
                segundo = "0" + segundo;
            }
            str_minuto = new String (minuto);
            if (str_minuto.length == 1){
                minuto = "0" + minuto;
            }
            str_hora = new String (hora);
            if (str_hora.length == 1){
                hora = "0" + hora;
            }
            horaImprimible = hora + ":" + minuto + ":" + segundo;
            if(horaImprimible == "12:49:00") {
                actualizar = true;
            }
            setTimeout("actualizarPagina()",1000);
            if(actualizar == true) {//Comprueba que la hora es igual a la que quieres y actualiza
                location.reload();
            }
        }




