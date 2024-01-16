Sistema de Gestión de Tareas con Angular

Este proyecto es una aplicación web de gestión de tareas desarrollada con Angular. Permite realizar operaciones básicas como la creación, eliminación y visualización de tareas. A continuación, se describen los principales componentes y funcionalidades del sistema.

Componentes Principales
1. ListarTareasComponent
El componente ListarTareasComponent se encarga de mostrar la lista de tareas en una tabla. Cada tarea se presenta con su identificador (id), título, fecha de finalización y opciones de acciones. Las funcionalidades incluyen:

Proceso de Tareas: Puedes seleccionar una tarea haciendo clic en la fila correspondiente, la selección indica que la tarea fue finalizada y puede revertise clickeando nuevamente.

Eliminar Tarea: Se proporciona un botón "Eliminar" para eliminar la tarea seleccionada.

2. CreaeditaTareasComponent
El componente CreaeditaTareasComponent gestiona la creación y edición de tareas. Incluye un formulario con campos para el título de la tarea y la fecha de finalización. Las características son:

Formulario de Tareas: Un formulario interactivo que permite ingresar el título y la fecha de finalización de una tarea.

Validación de Campos: Los campos de título y fecha de finalización están validados. Se muestra un mensaje de error si no se completan correctamente.

Creación y Edición de Tareas: Puedes crear nuevas tareas o editar las existentes utilizando este componente.

Servicios
1. TareasService
El servicio TareasService proporciona métodos para interactuar con las tareas, como listar, insertar,  y eliminar. Utiliza un modelo Tareas para representar la estructura de las tareas.

Uso del Proyecto
Instalación de Dependencias:
npm install
se debe colocar este comando en la consola del aplicativo antes de utilizarlo por el lado del frontend.
Ejecución del Proyecto:
ng serve    || ng s
cualquiera de los 2 comandos realizará la ejecución del proyecto, para apreciar los cambios debe ejecutarse el backend mediante el uso de postgres e intellijidea.

La aplicación estará disponible en http://localhost:4200/.

Espero que este aplicativo web sea de su agrado.

Desarrollado por Gustavo Farje
