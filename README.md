# 💰 Personal Finance Tracker

Aplicación web para llevar un control de ingresos y gastos personales, con reportes, gráficas y exportación de datos.  
Construida con **React.js**, **Node.js (Express)** y **MySQL**.

---

## 🛑 Problema
Muchas personas no tienen un control claro sobre sus finanzas.  
Usar hojas de cálculo o anotaciones manuales provoca:
- Falta de visibilidad en qué se gasta el dinero.
- Dificultad para planificar.
- Imposibilidad de analizar tendencias.

---

## 💡 Solución
Una aplicación web que permita:
- Registrar ingresos y gastos clasificados por categorías.
- Ver reportes y gráficas interactivas.
- Exportar los datos a PDF o Excel.
- Usar autenticación segura para que cada usuario maneje solo su información.

---

## 🎯 Objetivos
1. Autenticación segura con JWT.
2. CRUD de categorías personalizadas.
3. CRUD de transacciones con filtros por fecha y categoría.
4. Dashboard con estadísticas y gráficas.
5. Exportar reportes a PDF y Excel.
6. Documentar la API con Swagger.

---

## 🏗 Arquitectura

### Backend (Node.js + Express + MySQL)

backend/
├── src/
│ ├── config/ # Configuración DB y JWT
│ ├── models/ # Modelos Sequelize
│ ├── controllers/ # Reciben la request
│ ├── services/ # Lógica de negocio
│ ├── routes/ # Definición de endpoints
│ ├── middlewares/ # Autenticación y validaciones
│ ├── utils/ # Funciones auxiliares
│ └── app.js # Servidor Express


### Frontend (React.js)
Arquitectura modular por páginas y componentes:

frontend/
├── src/
│ ├── pages/ # Pantallas principales
│ ├── components/ # Componentes reutilizables
│ ├── services/ # Consumo de API
│ ├── context/ # Manejo de estado global
│ ├── hooks/ # Custom hooks
│ └── App.jsx

## 🗄 Diagrama de Base de Datos

```mermaid
erDiagram
    users {
        INT id PK
        VARCHAR name
        VARCHAR email
        VARCHAR password
        TIMESTAMP created_at
    }

    categories {
        INT id PK
        VARCHAR name
        ENUM type
        INT user_id FK
        TIMESTAMP created_at
    }

    transactions {
        INT id PK
        DECIMAL amount
        TEXT description
        DATE date
        INT category_id FK
        INT user_id FK
        TIMESTAMP created_at
    }

    users ||--o{ categories : "tiene"
    categories ||--o{ transactions : "clasifica"
    users ||--o{ transactions : "registra"


