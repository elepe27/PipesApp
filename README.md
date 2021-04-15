# Pipes

Ejemplos del curso de Fernando Herrera 2021

## Introducción a los Pipes de Angular 13/04/2021
Los pipes nunca modifican la data.

## Instalación de PrimeNg 13/04/2021
Importamos con el npm install de primefaces y editamos el archivo angular.json

## Prime Button y estilo global 13/04/2021
Importamos al modulo `app.module.ts` el `ButtonModule`, y podemos utilizar la variable `pButton` para indicar que ese boton tendrà el estilo de `PrimeNg`

## Cards y botones con íconos 13/04/2021
Primero debemos volver a importar nuestro modulo en este caso el `CardModule` para podemos utilizar los tag propiamente de `PrimeNg`, luego para utilizar los iconos, debemos definir la palabra `icon` y `iconPos` uno es para indicar cual icono queremos cargar, y el otro para la posición, en este caso el `pi pi-icon-check` y la posición `right`.

## PrimeNg Module 14/04/2021
Crearemos un modulo para unificar nuestros componentes de primeNg.

## PrimeNG MenuBar 14/04/2021
Primero creamos nuestra estrcutura en la aplicación, junto a la importación del `MenuBarModule` en nuestro modulo personalizados `PrimeNgModule` y este lo podemos importar luego en nuestro modulo `sharedModule` y no necesitamos importarlo en el `appModule` esto ya que solo lo usaremos en la parte de los shared por el momento.

## Rutas de nuestra aplicación 14/04/2021
Primero creamos nuestro archivo de rutas con el comando `ng g m appRouter --flat` el --flat es para no crear una carpeta. Esto se creara en la raìz de los archivos, en el debemos importar en la parte de los imports la palabra `RouterModule.forRoot()`y para que pueda ser utilizado de manera global debemos agregarlo tambíen en la parte de los `exports` creamos una constante llamada `routes: Routes[{}]` importando routes desde `@angular/routes` y definimos nuestros path de la aplicación con sus componentes asociados y finalmente agregamos la constante routes al `RouterModule.forRoot(routes)` en el `app.module` importamos nuestro `AppRouterModule` para que pueda ser utilizado.

![ArchivoRoutes](https://i.ibb.co/QF8STb6/archivo-Routes.png)

## Cambiar las rutas utilizando el MenuBar 15/04/2021
Para poder definir las rutas, debemos modificar en el `menu.component.ts` en el arreglo de items, el cual se debe ir creando los items por separado, de la siguiente manera.
Y se debe colocar la opción `routerLink` para poder hacer la navegación como la definimos en nuestro `app-router.module.ts`

![MenuBarEditionItem](https://i.ibb.co/wzLy16g/Menu-Bar-Edition-Item.png)

## PrimeFlex 15/04/2021
Primero debemos instalar PrimeFlex con NPM y modificar las rutas del estilo en el archivo `angular.json`, posteriormente en el modulo de ventas debemos importar nuestro `PrimeNg` el cual cuenta con el `CardModule` instalado, luego debemos importar el `ventas.module.ts` a nuestro `app.module.ts`.
