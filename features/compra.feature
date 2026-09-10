Feature: Compra de productos

  Como usuario de SauceDemo
  quiero realizar una compra
  para completar exitosamente el proceso de checkout

  Scenario: Compra exitosa de un producto
    Given el usuario ha iniciado sesión con credenciales válidas
    And el usuario se encuentra en la página de productos
    When el usuario agrega un producto al carrito
    And el usuario inicia el proceso de checkout
    And el usuario completa la información de envío
    And el usuario finaliza la compra
    Then debería mostrarse el mensaje de confirmación de compra

  Scenario: Validar producto agregado al carrito
    Given el usuario ha iniciado sesión con credenciales válidas
    And el usuario se encuentra en la página de productos
    When el usuario agrega un producto al carrito
    And el usuario accede al carrito
    Then debería visualizarse el producto seleccionado

  Scenario: Intentar continuar al checkout sin completar información
    Given el usuario ha iniciado sesión con credenciales válidas
    And el usuario ha agregado un producto al carrito
    And el usuario se encuentra en el formulario de checkout
    When el usuario intenta continuar sin completar la información requerida
    Then debería mostrarse un mensaje indicando que la información es obligatoria