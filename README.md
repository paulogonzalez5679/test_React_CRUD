# Test React


## Tecnologias 
- Base de datos en Firebase: Se almacena usuarios tanto en la base como con el uso del servicio de auth
- React
## Flujo
1. El usuario se logea como administrador
2. el administrador puere ver los usuarios, crear , modificar y elimar usuarios
3. en el caso de que escoja crear, despues de crear se redirigira a la pantalla del usuario que creo para que pueda modificar los campos que tiene disponible
4. si quiere registrar mas usuarios debe presionar cerrar sesion
5. en caso de escojer modificar usuario DESDE ADMINISTRADOR los datos se modifican correctamente
6. En el caso de iniciar como usuario, se logeo muestra informacion basica pero existe un problema de datos al editar

### FALOS Y PENDIENTES
1. Como usuario se confunden el tipo de dato lo cual esta generando un error y adicional en un estado no recupera correctamente el valor
2. No existen validaciones.
