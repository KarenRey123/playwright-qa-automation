# Playwright QA Automation

Proyecto de automatización de pruebas end-to-end desarrollado con **Playwright y TypeScript**, orientado a validar funcionalidades de una aplicación web mediante pruebas automatizadas.

## Objetivo

El objetivo de este proyecto es demostrar la implementación de buenas prácticas de **QA Automation**, aplicando:

- Pruebas funcionales automatizadas.
- Pruebas end-to-end (E2E).
- Page Object Model (POM).
- Especificación de escenarios mediante BDD/Gherkin.
- Separación de datos de prueba.
- Validaciones mediante assertions.
- Ejecución de pruebas sobre diferentes navegadores.

## Aplicación bajo prueba

Las pruebas se realizan sobre **SauceDemo**, una aplicación web utilizada para practicar pruebas funcionales y automatización.

## Tecnologías

- **Playwright**
- **TypeScript**
- **Node.js**
- **Git / GitHub**
- **BDD / Gherkin**
- **Page Object Model (POM)**

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/KarenRey123/playwright-qa-automation.git

* 2. Ingresar al proyecto

cd playwright-qa-automation

* 3. Instalar dependencias

npm install

* 4. Instalar los navegadores de Playwright

npx playwright install

* Ejecutar todas las pruebas

npx playwright test

* Ejecutar las pruebas únicamente en Chromium

npx playwright test --project=chromium

* Ejecutar las pruebas mostrando el navegador

npx playwright test --headed

* Ejecutar las pruebas en modo UI

npx playwright test --ui

* Ver el reporte HTML

npx playwright show-report

## Estructura del proyecto

```text
playwright-qa-automation/
│
├── features/
│   └── login.feature
│
├── pages/
│   └── LoginPage.ts
│
├── test-data/
│   └── loginData.ts
│
├── tests/
│   ├── login.spec.ts
│   ├── loginInvalido.spec.ts
│   └── miPrimerTest.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md


### Una precisión importante

En `features/login.feature` estamos utilizando **Gherkin como especificación/documentación BDD**.

Todavía **no tenemos Cucumber integrado para ejecutar directamente los `.feature`**. Por eso el README no debe decir que tenemos una implementación Cucumber; sería técnicamente incorrecto.

Nuestro modelo actual es:

```text
Gherkin
   ↓
Define el comportamiento esperado

Tests .spec.ts
   ↓
Ejecutan la automatización

Page Objects
   ↓
Interactúan con la aplicación

Test Data
   ↓
Proporcionan los datos

## Escenarios automatizados

Actualmente el proyecto contiene los siguientes escenarios:

| Escenario | Tipo de prueba | Resultado esperado |
|---|---|---|
| Login exitoso | Prueba funcional / E2E | El usuario accede al inventario. |
| Login inválido | Prueba funcional / E2E | Se muestra un mensaje de error. |

### Login exitoso

El escenario valida que un usuario con credenciales válidas pueda iniciar sesión correctamente y acceder a la página de inventario.

### Login inválido

El escenario valida que el sistema rechace credenciales incorrectas y muestre el mensaje de error correspondiente.

## Arquitectura y buenas prácticas

El proyecto utiliza una arquitectura orientada a facilitar la reutilización, el mantenimiento y la escalabilidad de las pruebas automatizadas.

### Page Object Model (POM)

El patrón **Page Object Model** permite encapsular los elementos y acciones de una página dentro de una clase específica.

En este proyecto, `LoginPage.ts` contiene:

- Locators de los elementos de login.
- Acción para iniciar sesión.
- Mensaje de error del formulario.

De esta manera, los tests se concentran en validar el comportamiento y no en implementar directamente las interacciones con la interfaz.

### BDD / Gherkin

Los escenarios funcionales se documentan utilizando **Gherkin**, siguiendo la estructura:

- `Given` — condición inicial.
- `When` — acción realizada.
- `Then` — resultado esperado.

Esto permite expresar el comportamiento esperado de la funcionalidad de una manera clara y orientada al negocio.

### Separación de datos de prueba

Los datos utilizados durante las pruebas se almacenan independientemente de los scripts de automatización.

Actualmente se utiliza:

```text
test-data/loginData.ts


### La arquitectura que estamos construyendo

El proyecto ya empieza a tener esta separación:

```text
┌─────────────────────────┐
│   features/             │
│   Comportamiento BDD    │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│   tests/                │
│   Casos automatizados   │
└────────────┬────────────┘
             ↓
     ┌───────┴────────┐
     ↓                ↓
┌───────────┐    ┌────────────┐
│  pages/   │    │ test-data/ │
│ POM       │    │ Datos      │
└───────────┘    └────────────┘

## Resultado actual

Las pruebas automatizadas actuales fueron ejecutadas utilizando Chromium.

Resultado:

```text
3 passed


## Próximas mejoras

Como parte de la evolución del proyecto, se planea incorporar:

- Ampliación de la cobertura funcional de SauceDemo.
- Automatización del flujo completo de compra.
- Creación de nuevos Page Objects.
- Incorporación de más escenarios positivos y negativos.
- Mayor cobertura de datos de prueba.
- Ejecución de pruebas en diferentes navegadores.
- Generación y análisis de reportes de ejecución.
- Integración con GitHub Actions para CI/CD.
- Ejecución automatizada de las pruebas mediante pipelines.

