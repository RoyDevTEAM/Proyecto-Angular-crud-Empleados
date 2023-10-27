export interface Usuario {
  [x: string]: any; // Índice opcional, permite agregar propiedades adicionales de tipo 'any'

  usuario: string; // Propiedad 'usuario' de tipo 'string'
  nombre: string; // Propiedad 'nombre' de tipo 'string'
  apellido: string; // Propiedad 'apellido' de tipo 'string'
  sexo: string; // Propiedad 'sexo' de tipo 'string'
}
