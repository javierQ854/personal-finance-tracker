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
Patrón **MVC + capa de servicios**:
