# Italiano Básico A1

Subir a GitHub (web): todos los archivos de esta carpeta, en la raíz del repositorio público, y activar Pages
(Settings > Pages > Deploy from a branch > main > / (root)).

## Firebase (proyecto italiano-78f74)
1. Authentication > Método de acceso: activar "Correo electrónico/contraseña".
2. Firestore Database: crear la base de datos.
3. Firestore > Reglas: pegar esto y pulsar Publicar:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /usuarios/{uid}/apps/{appId} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}

4. Authentication > Configuración > Dominios autorizados: añadir tuusuario.github.io
